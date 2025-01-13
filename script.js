// hamburger code starts here
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "block";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

const navItems = document.querySelectorAll(".navbar-item"); // Select all navbar items
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    hideSidebar(); // Hide the sidebar on click
  });
});

// hamburger codes ends here

//SWIPER
const swiper = new Swiper(".swiper", {
  // Autoplay
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// PLAY BUTTON
const video = document.getElementById("customVideo");
const playButton = document.getElementById("playButton");

// Toggle play/pause and button icon
playButton.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playButton.classList.add("pause"); // Show pause icon
  } else {
    video.pause();
    playButton.classList.remove("pause"); // Show play icon
  }
});