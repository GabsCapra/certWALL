---

![image](https://user-images.githubusercontent.com/56659378/130595781-ff7a2d92-9cf4-49b2-890b-10a710dffe12.png)

CertWall is a NODE.js HTML Page generator used to display your academic/professional certificates with GitHub Pages

---

## Engine:
  Made it with Node.js to run the environment, get GitHub details from <a href="https://docs.github.com/en/rest">GitHub's API</a> and generate HTML/CSS/JS.

---

## First time use:
  - <b>You'll need to be logged with yours github's account and able to execute git commands on cmd</b>
  - Fork this project and clone it
  - Run 'npm run install' to create gh-pages/docs and install dependencies (you can find what is used on package-lock.json)
  - Add the image files of yours certifications to ./docs/certificates folder, try to use easy names on them
  - Execute this little guy using 'npm run start' project's root
  - Run Update Settings in menu options (in the first run you'll need to configure this app providing your GitHub ID and choosing a colour theme)
  - Run Update Certificates in menu options (at this point you'll need to provide some details about your certifications like name, provider, id and url)
  
## Publish to your gitHub creating GH-PAGE's Branch
  - On CertWALL when you execute "npm run start", the changes are automatically sended to your remote gh-pages/docs branch
  - Go to your repository on github, on gh-pages branch access Settings>Pages> and set your folder to "./docs"
 ![image](https://user-images.githubusercontent.com/56659378/131198950-37e35d6c-7d39-4984-9025-254493972256.png)


## Manual usage and commit
  - create/use a branch named 'gh-pages' to commit your settings and certificates
  - run on certWALL root "node certwall" to run without commit your changes
  
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
