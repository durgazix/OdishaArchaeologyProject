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
  const newsContent = document.querySelector("#news-about .news-content");
  const newsTitle = document.querySelector("#news-about .news-title");
  
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
      <div class="row g-3">
        <div class="col-md-7">
          <p class="news-text small text-muted lh-base mb-3">
            ${newsItem.text}
          </p>
          <a href="#" class="news-more text-danger fw-semibold text-decoration-none" onclick="showNewsPage(); return false;">
            More..
          </a>
        </div>
        <div class="col-md-5">
          <img src="${newsItem.image}" alt="${newsItem.title}" class="news-image img-fluid rounded" />
        </div>
      </div>
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
  const navPrev = document.querySelector("#news-about .nav-prev");
  const navNext = document.querySelector("#news-about .nav-next");

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
});

// Initialize News Page Slider (for standalone news page)
window.initNewsPageSlider = function () {
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

  function updateNewsPageSlide(index) {
    const newsItem = newsItems[index];
    const newsContent = document.querySelector("#news-page .news-content");
    const newsTitle = document.querySelector("#news-page .news-title");
    
    if (!newsContent || !newsTitle) {
      return;
    }

    clearInterval(autoSlideInterval);

    newsContent.style.opacity = "0";
    newsContent.style.transform = "translateY(20px)";
    newsTitle.style.opacity = "0";

    setTimeout(() => {
      newsTitle.textContent = newsItem.title;
      newsContent.innerHTML = `
        <div class="row g-3">
          <div class="col-md-8">
            <p class="news-text small text-muted lh-base mb-3">
              ${newsItem.text}
            </p>
          </div>
          <div class="col-md-4">
            <img src="${newsItem.image}" alt="${newsItem.title}" class="news-image img-fluid rounded" />
          </div>
        </div>
      `;

      setTimeout(() => {
        newsContent.style.opacity = "1";
        newsContent.style.transform = "translateY(0)";
        newsTitle.style.opacity = "1";
      }, 10);
    }, 300);

    currentNewsIndex = index;
    startAutoSlide();
  }

  function startAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
      const nextIndex = (currentNewsIndex + 1) % newsItems.length;
      updateNewsPageSlide(nextIndex);
    }, 5000);
  }

  const navPrev = document.querySelector("#news-page .nav-prev");
  const navNext = document.querySelector("#news-page .nav-next");

  if (navPrev) {
    navPrev.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      const previousIndex = (currentNewsIndex - 1 + newsItems.length) % newsItems.length;
      updateNewsPageSlide(previousIndex);
    });
  }

  if (navNext) {
    navNext.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      const nextIndex = (currentNewsIndex + 1) % newsItems.length;
      updateNewsPageSlide(nextIndex);
    });
  }

  if (navPrev && navNext) {
    startAutoSlide();
  }
};