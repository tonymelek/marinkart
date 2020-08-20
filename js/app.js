var i = 0;
var mlc0 = 0;
var mlc1 = 0;
const mobile = document.getElementById("mobile");
const nav = document.getElementById("navigation_menu");
const ml0 = document.getElementById("ml0");
const ml1 = document.getElementById("ml1");
const ml2 = document.getElementById("ml2");
const ml3 = document.getElementById("ml3");
ml3.style.display = "none";
ml1.style.display = "none";
timer = 0;
setInterval(() => {
    snap1 = window.innerWidth;

    if ((snap1 > 900)) {
        nav.style.display = "block";
        ml3.style.display = "none";
        ml1.style.display = "none";
        mlc0 = 0;
        mlc1 = 0;
        nav.style.display == "block" ? i = 1 : i = 0
        timer = 200;
    }

}, timer);
ml0.addEventListener("click", () => {
    mlc0 += 1;
    if ((mlc0 % 2 == 0)) {
        ml1.style.display = "none";
    }
    else {
        ml1.style.display = "block";
    }
})
ml2.addEventListener("click", () => {
    mlc1 += 1;
    if ((mlc1 % 2 == 0)) {
        ml3.style.display = "none";
    }
    else {
        ml3.style.display = "block";
    }
})
mobile.addEventListener("click", () => {
    console.log(window.innerWidth);
    i += 1;
    console.log(i);
    if ((i % 2 == 0)) {
        nav.style.display = "none";
    }
    else {
        nav.style.display = "block";
    }
})