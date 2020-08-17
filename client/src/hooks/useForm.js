// write your custom hook here to control your checkout form
import {useState} from 'react'


export const useForm = (initialValue) => {
    const [value, setValue] = useState(initialValue)
          console.log(value)
    const handleChanges = e => {

      setValue({
          ...value,
          [e.target.name]: e.target.value
      });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setValue({
            ...value,
        showSuccessMessage:true    
        })
        ;

      };
    return [value,handleSubmit, handleChanges];
  };