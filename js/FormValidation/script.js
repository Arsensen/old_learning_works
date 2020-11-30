'use strict';

// Код валидации формы

function validateForm(obj){
    let form = document.getElementById(obj.formId);
    //установка прослушки событий
    form.addEventListener('blur', () => fieldTester(event), true);
    form.addEventListener('focus', () => classRemover(event), true);
    form.addEventListener('submit', function(event) { document.querySelector('#'+ obj.formId + ' button').focus(); event.preventDefault()}, true);
    
    //проверка валидаторов, чтобы передать в обработку дальше
    function fieldTester(event){ 
        if (event.target.dataset.validator == 'letters'){letterValid(event.target)}
        else if(event.target.dataset.validator == 'number'){numberValid(event.target)}
        else if(event.target.dataset.validator == 'regexp'){regexpValid(event.target)} 
    }
    
    //проверка формы
    function letterValid(properInput){
        let regEx = new RegExp('^[a-zа-яё]+$', 'i');
        if(!regEx.test(properInput.value)){classAdder(properInput)}
    }

    function regexpValid(properInput){
        let regEx = new RegExp(properInput.dataset.validatorPattern);
        if(properInput.value ==""){properInput.classList.remove(obj.inputErrorClass)}
        else if(!regEx.test(properInput.value)){classAdder(properInput)}
    }

    function numberValid(properInput){
        if(isNaN(properInput.value)){classAdder(properInput); return;}
        if(properInput.value ==""){properInput.classList.remove(obj.inputErrorClass); return}
        let min = +properInput.dataset.validatorMin;
        let max = +properInput.dataset.validatorMax;
        if(isNaN(min) && isNaN(max)){return;}
        if(!((properInput.value >= min) && (properInput.value <= max))){return classAdder(properInput);}
    }

    //добавление класса Error
    function classAdder(prop){
        prop.classList.add(obj.inputErrorClass)
    }
    
    //удаление класса, работает только с focus
    function classRemover(event){
        if(event.target.tagName == 'BUTTON'){savior(event); return}
        event.target.classList.remove(obj.inputErrorClass);
    }
    
    // функция для кнопки СОХРАНИТЬ: проверяет на наличие класса invalid и на наличие пустых полей
    function savior(event){
        form.classList.remove(obj.formInvalidClass);
        Array.from(form).forEach(function (value){
            if(value.dataset.hasOwnProperty('required') && (value.value == "")) {
                form.classList.add(obj.formInvalidClass); 
                value.classList.add(obj.inputErrorClass); 
                return;
            }
            else if(value.classList.contains(obj.inputErrorClass)){
                form.classList.remove(obj.formValidClass);
                form.classList.add(obj.formInvalidClass); 
                return;
            }
        })

        if(form.classList.contains(obj.formInvalidClass)){return}
        form.classList.add(obj.formValidClass);
    }
    
}