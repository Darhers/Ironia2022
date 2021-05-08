const countdown = document.getElementsByClassName("countdown")[0];

const launchDate = new Date("May 9, 2021 13:00:00").getTime();

const refresh = setInterval(() => {
    const dateNow = new Date().getTime();
    const difference = launchDate - dateNow;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    countdown.innerHTML = `
        <div>${days}<span>ימים</span></div>
        <div>${hours}<span>שעות</span></div>
        <div>${mins}<span>דקות</span></div>
        <div>${seconds}<span>שניות</span></div>
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
    const landingDiv = document.getElementsByClassName("landing")[0];
    const bg = images[Math.floor(Math.random() * images.length)];
    landingDiv.style.backgroundImage = bg;
}, 5000);