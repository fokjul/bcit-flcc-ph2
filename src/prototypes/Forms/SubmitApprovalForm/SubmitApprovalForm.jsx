import FormInputText from '../../../components/Atoms/FormInputText/FormInputText'
import './SubmitApprovalForm.scss';
import FormAttachmentField from '../../../components/Atoms/FormInputText/FormAttachmentField'

const SubmitApprovalForm = ({ courseDetails, isCrnApproval = false, offeringCrn}) => {

  return (
    <div className='form__container'>
      <p className='form__description'>
          {`You must request departmental approval to register for this ${isCrnApproval ? 'course offering' : 'course'}. Submit your request below. We’ll review your record and follow up by email.`}</p>
      <form>
        <div className='form__course-info'>
          <h5>Course Name</h5>
          <p>{courseDetails ? `${courseDetails.title} - ${courseDetails.crn}` : ''}</p>
        </div>
        
        {/* <FormInputText 
          name = 'courseName'
          id = 'courseName'
          label = 'Course Name'
          placeholder= 'E.g., A01234567'
          required = {false}
          disabled = {true}
          value = {courseDetails ? `${courseDetails.title} - ${courseDetails.crn}` : ''}
        /> */}
        {isCrnApproval && (
          <div className='form__course-info'>
          <h5>Course CRN</h5>
          <p>{offeringCrn}</p>
        </div>
          // <FormInputText 
          //   name = 'courseCrn'
          //   id = 'courseCrn'
          //   label = 'Course CRN'
          //   placeholder= 'E.g., 88278'
          //   required = {false}
          //   disabled = {true}
          //   value = {offeringCrn}
          // />
        )}
        {!isCrnApproval && (
          <FormInputText 
          name = 'courseCRN'
          id = 'courseCRN'
          label = 'Course CRN'
          placeholder= ''
          required = {false}
        />
        )}
        
        <FormInputText 
          name = 'bcitId'
          id = 'bcitId'
          label = 'BCIT ID'
          placeholder= 'E.g., A01234567'
          required = {true}
        />
        <FormInputText 
          name = 'legalName'
          id = 'legalName'
          label = 'Legal Full Name'
          placeholder= ''
          required = {true}
        />
        <FormInputText 
          name = 'studentEmail'
          id = 'studentEmail'
          label = 'Email'
          placeholder= 'E.g., example@gmail.com'
          type='email'
          required = {true}
        />
        <FormAttachmentField 
          name = 'studentAttachment'
          id = 'studentAttachment'
          label = 'Attachment'
          required = {false}
          type = 'file'
        />
      </form>
    </div>
  )
}

export default SubmitApprovalForm