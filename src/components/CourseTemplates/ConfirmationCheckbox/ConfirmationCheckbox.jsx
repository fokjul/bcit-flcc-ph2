import './ConfirmationCheckbox.scss';
import { useState } from 'react';
import ButtonIcon from '../../Atoms/Buttons/ButtonIcon/ButtonIcon';
import { question } from '../../../assets/icons';
import PopupTip from '../../GeneralTemplates/PopupTip/PopupTip';
import PopupTipContent from '../../../prototypes/Content /PopupTipContent/PopupTipContent';
import TextLink from '../../Navigation/TextLink/TextLink';

const ConfirmationCheckbox = ({isCheckboxChecked, handleCheckboxCheck, setIsModalOpen}) => {
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);
  return (
    <div>
        <div className='confirmationSection'>
            <div>
              <h5 className='offering-details__item-heading'>
            Confirmation
              </h5>
              <p className='confirmationSection__description'>To proceed with registration and add this course to the cart, please confirm:</p>
            </div>
            
            <div className='confirmationSection__checkbox approval-copy'>
            <input 
                type='checkbox' 
                id='departmentalApproval' 
                name='departmentalApproval' 
                value="confirmation"
                checked={isCheckboxChecked.departmentalApproval}
                onChange={handleCheckboxCheck}
                />
            <label htmlFor="readConfirmation">I have received departmental approval.</label>
            <p>No approval yet?</p>
            <TextLink 
              text="Request approval"
              handleClick={() => setIsModalOpen(true)}
            />
              
            <ButtonIcon 
              icon={question}
              id="confirmation-approval-info-icon"
              handleBtnClick={() => setIsConfirmationPopupOpen(prev => !prev)}
            />
            {isConfirmationPopupOpen && (
                <PopupTip
                    title='Why approval is needed?'
                    setIsPopupTipOpen={setIsConfirmationPopupOpen}
                    >
                        <PopupTipContent 
                          content = 'Departmental approval is required to confirm you have completed all prerequisites. If you have not received approval yet, please submit a request above - you will not be able to register without it.'
                        />
                </PopupTip>
            )}
            </div>
            <div className='confirmationSection__checkbox'>
            <input 
                type='checkbox' 
                id='confirmImportantInfo' 
                name='confirmImportantInfo' 
                value="confirmation"
                checked={isCheckboxChecked.confirmImportantInfo}
                onChange={handleCheckboxCheck}
                />
            <label htmlFor="readConfirmation"> I have read and understand the important information above.</label>
            </div>
        </div>
    </div>
  )
}

export default ConfirmationCheckbox