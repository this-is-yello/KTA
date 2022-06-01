/* ---------- business-goal ---------- */
const goalMoniter = document.querySelector(".business-goal-moniter");

const goalSlide = document.querySelector(".business-goal-slide");
const first = goalSlide.firstElementChild.cloneNode(true);
const last = goalSlide.lastElementChild.cloneNode(true);

goalSlide.appendChild(first);
goalSlide.insertBefore(last, goalSlide.firstElementChild);

const slideWidth = 100;

let moveCheck = true;

goalSlide.style.width = goalSlide.childElementCount * slideWidth + "vw";


const btns = document.querySelector(".goal-buttons");
btns.children[0].addEventListener("click", goPast);
btns.children[1].addEventListener("click", goNext);

let num = 1;
goalMoniter.children[0].style.transform = "translateX(-" + (num*100) + "vw)";



let inter = setInterval(() => {
    goNext();
}, 3000);

function goPast() {
    if(moveCheck) {
        num--;
        moveCheck = false;

        setTimeout(()=> {
            if(num === 0) {
                num=goalSlide.childElementCount-2;
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
            if(num === goalSlide.childElementCount-1) {
                num=1;
                moveSlide(0);
            }

            moveCheck = true;
        }, 1000);
        
        moveSlide(1);
    }
}

function moveSlide(time) {
    goalSlide.style.transition = time + "s";
    goalMoniter.children[0].style.transform = "translateX(-" + (num*100) + "vw)";
}