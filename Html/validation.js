// Add an event listener to the password input field
document.querySelector('input[name="password"]').addEventListener('input', function() {
    var strength = checkPasswordStrength(this.value);
    var strengthMessage = '';
    if (strength >= 3) {
      this.classList.add('strong');
      this.classList.remove('medium');
      this.classList.remove('weak');
      strengthMessage = 'Strong';
    } else if (strength == 2) {
      this.classList.add('medium');
      this.classList.remove('strong');
      this.classList.remove('weak');
      strengthMessage = 'Medium';
    } else {
      this.classList.add('weak');
      this.classList.remove('strong');
      this.classList.remove('medium');
      strengthMessage = 'Weak';
    }
    document.querySelector('#passwordStrength').textContent = strengthMessage;
  });
  function validatePhoneNumber(phoneNumber) {
    var phoneRegex = /^(\d{3}[-\.\s]??|\(\d{3}\)\s??|\d{3})(\d{3}[-\.\s]??|\d{4})(\d{4})$/;
    return phoneRegex.test(phoneNumber);
  }
  
  // Add an event listener to the phone number input field
  document.querySelector('input[name="phone"]').addEventListener('blur', function() {
    if (!validatePhoneNumber(this.value)) {
      alert('Please enter a valid phone number in the format XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX, or XXXXX XXXXX');
    }
  });












// function ValidateEmail(input) {

//     var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
//     if (input.value.match(validRegex)) {
  
//       alert("Valid email address!");
  
//       document.form1.text1.focus();
  
//       return true;
  
//     } else {
  
//       alert("Invalid email address!");
  
//       document.form1.text1.focus();
  
//       return false;
  
//     }
  
//   }

//   function validatePassword(password) {
//     // Regular expressions for password criteria
//     var uppercaseRegex = /[A-Z]/;
//     var lowercaseRegex = /[a-z]/;
//     var numberRegex = /[0-9]/;

//     // Check if password meets minimum length and contains required character types
//     var isLengthValid = password.length >= 8;
//     var hasUppercase = uppercaseRegex.test(password);
//     var hasLowercase = lowercaseRegex.test(password);
//     var hasNumber = numberRegex.test(password);

//     // Calculate password strength
//     var strength = 0;
//     if (isLengthValid) strength++;
//     if (hasUppercase) strength++;
//     if (hasLowercase) strength++;
//     if (hasNumber) strength++;

//     // Indicate password strength using colors
//     if (strength >= 4) {
//         return "strong";
//     } else if (strength >= 3) {
//         return "medium";
//     } else {
//         return "weak";
//     }
// }

// function validateForm() {
//     var email = document.getElementById("email").value;
//     var phone = document.getElementById("phone").value;
//     var password = document.getElementById("password").value;

//     // Email validation
//     if (!ValidateEmail(email)) {
//         alert("Invalid email address!");
//         return false;
//     }

//      // Email validation
//      if (!validatePassword(password)) {
//         alert("Invalid password!");
//         return false;
//     }

   


//     return true; // Form submission allowed if all validations pass
// }