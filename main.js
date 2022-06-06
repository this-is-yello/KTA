/* ---------- business-goal ---------- */
const goalMoniter = document.querySelector(".business-goal-moniter");

const goalSlide = document.querySelector(".business-goal-slide");
const goalFirst = goalSlide.firstElementChild.cloneNode(true);
const goalLast = goalSlide.lastElementChild.cloneNode(true);

goalSlide.appendChild(goalFirst);
goalSlide.insertBefore(goalLast, goalSlide.firstElementChild);

const goalSlideWidth = 100;

let moveCheckA = true;

goalSlide.style.width = goalSlide.childElementCount * goalSlideWidth + "vw";


const goalBtns = document.querySelector(".goal-buttons");
goalBtns.children[0].addEventListener("click", goPast);
goalBtns.children[1].addEventListener("click", goNext);

let numA = 1;
goalMoniter.children[0].style.transform = "translateX(-" + (numA*100) + "vw)";



let interA = setInterval(() => {
    goNext();
}, 3000);

function goPast() {
    if(moveCheckA) {
        numA--;
        moveCheckA = false;

        setTimeout(()=> {
            if(numA === 0) {
                numA=goalSlide.childElementCount-2;
                moveSlideA(0);
            }

            moveCheckA = true;
        }, 1000);
        
        moveSlideA(1);
    }
}

function goNext() {
    if(moveCheckA) {
        numA++;
        moveCheckA = false;

        setTimeout(()=> {
            if(numA === goalSlide.childElementCount-1) {
                numA=1;
                moveSlideA(0);
            }

            moveCheckA = true;
        }, 1000);
        
        moveSlideA(1);
    }
}

function moveSlideA(time) {
    goalSlide.style.transition = time + "s";
    goalMoniter.children[0].style.transform = "translateX(-" + (numA*100) + "vw)";
}


/* ---------- taekwondo-tech ---------- */



/* ---------- associtaion ---------- */
const associtaionMoniter = document.querySelector(".associtaion-menu-moniter");

const associtaionSlide = document.querySelector(".associtaion-all-slide");
const associtaionFirst = associtaionSlide.firstElementChild.cloneNode(true);
const associtaionLast = associtaionSlide.lastElementChild.cloneNode(true);

associtaionSlide.appendChild(associtaionFirst);
associtaionSlide.insertBefore(associtaionLast, associtaionSlide.firstElementChild);

const associtaionSlideHeight = 96;

let moveCheckC = true;

associtaionSlide.style.height = associtaionSlide.childElementCount * associtaionSlideHeight + "px";


const associtaionBtns = document.querySelector(".associtaion-buttons");
associtaionBtns.children[0].addEventListener("click", goDown);

let numC = 1;
associtaionMoniter.children[0].style.transform = "translateY(-" + (numC*96) + "px)";

let interC = setInterval(() => {
    goDown();
}, 4000);

function goDown() {
    if(moveCheckC) {
        numC++;
        moveCheckC = false;

        setTimeout(()=> {
            if(numC === associtaionSlide.childElementCount-1) {
                numC=1;
                moveSlideC(0);
            }

            moveCheckC = true;
        }, 1000);
        
        moveSlideC(1);
    }
}

function moveSlideC(time) {
    associtaionSlide.style.transition = time + "s";
    associtaionMoniter.children[0].style.transform = "translateY(-" + (numC*96) + "px)";
}