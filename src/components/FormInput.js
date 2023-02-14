import React from 'react'
import './FormInput.css'

const FormInput = ({label, value, required = false}) => {

    return <div className='formInput'>
        <label className='formLabel'>{label}</label>
        {required ? <span className='requiredIndicator'>*</span> : null}
        <span className='formValue'>{value}</span>
    </div>
}

export default FormInput