const element = document.getElementById('nav-button');
const mobileMenu = document.getElementById('mobileMenu');
const close = document.getElementById('close');
element.addEventListener('click', () => {
  const x = document.getElementById('myLinks');
  if (x.style.display === 'block') {
    element.innerHTML = '<I class="fa fa-bars"></I>';
    x.style.display = 'none';
    window.location.reload(false);
  } else {
    x.style.display = 'block';
    mobileMenu.style.display = 'block';
  }
});

close.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  window.location.reload(false);
});

// popup
// JavaScript objec
const projects = [
  {
    id: '001',
    name: 'Multi - Post stories-1',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: 'images/Snapshoot-Portfolio.png',
    technologies: ['HTML', 'JavaScript', 'CSS', 'Ruby'],
    link: 'link_to_live_version.com',
  },
  {
    id: '002',
    name: 'Multi - Post stories-2',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been theindustrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: 'images/Img-Placeholder.png',
    technologies: ['HTML', 'JavaScript', 'CSS', 'Ruby'],
    link: 'link_to_live_version.com',
  },
  {
    id: '003',
    name: 'Multi - Post stories-3',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: 'images/Snapshoot-Portfolio.png',
    technologies: ['HTML', 'JavaScript', 'CSS', 'Ruby'],
    link: 'link_to_live_version.com',
  },
  {
    id: '004',
    name: 'Multi - Post stories-4',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: 'images/Snapshoot-Portfolio.png',
    technologies: ['HTML', 'JavaScript', 'CSS', 'Ruby'],
    link: 'link_to_live_version.com',
  },
];

const fillModal = (e) => {
  const h2 = document.querySelector('.modal-content h2');
  const p = document.querySelector('.modal-content p');
  const img = document.querySelector('.modal-image');
  const items = document.querySelectorAll('.modal-link li');
  h2.textContent = e.name;
  p.textContent = e.description;
  img.src = e.image;
  for (let i = 0; i < items.length; i += 1) {
    items[i].textContent = e.technologies[i];
  }
};

const getModalData = (key, obj) => {
  for (let i = 0; i < obj.length; i += 1) {
    if (obj[i].id === key) {
      return obj[i];
    }
  }
  return null;
};

const modal = document.getElementById('myModal');
const closeModal = document.getElementById('closeModal');
const raiseModal = document.querySelectorAll('.raise-modal');
raiseModal.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const data = getModalData(trigger.attributes.id.value, projects);
    fillModal(data);
    modal.style.display = 'block';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks on (x), it close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

const myform = document.getElementById('myform');
const email = document.getElementById('email');
const error = document.getElementById('ErrorMessage');
const submitbtn = document.getElementById('submitButton');
// the function below check if the email address is all lowercase or not //
let emailCheckLowerCase = (emailtxt) => {
  let result = false;
  if (emailtxt !== emailtxt.toLowerCase()) {
    error.style.color = 'red';
    error.innerHTML = 'Email must be in lowercase';
  } else {
    error.innerHTML = '';
    result = true;
  }
  return result;
};

// local storage
const txtname = document.getElementById('name');
const comment = document.getElementById('text');
const inputFields = document.querySelectorAll('.input-fields');
inputFields.forEach((trigger) => {
  trigger.addEventListener('keyup', () => {
    let nemail = email.value;
    let nname = txtname.value;
    let ncomment = comment.value;
    if (trigger.attributes.id.value === 'email') {
      nemail = trigger.value;
    }

    if (trigger.attributes.id.value === 'name') {
      nname = trigger.value;
    }

    if (trigger.attributes.id.value === 'text') {
      ncomment = trigger.value;
    }

    const data = {
      email: nemail,
      name: nname,
      comment: ncomment,
    };
    localStorage.setItem('formdata', JSON.stringify(data));
  });
});

function storeToLocalStorage() {
  const data = {
    email: email.value,
    name: txtname.value,
    comment: comment.value,
  };
  localStorage.setItem('formdata', JSON.stringify(data));
}

submitbtn.onclick = function () {
  if (emailCheckLowerCase(email.value) === true) {
    myform.submit();
    storeToLocalStorage();
  }
};

function getLocalStorageData() {
  const data = JSON.parse(localStorage.getItem('formdata'));
  console.log(data);
  email.value = data.email;
  txtname.value = data.name;
  comment.value = data.comment;
}
// to refill the the text areas

if (localStorage.getItem('formdata') != null) {
  getLocalStorageData();
}
