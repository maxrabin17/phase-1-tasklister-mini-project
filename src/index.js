document.addEventListener("DOMContentLoaded", () => {
  let field = document.querySelector("#new-task-description")
  let form = document.querySelector("#create-task-form")
  form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let getUl = document.getElementById("tasks");
    let list = document.createElement('li');
    let button = document.createElement("button");
    list.innerHTML = field.value
    button.innerHTML = "X"
    getUl.append(list, button);
    deleteFunction(button)
  })
});
//deleteFunction();
// 1. create button to delete
// 2. 

function deleteFunction(button) {
  addEventListener("click", () =>{
    button.onclick = function() {
      this.parentElement.remove()
    }
  })
}