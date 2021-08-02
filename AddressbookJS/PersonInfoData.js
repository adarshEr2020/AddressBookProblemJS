class PersonInfo {
    //property
    firstName =""; lastName; address; city; state; zip; phoneNumber; email;

    //constructor
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7]
    }

    /* setter and getter method
    * validating the user inputs using regular expression
    */
    set firstName(firstName) {
        let nameRegex = RegEx('^[A-Z{1}][a-z]{3,}$');
        if(nameRegex.test(firstName)) {
            this.firstName = firstName;
        } else {
            throw "First Name is Incorrect";
        }       
    }

    get firstName() {
        return this.firstName;
    }

    set lastName(lastName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRegex,testI(lastName)) {
            this.lastName = lastName;
        } else {
            throw "Last Name is Incorrect";
        }
    }

    get lastName() {
        return this.lastName
    }

    set address(address) {
        let nameRegex = RegExp('^([0-9A-Za-z\\s,-\\\\.]{4,})$')
        if(nameRegex.test(address)) {
            this.address = address;
        } else{
            throw "Address is Incorrect";
        }
      
    }

    get address() {
        return this.address;
    }

    set city(city) {
        let nameRegex = RegExp('^([A-Za-z\\s]{4,})$');
        if(nameRegex.test(city)) {
            this.city = city;
        } else {
            throw "City is Incorrect";
        }
    }

    get city() {
        return this.city;
    }

    set state(state) {
        let nameRegex = RegExp('^([A-Za-z\\s]{4,})$');
        if(nameRegex.test(state))  {
            this.state = state;
        } else{
            throw "state is Incorrect";
        }
    }

    get state() {
        return this.state;
    }

    set zip( zip ) {
        let nameRegex = RegExp('^([0-9]{6})|([0-9]{3}(\\s)[0-9]{3})$');
        if(nameRegex.test(zip)) {
            this.zip = zip;
        } else {
            throw "Zip is Incorrect";
        }
       
    }

    get zip() {
        return this.zip;
    }

    set phoneNumber( phoneNumber ) { 
        let nameRegex = RegExp('^(0|91)?[\\s][0-9]{10}$');
        if(nameRegex.test(phoneNumber)) {
            this.phoneNumber = phoneNumber;
        } else {
            throw "Phone Numbe is Incorrect";
        }
    }

    get phoneNumber() {
        return this.phoneNumber;
    }

    set email( email ) {
        let nameRegex = RegExp();
        if(nameRegex.test(email)){
            this.email = email;
        } else {
            throw "Email is Incorrect";
        }
        
    }

    get email() {
        return this.email;
    }

    // method
    toString() {
        return "firstName ="+this.firstName +", lastName =" +this.lastName +", address =" +this.address +",city = " +this.city +
        ",state = " +this.state + ",zip = " +this.zip +",phoneNumber = " +this.phoneNumber +",email = " +this.email;
    }
}

//exporthing the class file to another class
module.exports = PersonInfo;