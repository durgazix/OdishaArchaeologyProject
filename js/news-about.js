// NEWS SLIDER FUNCTIONALITY
let currentNewsIndex = 0;
const newsItems = [
  {
    title: "Newly declared Protected Monument - Cave Temples at Vallam Village",
    text: "The Pallava period Rock-cut temples namely Sri Karivartharaja Perumal Temple, Siva Temple and Sri Vedhandhees warar Cave Temple in Vallam village which is 3 km from Chengalpattu Taluk, Kanchipuram District, are declared as protected Monument of...",
    image: "assets/news/Vallam-min_1.jpg"
  },
  {
    title: "Archaeological Discoveries at Historical Sites",
    text: "Recent excavations have uncovered significant artifacts and structures that provide insights into the ancient civilizations of Odisha. These discoveries help us understand the rich cultural heritage and historical significance of the region...",
    image: "assets/news/news1.jpg"
  },
  {
    title: "Conservation Efforts for Ancient Monuments",
    text: "The Department of Archaeology is committed to the preservation and restoration of ancient monuments. Our team of experts uses modern conservation techniques to ensure that these historical treasures are maintained for future generations...",
    image: "assets/news/news2.jpg"
  }
];

function updateNewsSlide(index) {
  const newsItem = newsItems[index];
  const newsContent = document.querySelector(".news-content");
  const newsTitle = document.querySelector(".news-title");
  
  // Add fade out animation before update
  if (newsContent) {
    newsContent.style.opacity = "0";
    newsContent.style.transform = "translateY(20px)";
    
    setTimeout(() => {
      newsContent.innerHTML = `
        <p class="news-text">${newsItem.text}</p>
        <img src="${newsItem.image}" alt="${newsItem.title}" class="news-image">
        <a href="#" class="news-more">More..</a>
      `;
      
      // Trigger animation by resetting styles
      newsContent.style.opacity = "1";
      newsContent.style.transform = "translateY(0)";
    }, 250);
  }

  if (newsTitle) {
    newsTitle.style.opacity = "0";
    setTimeout(() => {
      newsTitle.textContent = newsItem.title;
      newsTitle.style.opacity = "1";
    }, 250);
  }

  currentNewsIndex = index;
}

document.addEventListener("DOMContentLoaded", function () {
  // News slider navigation
  const navPrev = document.querySelector(".nav-prev");
  const navNext = document.querySelector(".nav-next");

  if (navPrev) {
    navPrev.addEventListener("click", function (e) {
      e.preventDefault();
      const previousIndex = (currentNewsIndex - 1 + newsItems.length) % newsItems.length;
      updateNewsSlide(previousIndex);
    });
  }

  if (navNext) {
    navNext.addEventListener("click", function (e) {
      e.preventDefault();
      const nextIndex = (currentNewsIndex + 1) % newsItems.length;
      updateNewsSlide(nextIndex);
    });
  }

  // Open About Detail Page
  window.openAboutPage = function() {
    const detailSection = document.querySelector(".about-detail-container");
    const closeBtn = document.querySelector(".close-detail-btn");
    const heroSection = document.getElementById("hero");
    const newsAboutSection = document.getElementById("news-about");
    
    if (detailSection) {
      detailSection.classList.add("active");
    }
    
    if (closeBtn) {
      closeBtn.classList.add("active");
    }

    // Hide hero and news-about sections
    if (heroSection) {
      heroSection.style.display = "none";
    }
    if (newsAboutSection) {
      newsAboutSection.style.display = "none";
    }
    
    // Scroll to detail section
    window.scrollTo(0, document.querySelector(".breadcrumb-bar").offsetTop);
  };

  // Close About Detail Page
  window.closeDetailPage = function() {
    const detailSection = document.querySelector(".about-detail-container");
    const closeBtn = document.querySelector(".close-detail-btn");
    const heroSection = document.getElementById("hero");
    const newsAboutSection = document.getElementById("news-about");
    
    if (detailSection) {
      detailSection.classList.remove("active");
    }
    
    if (closeBtn) {
      closeBtn.classList.remove("active");
    }

    // Show hero and news-about sections
    if (heroSection) {
      heroSection.style.display = "block";
    }
    if (newsAboutSection) {
      newsAboutSection.style.display = "block";
    }
  };

  // Close on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      window.closeDetailPage();
    }
  });

  // Close button click handler
  document.addEventListener("click", function (e) {
    if (e.target.closest(".close-detail-btn.active")) {
      window.closeDetailPage();
    }
  });
});
