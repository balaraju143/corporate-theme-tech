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
document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll("a").forEach(link => {
    const href = link.getAttribute("href");

    // ✅ allow HOME links (logo + home menu)
    if (
      link.closest(".logo") ||   // 🔥 very important (logo fix)
      href === "#" ||
      href === "#home" ||
      (href && href.includes("index.html"))
    ) {
      return;
    }

    // ❌ redirect all other links to 404
    if (href && !href.startsWith("#")) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "404.html";
      });
    }
  });

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

function scrollToTop(){
  window.scrollTo({top:0,behavior:"smooth"});
}



function revealOnScroll(){
  const elements = document.querySelectorAll(".reveal");

  elements.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

let bgImages = document.querySelectorAll(".hero-bg img");
let i = 0;

setInterval(()=>{
  bgImages[i].classList.remove("active");
  i = (i + 1) % bgImages.length;
  bgImages[i].classList.add("active");
},4000);


function revealSmooth(){
  const elements = document.querySelectorAll(
    ".reveal-up, .reveal-left, .reveal-right"
  );

  elements.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if(top < windowHeight - 100){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealSmooth);

function exploreAnimation(){
  const el = document.querySelector(".explore-animate");
  if(!el) return;

  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // SHOW when visible
  if(rect.top < windowHeight - 100 && rect.bottom > 100){
    el.classList.add("active");
  } 
  // HIDE when scroll up/out
  else{
    el.classList.remove("active");
  }
}

window.addEventListener("scroll", exploreAnimation);