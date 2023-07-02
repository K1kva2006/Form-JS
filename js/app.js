const modalWrapper = document.getElementById("modalWrapper");
const logInBtn = document.getElementById("logInBtn");
const emailInput = document.getElementById("email");
const passwordlInput = document.getElementById("password");
const submiteButton = document.getElementById("submiteButton");
const errorBox = document.getElementById("errorBox");

const p = document.createElement("p");
p.textContent = "Error (Email / Password is incorrect)";
p.classList.add("error");

const b = document.createElement("b")
b.textContent = "Succes!"
b.classList.add("succes")

let display = false;

logInBtn.onclick = () => {
    if (!display) {
        modalWrapper.style.display = "flex";
        display = true;
    } else {
        modalWrapper.style.display = "none";
        display = false;
        passwordlInput.value = "";
        emailInput.value = "";
        passwordlInput.style.marginBottom = "20px";
        emailInput.setAttribute("placeholder", "Input email ");
        passwordlInput.setAttribute("placeholder", "Input password");
        p.remove();
        b.remove()
    }
};
exitButton.onclick = () => {
    modalWrapper.style.display = "none";
    display = false;
    passwordlInput.value = "";
    emailInput.value = "";
    passwordlInput.style.marginBottom = "20px";
    emailInput.setAttribute("placeholder", "Input email ");
    passwordlInput.setAttribute("placeholder", "Input password");
    p.remove();
    b.remove()
};

submiteButton.onclick = () => {
    if (passwordlInput.value.length < 6 || emailInput.value.length < 8 ) {
        submiteButton.setAttribute("type", "button");

        emailInput.setAttribute(
            "placeholder",
            "Must contain @ min. 8 characters long "
        );
        passwordlInput.setAttribute("placeholder", "min. 6 characters long");

        errorBox.appendChild(p);
        passwordlInput.style.marginBottom = "0";

        b.remove()

    } else {
        submiteButton.setAttribute("type", "submite");

        errorBox.appendChild(b)
        passwordlInput.style.marginBottom = "0";

        p.remove()
    }
};
