document.addEventListener("DOMContentLoaded", () => {
  const e = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  e.length > 0 &&
    e.forEach((e) => {
      e.addEventListener("click", () => {
        const t = e.dataset.target,
          a = document.getElementById(t);
        e.classList.toggle("is-active"), a.classList.toggle("is-active");
      });
    });
});
