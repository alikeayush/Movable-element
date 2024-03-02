const movableElement = document.getElementById("movable-element");
const changeColorButton = document.getElementById("change-color-button");
const contactForm = document.getElementById("contact-form");


if (movableElement && changeColorButton && contactForm) {
  changeColorButton.addEventListener("click", () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    movableElement.style.backgroundColor = randomColor;
  });

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = contactForm.elements["name"].value;
    const email = contactForm.elements["email"].value;
    console.log(`Name: ${name}, Email: ${email}`);
    contactForm.reset();
  });

  let initialX = 0;
  let initialY = 0;
  let isMouseDown = false;

  movableElement.addEventListener("mousedown", (e) => {
    initialX = e.clientX - movableElement.getBoundingClientRect().left;
    initialY = e.clientY - movableElement.getBoundingClientRect().top;
    isMouseDown = true;
  });

  document.addEventListener("mousemove", (e) => {
    if (isMouseDown) {
      movableElement.style.left = `${e.clientX - initialX}px`;
      movableElement.style.top = `${e.clientY - initialY}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    isMouseDown = false;
  });
} else {
  console.error("One or more elements not found in the HTML document.");
}
