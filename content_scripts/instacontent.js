/*
 * content_scripts
 * developer: @neocarvajal
 * site:https://github.com/neocarvajal
 * */
var rawFile="";
// get raw url image
if (document.getElementsByTagName('video')[0].src == null){
    rawFile = document.getElementsByTagName('img')[1].src;
    startRuntime(rawFile);
}else{
    rawFile = document.getElementsByTagName('video')[0].src;
    startRuntime(rawFile);
}
function startRuntime(rawFile){
    // open conection with background script
    var backgroundConect = browser.runtime.connect({name:"instadown"});
    backgroundConect.postMessage({url:rawFile});
}
