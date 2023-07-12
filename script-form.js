const formNewAcount = document.getElementById("form");
const username = document.getElementById("username");
const useremail = document.getElementById("useremail");
const userpassword = document.getElementById("userpassword");
const passwordConfirmation = document.getElementById("passwordconfirmation");

formNewAcount.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const useremailValue = useremail.value;
    const userpasswordValue = userpassword.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if(usernameValue === "") {
        setErrorFor(username, "Preenchimento obrigatório");
    } else {
        setSuccessFor(username);
    }

    if(useremailValue === "") {
        setErrorFor(useremail, "Preenchimento obrigatório");
    } else if(!checkEmail(useremailValue)){   //usando regex
        setErrorFor(useremail, "Use email válido");
    } else {
        setSuccessFor(useremail);
    }

    if (userpasswordValue === "") {
        setErrorFor(userpassword, "Preenchimento obrigatório");
    } else if (userpasswordValue.length < 7) { //quantidade caracteres
        setErrorFor(userpassword, "No mínimo 7 caracteres");
    } else {
        setSuccessFor(userpassword);
    }

    if (passwordConfirmationValue === "") {
        setErrorFor(passwordConfirmation, "Confirme a senha");
    } else if (passwordConfirmationValue != userpasswordValue) {
        setErrorFor(passwordConfirmation, "A senha não é a mesma");
    } else {
        setSuccessFor(passwordConfirmation);
    }

    const formControls = form.querySelectorAll(".form-control");
    const formIsValid = [... formControls].every((formControls) => {
        return formControls.className === "form-control success"
    });

    if (formIsValid) {
        console.log("Você concluiu o formulário com sucesso!");
        form.reset();
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //retorna a div pai do input (form-control)
    formControl.className = "form-control error"; //adicionamos o error
    const small = formControl.querySelector("small");
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement; //retorna a div pai do input (form-control)
    formControl.className = "form-control success"; //adicionamos sucesso
    const small = formControl.querySelector("small");
    small.innerText = "";
}

function checkEmail(useremail) {
    return  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        useremail
      );
}