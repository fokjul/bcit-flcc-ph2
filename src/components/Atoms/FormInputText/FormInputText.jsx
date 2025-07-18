import './FormInputText.scss';

const FormInputText = ({label, name, id, placeholder = '', required = false, type = 'text'}) => {
  return (
     <div className="formField__container">
        <lable htmlFor={name} className={`formField__label ${required && `formField__label--required`}`}>{label}</lable>
        <input type={type} name={name} id={id} required={required} placeholder = {placeholder} className="formField__input"/>
     </div>
  )
}

export default FormInputText