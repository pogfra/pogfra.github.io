
const title = document.querySelector('h1').textContent;
document.querySelector('h1').textContent = '';

const subtitle = document.querySelector('h3').textContent;
document.querySelector('h3').textContent = '';

const whoamiIpnput = document.querySelector('.whoami .input').textContent;
document.querySelector('.whoami .input').textContent = '';

const whoamiReturn = document.querySelector('.whoami .return').textContent;
document.querySelector('.whoami .return').textContent = '';

const interestsInput = document.querySelector('.interests .input').textContent;
document.querySelector('.interests .input').textContent = '';

const interestsReturn = document.querySelector('.interests .return').textContent;
document.querySelector('.interests .return').textContent = '';

const jobInput = document.querySelector('.job .input').textContent;
document.querySelector('.job .input').textContent = '';

const jobReturn = document.querySelector('.job .return').textContent;
document.querySelector('.job .return').textContent = '';

const skillsInput = document.querySelector('.skills .input').textContent;
document.querySelector('.skills .input').textContent = '';

const skillsReturn = document.querySelector('.skills .return').textContent;
document.querySelector('.skills .return').textContent = '';

const contactInput = document.querySelector('.contact .input').textContent;
document.querySelector('.contact .input').textContent = '';

const contactReturn = document.querySelector('.contact .return').innerHTML;
document.querySelector('.contact .return').textContent = '';

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    gsap.to("h1", {duration: 3, text: title, delay: 0})
    gsap.to("h3", {duration: 3, text: subtitle, delay: 3})
    gsap.from('.terminal', 0.4, {transform: "scale(0)", ease: "power2.out", delay: 6})

    gsap.to(".whoami .input", {duration: 3, text: "<span class='caret'></span>" + whoamiIpnput, delay: 7})
    gsap.to(".whoami .return", {duration: 3, text: whoamiReturn, delay: 10})

    gsap.to(".interests .input", {duration: 3, text: "<span class='caret'></span>" + interestsInput, delay: 13})
    gsap.to(".interests .return", {duration: 3, text: interestsReturn, delay: 16})

    gsap.to(".job .input", {duration: 3, text: "<span class='caret'></span>" + jobInput, delay: 19})
    gsap.to(".job .return", {duration: 3, text: jobReturn, delay: 22})

    gsap.to(".skills .input", {duration: 3, text: "<span class='caret'></span>" + skillsInput, delay: 25})
    gsap.to(".skills .return", {duration: 3, text: skillsReturn, delay: 28})

    gsap.to(".contact .input", {duration: 3, text: "<span class='caret'></span>" + contactInput, delay: 31})
    gsap.to(".contact .return", {duration: 3, text: contactReturn, delay: 34})

    gsap.to(".pending .input", {duration: 3, text: "<span class='caret'></span><span class='cursor'></span>", delay: 37});

    TL.staggerFrom('.avatar', 1, {bottom: -1000, ease: "power2.out", delay: 40}, 0.3, '-=1')

    TL.play();
})
