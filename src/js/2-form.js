const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const email = form.querySelector('input');
const textarea = form.querySelector('textarea');

form.addEventListener('input', onText);

populateTextArea();

function onText(event) {
  const message = event.target;
  formData.email = message.form[0].value;
  formData.message = message.form[1].value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateTextArea() {
  const message = localStorage.getItem('feedback-form-state');
  const messageParse = JSON.parse(message);

  if (message) {
    email.value = messageParse.email;
    textarea.value = messageParse.message;
  }
}

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();

  const elements = event.target;
  if (elements[0].value.trim() === '' && elements[1].value.trim() === '') {
    return alert('Fill please all fields');
  }
  console.log(formData);

  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
