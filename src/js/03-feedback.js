import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form  textarea'),
  input: document.querySelector('.feedback-form  input'),
};

refs.form.addEventListener('submit', onFormSubmit);


const formData = {}
const onFormInput = (e) => { 
   formData[e.target.name] = e.target.value
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  
}

refs.form.addEventListener('input', throttle(onFormInput, 500));
 


 function populateTextarea() {

  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const parsed=JSON.parse(savedMessage)
  if (parsed&&parsed.message) {
    refs.textarea.value = parsed.message;
  }
    if (parsed&&parsed.email) {
    refs.input.value = parsed.email;
  }
}
 populateTextarea();


function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(formData);
    console.log('Отправляем форму');
    evt.currentTarget.reset();
    
  localStorage.removeItem(STORAGE_KEY);
}

