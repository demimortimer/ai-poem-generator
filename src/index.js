function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Generating...",
    autoStart: true,
  });
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
