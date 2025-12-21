function loadTV(k,s){
 current=k;
 document.getElementById("loading").style.display="flex";

 fetch("play.php?k="+k+"&s="+s)
 .then(r=>r.text())
 .then(url=>{
   let v=document.getElementById("video");
   document.getElementById("loading").style.display="none";

   if(Hls.isSupported()){
     let h=new Hls();
     h.loadSource(url);
     h.attachMedia(v);
   }else{
     v.src=url;
   }
 });
}
