export const validate = (data,type) => {
    const errors = {};

    if (!data.email){
        errors.email = "email is required !"
    }else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "invalid email address !"
    }else{
        delete errors.email ;
    }

    if (!data.password){
        errors.password = "you need to set a password !"
    }else if(data.password.length<6){
        errors.password = "your password needs to be at least 6 characters !"
    }else{
        delete errors.password ;
    }

    if(type==="SignUp"){
        if (!data.name.trim()){
            errors.name="name is required !"
        }else{
            delete errors.name ;
        }
    
        if (!data.confirmPassword){
            errors.confirmPassword = "you need to confirm your password !"
        }else if(data.confirmPassword !== data.password){
            errors.confirmPassword = "passwords do not match !"
        }else{
            delete errors.confirmPassword;
        }
    
        if(!data.isAccepted){
            errors.isAccepted= "you must accept our terms and regulations !"
        }else{
            delete errors.isAccepted;
        }
    }
    return errors;
}