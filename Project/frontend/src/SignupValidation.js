

function Validation (values) {
    
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.username ==="") {
        error.username = "Username should not be emplty"
    }

    if(values.first_name ==="") {
        error.first_name = "Firstname should not be emplty"
    }

    if(values.last_name ==="") {
        error.last_name = "Lastname should not be emplty"
    }

    if(values.email ==="") {
        error.email = "Email should not be emplty"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Enter valid email"
    }
    else {
        error.email = ""
    }

    if(values.password ==="") {
        error.password = "Password should not be emplty"
    }
    else if(!password_pattern.test(values.email)) {
        error.password = "Enter valid password"
    }
    else {
        error.password = ""
    }
    return error;
}

export default Validation;