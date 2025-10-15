import './PopupTip.scss';
import ButtonIcon from '../../Atoms/Buttons/ButtonIcon/ButtonIcon';
import { xmark } from '../../../assets/icons';

const PopupTip = ({title, children, setIsPopupTipOpen}) => {

 const handleClosePopupTip = () => {
    setIsPopupTipOpen(false)
 }

  return (
   <div className='popupTip'>
        <div className='popupTip__header'>
                    <p className='popupTip__title'>{title}</p>
                    <div className='popupTip__btnIcon'>
                        <ButtonIcon 
                        icon={xmark}
                        handleBtnClick={handleClosePopupTip}
                        />
                    </div>
                    
                </div>
        <div className='popupTip__content'>
            {children}
        </div>
    </div>  
     )
  
}

export default PopupTip