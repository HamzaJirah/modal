//select modal element
const modal = document.querySelector('#simpleModal');
//select open modal button
const modalBtn = document.querySelector('#modalBtn');
//select close button
const closeBtn = document.querySelector('#closeBtn');

//listen for open click event
modalBtn.addEventListener('click', openModal);
//listen for close click event
closeBtn.addEventListener('click', closeModal);

//create open modal function
function openModal(){
  modal.style.display = 'block';
}

//create close modal function
function closeModal(){
  modal.style.display = 'none';
}
