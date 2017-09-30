# amazon-safari-pip-mode
Start Amazon instant video in Safari (macOS) and use Picture in Picture Mode.

## Steps:
1. Start stream on amazon
2. Open console (Web Inspector) (CMD+ALT+i)
  * Safari dev. tools should be aktivated [how to](https://developer.apple.com/library/content/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/GettingStarted/GettingStarted.html)
3. Past this:
``` javascript
function startPiP() { 
  var videos = document.getElementsByTagName('video'); 
  for(vid in videos) { 
    if(videos[vid].src) videos[vid].webkitSetPresentationMode("picture-in-picture"); 
  } 
}
startPiP();
```
4. Ready (Close Inspector)
