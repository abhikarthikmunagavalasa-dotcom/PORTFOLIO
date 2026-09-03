```javascript
/* =========================================
   PAGE LOADER
========================================= */

window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hidden");

    }, 1800);

});


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.querySelector(".nav-menu");

const navLinks =
    document.querySelectorAll(".nav-link");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


/* Close mobile menu */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

    });

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".section-header, " +
        ".about-grid, " +
        ".project-card, " +
        ".skill-card, " +
        ".process-step, " +
        ".timeline-item"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "reveal-visible"
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =========================================
   MOUSE PARALLAX
========================================= */

const hero =
    document.querySelector(".hero");

const heroGlow =
    document.querySelector(".hero-glow");


if (hero && heroGlow) {

    hero.addEventListener(
        "mousemove",
        (event) => {

            const x =
                (event.clientX /
                    window.innerWidth -
                    0.5) * 30;

            const y =
                (event.clientY /
                    window.innerHeight -
                    0.5) * 30;

            heroGlow.style.transform =
                `translate(${x}px, ${y}px)`;

        }
    );

}


/* =========================================
   PROJECT CARD HOVER
========================================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
                "translateY(-5px)";

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateY(0)";

        }
    );

});


/* =========================================
   SMOOTH ANCHOR SCROLL
========================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener(
        "click",
        function(event) {

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }
    );

});


/* =========================================
   DYNAMIC YEAR
========================================= */

const copyright =
    document.querySelector(".copyright");

if (copyright) {

    const year =
        new Date().getFullYear();

    copyright.textContent =
        `© ${year} Game Designer. All rights reserved.`;

}


/* =========================================
   TILT EFFECT FOR SKILLS
========================================= */

const skillCards =
    document.querySelectorAll(
        ".skill-card"
    );


skillCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX -
                rect.left;

            const y =
                event.clientY -
                rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) /
                    centerY) * -3;

            const rotateY =
                ((x - centerX) /
                    centerX) * 3;

            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "perspective(800px) rotateX(0) rotateY(0)";

        }
    );

});


/* =========================================
   TYPING EFFECT
========================================= */

const heroSmall =
    document.querySelector(
        ".hero-small"
    );

if (heroSmall) {

    const originalText =
        heroSmall.textContent;

    heroSmall.textContent = "";

    let index = 0;

    function typeText() {

        if (index < originalText.length) {

            heroSmall.textContent +=
                originalText.charAt(index);

            index++;

            setTimeout(
                typeText,
                45
            );

        }

    }

    setTimeout(
        typeText,
        2100
    );

}
```
