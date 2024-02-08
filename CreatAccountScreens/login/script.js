// for the loading screen
const loadScreen = document.getElementById('load');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        loadScreen.classList.add('load-display');
    }, 1000);
});

// for the password show and hide
const showPwd = document.getElementById('eye');
const pwd = document.getElementById('pwd');

showPwd.addEventListener('click', () => {
    if(pwd.type == 'password'){
        pwd.type = 'text'
    }else{
        pwd.type = 'password';
    }
})

