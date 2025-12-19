// NEWS SLIDER FUNCTIONALITY
let currentNewsIndex = 0;
let autoSlideInterval;

const newsItems = [
  {
    title: "Preservation of Jagannath Temple Complex - A Living Monument",
    text: "The Jagannath Temple in Puri is one of Odisha's most sacred and architecturally significant monuments. The Department of Archaeology continues its dedicated efforts to preserve this 12th-century masterpiece, ensuring that its intricate stone carvings, magnificent spires, and spiritual significance are maintained for future generations of pilgrims and scholars. This magnificent structure, built in the 12th century, stands as a testament to Odishan architectural brilliance and remains one of the four most important pilgrimage sites in Hinduism.",
    image: "assets/news/Vallam-min_1.jpg"
  },
  {
    title: "Konark Sun Temple - Architectural Marvel of Odisha",
    text: "The Sun Temple at Konark is a UNESCO World Heritage Site and represents the pinnacle of Odishan medieval architecture. Built in the 13th century under King Narasimhadeva I, its stunning stone sculptures and intricate carvings depicting celestial bodies, mythological scenes, and daily life provide invaluable insights into the Somavamshi dynasty's artistic achievements and astronomical knowledge. The temple's unique chariot-like structure symbolizes the sun god's journey across the sky, making it one of the most innovative architectural achievements in ancient India.",
    image: "assets/news/Vallam-min_1.jpg"
  },
  {
    title: "Recent Archaeological Excavations Unveil Ancient Odisha",
    text: "Ongoing excavations across Odisha have revealed pottery, coins, terracotta figurines, and structural remains dating back centuries. These discoveries at sites like Sisupalgarh, Dhabaleswar, and other historically significant locations continue to provide crucial evidence of Odisha's prosperous trade networks, cultural exchanges, and advanced urban planning in ancient times. Recent findings have shown that Odisha maintained thriving commercial connections with Southeast Asia, establishing it as a major maritime trading hub during the medieval period.",
    image: "assets/news/Vallam-min_1.jpg"
  }
];

function updateNewsSlide(index) {
  const newsItem = newsItems[index];
  const newsContent = document.querySelector(".news-content");
  const newsTitle = document.querySelector(".news-title");
  
  if (!newsContent || !newsTitle) {
    console.error("News content or title element not found");
    return;
  }

  // Reset auto-slide timer
  clearInterval(autoSlideInterval);

  // Fade out
  newsContent.style.opacity = "0";
  newsContent.style.transform = "translateY(20px)";
  newsTitle.style.opacity = "0";

  // Update after fade
  setTimeout(() => {
    // Update title
    newsTitle.textContent = newsItem.title;
    
    // Update content
    newsContent.innerHTML = `
      <p class="news-text">${newsItem.text}</p>
      <img src="${newsItem.image}" alt="${newsItem.title}" class="news-image">
      <a href="#" class="news-more">More..</a>
    `;

    // Fade in
    setTimeout(() => {
      newsContent.style.opacity = "1";
      newsContent.style.transform = "translateY(0)";
      newsTitle.style.opacity = "1";
    }, 10);
  }, 300);

  currentNewsIndex = index;
  
  // Restart auto-slide
  startAutoSlide();
}

function startAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => {
    const nextIndex = (currentNewsIndex + 1) % newsItems.length;
    updateNewsSlide(nextIndex);
  }, 5000); // 5 seconds
}

document.addEventListener("DOMContentLoaded", function () {
  // Initialize News Slider
  const navPrev = document.querySelector(".nav-prev");
  const navNext = document.querySelector(".nav-next");

  if (navPrev) {
    navPrev.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      const previousIndex = (currentNewsIndex - 1 + newsItems.length) % newsItems.length;
      updateNewsSlide(previousIndex);
    });
  }

  if (navNext) {
    navNext.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      const nextIndex = (currentNewsIndex + 1) % newsItems.length;
      updateNewsSlide(nextIndex);
    });
  }

  // Start auto-slide
  if (navPrev && navNext) {
    startAutoSlide();
    console.log("News slider initialized successfully");
  } else {
    console.warn("News navigation buttons not found");
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
    
    // Scroll to detail section below navbar
    setTimeout(() => {
      const breadcrumb = document.querySelector(".breadcrumb-bar");
      if (breadcrumb) {
        breadcrumb.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
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
