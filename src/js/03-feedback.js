
import throttle from 'lodash.throttle';


const STORAGE_KEY = "feedback-form-state";

let formDate = {};

const refs = {
    form:  document.querySelector('.feedback-form') , 
    textarea: document.querySelector('textarea')
    }




refs.form.addEventListener('submit' , onFormSubmit);
refs.textarea.addEventListener('input' , throttle(onInput, 500)); 
refs.form.addEventListener('input' , e => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    formDate[e.target.name] = e.target.value;
    console.log(formDate);
})

populateTextarea()


function populateTextarea() {
    const savedMessage = localStorage.getItem("STORAGE_KEY")
    if(savedMessage){
        refs.textarea.value = savedMessage
    }
    }
    


function onFormSubmit(e) {
    e.preventDefault()
    console.log('Email:' , e.target.email.value, 'Message:' ,e.target.message.value,)
    e.currentTarget.reset()
    localStorage.removeItem("STORAGE_KEY")

}


function onInput(e) {
        const message = e.target.value
        localStorage.setItem("STORAGE_KEY" , message);
            // console.log(e.target.name);
            // console.log(e.target.value);
            formDate[e.target.name] = e.target.value;
            // console.log(formDate);
        }





