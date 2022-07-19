const element = document.getElementById('nav-button');
element.addEventListener('click', () => {
  let x = document.getElementById("myLinks");
  if (x.style.display === 'block') {
    element.innerHTML = '<I class="fa fa-bars"></I>';
    element.classList.remove('text-danger');
    x.style.display = 'none';
  } 
  else {
    element.innerHTML = '<I class="fa fa-times-circle"></I>';
    element.classList.add('text-danger');
    x.style.display = 'block';
  }
});
