const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const tag = document.querySelector(".tag");
const target = document.querySelector(".target");

document.addEventListener("mousemove", (e) => {
  console.log("move");
  vertical.style.left = `${e.clientX}px`;
  horizontal.style.top = `${e.clientY}px`;
  target.style.left = `${e.clientX}px`;
  target.style.top = `${e.clientY}px`;
  tag.style.left = `${e.clientX}px`;
  tag.style.top = `${e.clientY}px`;
  tag.innerHTML = `${e.clientX}px, ${e.clientY}px`;

  console.log(e.clientX);
});
