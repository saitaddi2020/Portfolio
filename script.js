// Initialize EmailJS
emailjs.init("4mpEmFmakxSnJ3Ytq");

// Contact form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formStatus");
  const submitBtn = document.querySelector(".btn");

  if (!name || !email || !subject || !message) {
    status.textContent = "❗ Please fill in all the fields.";
    status.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  if (!email.match(emailPattern)) {
    status.textContent = "📧 Please enter a valid email address.";
    status.style.color = "red";
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  emailjs.sendForm("service_ocdktzd", "template_94bg40j", this)
    .then(() => {
      status.textContent = "✅ Message sent successfully!";
      status.style.color = "lightgreen";
      this.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
      setTimeout(() => { status.textContent = ""; }, 4000);
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      status.textContent = "❌ Failed to send. Please try again.";
      status.style.color = "red";
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    });
});

// Highlight active nav
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

const toggleInput = document.getElementById('input');
const body = document.body;