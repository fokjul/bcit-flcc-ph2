import './ButtonIcon.scss'

const ButtonIcon = ({icon, handleBtnClick, id}) => {
    return (
        <div className='btn-icon' onClick={handleBtnClick} id={id}>
            <img src={icon} alt='copy link' className='btn-icon__img'/>
        </div>
      )
}

export default ButtonIcon
