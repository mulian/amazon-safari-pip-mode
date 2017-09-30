function startPiP() { 
  var videos = document.getElementsByTagName('video'); 
  for(vid in videos) { 
    if(videos[vid].src) videos[vid].webkitSetPresentationMode("picture-in-picture"); 
  } 
}
startPiP();
