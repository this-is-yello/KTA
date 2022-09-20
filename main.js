associtaion();
header();
businessGoal();
taekwondoTech();
goToMain();
onePageSlide();
techButtons();
whatIsModal();

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
  function businessGoal() {
    const goalMoniter = document.querySelector(".business-goal-moniter");

    const allSlide = document.querySelector(".business-goal-slide");
    const first = allSlide.firstElementChild.cloneNode(true);
    const last = allSlide.lastElementChild.cloneNode(true);

    allSlide.appendChild(first);
    allSlide.insertBefore(last, allSlide.firstElementChild);

    const slideWidth = 100;

    let moveCheck = true;

    allSlide.style.width = allSlide.childElementCount * slideWidth + "vw";


    const btns = document.querySelector(".goal-buttons");
    btns.children[0].addEventListener("click", goPast);
    btns.children[1].addEventListener("click", goNext);

    let num = 1;
    goalMoniter.children[0].style.transform = "translateX(-" + 100 + "vw)";
    
    let inter = setInterval(() => {
        goNext();
    }, 3000);

    function goPast() {
        if(moveCheck) {
            num--;
            moveCheck = false;

            setTimeout(()=> {
                if(num === 0) {
                    num=allSlide.childElementCount-2;
                    moveSlide(0);
                }
                moveCheck = true;
            }, 1000);
            moveSlide(1);
        }
    }

    function goNext() {
        if(moveCheck) {
            num++;
            moveCheck = false;

            setTimeout(()=> {
                if(num === allSlide.childElementCount-1) {
                    num=1;
                    moveSlide(0);
                }
                moveCheck = true;
            }, 1000);
            moveSlide(1);
        }
    }

    function moveSlide(time) {
        allSlide.style.transition = time + "s";
        goalMoniter.children[0].style.transform = "translateX(-" + (num*100) + "vw)";
    }
  }
  
  
  /* ---------- taekwondo-tech ---------- */
  function taekwondoTech() {
    const techBtns = document.querySelector(".taekwondo-tech-menu");
    const techSlide = document.querySelector(".tech-video-slide");
    let moveCheck = true;
  
    for (let i = 0; i < techBtns.childElementCount; i++) {
      techBtns.children[i].addEventListener("click", () => {
        if (techSlide.children[i].classList.contains("in-out-left")) {
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
  }
  
  
  /* ---------- taekwondo-tech-btns ---------- */
  function techButtons() {
    let moveCheck = true;
  
    techMenuBtns = document.querySelectorAll('.tech-menu-buttons');
    techMenuBtns[0].classList.add('main-color');
    
    for (let i = 0; i<techMenuBtns.length; i++) {
      techMenuBtns[i].addEventListener("click", () => {
        if(moveCheck){
          moveCheck=false;
  
          clearButton();
          techMenuBtns[i].classList.add('main-color');
          
          setTimeout(function(){
            moveCheck=true;
          }, 500);
        }
      });
    }
    
    function clearButton(){
      for(let i = 0 ; i < techMenuBtns.length ; i++){
        techMenuBtns[i].classList.remove('main-color');
      }
    }
  }
  
  
  /* ---------- associtaion ---------- */
  function associtaion() {
    window.onload = function() {
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

  /* ---------- whatIsModal ---------- */
  function whatIsModal() {
      const asSomething = document.querySelectorAll(".as-something");
      const modal = document.querySelectorAll(".what-is-modal");
      const exitBtn = document.querySelectorAll(".exit");

      for (let i = 0; i < modal.length; i++) {
        asSomething[i].addEventListener("click", modalOn);
        exitBtn[i].addEventListener("click", modalOff);
        modal[i].addEventListener("click", e => {
            const target = e.target;
            if(target.classList.contains("what-is-modal")) {
                modalOff();
            }
        });
    
        modalOff();
    
        window.addEventListener("keydown", e => {
            if(modal[i].style.display === "flex" && e.key === "Escape") {
                modalOff();
            }
        });
    
        function modalOn() {
            modal[i].style.display = "flex";
        }
        function modalOff() {
            modal[i].style.display = "none";
        }
    }
  }