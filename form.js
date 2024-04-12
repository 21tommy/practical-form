function validate(){
    let FirstName = document.getElementById('fname');
    let SecondName = document.getElementById('Sname');
    let LastName = document.getElementById('Lname');
    let Email = document.getElementById('Mail');
    let phoneNumber = document.getElementById('Number');

    let errormessage1 = document.getElementById('message1');
    let errormessage2 = document.getElementById('message2');
    let errormessage3 = document.getElementById('message3');
    let errormessage4 = document.getElementById('message4');
    let errormessage5 = document.getElementById('message5');

    const final = document.getElementById('thanks');
    const form = document.getElementById('all');

    let isValid = true;

    if (FirstName.value === '') {
        errormessage1.style.display = 'block';
        isValid = false;
    } else {
        errormessage1.style.display = 'none'
    }

    if (SecondName.value === '') {
        errormessage2.style.display = 'block';
        isValid = false;
    } else {
        errormessage2.style.display = 'none';
    }

    if (LastName.value === '') {
        errormessage3.style.display = 'block';
        isValid = false;
    } else {
        errormessage3.style.display = 'none';
    }

    if (Email.value === '') {
        errormessage4.style.display = 'block';
        isValid = false;
    } else {
        errormessage4.style.display = 'none';
    }

if (phoneNumber.value === '') {
    errormessage5.style.display = 'block';
    isValid = false;
} else {
    errormessage5.style.display = 'none';
}
if(isValid){
    final.style.display = 'block';
    form.style.display = 'none';
}
}