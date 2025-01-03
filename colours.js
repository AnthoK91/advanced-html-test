const colors = ["#8F9491", "#BCA3AC", "#E5CEDC", "#F3EAF4", "#EADDE1"];

document.querySelectorAll(".grid-child").forEach((element) => {
  const random_color = colors[Math.floor(Math.random() * colors.length)];

  element.style.backgroundColor = random_color;
});
