/* Handicap Pro logo — injected at runtime */
(function(){
  var img=document.getElementById('brand-logo');
  if(!img)return;
  var s=new Image();
  s.onload=function(){img.src=s.src;};
  s.src='LOGO_DATA_URI_INLINE';
})();
