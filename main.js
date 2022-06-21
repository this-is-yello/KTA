window.onload = function() {
  header();
  bussinessGoal();
  taekwondoTech();
  associtaion();
  goToMain();
  onePageSlide();
}

/* ---------- header ---------- */
function header() {
  const header = document.querySelector("header");
  const headerHeight = header.getBoundingClientRect().height;

  window.addEventListener("scroll", () => {
    if (window.scrollY > headerHeight) {
      header.setAttribute("style", "opacity: 1");
    } else {
      header.setAttribute("style", "opacity: 0");
    }
  });

  
  window.addEventListener("scroll", () => {
    const footer = document.querySelector("footer");
    const footerHeight = footer.getBoundingClientRect().height;
    const allHtml = document.querySelector("html"); 
    const windowHeight =  allHtml.offsetHeight;
    const heightHeight = windowHeight - footerHeight;

    if (window.scrollY > heightHeight - 200) {
      header.setAttribute("style", "opacity: 0");
    }
  });

  const sections = document.getElementsByTagName("section");

  const navBar = document.querySelector(".nav-bar-menu");

  for (let i = 0; i < navBar.childElementCount; i++) {
    navBar.children[i].addEventListener("click", () => {
      window.scrollTo({top: sections[i].offsetTop, behavior: "smooth"});
    });
  }

}


/* ---------- business-goal ---------- */
function bussinessGoal() {
  const goalMoniter = document.querySelector(".business-goal-moniter");

  const goalSlide = document.querySelector(".business-goal-slide");
  const goalFirst = goalSlide.firstElementChild.cloneNode(true);
  const goalLast = goalSlide.lastElementChild.cloneNode(true);

  goalSlide.appendChild(goalFirst);
  goalSlide.insertBefore(goalLast, goalSlide.firstElementChild);

  const goalSlideWidth = 100;

  let moveCheck = true;

  goalSlide.style.width = goalSlide.childElementCount * goalSlideWidth + "vw";

  const goalBtns = document.querySelector(".goal-buttons");
  goalBtns.children[0].addEventListener("click", goPast);
  goalBtns.children[1].addEventListener("click", goNext);

  let num = 1;
  goalMoniter.children[0].style.transform = "translateX(-" + num * 100 + "vw)";
  
    let inter = setInterval(() => {
      goNext();
    }, 3000);

  window.addEventListener('resize', () => {
    clearInterval(inter);
    
    if (window.innerWidth >= 1040) {
      goalSlide.firstChild.nextSibling.style.display = "flex";
      goalSlide.lastChild.style.display = "flex";
      inter = setInterval(() => {
        goNext();
      }, 3000);
    }else {
      goalSlide.firstChild.nextSibling.style.display = "none";
      goalSlide.lastChild.style.display = "none";
      goalMoniter.children[0].style.transform = "none";
    }
  });

  function goPast() {
    if (moveCheck) {
      num--;
      moveCheck = false;

      setTimeout(() => {
        if (num === 0) {
          num = goalSlide.childElementCount - 2;
          moveSlide(0);
        }
        moveCheck = true;
      }, 1000);
      moveSlide(1);
    }
  }

  function goNext() {
    if (moveCheck) {
      num++;
      moveCheck = false;

      setTimeout(() => {
        if (num === goalSlide.childElementCount - 1) {
          num = 1;
          moveSlide(0);
        }
        moveCheck = true;
      }, 1000);
      moveSlide(1);
    }
  }

  function moveSlide(time) {
    goalSlide.style.transition = time + "s";
    goalMoniter.children[0].style.transform =
      "translateX(-" + num * 100 + "vw)";
  }
}


/* ---------- what-is-modal ---------- */
const taekIsBtn = document.querySelector(".taekwondo-is");
const somethingBtns = document.querySelectorAll(".as-something");
const modalBack = document.querySelectorAll(".modal-background");
const modal = document.querySelectorAll(".modal");

taekIsBtn.addEventListener("click", modalOn);
modal[0].addEventListener("click", modalOff);


function modalOn() {
  modalBack[0].style.display = "flex";
}

function modalOff() {
  modalBack[0].style.display = "none"
}

/* ---------- taekwondo-tech ---------- */
function taekwondoTech() {
  const techBtns = document.querySelector(".taekwondo-tech-menu");
  const techSlide = document.querySelector(".tech-video-slide");
  const menuSlide = document.querySelector(".tech-menu-slide");
  let moveCheck = true;
  let index = 1;
  
  // techBtns.children[index-1].style.color = "#091569";

  for (let i = 0; i < techBtns.childElementCount; i++) {
    techBtns.children[i].addEventListener("click", () => {
      if (techSlide.children[i].classList.contains("in-out-left")) {
        if (moveCheck) {
          moveCheck = false;
          for (let j = 0; j < techBtns.childElementCount; j++) {
            if (!techSlide.children[j].classList.contains("in-out-left")) {
              techSlide.children[j].classList.add("in-out-right");
              menuSlide.children[j].classList.add("in-out-right");

              setTimeout(() => {
                if (techSlide.children[j].classList.contains("in-out-right")) {
                  techSlide.children[j].classList.remove("in-out-right");
                  techSlide.children[j].classList.add("in-out-left");
                }

                if (menuSlide.children[j].classList.contains("in-out-right")) {
                  menuSlide.children[j].classList.remove("in-out-right");
                  menuSlide.children[j].classList.add("in-out-left");
                }
              }, 500);
            }
          }

          setTimeout(() => {
            moveCheck = true;
          }, 500);

          techSlide.children[i].classList.remove("in-out-left");
          menuSlide.children[i].classList.remove("in-out-left");
        }
      }
    });
  }
}


/* ---------- associtaion ---------- */
function associtaion() {
  const associtaionMoniter = document.querySelector(".associtaion-menu-moniter");
  const associtaionSlide = document.querySelector(".associtaion-all-slide");

  const associtaionFirst = associtaionSlide.firstElementChild.cloneNode(true);
  const associtaionLast = associtaionSlide.lastElementChild.cloneNode(true);
  associtaionSlide.appendChild(associtaionFirst);
  associtaionSlide.insertBefore(associtaionLast, associtaionSlide.firstElementChild);

  let moveCheck = true;
  let associtaionSlideHeight = associtaionSlide.firstElementChild.offsetHeight;

  setHeight();

  const associtaionBtns = document.querySelector(".associtaion-buttons");
  associtaionBtns.children[0].addEventListener("click", goDown);

  let num = 1;
  associtaionMoniter.children[0].style.transform = "translateY(-" + num * associtaionSlideHeight + "px)";

  let inter = setInterval(() => {
    goDown();
  }, 4000);


  window.addEventListener('resize', setHeight);

  function goDown() {
    if (moveCheck) {
      num++;
      moveCheck = false;
      setTimeout(() => {
        if (num === associtaionSlide.childElementCount - 1) {
          num = 1;
          moveSlide(0);
        }
        moveCheck = true;
      }, 1000);
      moveSlide(1);
    }
  }

  function setHeight(){
    associtaionSlideHeight = associtaionSlide.firstElementChild.offsetHeight;
    associtaionSlide.style.height = associtaionSlide.childElementCount * associtaionSlideHeight + "px";
    console.log(associtaionSlideHeight);
  }

  function moveSlide(time) {
    associtaionSlide.style.transition = time + "s";
    associtaionMoniter.children[0].style.transform = "translateY(-" + num * associtaionSlideHeight + "px)";
  }
}


/* ---------- go-to-main ---------- */
function goToMain() {
  const locationMain = document.getElementById("main");

  const toMain = document.querySelector(".go-to-main");

  toMain.addEventListener("click", goMain);
  function goMain() {
    window.scrollTo({ top: locationMain.offsetTop, behavior: "smooth" });
  }

  const hideHeight = toMain.getBoundingClientRect().height;

  window.addEventListener("scroll", () => {
    if (window.scrollY > hideHeight) {
      toMain.setAttribute("style", "opacity: 1");
    } else {
      toMain.setAttribute("style", "opacity: 0");
    }
  });
}


/* ---------- scroll ---------- */
function onePageSlide() {
  const scrolls = document.querySelectorAll(".scroll");
  const scrollsCount = scrolls.length;
  let moveTop = window.scrollY;
  
  let moveCheck = true;

  scrolls.forEach(function (item, index) {
    item.addEventListener("mousewheel", function (e) {
      e.preventDefault();
      if (moveCheck === true) {
        moveCheck = false;
        let delta = 0;

        if (!e) e = window.e;
        if (e.wheelDelta) {
          delta = e.wheelDelta / 120;
          if (window.opera) delta = -delta;
        }
        else if (e.detail)
          delta = -e.detail / 3;

        
        let scrollsSelector = scrolls[index];

        if (delta < 0) {
          if (scrollsSelector !== scrollsCount - 1) {
            try {
              moveTop = window.scrollY + scrollsSelector.nextElementSibling.getBoundingClientRect().top;
            } catch (error) {
              console.log(error);
            }
          }
        } else {
          if (scrollsSelector !== 0) {
            try {
              moveTop = window.scrollY + scrollsSelector.previousElementSibling.getBoundingClientRect().top;
              console.log(index)
            } catch (error) {
              console.log(error);
            }
          }
        }

        setTimeout(() => {
          moveCheck = true;
        }, 500);
        window.scrollTo({top: moveTop, left: 0, behavior: "smooth"});
      }
    });
  });
}