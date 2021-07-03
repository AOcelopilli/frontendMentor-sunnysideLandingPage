const d = document,
  $btnHamburguer = d.querySelector(".menu-mobile-btn"),
  $menuMobil = d.querySelector(".menu-mobile-links");

d.addEventListener("click", (e) => {
  if (e.target.matches(".menu-mobile-btn *")) {
    $menuMobil.classList.toggle("active");
  }

  if (e.target.matches(".menu-mobile-links *")) {
    $menuMobil.classList.toggle("active");
    console.log("holi");
  }
});
