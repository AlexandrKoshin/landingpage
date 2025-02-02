function scrollToSection(sectionId) {
  const section = document.querySelector(`#${sectionId}`);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const sectionId = this.getAttribute("href").substring(1);
    scrollToSection(sectionId);
  });
});

function revealElements() {
  const elements = document.querySelectorAll(".scroll-reveal");
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 10) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  });
}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

function scrollFunction() {
  const myBtn = document.getElementById("myBtn");
  if (myBtn) {
    if (window.scrollY > 525) {
      myBtn.style.display = "block";
    } else {
      myBtn.style.display = "none";
    }
  }
}

window.addEventListener("scroll", scrollFunction);

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };
  alert("Ваша заявка успешно оформлена!");
  this.reset();
});

document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links li a");

  if (burgerMenu) {
    burgerMenu.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  document.addEventListener("click", (event) => {
    if (burgerMenu && !burgerMenu.contains(event.target) && !navLinks.contains(event.target)) {
      navLinks.classList.remove("active");
    }
  });

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});
