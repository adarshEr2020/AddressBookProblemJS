/**
 * Ability to create a Address Book Contact with first and last names, address, city, state, zip, phone number and email.
 * 
 * @author: Adarsh Prajapati
 * @since: 02.08.2021
 */

//importing another class file to the class file
const PersonInfo = require('./PersonInfoData.js'); 
const prompt = require('prompt-sync')();

//Ability to add values to the PersonInfoData
var personInfo = new PersonInfo("Adarsh", "Prajapati", "MP", "sat", "MP", "485881", "8827138996", "ap@gmail.com");
console.log(personInfo.toString());

// another way to add value
var personInfo = new PersonInfo();

personInfo.firstName = "Daxil";
personInfo.lastName = "Saxena";
personInfo.address = "Gaziabad";
personInfo.city = "Gaziabad";
personInfo.state = "UP";
personInfo.zip = "477333";
personInfo.phoneNumber = "9077484576";
personInfo.email = "ds@gmail.com";
console.log(personInfo.toString());

//Ability to add user-defined values to the PersonInfoData
personInfo.firstName = prompt("Enter First Name : "); 
personInfo.lastName = prompt("Enter Last Name : "); 
personInfo.address = prompt("Enter Address : "); 
personInfo.city = prompt("Enter City : "); 
personInfo.state = prompt("Enter State : "); 
personInfo.zip = prompt("Enter Zip : "); 
personInfo.phoneNumber = prompt("Enter Phone Number : "); 
personInfo.email = prompt("Enter Email : "); 
console.log(personInfo.toString());