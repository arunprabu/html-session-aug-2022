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

/* Local Storage */
function savePincodeHandler(){
  var enteredPincode = document.getElementById('pincodeInput').value;
  console.log(enteredPincode);
  localStorage.setItem('pin', enteredPincode);
  alert('saved in localStorage. Check browser console');
}

document.getElementById('savePincodeBtn')?.addEventListener('click', savePincodeHandler);

function accessLocationHandler(){
  console.log('accessing location.. pls wait');
  navigator.geolocation.getCurrentPosition( locationAccessGranted, locationAccessDenied )
}

function locationAccessGranted(position){
  console.log(position);
  alert('You are here.. Latitude: ' + position.coords.latitude + ' and Longitude is: ' + position.coords.longitude)
}

function locationAccessDenied(){
  alert('you denied to access the location');
}

document.getElementById('accessLocationBtn')?.addEventListener('click', accessLocationHandler);


// Custom Elments 
//1 
class MyReport extends HTMLElement{
  constructor(){
    super();
  }
  
  connectedCallBack(){
    console.log('connectedCallBack');
  }
}

customElements.define('my-report', MyReport);


// 2.
class MyButton extends HTMLButtonElement{
  // custom element related methods 
  constructor(){
    super();
    this.addEventListener('click', () => {
      alert('clicked');
    })
  }
}

customElements.define('my-button', MyButton, { extends: 'button'});

