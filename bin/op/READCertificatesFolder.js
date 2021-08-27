const fs = require('fs').promises;

module.exports = async function READCertificatesFolder(folder, files) {

    if(!files)
        files = [];

    let certificates = await fs.readdir(folder);
    for(let certificate in certificates) {
        let stat = await fs.stat(folder + '/' + certificates[certificate]);
        if(stat.isDirectory())
            await READCertificatesFolder(folder + '/' + certificates[certificate], files);
        else
            files.push(folder + '/' + certificates[certificate]);
    }

    return files;

}

