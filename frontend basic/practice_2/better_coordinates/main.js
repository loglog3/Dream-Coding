const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const tag = document.querySelector(".tag");
const target = document.querySelector(".target");

addEventListener("load", () => {
  // 윈도우 모든 요소가 추가 된 다음에 애니메이션 추가!
  const targetRect = target.getBoundingClientRect();

  document.addEventListener("mousemove", (e) => {
    console.log("move");

    const x = e.clientX;
    const y = e.clientY;

    vertical.style.transform = `translateX(${e.clientX}px)`;
    horizontal.style.transform = `translateY(${e.clientY}px)`;
    target.style.transform = `translate(${
      e.clientX - targetRect.height / 2
    }px, ${e.clientY - targetRect.height / 2}px)`;
    tag.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

    tag.innerHTML = `${e.clientX}px, ${e.clientY}px`;

    console.log(e.clientX);
  });
});
