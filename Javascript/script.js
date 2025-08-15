/* TOGGLE NAVIGATION MENU */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate that both elements exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // Add event listener to toggle element for click events
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/* REMOVE NAVIGATION MENU ON MOBILE CLICK */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  // Get the navigation menu element
  const navMenu = document.getElementById("nav-menu");
  // Remove the 'show-menu' class from the navigation menu when any nav link is clicked
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* HIGHLIGHT ACTIVE SECTION LINK ON SCROLL */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      // Remove the 'active-link' class from the corresponding nav link
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/* CHANGE HEADER BACKGROUND COLOR ON SCROLL */
function scrollHeader() {
  const nav = document.getElementById("header");
  // Add the 'scroll-header' class to the header when scrolled past 200px
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/* SHOW SCROLL TO TOP BUTTON ON SCROLL */
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  // Show the scroll to top button when scrolled past 560px
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

/* TOGGLE DARK/LIGHT MODE */
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-toggle-right";

// Check if a theme preference was previously selected
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Get the current theme based on the presence of the 'dark-theme' class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme)
    ? "bx-toggle-left"
    : "bx-toggle-right";

// Apply the previously selected theme if any
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-toggle-left" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
  distance: "30px",
  duration: 1800,
  reset: true,
});

sr.reveal(
  `.home__data, .home__img, 
           .decoration__data,
           .accessory__content,
           .footer__content`,
  {
    origin: "top",
    interval: 200,
  }
);

sr.reveal(`.share__img, .send__content`, {
  origin: "left",
});

sr.reveal(`.share__data, .send__img`, {
  origin: "right",
});
