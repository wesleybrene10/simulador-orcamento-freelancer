const checkboxes = document.querySelectorAll("input[type=checkbox]");
const totalEl = document.getElementById("total");
const lista = document.getElementById("lista");

const calcular = () => {
  let total = 0;
  lista.innerHTML = "";

  checkboxes.forEach((item) => {
    if (item.checked) {
      total += parseFloat(item.value);

      const nome = item.parentElement.querySelector("h3").innerText;

      const li = document.createElement("li");
      li.textContent = nome;
      lista.appendChild(li);
    }
  });

  totalEl.innerText = total;
};

// evento moderno (melhor que onclick no HTML)
checkboxes.forEach((item) => {
  item.addEventListener("change", calcular);
});

const limpar = () => {
  checkboxes.forEach((item) => {
    item.checked = false;
  });

  calcular();
};