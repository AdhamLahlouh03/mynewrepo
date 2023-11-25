// your code
  function validatePhoneNumber(phoneNum) {
    const phoneNumber = /^05(99|97|98|69|68)\d{6}$/;

    if (phoneNumber.test(phoneNum)) {
      return null; 
    } else {
      return "Invalid phone number";
    }
  }

  function RandomPassword() {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
    let password = '';
    for (let i = 0; i < 14; i++) {
      const random = Math.floor(Math.random() * charset.length);
      password += charset.charAt(random);
    }
    return password;
  }

  function validatePassword(password) {
    const capitallatter = /[A-Z]/;
    const smalllatter = /[a-z]/;
    const number = /[0-9]/;
    const underscore = /_/;

    const isLengthValid = password.length >= 8 && password.length <= 16;
    const hasCapital = capitallatter.test(password);
    const hasSmall = smalllatter.test(password);
    const hasNumber = number.test(password);
    const hasUnderscore = underscore.test(password);

    if (isLengthValid && hasCapital && hasSmall && hasNumber && hasUnderscore) {
      return  null;
    } else {
      return "Password must contain capital letters, small letters, numbers, and underscore `_` and have a length between 8 and 16 characters.";
    }
  }

  function validateDateOfBirth(dob) {
    const currentDate = new Date();
    const inputDate = new Date(dob);
    const age = currentDate.getFullYear() - inputDate.getFullYear();

    if (age >= 18) {
      return null;
    } else {
      return "You must be 18 years old or older to sign up.";
    }
  }

  document.getElementById("gen-pass").addEventListener("click", function () {
    const passwordField = document.getElementById("user-pass");
    const newPassword = RandomPassword();
    passwordField.value = newPassword;
  });

  document.getElementById("register-user").addEventListener("click", function () {
    const phoneField = document.getElementById("user-phone");
    const passwordField = document.getElementById("user-pass");
    const dobField = document.getElementById("user-dob");

    const phoneError = document.querySelector(".form-field:nth-child(1) .error-msg");
    const passwordError = document.querySelector(".form-field:nth-child(2) .error-msg");
    const dobError = document.querySelector(".form-field:nth-child(3) .error-msg");

    phoneError.textContent = validatePhoneNumber(phoneField.value) || '';
    passwordError.textContent = validatePassword(passwordField.value) || '';
    dobError.textContent = validateDateOfBirth(dobField.value) || '';

    if (!phoneError.textContent && !passwordError.textContent && !dobError.textContent) {
      alert("Successful");
    }
  });

  const formInputs = document.querySelectorAll(".form-field input");
  formInputs.forEach(input => {
    input.addEventListener("input", function () {
      const errorId = this.id + "-error";
      document.querySelector("." + errorId).textContent = '';
    });
  });
