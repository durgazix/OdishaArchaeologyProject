document.addEventListener("DOMContentLoaded", () => {
  const viewMoreBtn = document.getElementById("newsViewMore");
  const viewLessBtn = document.getElementById("newsViewLess");
  const extraNews = document.querySelectorAll(".extra-news");

  if (!viewMoreBtn || !viewLessBtn) return;

  viewMoreBtn.addEventListener("click", () => {
    extraNews.forEach(item => item.classList.remove("d-none"));
    viewMoreBtn.classList.add("d-none");
    viewLessBtn.classList.remove("d-none");
  });

  viewLessBtn.addEventListener("click", () => {
    extraNews.forEach(item => item.classList.add("d-none"));
    viewLessBtn.classList.add("d-none");
    viewMoreBtn.classList.remove("d-none");

    document.querySelector(".news-section")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
