const axios = require('axios');
const GETGithubUsername = require('../io/GETGithubUsername');
const GETStyleProps = require('../io/GETStyleProps');
const fs = require('fs');
const Properties = require('./READProperties');

module.exports = async function UPDATEProperties(){

 
    Properties.style = GETStyleProps();
    let githubUser = GETGithubUsername();
    let githubResponse;

        try{
            githubResponse = await axios.get(`https://api.github.com/users/${githubUser}`);
            if(githubResponse.data.login){
                Properties.profile.username = githubResponse.data.login
            }else{
                Properties.profile.username = ""
            }
            if(githubResponse.data.login){
                Properties.profile.name = githubResponse.data.name
            }else{
                Properties.profile.name = ""
            }
            if(githubResponse.data.login){
                Properties.profile.bio = githubResponse.data.bio
            }else{
                Properties.profile.bio = ""
            }
            if(githubResponse.data.login){
                Properties.profile.avatar = githubResponse.data.avatar_url
            }else{
                Properties.profile.avatar = ""
            }
            if(githubResponse.data.login){
                Properties.profile.html_url = githubResponse.data.html_url
            }else{
                Properties.profile.html_url = ""
            }
            

            
        } catch(err){
            require('../io/WARNINGNoUsername');
            UPDATEProperties()
        }
  


    fs.writeFile('./bin/data/properties/properties.json', JSON.stringify(Properties), (err) => {
        if (err) throw err;
    });
    


}