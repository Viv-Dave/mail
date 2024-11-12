// fetch("http://127.0.0.1:8000/api/data/")
//   .then((response) => response.json())
//   .then((data) => {
//     const dataDiv = document.getElementById("data");
//     dataDiv.innerHTML = `<p>${data.message}</p><ul>`;

//     data.items.forEach((item) => {
//       dataDiv.innerHTML += `<li>${item}</li>`;
//     });

//     dataDiv.innerHTML += "</ul>";
//   })
//   .catch((error) => console.error("Error:", error));
const showBtn = document.getElementById("show");
const dialogElem = document.getElementById("dialog");
const submit = document.getElementById("submit");
showBtn.addEventListener("click", () => {
  dialogElem.showModal();
});
submit.addEventListener("click", () => {
  dialogElem.close();
});
