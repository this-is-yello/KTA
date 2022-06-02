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



let inter = setInterval(() => {
    goNext();
}, 3000);

function goPast() {
    if(moveCheckA) {
        numA--;
        moveCheckA = false;

        setTimeout(()=> {
            if(numA === 0) {
                numA=goalSlide.childElementCount-2;
                moveSlide(0);
            }

            moveCheckA = true;
        }, 1000);
        
        moveSlide(1);
    }
}

function goNext() {
    if(moveCheckA) {
        numA++;
        moveCheckA = false;

        setTimeout(()=> {
            if(numA === goalSlide.childElementCount-1) {
                numA=1;
                moveSlide(0);
            }

            moveCheckA = true;
        }, 1000);
        
        moveSlide(1);
    }
}

function moveSlide(time) {
    goalSlide.style.transition = time + "s";
    goalMoniter.children[0].style.transform = "translateX(-" + (numA*100) + "vw)";
}


/* ---------- taekwondo-tech ---------- */
