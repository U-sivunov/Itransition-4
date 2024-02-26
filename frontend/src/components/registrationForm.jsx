import React from 'react';

function submit(event) {
    event.preventDefault();
    const data = event.target.elements;
    if (passIsSame(data)) {
        fetch('/login', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify([data.username.value, data.confirm.value])
        })
        .then((res) => {
            res.json().then((j) => {
                console.log(j)
            })
        })
    } else {

    }

}

function passIsSame(data) {
    return data.password.value === data.confirm.value;
}

const RegistrationForm = () => {
    return (
        <div>
            <form onSubmit={submit}>
                <label>
                    username
                </label>
                <input type='text' name='username' required/>
                <label>
                    password
                </label>
                <input type='password' name='password' required/>
                <label>
                    repeat password
                </label>
                <input type='password' name='confirm' required/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default RegistrationForm;