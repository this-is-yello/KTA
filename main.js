/* ---------- business-goal ---------- */
bussinessGoal();

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

/* ---------- taekwondo-tech ---------- */
const techBtns = document.querySelector(".taekwondo-tech-menu");
const techSlide = document.querySelector(".tech-video-slide");
const menuSlide = document.querySelector(".tech-menu-slide");
let moveCheck = true;

// taekwondoTech();

// function taekwondoTech() {
  for (let i = 0; i < techBtns.childElementCount; i++) {
    techBtns.children[i].addEventListener("click", () => {
      if (techSlide.children[i].classList.contains("in-out-left") && menuSlide.children[k].classList.contains("in-out-left")) {
        if (moveCheck) {
          moveCheck = false;
          for (let j = 0; j < techBtns.childElementCount; j++) {
            if (!techSlide.children[j].classList.contains("in-out-left")) {
              techSlide.children[j].classList.add("in-out-right");
              setTimeout(() => {
                if (techSlide.children[j].classList.contains("in-out-right")) {
                  techSlide.children[j].classList.remove("in-out-right");
                  techSlide.children[j].classList.add("in-out-left");
                }
              }, 500);
            }
          }
          
          setTimeout(() => {
            moveCheck = true;
          }, 500);
          techSlide.children[i].classList.remove("in-out-left");
        }
      }
    });
  }



  // for (let k = 0; k < techBtns.childElementCount; k++) {
  //   techBtns.children[k].addEventListener("click", () => {
  //     if (menuSlide.children[k].classList.contains("in-out-left")) {
  //       if (moveCheck) {
  //         moveCheck = false;
  //         for (let l= 0; l < techBtns.childElementCount; l++) {
  //           if (!menuSlide.children[l].classList.contains("in-out-left")) {
  //             menuSlide.children[l].classList.add("in-out-right");
  //             setTimeout(() => {
  //               if (menuSlide.children[l].classList.contains("in-out-right")) {
  //                 menuSlide.children[l].classList.remove("in-out-right");
  //                 menuSlide.children[l].classList.add("in-out-left");
  //               }
  //             }, 500);
  //           }
  //         }
  //         setTimeout(() => {
  //           moveCheck = true;
  //         }, 500);
  //         menuSlide.children[k].classList.remove("in-out-left");
  //       }
  //     }
  //   });
  // } 
// }

/* ---------- associtaion ---------- */
const associtaionMoniter = document.querySelector(".associtaion-menu-moniter");

const associtaionSlide = document.querySelector(".associtaion-all-slide");
const associtaionFirst = associtaionSlide.firstElementChild.cloneNode(true);
const associtaionLast = associtaionSlide.lastElementChild.cloneNode(true);

associtaionSlide.appendChild(associtaionFirst);
associtaionSlide.insertBefore(
  associtaionLast,
  associtaionSlide.firstElementChild
);

const associtaionSlideHeight = 96;

let moveCheckC = true;

associtaionSlide.style.height =
  associtaionSlide.childElementCount * associtaionSlideHeight + "px";

const associtaionBtns = document.querySelector(".associtaion-buttons");
associtaionBtns.children[0].addEventListener("click", goDown);

let numC = 1;
associtaionMoniter.children[0].style.transform =
  "translateY(-" + numC * 96 + "px)";

let interC = setInterval(() => {
  goDown();
}, 4000);

function goDown() {
  if (moveCheckC) {
    numC++;
    moveCheckC = false;

    setTimeout(() => {
      if (numC === associtaionSlide.childElementCount - 1) {
        numC = 1;
        moveSlideC(0);
      }

      moveCheckC = true;
    }, 1000);

    moveSlideC(1);
  }
}

function moveSlideC(time) {
  associtaionSlide.style.transition = time + "s";
  associtaionMoniter.children[0].style.transform =
    "translateY(-" + numC * 96 + "px)";
}

/* ---------- nav-bar ---------- */
const header = document.querySelector("header");
const headerHeight = header.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.setAttribute("style", "opacity: 1");
  } else {
    header.setAttribute("style", "opacity: 0");
  }
});

const sections = document.getElementsByClassName("section");

const navBar = document.querySelector(".nav-bar-menu");

for (let i = 0; i < navBar.childElementCount; i++) {
  navBar.children[i].addEventListener("click", () => {
    window.scrollTo({ top: sections[i].offsetTop, behavior: "smooth" });
    console.log(`${sections[i]} 이고 ${sections[i].offsetTop}`);
  });
}

// const goal = document.querySelector(".nav-bar-menu").children[0];
// const what = document.querySelector(".nav-bar-menu").children[1];
// const tech = document.querySelector(".nav-bar-menu").children[2];
// const menu = document.querySelector(".nav-bar-menu").children[3];

// logo.addEventListener("click", goMain);
// function goMain() {
//     window.scrollTo({top:locationMain, behavior: "smooth"})
// }
// goal.addEventListener("click", goGoal);
// function goGoal() {
//     window.scrollTo({top:locationGoal, behavior: "smooth"})
// }
// what.addEventListener("click", goWhat);
// function goWhat() {
//     window.scrollTo({top:locationWhat, behavior: "smooth"})
// }
// tech.addEventListener("click", goTech);
// function goTech() {
//     window.scrollTo({top:locationTech, behavior: "smooth"})
// }
// menu.addEventListener("click", goMenu);
// function goMenu() {
//     window.scrollTo({top:locationMenu, behavior: "smooth"})
// }

/* ---------- go-to-main ---------- */
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

// /* ---------- scroll ---------- */
// const section = document.querySelectorAll(".section");
// const sectionHeight = section.getBoundingClientRect().height;

/*  */
//https://enai.tistory.com/33

/* scroll */
//https://velog.io/@jaenny/JavaScript-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%8B%9C-%ED%95%9C-%EC%84%B9%EC%85%98%EC%94%A9-%EC%9D%B4%EB%8F%99%ED%95%98%EA%B2%8C-%ED%95%98%EA%B8%B0
//http://2nusa.blogspot.com/2019/04/javascript-mouse-wheel.html
