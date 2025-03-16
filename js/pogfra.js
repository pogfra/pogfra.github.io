window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    gsap.to("h1", {duration: 3, text: "Welcome to my website", delay: 0})
    gsap.to("h3", {duration: 3, text: "pogfra.github.io", delay: 3})
    gsap.from('.terminal', 0.4, {transform: "scale(0)", ease: "power2.out", delay: 6})

    gsap.to(".whoami .input", {duration: 3, text: "<span class='caret'></span>Whoami", delay: 7})
    gsap.to(".whoami .return", {duration: 3, text: "Pierre-Olivier Guilhem aka pogfra", delay: 10})

    gsap.to(".interests .input", {duration: 3, text: "<span class='caret'></span>Interests", delay: 13})
    gsap.to(".interests .return", {duration: 3, text: '["Photography", "Guitar", "Cooking", "Sail"]', delay: 16})

    gsap.to(".job .input", {duration: 3, text: "<span class='caret'></span>Job", delay: 19})
    gsap.to(".job .return", {duration: 3, text: "I am Web lead developer and i develop amazing websites to enhanced my clients business", delay: 22})

    gsap.to(".skills .input", {duration: 3, text: "<span class='caret'></span>Skills", delay: 25})
    gsap.to(".skills .return", {duration: 3, text: '["Drupal", "Wordpress", "Javascript", "Docker", "Git", "Linux", "Figma"]', delay: 28})

    gsap.to(".contact .input", {duration: 3, text: "<span class='caret'></span>Contact", delay: 31})
    gsap.to(".contact .return", {duration: 3, text: '["<a target="_blank" href="https://github.com/pogfra">Github</a>", "<a target="_blank" href="https://hub.docker.com/u/pogfra">Docker</a>", "<a target="_blank" href="https://www.linkedin.com/in/pierre-olivier-guilhem/">Linkedin</a>"]', delay: 34})

    gsap.to(".pending .input", {duration: 3, text: "<span class='caret'></span><span class='cursor'></span>", delay: 37});

    TL.staggerFrom('.avatar', 1, {bottom: -1000, ease: "power2.out", delay: 40}, 0.3, '-=1')

    TL.play();
})
