export const validateField = (objectToValidate)=>{
    for(let e in objectToValidate){
        
      if(objectToValidate[e] ==='' ){
       return false;
      }
    }
    return true
  }
