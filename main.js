const x = document.querySelector('#playAudio');
const second = document.querySelector('.second-page');
const third = document.querySelector('.third-page');
const fullName = document.myForm.Name;
const Myform = document.myForm;
const regex = /^[a-zA-z]+([\s][a-zA-Z]+)+$/;
const regex2 = /^[a-zA-Z]+$/;
const regex3 = /^[a-zA-Z ]+$/;
const regex4 = /^\s*$/;
const em = document.querySelector('.error');

document.addEventListener('DOMContentLoaded', () => {
    document.myForm.Name.focus();
    Myform.onsubmit = () => {
        if (fullName.value == "") {
            em.innerHTML = 'Please provide your fullname';
            document.myForm.Name.focus();
            return false;
        } else if (fullName.value.length === 1) {
            em.innerHTML = 'Character must be more than one';
            document.myForm.Name.focus();
            return false;
        } else if (fullName.value.match(regex4)) {
            em.innerHTML = `Input can't be empty`;
            document.myForm.Name.focus();
            return false;
        } else if (fullName.value.match(regex) || fullName.value.match(regex2) || fullName.value.match(regex3)) {
            let fname = fullName.value.trim();
            // Set Item
            localStorage.setItem("fullname", fname);
            document.location = "message.html";
            return true;
        } else {
            em.innerHTML = "Only alphabetical characters are allowed";
            document.myForm.Name.focus();
            return false;
        }
    }
});

function enableAutoplay() {
    second.style.display = 'none';
    x.autoplay = true;
    x.load();
    third.style.display = 'block';
    //  Retrieve
    let display = document.querySelector('.heading');
    let data = localStorage.getItem("fullname");
    display.innerHTML = `Hurry!!! It's Your Birthday. Happy Birthday to You` + ' ' + data;
    localStorage.clear();
    // load cake api
    // const arg = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '6cdc0eeee9mshe591c1da6fc2ecfp16c262jsne17784cc5d88',
    //         'X-RapidAPI-Host': 'birthday-cake-with-name-generator.p.rapidapi.com'
    //     }
    // };

    // fetch('https://birthday-cake-with-name-generator.p.rapidapi.comendpoint/', arg)
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.error(err));
}

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '6cdc0eeee9mshe591c1da6fc2ecfp16c262jsne17784cc5d88',
//         'X-RapidAPI-Host': 'birthday-cake-with-name-generator.p.rapidapi.com'
//     }
// };

// fetch('https://birthday-cake-with-name-generator.p.rapidapi.comendpoint/', options)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err));