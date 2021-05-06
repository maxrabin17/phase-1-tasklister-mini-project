document.addEventListener("DOMContentLoaded", () => {
  let field = document.querySelector("#new-task-description")
  let form = document.querySelector("#create-task-form")
  form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let getUl = document.getElementById("tasks");
    let list = document.createElement('li');
    getUl.append(list);
    deleteFunction();

  })
});

// 1. Grab task ul
// 2. Create li with text from user input
// 3. append the li to the ul

function deleteFunction {
  addEventListener("click", () =>{
    document.getUl.reset()
  })
}