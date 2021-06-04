import {useState,useEffect} from 'react'
import validateInfo from './validation'

const useForm = (callback ,validateInfo) => {
    const [values, setValues]= useState({
        username: '',
        email: '',
        password: '',
        password2: ''
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
        setErrors(validateInfo(values));
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

