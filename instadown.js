/*
 * background_script 
 * developer: @neocarvajal
 * site:https://github.com/neocarvajal
 * */    

var portFromCS;

function connected(p) {
  portFromCS = p;  
  // set handle function to listener for message from content_script
  portFromCS.onMessage.addListener(function(m) {
    // add listener for browser_action button      
    chrome.browserAction.onClicked.addListener(instadownload);
    function instadownload(){
        // get raw url on variable
        var imageURL = m.url;        
        // download api options
        function onStartedDownload(id) {
            console.log('Started downloading id:' + id);
        }

        function onFailed(error) {
          console.log('Download failed:' + error);
        }       
        // set name for image file
        var imageName = nameGenerator(10);
        // download image with download API
        var downloading = browser.downloads.download({
          url : imageURL,
          filename : imageName,
          conflictAction : 'uniquify'
        });
        // set promise
        downloading.then(onStartedDownload, onFailed);
        /* Open image on new tab        
        var newTab = browser.tabs.create({
        url:imageURL
        });
        * */
    }    
  });   
}    
// add listener for browser connect runtime
browser.runtime.onConnect.addListener(connected);

function nameGenerator(long)
{
  var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ2346789";
  var fileExt = [".jpg",",mp4"];
  var file = "";
  for (i=0; i<long; i++) file += caracteres.charAt(Math.floor(Math.random()*caracteres.length));
  return file + fileExt[0];
}
