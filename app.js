function onReady() {
  let id=0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');

  if(localStorage.getItem("prevTask")!=null){
    toDos=JSON.parse(localStorage.getItem("prevTask"));
  }

  function createNewToDo() {
    if (!newToDoText.value) { return;}

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id:
      id=id+1
    });

    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI(){
       const toDoList = document.getElementById('toDoList');

       toDoList.textContent = '';

       toDos.forEach(function(toDo) {
          const newLi = document.createElement('li');
          const checkbox = document.createElement('input');
          const del = document.createElement('button');
          checkbox.type = "checkbox";
          del.textContent = "delete";
          newLi.textContent = toDo.title;

          toDoList.appendChild(newLi);
          newLi.appendChild(checkbox);
          newLi.appendChild(del);

          del.addEventListener('click', event => {
             deleteToDo(toDo.id);
             renderTheUI();
          });
          checkbox.addEventListener('click', event => {
               if(toDo.complete ==false){
                   toDo.complete=true;
               }else{
                   toDo.complete=false;
               }
          });

      });
      localStorage.setItem("prevTask",JSON.stringify(toDos));
  }

  function deleteToDo(id) {
    toDos = toDos.filter(item => item.id!== id);
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value =  "";
  });

  renderTheUI();
}
// loads an  when page opens
window.onload = function(){
  onReady();
};
