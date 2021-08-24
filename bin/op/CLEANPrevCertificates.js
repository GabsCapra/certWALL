const PrevCertificates = require('../op/READPrevCertificates').data;
const UPDATEPrevCertificates = require('./UPDATEPrevCertificates');

module.exports = async function BUILDGalleryItems(Certificates) {
    let items = [];
    if (PrevCertificates.length > 0) {
        
        for (let i = 0; i < PrevCertificates.length; i++) {
           
            Certificates.forEach(certificate => {
                if (certificate === PrevCertificates[i].preview) {
                    items.push(PrevCertificates[i])
                }

            });

        };
    } else {
        console.log("** NOTHING TO CLEAN")
    }


    await UPDATEPrevCertificates(items);

};






