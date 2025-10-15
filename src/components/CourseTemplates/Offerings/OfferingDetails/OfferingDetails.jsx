
import './OfferingDetails.scss';
import { useState } from 'react';
import Modal from '../../../GeneralTemplates/Modal/Modal';
import SubmitApprovalForm from '../../../../prototypes/Forms/SubmitApprovalForm/SubmitApprovalForm';
import DepartmentalApproval from '../../DepartmentalApproval/DepartmentalApproval';

const OfferingDetails = ({offeringDetails, courseDetails, departmentalApproval}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isDepartmentalPopupOpen, setIsDepartmentalPopupOpen] = useState(false)

    const handleRequestApproval = () => {
        setIsModalOpen(true)
    }

    const handleOpenDepartmentalPopup = () => {
        setIsDepartmentalPopupOpen(prev => !prev)
    }

    const handleSubmitApprovalRequest = () => {
        console.log('submit request')
    }

  return (
    <>
        <Modal 
            title='Request Approval'
            btnLabel='Submit Request'
            handleBtnClick={handleSubmitApprovalRequest}
            isModalOpen = {isModalOpen}
            setIsModalOpen = {setIsModalOpen}>
            <SubmitApprovalForm 
                courseDetails={courseDetails}
                isCrnApproval={true}
                offeringDetails={offeringDetails}
            />
        </Modal>
        <div className='offering-details'>
            <div className='offering-details__container'>
            <div className='offering-details__item'>
                <h5 className='offering-details__item-heading'>Duration</h5>
                <p className='offering-details__item-copy'>{offeringDetails.duration}</p>
            </div>
            <div className='offering-details__item'>
                <h5 className='offering-details__item-heading'>Instructor</h5>
                <p className='offering-details__item-copy'>{offeringDetails.instructor}</p>
            </div>
            <div className='offering-details__item'>
                <h5 className='offering-details__item-heading'>
                Course outline</h5>
                <p className='offering-details__item-copy'>Course outline TBD — see Learning Outcomes in the interim.</p>
            </div>
            </div>
            { departmentalApproval && 
                <DepartmentalApproval
                                handleOpenPopupTip={handleOpenDepartmentalPopup}
                                isPopupTipOpen={isDepartmentalPopupOpen}
                                setIsPopupTipOpen={setIsDepartmentalPopupOpen}
                                handleRequestApproval={handleRequestApproval}
                />
            }
            <div className='offering-details'>
            <div className='offering-details__info'>
            <h5 className='offering-details__item-heading'>
                Important information</h5>
            <ol className='offering-details__item-copy'>
                {offeringDetails.important_info.map((item, index) => {
                return <li key={index} className='offering-details__important-item'>{item}</li>
                })}
            </ol>
            </div>
            </div>
        </div>
    </>
   
  )
}

export default OfferingDetails