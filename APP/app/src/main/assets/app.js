var oldu=window.location.href;
var ytdown_api_url="<YOUR_API_URL>?url=";
var ytdown_aud_api_url="<YOUR_API_URL>/aud/?url=";
function pkyt(){
if(window.location.href.indexOf("youtube.com/watch") > -1){
var jdjd=document.getElementById("wdymbyndown");
function getCookie(cname) {
let name = cname + "=";
let ca = document.cookie.split(';');
for(let i = 0; i < ca.length; i++) {
let c = ca[i];
while (c.charAt(0) == ' ') {
c = c.substring(1);
}
if (c.indexOf(name) == 0) {
return c.substring(name.length, c.length);
}
}
return "";
}
var c ="#000";
if(getCookie("PREF").indexOf("f6=400") > -1){
c ="#fff";
}else{
c="#000";
}
fetch("https://youtubedislikeviewer.xyz/api/v1/getdata/"+(new URLSearchParams(window.location.search)).get('v'))
.then(response => {
return response.json();
}).then(jsonObject => {
if('data' in jsonObject){
document.querySelectorAll('[aria-label="Dislike this video"]')[0].children[0].children[1].innerHTML=jsonObject.data.dislikes;
}
}).catch(error => {});
if(jdjd == null){
function insertAfter(referenceNode, newNode) {referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);}
var sneudiv=document.createElement("div");
sneudiv.style.height="50px";
sneudiv.style.width="100%";
sneudiv.style.display="flex";
sneudiv.setAttribute("id","wdymbyndown");
sneudiv.style.alignItems="center";
sneudiv.style.justifyContent="center";
sneudiv.style.overflow="hidden";
var jdjddiv=document.getElementsByClassName('slim-video-action-bar-actions')[0];
insertAfter(jdjddiv,sneudiv);
var pkcjkD=document.createElement("div");
pkcjkD.style.display="block";
pkcjkD.style.height="90%";
pkcjkD.style.width="auto";
pkcjkD.style.textAlign="center";
pkcjkD.style.marginRight="10px";
pkcjkD.style.fontSize="12px";
pkcjkD.innerHTML='	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="'+c+'" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>								<br>Download';
sneudiv.appendChild(pkcjkD);
pkcjkD.addEventListener("click",
function(){
pkcjkD.style.pointerEvents="none";
pkcjkD.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="'+c+'" class="bi bi-bullseye" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg><br>';
pkcjkD.style.lineHeight="40px";
var jsiu=0;
var iugv=setInterval(() => {if(jsiu == 0){pkcjkD.style.opacity="0.5";jsiu=1;} else{jsiu=0;pkcjkD.style.opacity="1";}},500);
fetch(ytdown_api_url+window.location.href)
.then(response => {
return response.json();
}).then(jsonObject => {
clearInterval(iugv);
pkcjkD.style.opacity="1";
pkcjkD.style.lineHeight="normal";
pkcjkD.innerHTML='									<svg xmlns="http://www.w3.org/2000/svg" fill="'+c+'" width="24" height="24" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>								<br>Download';
pkcjkD.style.pointerEvents="auto";
Android.downvid(jsonObject[jsonObject.length-1].title+".mp4",jsonObject[jsonObject.length-2].url);
Android.showToast("Downloading...");
}).catch(error => {
clearInterval(iugv);
pkcjkD.style.opacity="1";
pkcjkD.style.lineHeight="normal";
pkcjkD.innerHTML='									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="'+c+'" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>								<br>Download';
pkcjkD.style.pointerEvents="auto";
alert(error)
Android.showToast("An Error Occurred");
});
});
var ipkcjkD=document.createElement("div");
ipkcjkD.style.display="block";
ipkcjkD.style.height="90%";
ipkcjkD.style.width="auto";
ipkcjkD.style.textAlign="center";
ipkcjkD.style.fontSize="12px";
ipkcjkD.style.marginLeft="10px";
ipkcjkD.innerHTML='									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"   fill="'+c+'" viewBox="0 0 24 24"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"/></svg>								<br>PIP Mode';
sneudiv.appendChild(ipkcjkD);
ipkcjkD.addEventListener("click",
function(){
document.getElementsByClassName('video-stream')[0].play();
try{document.getElementById("wdymbyauds").remove();}catch{console.log("");}
Android.pipvid("pip");
});
var ipkcjkDm=document.createElement("div");
ipkcjkDm.style.display="block";
ipkcjkDm.style.height="90%";
ipkcjkDm.style.width="auto";
ipkcjkDm.style.textAlign="center";
ipkcjkDm.style.fontSize="12px";
ipkcjkDm.style.marginLeft="20px";
ipkcjkDm.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="'+c+'" class="bi bi-music-note-list" viewBox="0 0 16 16"><path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z"/><path fill-rule="evenodd" d="M12 3v10h-1V3h1z"/><path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z"/><path fill-rule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/></svg><br>Music +'
sneudiv.appendChild(ipkcjkDm);
ipkcjkDm.addEventListener("click",
function(){
ipkcjkDm.style.pointerEvents="none";
ipkcjkDm.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="'+c+'" class="bi bi-bullseye" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg><br>';
ipkcjkDm.style.lineHeight="40px";
var jsiu=0;
var iugv=setInterval(() => {if(jsiu == 0){ipkcjkDm.style.opacity="0.5";jsiu=1;} else{jsiu=0;ipkcjkDm.style.opacity="1";}},500);
fetch(ytdown_aud_api_url+window.location.href)
.then(response => {
return response.json();
}).then(jsonObject => {
clearInterval(iugv);
ipkcjkDm.style.opacity="1";
ipkcjkDm.style.lineHeight="normal";
ipkcjkDm.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="'+c+'" class="bi bi-music-note-list" viewBox="0 0 16 16"><path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z"/><path fill-rule="evenodd" d="M12 3v10h-1V3h1z"/><path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z"/><path fill-rule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/></svg><br>Music +'
ipkcjkDm.style.pointerEvents="auto";
addtoaudio(jsonObject.url,jsonObject.title);
}).catch(error => {
clearInterval(iugv);
ipkcjkDm.style.opacity="1";
ipkcjkDm.style.lineHeight="normal";
ipkcjkDm.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="'+c+'" class="bi bi-music-note-list" viewBox="0 0 16 16"><path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z"/><path fill-rule="evenodd" d="M12 3v10h-1V3h1z"/><path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z"/><path fill-rule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/></svg><br>Music +'
ipkcjkDm.style.pointerEvents="auto";
alert(error);
Android.showToast("An Error Occurred");
});
});
}
if(oldu != window.location.href){
try{document.getElementById("wdymbyauds").remove();}catch{console.log("");}
oldu=window.location.href;
}
}
}
function addtoaudio(url,tits){
try{document.getElementById("wdymbyauds").remove();}catch{console.log("");}
var audiv=document.createElement("div");
var audd=document.createElement("audio");
var audivx=document.createElement("div");
audiv.style.position="fixed";
audiv.style.bottom="0";
audiv.style.left="0";
audiv.style.zIndex="99999999999";
audiv.style.height="70px";
audiv.style.width="100%";
audiv.style.background="white";
audiv.setAttribute("id","wdymbyauds");
audivx.style.position="absolute";
audivx.style.left="0px";
audivx.style.height="40px";
audivx.style.width="40px";
audivx.style.background="white";
audiv.style.borderTop="3px solid red";
audivx.style.borderTop="3px solid red";
audivx.style.borderRight="3px solid red";
audivx.style.position="absolute";
audivx.style.top="-43.25px";
audivx.style.color="red";
audivx.style.textAlign="center";
audivx.innerHTML="&#x2715;";
audivx.style.fontSize="20px";
audd.style.position="absolute";
audd.style.top="-20px";
audd.style.left="0";
audd.style.height="80px";
audd.style.width="100%";
audiv.innerHTML+="<style>audio::-webkit-media-controls-panel{background:white;}</style>";
audd.setAttribute("id","ytproaudss");
audd.controls=true;
audd.src=url;
document.body.appendChild(audiv);
audiv.appendChild(audd);
audiv.appendChild(audivx);
document.getElementsByClassName('video-stream')[0].pause();
audivx.addEventListener("click",function(){this.parentElement.remove();});
audd.onloadeddata = function() {
audd.play();
Android.showToast("Now Playing \n"+tits);
Android.gohome("ok");
};
audd.addEventListener("timeupdate",function(){
if(audd.currentTime==audd.duration){
window.location.href="https://m.youtube.com"+document.getElementsByTagName("lazy-list")[1].children[1].children[0].children[0].getAttribute("href")+"&auds=ab";
}
});
}

setInterval(pkyt,500);
window.onload = function(){ 
var outerLayer = document.getElementsByClassName('video-ads ytp-ad-module');
var adPlayerOverlay = document.getElementsByClassName('ytp-ad-player-overlay'); // popup ads in video
var adImageOverlay = document.getElementsByClassName('ytp-ad-image-overlay');
var button = document.getElementsByClassName('ytp-ad-skip-button ytp-button');
var firstAd = document.getElementsByClassName('ytp-ad-text');
function skipFirstInner(callback) {
if (adPlayerOverlay[0] && adPlayerOverlay.length > 0) {
adPlayerOverlay[0].style.visibility = 'hidden';
}
else if (adImageOverlay[0] && adImageOverlay.length > 0) {
adImageOverlay[0].style.visibility = 'hidden';
}
callback();
}
function clickSkipBtn() {
if(button[0] && button.length > 0) {
button[0].click();
}
}
setInterval(function(){ 
if (outerLayer && outerLayer.length > 0) {
clickSkipBtn();
skipFirstInner(function() {
if((firstAd && firstAd[2] && firstAd[2].innerHTML.includes('Ad')) ||
(firstAd && firstAd[1] && firstAd[1].innerHTML.includes('Ad')) ||
(firstAd && firstAd[0] && firstAd[0].innerHTML.includes('Ad'))) {
clickSkipBtn();
let videos = document.querySelectorAll('video');
for(let i=0; i<videos.length; i++) {
if(videos[i] && videos[i].duration) {
videos[i].currentTime = videos[i].duration;
}
}
}
});
}
}, 1);
if((new URLSearchParams(window.location.search)).get('auds') == "ab"){
fetch(ytdown_aud_api_url+window.location.href)
.then(response => {
return response.json();
}).then(jsonObject => {
addtoaudio(jsonObject.url,jsonObject.title);
}).catch(error => {
alert(error);
Android.showToast("An Error Occurred");
});
}
};
