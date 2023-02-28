let inputTextArea = document.getElementById("text-area");
let wordCount = document.getElementById("word-count");

inputTextArea.addEventListener("input", () => {
    let txt = inputTextArea.value.trim();
    wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
})