const prompt = require("prompt-sync")();
const PrevCertificates = require('../op/READPrevCertificates').data;


module.exports = function GETCertificatesProps(imgName) {
    let condition = true;
    let certificateName, certificateProvider, certificateId, certificateUrl, certificatePreview;
    PrevCertificates.forEach(certificate => {
        if (certificate.preview === imgName) {
            condition = false;
        }
    });

    while (condition) {
        certificatePreview=imgName
        console.log("****************************")
        console.log("** READING IMAGE FILE: \n**\n** " + imgName)
        console.log("**")
        certificateName = prompt("** Enter the Certificate Name:   ")
        certificateProvider = prompt("** Enter the Certificate Provider:  ")
        certificateId = prompt("** Enter the Certificate Id:   ")
        certificateUrl = prompt("** Enter the Certificate Url:   ")
        console.log("**")
        console.log("** YOUR ENTRIES:")
        console.log("** NAME: " + certificateName)
        console.log("** PROVIDER: " + certificateProvider)
        console.log("** ID: " + certificateId)
        console.log("** URL: " + certificateUrl)
        console.log("**")

        let confirm = prompt("** DO YOU CONFIRM?   Y / N   ")
        if (confirm.toLowerCase().trim() !== "n") {
            console.log("**\n** CERTIFICATE INCLUDED\n**")
            condition = false
        } else {
            console.log("****************************")
            console.log("** RESTARTING\n** " + imgName)
        }

    }

    return { certificateName, certificateProvider, certificateId, certificateUrl, certificatePreview};
}