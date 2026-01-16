import './FormAttachmentField.scss'

const FormAttachmentField = ({label, name, id, required = false, type, disabled = false}) => {
  return (
     <div className="formField__container">
        <lable htmlFor={name} className={`formField__label ${required && `formField__label--required`}`}>{label}</lable>
        <input 
            type={type} 
            name={name} 
            id={id} 
            className="formField__file" 
            disabled={disabled}
            />
         <p className='formField__caption'>Accepted file types: pdf, doc, docx, Max. file size: 100 MB.</p>
     </div>
  )
}

export default FormAttachmentField