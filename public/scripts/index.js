const countdown = document.getElementsByClassName("countdown")[0];
const landingDiv = document.getElementsByClassName("landing")[0];
const landingInnerDiv = document.getElementsByClassName("landing-inner")[0];
const buttons = document.getElementsByClassName("btn-animated");
const headersDiv = document.getElementById("headers");
const sponsorshipsDiv = document.getElementsByClassName("sponsorships")[0];
const launchDate = new Date("May 11, 2021 13:00:00").getTime();
const imagesDiv = document.getElementById("images");

buttons[0].addEventListener("click", () => {
    headersDiv.classList.toggle("close");
    imagesDiv.classList.toggle("marginToggle");
    sponsorshipsDiv.classList.toggle("open");
    setTimeout(() => {
        headersDiv.classList.toggle("hidden");
    },500);
    setTimeout(() => {
        sponsorshipsDiv.classList.toggle("hidden");
        // if (landingDiv.style.height === "100vh") {
        //     landingDiv.style.height = "50vh";
        //     landingInnerDiv.style.height = "50vh";
        // } else {
        //     landingDiv.style.height = "100vh";
        //     landingInnerDiv.style.height = "100vh";
        // }
        // let overflowSet = document.getElementsByTagName("body")[0].style.overflowY;
        // console.log(overflowSet);
        // // if (overflowSet === "auto") {
        // //     overflowSet = "hidden";
        // // } else {
        // //     overflowSet = "auto";
        // // }
        // // document.getElementsByTagName("body")[0].style.overflowY = overflowSet;
    },500);
});

const refresh = setInterval(() => {
    const dateNow = new Date().getTime();
    const difference = launchDate - dateNow;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    countdown.innerHTML = `
        <div>${seconds}<span>שניות</span></div>
        <div>${mins}<span>דקות</span></div>
        <div>${hours}<span>שעות</span></div>        
        <div>${days}<span>ימים</span></div>
    `

    if (difference < 0) {
        clearInterval(refresh);
        countdown.innerHTML = "success!";
    }
}, 1000);
const images = [];
for (let i=1; i<=15; i++) {
    images.push('url("/images/backgrounds/bg' + i +'.jpg")');
}
const setBg = setInterval(() => {
    
    const bg = images[Math.floor(Math.random() * images.length)];
    landingDiv.style.backgroundImage = bg;
    landingDiv.style.backgroundSize = "cover";
}, 5000);