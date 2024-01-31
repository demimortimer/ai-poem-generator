function generatePoem(event) {
  event.preventDefault();

  let userPrompt = document.querySelector("#user-prompt");
  let apiKey = "31044e85dc6dotb5a7ff80ae77ab2504";
  let context = `You are a humerous poem expert and you love to write short poems. You should generate a 4 line poem, with each line seperated by a <br />. Format your answer in HTML. Please do not include a title for the poem. Sign off the poem with 'Written by SheCodes AI' inside <i> element at the end of the poem.`;
  let prompt = `Generate a short poem about ${userPrompt.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = `<div class="blink">Generating a poem about ${userPrompt.value}.</div>`;

  console.log("Generating Poem...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 3,
    loop: false,
  });
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
