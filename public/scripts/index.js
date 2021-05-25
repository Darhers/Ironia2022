const countdown = document.getElementsByClassName("countdown")[0];
const landingDiv = document.getElementsByClassName("landing")[0];
const landingInnerDiv = document.getElementsByClassName("landing-inner")[0];
const buttons = document.getElementsByClassName("btn");
const headersDiv = document.getElementById("headers");
const sponsorshipsDiv = document.getElementById("sponsorships");
const launchDate = new Date("May 28, 2021 8:00:00").getTime();
const imagesDiv = document.getElementById("images");
const joinBtns = document.getElementsByClassName("join-link");


for (let i=0; i<joinBtns.length; i++) {
    joinBtns[i].href= "https://cntr.click/7YRa3Wt";
    joinBtns[i].classList.add("hidden");
}

buttons[0].addEventListener("click", () => {
    headersDiv.classList.toggle("close");
    imagesDiv.classList.toggle("marginToggle");
    sponsorshipsDiv.classList.toggle("open");
    setTimeout(() => {
        headersDiv.classList.toggle("hidden");
    },500);
    setTimeout(() => {
        sponsorshipsDiv.classList.toggle("hidden");
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
        <div class="col ms-1 me-1 p-1 border border-dark rounded bg-primary bg-gradient text-dark fw-bold display-4">${seconds}<span>שניות</span></div>
        <div class="col ms-1 me-1 p-1 border border-dark rounded bg-primary bg-gradient text-dark fw-bold display-4">${mins}<span>דקות</span></div>
        <div class="col ms-1 me-1 p-1 border border-dark rounded bg-primary bg-gradient text-dark fw-bold display-4">${hours}<span>שעות</span></div>        
        <div class="col ms-1 me-1 p-1 border border-dark rounded bg-warning bg-gradient text-dark fw-bold display-4">${days}<span>ימים</span></div>
    `

    if (difference < 0) {
        clearInterval(refresh);
        countdown.innerHTML = "success!";
    }
}, 1000);

