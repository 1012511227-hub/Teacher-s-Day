/* =========================
   SMOOTH SCROLL
========================= */

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}


/* =========================
   14 COUNTER
========================= */

const counter = document.getElementById("counter");

let counterStarted = false;

const counterObserver = new IntersectionObserver((entries) => {

    if (entries[0].isIntersecting && !counterStarted) {

        counterStarted = true;

        let number = 0;

        const interval = setInterval(() => {

            number++;

            counter.textContent = number;

            if (number >= 14) {
                clearInterval(interval);
            }

        }, 100);

    }

}, {
    threshold: 0.5
});

counterObserver.observe(counter);


/* =========================
   TIMELINE
========================= */

document.querySelectorAll(".timeline-dot").forEach(dot => {

    dot.addEventListener("click", () => {

        const card = dot.nextElementSibling;

        card.classList.toggle("active");

    });

});


/* =========================
   DESK OBJECTS
========================= */

const deskMessage = document.getElementById("deskMessage");

document.querySelectorAll(".desk-object").forEach(object => {

    object.addEventListener("click", () => {

        deskMessage.textContent =
            object.dataset.message;

    });

});


/* =========================
   SILK CHOCOLATE
========================= */

const silkButton = document.getElementById("silkButton");
const chocolateMessage =
    document.getElementById("chocolateMessage");

silkButton.addEventListener("click", () => {

    silkButton.classList.add("open");

    chocolateMessage.classList.add("show");

    silkButton.querySelector(".unwrap-text").textContent =
        "CHOCOLATE DELIVERED 🍫";

});


/* =========================
   14 THINGS
========================= */

const starMessage =
    document.getElementById("starMessage");

document.querySelectorAll(".stars button").forEach(star => {

    star.addEventListener("click", () => {

        const number = star.dataset.number;
        const text = star.dataset.text;

        starMessage.innerHTML =
            `<strong>${number}.</strong> ${text}`;

    });

});


/* =========================
   LETTER
========================= */

const envelope =
    document.getElementById("envelope");

const letterContent =
    document.getElementById("letterContent");

envelope.addEventListener("click", () => {

    envelope.classList.toggle("open");

    setTimeout(() => {

        letterContent.classList.add("show");

    }, 500);

});


/* =========================
   FINAL GIFT
========================= */

const gift =
    document.getElementById("gift");

const finalMessage =
    document.getElementById("finalMessage");

gift.addEventListener("click", () => {

    gift.style.transform = "scale(0)";

    setTimeout(() => {

        gift.style.display = "none";

        finalMessage.classList.add("show");

        createConfetti();

    }, 400);

});


/* =========================
   CONFETTI / PETALS
========================= */

function createConfetti() {

    const symbols = ["✦", "✧", "✿", "❀", "💜"];

    for (let i = 0; i < 35; i++) {

        const piece = document.createElement("div");

        piece.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        piece.style.position = "fixed";
        piece.style.left =
            Math.random() * 100 + "vw";
        piece.style.top = "-20px";
        piece.style.fontSize =
            (12 + Math.random() * 15) + "px";
        piece.style.zIndex = "200";
        piece.style.pointerEvents = "none";

        document.body.appendChild(piece);

        const duration =
            2500 + Math.random() * 2500;

        piece.animate([
            {
                transform: "translateY(0) rotate(0)",
                opacity: 1
            },
            {
                transform:
                    `translateY(110vh) rotate(${Math.random() * 720}deg)`,
                opacity: 0
            }
        ], {
            duration: duration,
            easing: "ease-in"
        });

        setTimeout(() => {
            piece.remove();
        }, duration);

    }

}


/* =========================
   REVEAL ANIMATIONS
========================= */

const revealElements =
    document.querySelectorAll(
        ".timeline-card, .quality-card, .polaroid, .second-photo"
    );

const revealObserver =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.animation =
                    "fadeUp .7s ease forwards";

            }

        });

    }, {
        threshold: 0.15
    });

revealElements.forEach(element => {

    element.style.opacity = "0";

    revealObserver.observe(element);

});