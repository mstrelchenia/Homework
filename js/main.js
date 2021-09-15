window.onload = function () {
    let allInputs = document.getElementsByTagName("input");
    let name = allInputs[0];
//Второе задание
    name.onkeypress = (event) => {
        let resultName = event.key;
        if (resultName === '0' || resultName === '1' || resultName === '2' || resultName === '3' || resultName === '4'
            || resultName === '5' || resultName === '6' || resultName === '7' || resultName === '8' || resultName === '9') {
            event.preventDefault();
        }
    }

//Третье задание
    let userName = allInputs[1];
    userName.onkeypress = (event) => {
        let resultUserName = event.key;
        if (resultUserName === '.' || resultUserName === ',') {
            event.preventDefault()
        }
    }

//Четвертое задание
    let checkBox = document.getElementById('privacyCheckbox');
    checkBox.addEventListener('click', () => {
        if (checkBox.checked === true) {
            console.log('Согласен');
        } else {
            console.log('Не согласен');
        }
    });


// Пятое задание. Знаю что намудрила, но другое на ум не приходит:)
    let form = document.getElementById('form');
    let button = document.getElementsByTagName('button')[0];
    button.onclick = (event) => {
        let success=0;
        let count=0;

        for (let i = 0; i < allInputs.length - 1; i++) {
            if (allInputs[i].value === '') {
                alert('Заполните поле ' + allInputs[i].previousElementSibling.innerText);
                event.preventDefault();
            }else{
                count+=1;
            }
        }
        if (count===5){
            success+=1;
        }
        if (allInputs[3].value !== allInputs[4].value) {
            alert('Проверьте пароль. Пароли не совпадают')
            event.preventDefault();
        }else{
            success+=1;
        }
        if (checkBox.checked === false) {
            alert('Вы должны принять наши условия')
            event.preventDefault();
        }else {
            success+=1;
        }
        if(success===3){
            alert('OKAY');
        }
    }



// Шестое задание
    let account = document.getElementById('haveAccount');
    let title = document.getElementById('title');
    let allInfoAreas = document.getElementsByClassName('formItem');
    account.onclick = () => {
        form.removeChild(allInfoAreas[0]);
        form.removeChild(allInfoAreas[1]);
        form.removeChild(allInfoAreas[2]);
        form.removeChild(document.getElementById('haveAccount'));
        button.innerText = 'Sign In';
        title.innerText = 'Log in to the system'


    }
}