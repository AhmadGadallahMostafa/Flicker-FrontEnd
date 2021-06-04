import {useState,useEffect} from 'react'
import validateInfoLogin from './validation'

const useForm = (callback ,validateInfoLogin) => {
    const [values, setValues]= useState({
        email: '',
        password: ''
    })
    const [errors,setErrors] = useState({})
    const [isSubmit,setIsSubmit] = useState(false)
    const handleChange = e => {
        const {name , value } = e.target
        setValues({
            ...values,
            [name] : value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validateInfoLogin(values));
        setIsSubmit(true);
    };
    useEffect( () => {
        if(Object.keys(errors).length ===0 && isSubmit){
            callback();
        }
    },[errors])
    return{handleChange , values , handleSubmit,errors};
}
export default useForm;

