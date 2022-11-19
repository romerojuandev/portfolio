const d = document;
d.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch("https://formsubmit.co/ajax/05918ab47fa815ab7776944a17b0f2bf", {
    method: "POST",
    body: new FormData(e.target),
  }).then((res) => (res.ok ? res.json() : Promise.reject(res)));
});
