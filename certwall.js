const READCertificatesFolder = require('./bin/op/READCertificatesFolder');
const BUILDPage = require('./bin/ini/BUILDPage');
const PINGProperties = require('./bin/op/PINGProperties');
const UPDATEProperties = require('./bin/op/UPDATEProperties');
const GETOptions = require('./bin/io/GETOptions');
const WARNINGFileUpdated = require('./bin/io/WARNINGFileUpdated');
const WARNINGStarting = require('./bin/io/WARNINGStarting');
const CLEANPrevCertificates = require('./bin/op/CLEANPrevCertificates');
const Certificates = require('./bin/op/READPrevCertificates').data;
const GETReOrder = require('./bin/io/GETReOrder');
const UPDATEPrevCertificates = require('./bin/op/UPDATEPrevCertificates');
const READPrevCertificates = require('./bin/op/READPrevCertificates').data;

async function retrieve() {
    let Certificates = await READCertificatesFolder('./docs/certificates');
    if (!PINGProperties()) {
        await UPDATEProperties();
    }
    await BUILDPage(Certificates,"scan");
};

async function update() {
    await UPDATEProperties();
    retrieve();
};

function changePosition(arr, from, to){
    arr.splice(to, 0, arr.splice(from,1)[0]);
    return arr;
}

function reOrder(){
    GETReOrder('', 'start');
    for (let i = 0; i < Certificates.length; i++) {
        const certificate = Certificates[i];
        console.log("** ( "+(i+1)+" )  -  "+certificate.name)
    }
    let from = GETReOrder(Certificates.length, 'from');
    let to = GETReOrder(Certificates.length, 'to');
    let reOrdered = changePosition(Certificates,from-1,to-1)
    UPDATEPrevCertificates(reOrdered)
    GETReOrder('', 'end');
    return reOrdered;
}

async function exec() {
    let Certificates = await READCertificatesFolder('./docs/certificates');
    WARNINGStarting;
    let option = GETOptions();
    if (option === "1") {
        update();
        WARNINGFileUpdated('PROFILE');
        WARNINGFileUpdated("VIEW")
    } else if (option === "2") {
        retrieve();
        await BUILDPage(Certificates,'scan');
        WARNINGFileUpdated('CERTIFICATES');
        WARNINGFileUpdated("VIEW")
    } else if (option === "3") {
        let newOrder = reOrder();
        await BUILDPage(newOrder,'reorder')
        WARNINGFileUpdated('POSITIONS');
    } 
}
exec()
