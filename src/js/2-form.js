const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const email = form.querySelector('input');
const textarea = form.querySelector('textarea');
populateTextArea();

form.addEventListener('input', onText);

function onText(event) {
  formData.email = email.value;
  formData.message = textarea.value;
  console.log(formData);

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateTextArea() {
  const message = localStorage.getItem('feedback-form-state');

  if (message) {
    const messageParse = JSON.parse(message);
    formData.email = messageParse.email;
    formData.message = messageParse.message;

    email.value = messageParse.email;
    textarea.value = messageParse.message;
  }
}

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();

  const elements = event.target;
  if (
    elements.email.value.trim() === '' ||
    elements.message.value.trim() === ''
  ) {
    return alert('Fill please all fields');
  }
  console.log(formData);

  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
}
