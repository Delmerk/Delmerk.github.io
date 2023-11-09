// let menu = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");

// menu.onclick = () => {
// 	menu.classList.toggle("bx-x");
// 	navbar.classList.toggle("open");
// };

const sr = ScrollReveal({
	distance: "40px",
	duration: 2000,
	reset: true,
});

sr.reveal(".logo", { delay: 200, origin: "left" });
sr.reveal(".navbar", { delay: 300, origin: "top" });
sr.reveal(".main", { delay: 400, origin: "right" });
sr.reveal(".home-text span", { delay: 500, origin: "top" });
sr.reveal(".home-text h1", { delay: 550, origin: "left" });
sr.reveal(".home-text h2", { delay: 550, origin: "left" });
sr.reveal(".home-text p", { delay: 650, origin: "right" });
sr.reveal(".main-btn", { delay: 750, origin: "left" });
sr.reveal(".share", { delay: 850, origin: "bottom" });
sr.reveal(".home-img", { delay: 950, origin: "bottom" });
