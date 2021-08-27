const BUILDGalleryItems = require('../ini/BUILDGalleryItems');
const fs = require('fs');
const Properties = require('../op/READProperties');

module.exports = async function BUILDPage(Certificates,exec) {
    let themeProperties;
    if (Properties.style === "minimalist") {
        themeProperties = '@import url(https://fonts.googleapis.com/css?family=Prompt);:root{  --backgroundcolor: #fafbfc;  --avatarbordercolor: #fafbfc;  --bannerbackgroundcolor: #fafbfc;  --bannergradcolor1: #fafbfc;  --bannergradcolor2: #fafbfc;  --bannergradcolor3: #fafbfc;  --bannertxtcolor: #24292e;  --bannerbordercolor: #fafbfc;  --boxbackgroundcolor: #fafbfc;  --boxtxtcolor: #24292e;  --boxbordercolor: #e1e4e8;  --linktxtcolor: #2188ff;  --linktxtcolorhover: #2188ff;  --footertxtcolor: #24292e;  --footerbordercolor: #fafbfc;  --footerbackgroundcolor: #fafbfc; }body {  background: var(--background);  }';
    } else if (Properties.style === "swampmoss") {
        themeProperties = ':root{  --backgroundcolor: #1E392A;  --avatarbordercolor: #30363d;  --bannerbackgroundcolor: #1E392A;  --bannergradcolor1: #1E392A;  --bannergradcolor2: #1E392A;  --bannergradcolor3: #454545;  --bannertxtcolor: #ddd;  --bannerbordercolor: #1E392A;  --boxbackgroundcolor: #1E392A;  --boxtxtcolor: #ddd;  --boxbordercolor: #1E392A;  --linktxtcolor: #3CC47C;  --linktxtcolorhover: #3CC47C;  --buttoncolor: #1E392A;  --footertxtcolor: #FFF;  --footerbordercolor: #1E392A;  --footerbackgroundcolor: #1E392A;  }body {  background: var(--background);}';
    } else if (Properties.style === "rarecandy") {
        themeProperties = ':root{  --backgroundcolor: #FDCADA;  --avatarbordercolor: #FDCADA;  --bannerbackgroundcolor: #96EAD3;  --bannergradcolor1: #FDCADA;  --bannergradcolor2: #FDCADA;  --bannergradcolor3: #96EAD3;  --bannertxtcolor: #433C45;  --bannerbordercolor: #FDCADA;  --boxbackgroundcolor: #F1F3D4;  --boxtxtcolor: #433C45;  --boxbordercolor: #F1F3D4;  --linktxtcolor: #433C45;  --linktxtcolorhover: #433C45;  --footertxtcolor: #433C45;  --footerbordercolor: #FDCADA;  --footerbackgroundcolor: #FDCADA; }body {  background: var(--background);}';
    } else if (Properties.style === "githublight") {
        themeProperties = ':root{  --backgroundcolor: #fafbfc;  --avatarbordercolor: #161b22;  --bannercolor: #161b22;  --bannergradcolor1: #161b22;  --bannergradcolor2: #161b22;  --bannergradcolor3: #161b22;  --bannertxtcolor: #f0f6fc;  --bannerbordercolor: #161b22;  --boxbackgroundcolor: #fff;  --boxtxtcolor: #24292e;  --boxbordercolor: #e1e4e8;  --linktxtcolor: #2188ff;  --linktxtcolorhover: #2188ff;  --footertxtcolor: #f0f6fc;  --footerbordercolor: #161b22;  --footerbackgroundcolor: #161b22;}body {  background: var(--background);}';
    } else if (Properties.style === "githubdark") {
        themeProperties = ':root{  --backgroundcolor: #0d1117;  --avatarbordercolor: #30363d;  --bannerbackgroundcolor: #161b22;  --bannergradcolor1: #161b22;  --bannergradcolor2: #161b22;  --bannergradcolor3: #161b22;  --bannertxtcolor: #f0f6fc;  --bannerbordercolor: #30363d;  --boxbackgroundcolor: #161b22;  --boxtxtcolor: #828081;  --boxbordercolor: #30363d;  --linktxtcolor: #58a6ff;  --linktxtcolorhover: #58a6ff;  --footertxtcolor: #f0f6fc;  --footerbordercolor: #30363d;  --footerbackgroundcolor: #161b22;  }  body {  background: var(--background);}';
    }


    let GalleryItems = BUILDGalleryItems(Certificates,exec);

    const HTMLTEMPLATE = [
        '<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8" />    <meta name="viewport" content="width=device-width, initial-scale=1.0" />    <link rel="stylesheet" href="../assets/css/bootstrap.min.css" />    <link rel="stylesheet" href="../assets/css/font-awesome.min.css" />    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" />    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">    </script>    <style type="text/css">' + themeProperties + '        .banner {            background: var(--bannerbackgroundcolor);            color: var(--bannertxtcolor);            background: -webkit-linear-gradient(9deg, var(--bannergradcolor1) 5%, var(--bannergradcolor2) 45%, var(--bannergradcolor3)00%);            background: linear-gradient(9deg, var(--bannergradcolor1) 5%, var(--bannergradcolor2) 45%, var(--bannergradcolor3)100%);            text-align: left;            border-style: solid;            border-width: 3px;            border-color: var(--bannerbordercolor);        }        .back {            background: var(--backgroundcolor);        }        .box {            background: var(--boxbackgroundcolor);            color: var(--boxtxtcolor);            padding: 15px;            border-style: solid;            border-width: 2px;            border-color: var(--boxbordercolor);        }        .box img {            border-radius: 2%;        }        .links {            color: var(--linktxtcolor);            font-size: 20px;        }        .links:hover {            color: var(--linktxtcolorhover);        }        .avatar {            margin-left: 25px;            margin-top: 9px;            margin-bottom: 9px;            max-height: 180px;            border-style: solid;            border-width: 3px;            border-color: var(--avatarbordercolor);        }        .footer {            width: 100%;            height: 5%;            text-align: center;            color: var(--footertxtcolor);            background-color: var(--footerbackgroundcolor);            border-style: solid;            border-width: 3px;            border-color: var(--footerbordercolor);        }        .has-search .form-control {            padding-left: 2.375rem;        }        .has-search .form-control-feedback {            position: absolute;            z-index: 2;            display: block;            width: 2.375rem;            height: 2.375rem;            line-height: 2.375rem;            text-align: center;            pointer-events: none;        }        .icon-bar {            width: 100%;            max-width: 500px;            display: flex;            justify-content: space-around;            padding: 10px 20px;            align-items: center;            border-radius: 50px;        }        .icon-bar a {            font-size: 20px;            display: block;            padding: 5px;            text-decoration: none;            color: var(--bannertxtcolor);        }        .icon-bar a:hover {            -webkit-animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;            animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;        }        @media(max-width: 574px) {            body {                padding-left: 0px;                padding-right: 0px;            }            .certwall {                display: none;            }            .about {                text-align: center;            }            .avatar {                margin-left: 0px;                margin-bottom: 0px;                margin-top: 10px;                max-height: 1000px;            }        }    </style></head><body>    <div class="container-fluid back">        <div class="px-lg-6">            <!-- For demo purpose -->            <div class="row align-items-center banner">                <div class="col-lg-2 mx-auto text-left ">                    <img class="rounded-circle img-fluid avatar"                        src="' + Properties.profile.avatar + '">                </div>                <div class="col-lg-5 mx-auto  about">                    <div class="p-4  rounded ">                        <h1 class="display-4">' + Properties.profile.name + '</h1>                        <p class="lead">' + Properties.profile.username + '</p>                        <p class="lead">' + Properties.profile.bio + '</p>                    </div>                </div>                <div class="col-lg-3 mx-auto text-left search">                    <div class="icon-bar">                        <a href="'+Properties.profile.html_url+'"><i class="fab fa-github"></i></a>                    </div>                    <div class="input-group" id="srch">                        <input type="text" class="form-control" placeholder="Search">                        <div class="input-group-append">                            <button class="btn btn-secondary srch" type="button">                                <i class="fa fa-search "></i>                            </button>                        </div>                    </div>                    <br />                </div>                <div class="col-lg-2 mx-auto text-right certwall">                    <p class="lead">' + Properties.profile.username + ' have <br />' + GalleryItems[1] + ' <br /> certificates <br /> on</p>                    <h3><a href="https://github.com/vmaffioli/certwall">CertWALL</a></h3>                </div>            </div> <!-- End -->            <div class="row py-3">',
        '            </div>           <div class="modal fade" id="myModal" role="dialog">    <div class="modal-dialog">          <div class="modal-content">        <div class="modal-header">          <button type="button" class="close" data-dismiss="modal">&times;</button>        </div>        <div class="modal-body">          <p><img id="modalImg" class="img-fluid" href=""></img></p>        </div>        <div class="modal-footer "> <br/> </div>      </div>          </div>  </div> <div class="footer">                <p>CertWALL by <a class="links" href="https://vmaffioli.website.com">vmaffioli</a> - <a class="links"                        href="https://github.com/vmaffioli/certwall">GitHub</a></p>            </div>        </div>    </div>    <script src="assets/js/script.js"></script>    <script src="assets/js/jquery-3.3.1.slim.min.js"></script>    <script src="assets/js/bootstrap.bundle.min.js"></script></body></html>']

    fs.writeFile('docs/index.html', HTMLTEMPLATE[0] + GalleryItems[0] + HTMLTEMPLATE[1], (err) => {
        if (err) throw err;

    });



};

