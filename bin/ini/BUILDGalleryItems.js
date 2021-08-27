const GETCertificatesProps = require('../io/GETCertificatesProps');
const PrevCertificates = require('../op/READPrevCertificates').data;
const UPDATEPrevCertificates = require('../op/UPDATEPrevCertificates');

module.exports = function BUILDGalleryItems(Certificates, exec) {
    let items = "";

    if (exec === "scan") {

        if (PrevCertificates.length > 0) {

            for (let i = 0; i < PrevCertificates.length; i++) {
                Certificates.forEach(certificate => {
                    if (certificate === PrevCertificates[i].preview) {
                        items += '<div class="col-xl-3 col-lg-4 col-md-6 mb-4 boxfilter"><div class="box rounded"><img onClick=loadModal("' + PrevCertificates[i].preview.replace(/ /g, "%20") + '") data-toggle="modal" data-target="#myModal"src="' + PrevCertificates[i].preview.replace("./docs/","./") + ' " alt=""                            class="img-fluid card-img-top">                        <div class="p-4 text-center">                            <h5><a class="links " href="#">' + PrevCertificates[i].name + '</a></h5>                            <p class="small mb-0 "><strong>' + PrevCertificates[i].provider + '</strong></p>                            <p class="small mb-0">' + PrevCertificates[i].id + '</p>                            <p class="small mb-0 "><a class="links" href="' + PrevCertificates[i].url + '">See Credential</a>                            </p>                        </div>                    </div>                </div>';
                    } else {
                        let certificateProperties = GETCertificatesProps(certificate);
                        if (certificateProperties.certificateName) {
                            items = '           <div class="col-xl-3 col-lg-4 col-md-5 mb-4 boxfilter">                    <div class="box rounded "><img onClick=loadModal("' + certificate.replace(/ /g, "%20") + '") data-toggle="modal" data-target="#myModal"src="' + certificate.replace("./docs/","./") + ' " alt=""                            class="img-fluid card-img-top">                        <div class="p-4 text-center">                            <h5><a class="links " href="#">' + certificateProperties.certificateName + '</a></h5>                            <p class="small mb-0 "><strong>' + certificateProperties.certificateProvider + '</strong></p>                            <p class="small mb-0">' + certificateProperties.certificateId + '</p>                            <p class="small mb-0 "><a class="links" href="' + certificateProperties.certificateUrl + '">See Credential</a>                            </p>                        </div>                    </div>                </div>' + items;
                            PrevCertificates.push({
                                "name": certificateProperties.certificateName,
                                "provider": certificateProperties.certificateProvider,
                                "id": certificateProperties.certificateId,
                                "url": certificateProperties.certificateUrl,
                                "preview": certificateProperties.certificatePreview
                            })
                        }
                    }

                });

            };
        } else {
            Certificates.forEach(certificate => {
                let certificateProperties = GETCertificatesProps(certificate);
                if (certificateProperties.certificateName != undefined) {

                    PrevCertificates.push({
                        "name": certificateProperties.certificateName,
                        "provider": certificateProperties.certificateProvider,
                        "id": certificateProperties.certificateId,
                        "url": certificateProperties.certificateUrl,
                        "preview": certificateProperties.certificatePreview
                    })

                    items = '           <div class="col-xl-3 col-lg-4 col-md-5 mb-4 boxfilter">                    <div class="box rounded "><img onClick=loadModal("' + certificate.replace(/ /g, "%20") + '") data-toggle="modal" data-target="#myModal"src="' + certificate + ' " alt=""                            class="img-fluid card-img-top">                        <div class="p-4 text-center">                            <h5><a class="links " href="#">' + certificateProperties.certificateName + '</a></h5>                            <p class="small mb-0 "><strong>' + certificateProperties.certificateProvider + '</strong></p>                            <p class="small mb-0">' + certificateProperties.certificateId + '</p>                            <p class="small mb-0 "><a class="links" href="' + certificateProperties.certificateUrl + '">See Credential</a>                            </p>                        </div>                    </div>                </div>' + items;

                }
            });
        }
        UPDATEPrevCertificates(PrevCertificates);
    } else if (exec === "reorder") {
        NewPrevCertificates = [];
        Certificates.forEach(certificate => {
            NewPrevCertificates.push({
                    "name": certificate.name,
                    "provider": certificate.provider,
                    "id": certificate.id,
                    "url": certificate.url,
                    "preview": certificate.preview
                })

                items += '           <div class="col-xl-3 col-lg-4 col-md-5 mb-4 boxfilter">                    <div class="box rounded "><img onClick=loadModal("' + certificate.preview.replace(/ /g, "%20") + '") data-toggle="modal" data-target="#myModal"src="' + certificate.preview + ' " alt=""                            class="img-fluid card-img-top">                        <div class="p-4 text-center">                            <h5><a class="links " href="#">' + certificate.name + '</a></h5>                            <p class="small mb-0 "><strong>' + certificate.provider + '</strong></p>                            <p class="small mb-0">' + certificate.id + '</p>                            <p class="small mb-0 "><a class="links" href="' + certificate.url + '">See Credential</a>                            </p>                        </div>                    </div>                </div>';
        });
        UPDATEPrevCertificates(NewPrevCertificates);
    }


   
    return [items, Certificates.length];
};











