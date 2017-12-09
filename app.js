function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit' , event => {
    event.preventDefault();

    //get the text
    let title = newToDoText.value;

    //create new Li
    let newLi =  document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');
    checkbox.style.margin = "0px 0px 0px 10px";
    // Create a new cross input
    let cross = document.createElement('button');
    cross.style.margin = "0px 0px 0px 40px";

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // add cross to button
    cross.textContent = "x";
    // give ID
    cross.setAttribute("id", 'close');

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the Li
    newLi.appendChild(checkbox);
    newLi.appendChild(cross);

    // attach the li to the ul
    toDoList.appendChild(newLi);

   //empty the input
  newToDoText.value = '';

  cross.onclick = function(){
     this.parentNode.parentNode.removeChild(this.parentNode);
 };
  });

}
// loads an  when page opens
window.onload = function(){
  onReady();
};
