const countdown = document.getElementsByClassName("countdown")[0];
const landingDiv = document.getElementsByClassName("landing")[0];
const landingInnerDiv = document.getElementsByClassName("landing-inner")[0];
const buttons = document.getElementsByClassName("btn");
const headersDiv = document.getElementById("headers");
const sponsorshipsDiv = document.getElementById("sponsorships");
const launchDate = new Date("May 11, 2021 13:00:00").getTime();
const imagesDiv = document.getElementById("images");
const joinBtns = document.getElementsByClassName("join-link");

for (let i=0; i<joinBtns.length; i++) {
    joinBtns[i].href= "https://cntr.click/7YRa3Wt";
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
