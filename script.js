let form=document.querySelector("form");
let error=document.querySelector(".error");
let finalError ="";
let button =document.querySelector("button");



form.addEventListener('submit', function(event) {
    event.preventDefault();    
    checkTextInput('input[name="user"]', 'Имя');
    checkTextInput('input[name="email"]', 'Почта');
    let checkbox=document.querySelector('input[name="checkbox"]');   
    if (!checkbox.checked){
        finalError+=`Заполните поле checkbox <br>`;
    }    
    
    let select = document.querySelector("select");
    if (select.value=="man"){
        document.body.style.background = 'url(https://catherineasquithgallery.com/uploads/posts/2021-02/1613238683_1-p-fon-v-sinikh-tonakh-1.jpg)';
    }
    else if (select.value=="woman"){
        document.body.style.background = 'url(https://static-cse.canva.com/blob/572626/1.magebyRodionKutsaevviaUnsplash.jpg)';

    }
    else {
        document.body.style.background='url (https://img.freepik.com/premium-vector/brick-wall-with-spot-lights-wallpaper_23-2148653943.jpg?w=2000)';
    }
    
    error.innerHTML=finalError;

    button.onclick=function(){
        let userName=document.querySelector(".username");
        if (finalError ==""){    
            alert(`${userName.value} , добро пожаловать! `)
            }
            else{
                
            }
        }

});

function checkTextInput(selector, inputName){    
    let input=document.querySelector(selector);
        if (input.value.length>0){
       
    }
    else{
        finalError+=`Заполните поле ${inputName} <br>`;
    }
}

