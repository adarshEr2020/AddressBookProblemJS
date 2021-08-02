/**
 * Ability to ensure Valid Contacts are added...
 *   - First Name and Last Name should start with Capital and Minimum 3 Characters
     - Address, City and State should also have minimum 4 characters
     - Zip, Phone and Email should be valid as done in the Pattern Exercise
     - Throw Error if the RegEx test fails
 * @author: Adarsh Prajapati
 * @since: 02.08.2021
 */

//importing another class file to the class file
const PersonInfo = require('./PersonInfoData.js'); 
const prompt = require('prompt-sync')();

//Ability to add user-defined values to the PersonInfoData
try{
    let personInfo = new PersonInfo();
    personInfo.firstName = prompt("Enter First Name : "); 
    personInfo.lastName = prompt("Enter Last Name : "); 
    personInfo.address = prompt("Enter Address : "); 
    personInfo.city = prompt("Enter City : "); 
    personInfo.state = prompt("Enter State : "); 
    personInfo.zip = prompt("Enter Zip : "); 
    personInfo.phoneNumber = prompt("Enter Phone Number : "); 
    personInfo.email = prompt("Enter Email : "); 
    console.log(personInfo.toString());
} catch(e) {
    console.error(e);
}
