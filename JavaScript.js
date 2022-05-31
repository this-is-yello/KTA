const carouselSlide = document.querySelector(".business-goal-moniter");

const slider = document.querySelector(".business-goal-slide");
const first = slider.firstElementChild.cloneNode(true);
const last = slider.lastElementChild.cloneNode(true);

slider.appendChild(first);
slider.insertBefore(last, slider.firstElementChild);

const slideWidth = 1920;

let moveCheck = true;

slider.style.width = slider.childElementCount * slideWidth + "px";


const btns = document.querySelector(".goal-buttons");
btns.children[0].addEventListener("click", goPast);
btns.children[1].addEventListener("click", goNext);

let num = 1;
carouselSlide.children[0].style.transform = "translateX(-" + (num*1920) + "px)";



let inter = setInterval(() => {
    goNext();
}, 4000);

function goPast() {
    if(moveCheck) {
        num--;
        moveCheck = false;

        setTimeout(()=> {
            if(num === 0) {
                num=slider.childElementCount-2;
                moveSlide(0);
            }

            console.log(num);
            moveCheck = true;
        }, 1000);
        
        console.log(num);
        moveSlide(1);
    }
}

function goNext() {
    if(moveCheck) {
        num++;
        moveCheck = false;

        setTimeout(()=> {
            if(num === slider.childElementCount-1) {
                num=1;
                moveSlide(0);
            }

            console.log(num);
            moveCheck = true;
        }, 1000);
        
        console.log(num);
        moveSlide(1);
    }
}

function moveSlide(time) {
    slider.style.transition = time + "s";
    carouselSlide.children[0].style.transform = "translateX(-" + (num*1920) + "px)";
}