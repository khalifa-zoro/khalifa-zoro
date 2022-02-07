var feild=document.querySelector("textarea");
var backup=feild.getAttribute('placeholder');
var btn=document.querySelector("btn");
var clear=document.getElementById("clean")

feild.onfocus=function(){
    this.setAttribute("placeholder",'');
    this.style.borderColo ='#333'
    btn.style.display='block'
}
feild.onblur=function(){
    this.setAttribute('placeholder',backup)
}
clear.onclick=function(){
    btn.style.display='none';
    feild.value=''
}