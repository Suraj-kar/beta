//scroll effect
var lastScrollTop=0;
mynav = document.getElementById("mynav");
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document
    .documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        mynav.style.top="-80px";
    } else {
        mynav.style.top="0";
    }
    lastScrollTop = scrollTop;
})