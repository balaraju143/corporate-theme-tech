
//Loader
window.onload = ()=>{

  const loader = document.getElementById("loader");

  setTimeout(()=>{
    loader.style.opacity = "0";

    setTimeout(()=>{
      loader.style.display = "none";
    },400);

  },2000);

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
document.querySelectorAll("a").forEach(link => {

  const href = link.getAttribute("href");

  // allow home links
  if(
    href === "#" ||
    href === "#home" ||
    href === "index.html"
  ){
    return;
  }

  // redirect others
  if(href && !href.startsWith("#")){
    link.addEventListener("click", (e)=>{
      e.preventDefault();
      window.location.href = "404.html";
    });
  }

});


function scrollToTop(){
  window.scrollTo({top:0,behavior:"smooth"});
}

function revealCards(){

  const cards = document.querySelectorAll(".work-item");

  cards.forEach(card=>{

    const top = card.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

      card.classList.add("active");

    } else {

      card.classList.remove("active");

    }

  });

}

window.addEventListener("scroll", revealCards);

revealCards();




let bgImages = document.querySelectorAll(".hero-bg img");
let i = 0;

setInterval(()=>{
  bgImages[i].classList.remove("active");
  i = (i + 1) % bgImages.length;
  bgImages[i].classList.add("active");
},4000);

    // SHOW
    if(rect.top < windowHeight - 120 && rect.bottom > 100){

      el.classList.add("active");

    }

    // HIDE
    else{

      el.classList.remove("active");

    }

  



window.addEventListener("scroll", revealSmooth);

revealSmooth();


function goHomeLoader(){

  // close menu
  closeMenu();

  // show loader
  const loader = document.getElementById("loader");

  loader.style.display = "flex";
  loader.style.opacity = "1";
  loader.style.visibility = "visible";

  // redirect after delay
  setTimeout(()=>{
    window.location.href = "index.html";
  },2000);

}


/* ===== PREMIUM SECTION ANIMATION ===== */

function premiumReveal(){

  const elements = document.querySelectorAll(
    ".reveal-up, .reveal-right"
  );

  elements.forEach(el=>{

    const top = el.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

      el.classList.add("active");

    }else{

      el.classList.remove("active");

    }

  });

}

window.addEventListener("scroll", premiumReveal);

premiumReveal();


function changeService(tab,title,desc,image){

  // REMOVE ACTIVE TAB
  document.querySelectorAll(".tab").forEach(t=>{
    t.classList.remove("active-tab");
  });

  // ADD ACTIVE TAB
  tab.classList.add("active-tab");

  // CHANGE CONTENT
  document.getElementById("serviceTitle").innerHTML = title;

  document.getElementById("serviceDesc").innerHTML = desc;

  document.getElementById("serviceImage").src = image;

  // SMOOTH ANIMATION
  const card = document.querySelector(".premium-card");

  card.style.opacity = "0";

  card.style.transform = "translateY(20px)";

  setTimeout(()=>{

    card.style.opacity = "1";

    card.style.transform = "translateY(0)";

  },200);

}





/* ===== SERVICE TABS ===== */

function changeService(tab,title,desc,image){

  // ACTIVE TAB
  document.querySelectorAll(".service-tab").forEach(btn=>{
    btn.classList.remove("active");
  });

  tab.classList.add("active");

  // CARD
  const card = document.querySelector(".service-display");

  card.style.opacity = "0";

  card.style.transform = "translateY(20px)";

  setTimeout(()=>{

    document.getElementById("serviceTitle").innerHTML = title;

    document.getElementById("serviceDesc").innerHTML = desc;

    document.getElementById("serviceImage").src = image;

    card.style.opacity = "1";

    card.style.transform = "translateY(0)";

  },200);

}




