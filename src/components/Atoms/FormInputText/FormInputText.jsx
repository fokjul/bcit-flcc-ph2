import './FormInputText.scss';

const FormInputText = ({label, name, id, placeholder = '', required = false, type = 'text', disabled = false, value}) => {
  return (
     <div className="formField__container">
        <lable htmlFor={name} className={`formField__label ${required && `formField__label--required`}`}>{label}</lable>
        <input 
            type={type} 
            name={name} 
            id={id} 
            placeholder = {placeholder} 
            className="formField__input" 
            disabled={disabled}
            value = {value}
            />
     </div>
  )
}

export default FormInputText