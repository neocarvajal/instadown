/*
 * content_scripts
 * developer: @neocarvajal
 * site:https://github.com/neocarvajal
 * */

// get raw url image
var image = document.getElementsByTagName('img')[1].src;
// open conection with background script
var backgroundConect = browser.runtime.connect({name:"instadown"});
backgroundConect.postMessage({url:image});
