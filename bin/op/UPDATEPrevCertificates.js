const fs = require('fs');

module.exports = async function UPDATEPrevCertificates(toInclude){

    
    fs.writeFile('./bin/data/properties/installed_certificates.json', JSON.stringify({"data":toInclude}), (err) => {
        if (err) throw err;
    });
    


}