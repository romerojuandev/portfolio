const d = document;
const w = window;

export function scrollTopButton(img, btn) {
  const $scrollImg = d.querySelector(img);
  const $scrollBtn = d.querySelector(btn);

  w.addEventListener("scroll", (e) => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

    if (scrollTop > 900) {
      $scrollImg.classList.remove("hidden");
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollImg.classList.add("hidden");
      $scrollBtn.classList.add("hidden");
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(img)) {
      w.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
}

export function enviarFormulario(e) {
  fetch("https://formsubmit.co/ajax/05918ab47fa815ab7776944a17b0f2bf", {
    method: "POST",
    body: new FormData(e.target),
  }).then((res) => (res.ok ? res.json() : Promise.reject(res)));
}

export function mensajeFormulario() {
  const $form = d.querySelector(".form");
  const $loader = d.querySelector(".loader-container");
  const $response = d.querySelector(".form-response");

  $loader.classList.remove("none");

  setTimeout(() => {
    $loader.classList.add("none");
    $response.classList.remove("none");
    $form.reset();

    setTimeout(() => $response.classList.add("none"), 3000);
  }, 3000);
}
