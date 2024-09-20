const codeInputs = document.querySelectorAll(".code");

codeInputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value.length === 1) {
      if (index < codeInputs.length - 1) {
        codeInputs[index + 1].focus();
      }
    }
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Backspace"   
 && input.value === "") {
      if (index > 0) {
        codeInputs[index - 1].focus();
      }
    }
  });
});