var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

const editBtn = document.querySelector('.edit');
const card = document.querySelector('.morph-card');
let active = false;


editBtn.addEventListener('click', e => {
  e.preventDefault();
  card.classList.toggle('active');
  active = !active;
  editBtn.innerText = active ? 'save' : 'edit';
})
