// Create the array e prompt
const emailList = ['mario@gmail.com', 'giovanni@gmail.com', 'paola@gmail.com'];
const emailSearch = prompt('write email here');

// access to the array
let access = false;

// for generate our email list loop from 0 to 3
for (let i = 0; i < emailList.length; i++ ) {
    const emailCheck = emailList[i];

// give the access to the mail in the prompt
    if (emailCheck == emailSearch) {
        access = true;
    }
};

// Display the result on the document
const myMail = document.getElementById('myMail');
// access = false/true <-- boolean value - 'if' check the status's access (if=true else=false)
if (access) {
    myMail.textContent =  `Access granted.`;
} else {
    myMail.textContent =  `Access denied.`;
}
