import './OfferingList.scss';
import { useEffect, useState } from 'react';

import Offering from '../Offering/Offering';
import Tabs from '../../../Navigation/Tabs/Tabs';

const OfferingList = ({courseDetails, isPopupTipOpen, setIsPopupTipOpen, departmentalApproval, isModalOpen, setIsModalOpen, handleRequestApproval, isCrnApproval}) => {

  const termArray = courseDetails.offerings?.map(item => item.term) || [];
  const [tabClicked, setTabClicked] = useState({ 
    id: termArray[0] || '', 
    isClicked: true });
  const [currentOfferings, setCurrentOfferings] = useState([]);
  const offeringDetails = courseDetails.offerings;
  const [isViewDetailsClicked, setIsViewDetailsClicked] = useState({
    id: '',
    isClicked: false
  })

  // Counts number of courses added to the cart
  const [cartCounter, setCartCounter] = useState(0)

  // Array of courses added to the cart
  const [offeringsAddedToCart, setOfferingsAddedToCart] = useState([])

  useEffect(() => {
    if (termArray.length > 0 && !tabClicked.id) {
      setTabClicked({ id: termArray[0], isClicked: true });
    }
  }, [termArray, tabClicked.id]);

  useEffect(() => {
    const currentOfferingsArr = offeringDetails?.filter((offering) => offering.term === tabClicked.id);
    if (currentOfferingsArr?.length > 0) {
      setCurrentOfferings(currentOfferingsArr[0].schedule);
    }
  }, [tabClicked.id, offeringDetails]);

  if (!courseDetails.offerings) return null;

  return (
    <div className='offerings'>
      <h2 className='offerings__title'>Course Offerings</h2>
      <Tabs 
        terms={termArray}
        tabClicked={tabClicked}
        setTabClicked={setTabClicked}
        setIsViewDetailsClicked={setIsViewDetailsClicked}
        currentOfferings={currentOfferings}
        courseDetails={courseDetails}
      />

      <div className='offerings__list'>
          {currentOfferings.map((offering, index) => {
            return <Offering
              key={index}
              offeringDetails={offering}
              isViewDetailsClicked={isViewDetailsClicked} 
              setIsViewDetailsClicked={setIsViewDetailsClicked}
              cartCounter = {cartCounter}
              setCartCounter = {setCartCounter}
              setOfferingsAddedToCart={setOfferingsAddedToCart}
              offeringsAddedToCart={offeringsAddedToCart}
              courseDetails={courseDetails}
              isPopupTipOpen = {isPopupTipOpen}
              setIsPopupTipOpen = {setIsPopupTipOpen}
              departmentalApproval={departmentalApproval}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              handleRequestApproval={handleRequestApproval}
              isCrnApproval={isCrnApproval}
            />
          })}
        </div>
    </div>
    
  )
}

export default OfferingList