function isValidEmail(email) {
    const pattern = new RegExp("^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$");

    if (pattern.test(phoneNumber)) {
        console.log("email is valid");
        return true;
    } else {
        console.log("email is not valid");
        return false;
    }
}

function isValidPhoneNumber(phoneNumber) {
    const pattern = new RegExp("^\\+[1-9]{1}[0-9]{0,2}-[2-9]{1}[0-9]{2}-[2-9]{1}[0-9]{2}-[0-9]{4}$");
  
    if (pattern.test(phoneNumber)) {
      console.log("Phone number is valid");
      return true;
    } else {
      console.log("Phone number is not valid");
      return false;
    }
}

function isValidDate(date) {
    let dateRegex = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4}$/;

    if (date.match(dateRegex)) {
        let operator = date.split('/');

        let datepart = [];
        if (operator.length > 1) {
            datepart = date.split('/');
        }
        let month = parseInt(datepart[0]);
        let day = parseInt(datepart[1]);
        let year = parseInt(datepart[2]);

        let ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (month == 1 || month > 2) {
            if (day > ListofDays[month - 1]) {
                return false;
            }
        } else if (month == 2) {
            let leapYear = false;
            if ((!(year % 4) && year % 100) || !(year % 400)) leapYear = true;
            if ((leapYear == false) && (day >= 29)) return false;
            else
                if ((leapYear == true) && (day > 29)) {
                    console.log('Invalid date format!');
                    return false;
                }
        }
    } else {
        console.log("Invalid date format!");
        return false;
    }
    console.log("Valid date format");
    return true;
}

function isValidIsraeliID(id) {
	var id = String(id).trim();
	if (id.length > 9 || id.length < 5 || isNaN(id)) return false;

  	id = id.length < 9 ? ("00000000" + id).slice(-9) : id;
  	return Array
            .from(id, Number)
  		    .reduce((counter, digit, i) => {
		        const step = digit * ((i % 2) + 1);
                        return counter + (step > 9 ? step - 9 : step);
    	            }) % 10 === 0;
}