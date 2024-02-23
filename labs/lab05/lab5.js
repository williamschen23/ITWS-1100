// validates the fields
function validate() {
   // get all of the input and field elements - very brute forced maybe writing if statements would be easier
   const inputs = document.getElementsByTagName('input');
   const fields = document.getElementsByTagName('label');
   
   // loop through -1 because last element of both we don't need to check
   for (let i = 0; i < inputs.length-1 && i < fields.length-1; i++) {
      if(inputs[i].value == ''){
         let fieldName = fields[i].textContent;
         alert(`You must enter ${fieldName.substring(0, fieldName.length-1).toLowerCase()}`);
         return false;
      }
   }

   // checking the comment text field
   if((document.getElementById('comments').value == 'Please enter your comments')){
      alert(`You must enter comments`);
      return false;
   }

   // submitted the form - return true
   alert("form submitted")
   return true;
}

// constructs firstname lastname is nickname
function constructName(){
   // grab all values 
   let firstName = document.getElementById('firstName').value;
   let lastName = document.getElementById('lastName').value;
   let pseudonym = document.getElementById('pseudonym').value;

   // conditional checking
   if(firstName == ''){
      alert("You need to fill out a first name");
   } else if(lastName == ''){
      alert("You need to fill out a last name");
   } else if(pseudonym == '') {
      alert("You need to fill out a nickname");
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

