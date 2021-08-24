---

![image](https://user-images.githubusercontent.com/56659378/130595781-ff7a2d92-9cf4-49b2-890b-10a710dffe12.png)

CertWall is a NODE.js HTML Page generator used to display your academic/professional certificates with GitHub Pages

---

## Engine:
  Made it with Node.js to run the environment, get GitHub details from <a href="https://docs.github.com/en/rest">GitHub's API</a> and generate HTML/CSS/JS.

---

## First time use:
  - Fork this project and clone it
  - Run 'npm install' to install dependencies, you can find what is used on package-lock.json
  - Create a folder named 'certifications' on project root (./certwall/certifications)
  - Add the image files of yours certifications in ./certifications folder, try to use easy names on them
  - Execute this little guy using 'npm run certwall' or 'node certwall' on project's root
  - Run Update Settings in menu options (in the first run you'll need to configure this app providing your GitHub ID and choosing a colour theme)
  - Run Update Certificates in menu options (at this point you'll need to provide some details about your certifications like name, provider, id and url)
  - Create a new Branch to commit the static files to build your GH Page, add on this Branch your index.html, bin folder, certificates folder and assets folder.
  - Then create your GitHub Pages, you can find instructions here: <a href="https://docs.github.com/en/pages/getting-started-with-github-pages">GitHub Pages Docs</a>
  
  
  Here we go!
  For any doubts, see my source code or GH Page branch.
 
 ---
  
## There is 5 colour themes:


 - <b>MINIMALIST</b>
![image](https://user-images.githubusercontent.com/56659378/130593482-8b5abe54-dee2-4fe7-8dde-da663183b833.png)


- <b>SWAMPMOSS</b>
![image](https://user-images.githubusercontent.com/56659378/130593637-5924178e-77f6-42ec-aa4b-697ff3340d33.png)


- <b>RARECANDY</b>
![image](https://user-images.githubusercontent.com/56659378/130593748-58564a8d-731f-4af7-a95d-b4aec66a135f.png)


- <b>GITHUBLIGHT</b>
![image](https://user-images.githubusercontent.com/56659378/130593843-53c688bb-1715-411c-8933-ee17afd298c2.png)


- <b>GITHUBDARK</b>
![image](https://user-images.githubusercontent.com/56659378/130593962-21403ad6-bb5e-401b-844e-80e11306b0b6.png)

---


## Menu options:

--

![image](https://user-images.githubusercontent.com/56659378/130595894-fffd0185-ad38-491a-9ec8-4c001e348bde.png)

--

 ### (1) UPDATE SETTINGS 
    To Update your GitHub ID (to load your info) and Colour theme
    You can run this option anytime
![image](https://user-images.githubusercontent.com/56659378/130596986-391525ab-c65a-4570-9379-89641d1433ad.png)

--           

 ### (2) UPDATE CERTIFICATES
    To Scan your certificates folder, register certificates details and update your HTML
    To add a new certificate, first you have to add in ./certificates folder 
    To delete a certificate, just delete it from ./certificates folder and run UPDATE CERTIFICATES option 
    * Every time when you delete or add a certificate you have to run this option after
 ![image](https://user-images.githubusercontent.com/56659378/130597257-94b29ad5-4f1d-4c6d-811f-f47acc079e52.png)
 
--                       

 ### (3) RE-ORDER CERTIFICATES
    To re-order your certificates in HTML
    First choose wich certificate you will move and confirm
    Then choose to where it will go
    This will change selected item array position
 ![image](https://user-images.githubusercontent.com/56659378/130597865-15edb63a-321e-4e8c-915f-fdc5dde529f7.png)
 
 --

---

<i>
For while this is just a draft..
I will work on it! I swear!
</i>
