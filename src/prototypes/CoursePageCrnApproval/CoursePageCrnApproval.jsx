import "./CoursePageCrnApproval.scss";
import axios from "axios";
import { useState, useEffect } from "react";

//Components
import OfferingList from "../../components/CourseTemplates/Offerings/OfferingList/OfferingList";
import Breadcrumbs from "../../components/CourseTemplates/Breadcrumbs/Breadcrumbs";
import PageHeader from "../../components/CourseTemplates/CoursePageHeader/CoursePageHeader";
import Accordion from "../../components/CourseTemplates/AccordionPanel/Accordion/Accordion";
import PageLayout from "../../components/Layout/PageLayout/PageLayout";
import SidebarNotices from "../../components/Navigation/Sidebar/SidebarNotices/SidebarNotices";
import TextLinkSmall from "../../components/Navigation/TextLinkSmall/TextLinkSmall";
import Modal from "../../components/GeneralTemplates/Modal/Modal";
import SubmitApprovalForm from "../../prototypes/Forms/SubmitApprovalForm/SubmitApprovalForm";


const CoursePageCrnApproval = () => {
  const [courseDetails, setCourseDetails] = useState({});
  const [isPopupTipOpen, setIsPopupTipOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [offeringCrn, setOfferingCrn] = useState('')

  const getCourseDetails = async () => {
    try {
      const response = await axios.get("https://bcit-flcc-ph2-server.vercel.app/courses");
      if (!response.data.course) {
        console.log("Data is not available");
      }
      setCourseDetails(response.data.course);
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
  };

  useEffect(() => {
    getCourseDetails();
  }, []);

  const handleSubmitApprovalRequest = () => {
    console.log('submit request')
  }

  const handleRequestApproval = (crn) => {
    setIsModalOpen(true)
    setOfferingCrn(crn)
  }
 
  return (
    <PageLayout>
      <div className="app">
      <Breadcrumbs 
        crn = {courseDetails.crn}
        subject = {courseDetails.subject}
      />
      <PageHeader
        crn={courseDetails.crn}
        title={courseDetails.title}
        scope={courseDetails.scope}
        subject={courseDetails.subject}
      />
      <div className="contentArea">
        <SidebarNotices />
        <div className="contentArea__main">
          <Modal 
            title= {`Request Approval`}
            btnLabel='Request Approval'
            handleBtnClick={handleSubmitApprovalRequest}
            isModalOpen = {isModalOpen}
            setIsModalOpen = {setIsModalOpen}>
            
            <SubmitApprovalForm 
              courseDetails = {courseDetails}
              isCrnApproval={true}
              offeringCrn={offeringCrn}
            />
          </Modal>
          <Accordion 
            courseDetails={courseDetails} 
            isPopupTipOpen = {isPopupTipOpen}
            setIsPopupTipOpen = {setIsPopupTipOpen}
            departmentalApproval={false}
          />
          <OfferingList 
            courseDetails={courseDetails} 
            isPopupTipOpen = {isPopupTipOpen}
            setIsPopupTipOpen = {setIsPopupTipOpen}
            departmentalApproval={true}
            handleRequestApproval={handleRequestApproval}
            isCrnApproval={true}
          />
          
          <div className="contentArea__cancelNotice">
            Programs and courses are subject to change without notice. Find out more about
            <TextLinkSmall 
              text='BCIT course cancellations' 
              source='https://www.bcit.ca/flexible-learning/part-time-courses-programs/part-time-course-requirements-registration/course-cancellations-transfers-withdrawals/#cancelled-courses'/> 
          </div>
        </div>
      </div>
    </div>
    </PageLayout>
  );
};

export default CoursePageCrnApproval;
