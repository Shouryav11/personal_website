// Sliding navbar effect
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');
  const navSlider = document.querySelector('.nav-slider');
  const sectionTitle = document.getElementById('section-title');

  // Section titles map
  const titles = {
    "about": "About Me",
    "work": "Experience",
    "skills": "Skills & Expertise",
    "art": "My Art & Posters",
    "projects": "Projects",
    "contact": "Contact"
  };

  function setActive(link) {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    // Move slider below active link
    const rect = link.getBoundingClientRect();
    const parentRect = link.parentElement.parentElement.getBoundingClientRect();
    navSlider.style.left = (rect.left - parentRect.left) + "px";
    navSlider.style.width = rect.width + "px";
    // Set section title dynamically
    let path = link.getAttribute('href').replace('/', '');
    if (titles[path]) {
      sectionTitle.textContent = titles[path];
    } else {
      sectionTitle.textContent = "Illustrator and Designer";
    }
  }

  // Initialize slider to Home/About
  setActive(navLinks);

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      setActive(this);
      // Optionally, load content dynamically via AJAX if wanted
      // Here, server-side navigation will work with Flask as standard
    });
  });
});
// Smooth scrolling for nav links
//        document.querySelectorAll('nav a').forEach(anchor => {
//            anchor.addEventListener('click', function(e) {