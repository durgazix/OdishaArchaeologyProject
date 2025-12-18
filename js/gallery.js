document.addEventListener("DOMContentLoaded", function () {

  /* SLIDER NAVIGATION */
  document.querySelectorAll(".gallery-container").forEach(container => {
    const items = container.querySelector(".gallery-items");
    const prev = container.querySelector(".prev");
    const next = container.querySelector(".next");

    prev.addEventListener("click", () => {
      items.scrollBy({ left: -240, behavior: "smooth" });
    });

    next.addEventListener("click", () => {
      items.scrollBy({ left: 240, behavior: "smooth" });
    });
  });

});
