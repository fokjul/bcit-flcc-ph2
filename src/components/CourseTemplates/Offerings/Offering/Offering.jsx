import './Offering.scss';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

//Components
import OfferingHeader from '../OfferingHeader/OfferingHeader';
import OfferingMeetingTimes from '../OfferingMeetingTimes/OfferingMeetingTimes';
import OfferingDetails from '../OfferingDetails/OfferingDetails';
import OfferingFooterCoursePage from '../OfferingFooterCoursePage/OfferingFooterCoursePage';
import OfferingFooterCardPage from '../OfferingFooterCardPage/OfferingFooterCardPage';


const Offering = ({offeringDetails, cartCounter, setCartCounter, setOfferingsAddedToCart, offeringsAddedToCart, courseDetails, isPopupTipOpen, setIsPopupTipOpen, departmentalApproval, isModalOpen, setIsModalOpen, handleRequestApproval, isCrnApproval}) => {

  const [isViewDetailsClicked, setIsViewDetailsClicked] = useState({
    id: '',
    isClicked: false
  })

  const location = useLocation()

  return (
    <div className='crn-section'>
      <OfferingHeader 
        offeringDetails={offeringDetails}
      />
      <OfferingMeetingTimes 
        meetingMetrics={offeringDetails.meeting_metrics}
      />
      { isViewDetailsClicked.isClicked && isViewDetailsClicked.id === offeringDetails.crn && 
        <OfferingDetails 
          offeringDetails={offeringDetails} 
          courseDetails={courseDetails}
          isPopupTipOpen = {isPopupTipOpen}
          setIsPopupTipOpen = {setIsPopupTipOpen}
          departmentalApproval = {departmentalApproval}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          handleRequestApproval={handleRequestApproval}
          offeringDetailsCrn={offeringDetails.crn}
        />
      }

      {location.pathname.includes('cart') 
      ? <OfferingFooterCardPage /> 
      : <OfferingFooterCoursePage 
        offeringDetails={offeringDetails} 
        cartCounter={cartCounter}
        setCartCounter={setCartCounter}
        setOfferingsAddedToCart={setOfferingsAddedToCart}
        offeringsAddedToCart={offeringsAddedToCart}
        courseDetails={courseDetails}
        isViewDetailsClicked={isViewDetailsClicked}
        setIsViewDetailsClicked={setIsViewDetailsClicked}
        isPopupTipOpen = {isPopupTipOpen}
        setIsPopupTipOpen = {setIsPopupTipOpen}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleRequestApproval={handleRequestApproval}
        offeringDetailsCrn={offeringDetails.crn}
        isCrnApproval={isCrnApproval}
      />  }
         
    </div>
  )
}

export default Offering