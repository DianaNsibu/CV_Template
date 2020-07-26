var ancre2 = document.getElementById('arrow3');

window.addEventListener("scroll", function(){
    
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    ancre2.classList.add("visible");
   }
else {
    ancre2.className ="arrow";
}
});
