 async function validateInfo(values){
  let errors ={}
  

  if(!values.username.trim()){
      errors.username = "Username is a required field "
  }

  if(!values.email){
      errors.email = "Email is a reqired field"
  }else if(!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.email)){
      errors.email = "Invalid Email Address"
  }
  if(!values.password){
      errors.password ="Password is a required field"
  }else if( !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(values.password)){
      errors.password = "The Password must be at least 8 characters(lowercase uppercase and a number)"
  }

  if(!values.password2){
      errors.password2="Password confiramtion in required";
  } else if(values.password !== values.password2){
      errors.password2  = "The Passwords does not match";
  }

return errors;
}

  export default validateInfo
  
  
  
  
