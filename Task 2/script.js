// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Project card click actions
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card, index) => {
  card.addEventListener('click', () => {

    if (index === 0) {
      alert("College Hostel Lifestyle Project");
      // add project link later
    }

    if (index === 1) {
      alert("Budget Tracker Project");
      // add project link later
    }
  });
});

// Hire me button
const hireBtn = document.querySelector('.btn-hire');

hireBtn.addEventListener('click', () => {
  console.log("Hire Me clicked");
});
