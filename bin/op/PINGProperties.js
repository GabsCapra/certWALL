const {profile} = require('./READProperties');

module.exports = function PINGProperties(){
    return ((profile.username!=="")||(profile.username!==undefined));
}