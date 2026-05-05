// LOADER
window.onload = ()=>{
  setTimeout(()=>{
    document.getElementById("loader").style.display="none";
  },3000);
};

// MENU
function toggleMenu(){
  document.getElementById("sideMenu").classList.add("active");
  document.getElementById("overlay").classList.add("active");
  document.body.classList.add("menu-open");   // 🔥 add this
}

function closeMenu(){
  document.getElementById("sideMenu").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
  document.body.classList.remove("menu-open"); // 🔥 add this
}

// SCROLL HOME
function scrollHome(){

  // close menu if open
  closeMenu();

  // smooth scroll to top (home)
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, 300); // delay for menu animation
}

// 404
function go404(){
  window.location.href="404.html";
}

// FORCE 404
document.querySelectorAll("a").forEach(link=>{
  const href = link.getAttribute("href");

  // ✅ Allow HOME links (logo + home menu)
  if(
    href === "index.html" ||
    href === "/" ||
    href === "#home"
  ){
    return; // allow normal behavior
  }

  // ❌ Redirect all other links to 404
  if(href && !href.startsWith("#")){
    link.addEventListener("click",(e)=>{
      e.preventDefault();
      window.location.href = "404.html";
    });
  }
});


document.querySelector(".logo a").addEventListener("click", function(e){

  if(window.location.pathname.includes("index.html") || window.location.pathname === "/"){
    e.preventDefault();

    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  }

});