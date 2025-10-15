import './DepartmentalApproval.scss';
import {question} from '../../../assets/icons';
import ButtonIcon from '../../Atoms/Buttons/ButtonIcon/ButtonIcon';
import ButtonIconLarge from '../../Atoms/Buttons/ButtonIconLarge/ButtonIconLarge';
import PopupTip from '../../GeneralTemplates/PopupTip/PopupTip';
import PopupTipContent from '../../../prototypes/Content /PopupTipContent/PopupTipContent';

const DepartmentalApproval = ({ handleOpenPopupTip, isPopupTipOpen,setIsPopupTipOpen,handleRequestApproval 
}) => {
  return (
    <div className='descr__container--prereq-approval'>
                                <h4 className='descr__title'>Registration requirements</h4> 
                                <div className='descr__container--prereq-approval-wrapper'>
                                    <div className='approval-copy'>
                                        <p>Departmental approval is required to register for this course.</p>
                                        <ButtonIcon 
                                            icon={question}
                                            handleBtnClick={handleOpenPopupTip}
                                                                />
                                        {isPopupTipOpen && (
                                            <PopupTip
                                                title='Why you need approval?'
                                                isPopupTipOpen={isPopupTipOpen}
                                                setIsPopupTipOpen={setIsPopupTipOpen}
                                                >
                                                    <PopupTipContent 
                                                        content = 'Departmental approval is needed for this course. Please request approval below. You will not be able to register for this course without it.'
                                                    />
                                            </PopupTip>
                                        )}
                                        
                                    </div>
                                    
                                    <ButtonIconLarge 
                                        label="request approval"
                                        isButtonDisabled={false}
                                        handleBtnClick={handleRequestApproval}
                                        type= "primary"
                                    />
                                </div> 
                            </div>
  )
}

export default DepartmentalApproval