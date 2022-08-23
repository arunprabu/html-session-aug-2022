// external JS 
function onClickHandler(){
  alert('clicked');
}

document.getElementById('demoBtn')?.addEventListener('click', onClickHandler);

function dragStartHandler(event){
  console.log('dragging');
  console.log(event.target.id);
  event.dataTransfer.setData('draggedItem', event.target.id);
}

function dragOverHandler(event){
  console.log(event);
  // allowing to drop
  event.preventDefault();
}

function dropHandler(event){
  event.preventDefault();
  var droppedItem = event.dataTransfer.getData('draggedItem');
  console.log(droppedItem);
  event.target.appendChild(document.getElementById(droppedItem));
}