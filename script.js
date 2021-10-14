const form = document.querySelector("form"),
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // 1. Check empty value, empty ok => check valid
  if(eInput.value == "") {
    eField.classList.add("shake", "error");
  } else {
    checkEmail();
  }

  if(pInput.value == "") {
    pField.classList.add("shake", "error");
  } else {
    checkPass();
  }

  setTimeout(() => {
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500)

  eInput.onkeyup = () => {
    checkEmail();
  }

  pInput.onkeyup = () => {
    checkPass();
  }

  // If not include error class in each fields, request submit form
  if(!eField.classList.contains("error") && !pField.classList.contains("error")) {
    window.location.href = "#";
    alert("Form Submitted");
  }
});

/*======== Check Email  ======== */
function checkEmail() {
  let ePattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(!eInput.value.match(ePattern)) {
    eField.classList.add("error");
    let errorTxt = eField.querySelector(".error-text");
    
    (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
  } 
  else {
    eField.classList.remove("error");
  }
}

/*========= Check Pass ==========*/
function checkPass() {
  let pPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  let errorTxt = pField.querySelector(".error-text");
  
  (pInput.value != "") ? errorTxt.innerText = "Enter a valid password" : errorTxt.innerText = "Password can't be blank";

  if (!pInput.value.match(pPattern)) {
    pField.classList.add("error");
  } 
  else {
    pField.classList.remove("error")
  }
}