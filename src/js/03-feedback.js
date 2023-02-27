
import throttle from 'lodash.throttle';


const STORAGE_KEY = "feedback-form-state";

let formDate = {};

const refs = {
    form:  document.querySelector('.feedback-form') , 
    input: document.querySelector('.feedback-form  input'),
    textarea: document.querySelector('.feedback-form textarea')

    }




refs.form.addEventListener('submit' , onFormSubmit);
refs.form.addEventListener('input' , throttle(onInput, 500))

populateTextarea()



    


function onFormSubmit(e) {
    e.preventDefault()
    console.log('Email:' , e.target.email.value, 'Message:' ,e.target.message.value,)
    e.currentTarget.reset()
    localStorage.removeItem("STORAGE_KEY")

}


function onInput(e) {
        const message = refs.textarea.value.trim()
        const email = refs.input.value.trim()

        formDate[e.target.name] = e.target.value;
        formDate = {message: message, email: email};

        localStorage.setItem(STORAGE_KEY, JSON.stringify(formDate));


        console.log('formdate', formDate)



            // console.log(e.target.name);
            // console.log(e.target.value);

        }





        function populateTextarea() {
            let data = localStorage.getItem(STORAGE_KEY);
            if (!data) return;
            formDate = JSON.parse(data);
              refs.textarea.value = formDate.message ?? '' ;
              refs.input.value = formDate.email ?? '';
      
          
          }

