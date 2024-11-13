const showBtn = document.getElementById("show");
const dialogElem = document.getElementById("dialog");
const submit = document.getElementById("submit");
const dataDiv = document.getElementById("data");
showBtn.addEventListener("click", () => {
  dialogElem.showModal();
});
submit.addEventListener("click", () => {
  dialogElem.close();
});
fetch("http://127.0.0.1:8000/api/data/")
  .then((response) => response.json())
  .then((task_data) => {
    console.log(task_data);

    task_data.forEach((task) => {
      const taskElement = document.createElement("div");
      const deleteBtn = document.createElement("button");
      const headingElement = document.createElement("h5");
      const taskDescription = document.createElement("p");
      deleteBtn.className = "deletebtn";
      taskElement.className = "task";
      deleteBtn.textContent = "Delete";
      headingElement.textContent = `${task.title}`;
      taskDescription.textContent = `${task.description}`;

      deleteBtn.addEventListener("click", () => {
        console.log(`Task clicked: ${task.title}`);
      });
      taskElement.appendChild(headingElement);
      taskElement.appendChild(taskDescription);
      taskElement.appendChild(deleteBtn);
      dataDiv.appendChild(taskElement);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
