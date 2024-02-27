// validates the fields
function validate() {
   // get all of the input and field elements - very brute forced maybe writing if statements would be easier
   const inputs = document.getElementsByTagName('input');
   const fields = document.getElementsByTagName('label');
   
   // loop through -1 because last element of both we don't need to check
   for (let i = 0; i < inputs.length-1 && i < fields.length-1; i++) {
      if(inputs[i].value == ''){
         let fieldName = fields[i].textContent;
         inputs[i].focus();
         alert(`You must enter ${fieldName.substring(0, fieldName.length-1).toLowerCase()}`);
         return false;
      }
   }

   // checking the comment text field
   const textBox = document.getElementById('comments').value;
   if(textBox == 'Please enter your comments'){
      alert(`You must enter comments`);
      textBox.focus()
      return false;
   }

   // submitted the form - return true
   alert("form submitted")
   return true;
}

// constructs firstname lastname is nickname
function constructName(){
   // grab all values 
   let firstName = document.getElementById('firstName');
   let lastName = document.getElementById('lastName');
   let pseudonym = document.getElementById('pseudonym');

   // conditional checking
   if(firstName.value == ''){
      alert("You need to fill out a first name");
      firstName.focus();
   } else if(lastName.value == ''){
      alert("You need to fill out a last name");
      lastName.focus();
   } else if(pseudonym.value == '') {
      alert("You need to fill out a nickname");
      pseudonym.focus();
   } else {
      alert(`${firstName} ${lastName} is ${pseudonym}`);
   }  
}

// if there is no comments, then remove the comment when the user focuses on the textfield
function removeDefaultComment(comment){
   if(comment.value == 'Please enter your comments') {
      comment.value = '';
   }
}

// if the user made no changes, add the default comment back
function addDefaultComment(comment){
   if(comment.value == '') {
      comment.value = 'Please enter your comments'
   }
}

document.getElementById("firstName").focus();

