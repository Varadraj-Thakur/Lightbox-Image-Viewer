function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    if (body.classList.contains('light-theme')) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      themeToggle.textContent = '☀️';
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      themeToggle.textContent = '🌙';
    }
  }
  
 
const thumbnails1 = document.querySelectorAll('.thumbnail1');
const thumbnails2 = document.querySelectorAll('.thumbnail2');
const thumbnails3 = document.querySelectorAll('.thumbnail3');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeBtn = document.querySelector('.close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;
let currentThumbnails = [];

// Function to update the lightbox image
function updateLightboxImage() {
  const src = currentThumbnails[currentIndex].src;
  lightboxImage.src = src;
}

// Open lightbox for thumbnails1
thumbnails1.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    lightbox.classList.add('active');
    currentThumbnails = thumbnails1; // Set current thumbnails to thumbnail1
    currentIndex = index;
    updateLightboxImage();
  });
});

// Open lightbox for thumbnails2
thumbnails2.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    lightbox.classList.add('active');
    currentThumbnails = thumbnails2; // Set current thumbnails to thumbnail2
    currentIndex = index;
    updateLightboxImage();
  });
});
// Open lightbox for thumbnails3
thumbnails3.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    lightbox.classList.add('active');
    currentThumbnails = thumbnails3; // Set current thumbnails to thumbnail2
    currentIndex = index;
    updateLightboxImage();
  });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

// Navigation buttons (Prev/Next)
prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);

function showPrevImage() {
  currentIndex = (currentIndex - 1 + currentThumbnails.length) % currentThumbnails.length;
  updateLightboxImage();
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % currentThumbnails.length;
  updateLightboxImage();
}

// Close lightbox on clicking outside
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
  }
});