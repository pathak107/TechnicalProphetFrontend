const search = () => {
  let input = document.getElementById("search-bar");
  const paras = document.querySelectorAll(".heading.mb-3 + p");

  paras.forEach((para) => {
    if (input.value == "") {
      para.classList.remove("highlighted");
      return;
    }
    if (para.innerText.toLowerCase().includes(input.value.toLowerCase()))
      para.classList.add("highlighted");
    else para.classList.remove("highlighted");
  });
};
