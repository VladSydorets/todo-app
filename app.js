window.addEventListener("load", () => {
  const form = document.querySelector("form");
  const item = document.querySelector("#item");
  const list = document.querySelector("#list");

  form.addEventListener("click", (e) => {
    e.preventDefault();
    if (item.value != "") {
      const li = document.createElement("li");
      li.innerHTML = `<span><i class="fa-solid fa-square-check"></i> <span>${item.value}</span></span> <i class="fa-solid fa-xmark"></i>`;
      list.appendChild(li);
      item.value = "";
    }

    const removeBtns = document.querySelectorAll(".fa-xmark");
    for (const btn of removeBtns) {
      btn.addEventListener("click", (e) => {
        btn.parentElement.remove();
      });
    }

    const checkBtns = document.querySelectorAll(".fa-square-check");
    for (const btn of checkBtns) {
      btn.addEventListener("click", (e) => {
        btn.nextElementSibling.classList.toggle("checked");
      });
    }
  });
});
