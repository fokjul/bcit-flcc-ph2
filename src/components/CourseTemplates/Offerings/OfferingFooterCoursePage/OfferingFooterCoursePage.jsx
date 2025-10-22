import './OfferingFooterCoursePage.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

//Components
import TextLink from '../../../Navigation/TextLink/TextLink';
import ButtonCounter from '../../../Atoms/Buttons/ButtonCounter/ButtonCounter';
import StatusTag from '../../../Atoms/StatusTag/StatusTag';
import ButtonLink from '../../../Atoms/Buttons/ButtonLink/ButtonLink';
import ButtonIconLarge from '../../../Atoms/Buttons/ButtonIconLarge/ButtonIconLarge';
import ConfirmationCheckbox from '../../ConfirmationCheckbox/ConfirmationCheckbox';

const OfferingFooterCoursePage = ({offeringDetails, cartCounter, setCartCounter, setOfferingsAddedToCart, offeringsAddedToCart, courseDetails, isViewDetailsClicked, setIsViewDetailsClicked, isModalOpen, setIsModalOpen, handleRequestApproval, offeringDetailsCrn, isCrnApproval}) => {

  const [isCheckboxChecked, setIsCheckboxChecked] = useState({
    departmentalApproval: false,
    confirmImportantInfo: false
  })

  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  
  const [isAddedToCart, setIsAddedToCart] = useState({
    status: false,
    offerings: {}
  })

  const handleCheckboxCheck = (e) => {
  const {name, checked} = e.target;
  setIsCheckboxChecked(prev => ({...prev, [name]: checked}))
  handleButtonEnable();
  }

  useEffect(() => {
    if(Object.values(isCheckboxChecked).includes(false)) {
      setIsButtonDisabled(true)
    } else {
      setIsButtonDisabled (false)
    }
  }, [isCheckboxChecked])
  
  const handleAddToCard = () => {
    setIsAddedToCart(() => ({
      status: true,
      offerings: offeringDetails
    }))
    setCartCounter(prevCounter =>  prevCounter + 1)
    setOfferingsAddedToCart((prev) => [...prev, offeringDetails])
  }

  const handleNotifyMe = () => {
    console.log("Notify Me")
  }
  
  //Passes # of courses added to the cart to the CartPage
  const navigate = useNavigate();
  
  const handleViewCart = () => {
    //To pass selected offerings to the Cart page
    navigate('/prototypes/cart', {
      state: {
        offeringsAddedToCart: offeringsAddedToCart,
        courseDetails: courseDetails, 
        from: location.pathname,
      }
    })
  }

  const handleViewDetailsClick = () => {
    setIsViewDetailsClicked({id: offeringDetails.crn, isClicked: true})
  }
  
  const handleHideDetailsClick = () => {
    setIsViewDetailsClicked({id: offeringDetails.crn, isClicked: false})
  }

  return (
    <div className='offeringFooter'>
      <div className={isViewDetailsClicked.isClicked && isViewDetailsClicked.id === offeringDetails.crn && offeringDetails.status === 'Available' ? 'crn-section__status--available' : 'crn-section__status' }>
        {
          isViewDetailsClicked.isClicked && isViewDetailsClicked.id === offeringDetails.crn 
          ? (offeringDetails.status.value === 'available' 
              ? <div className='offering-details'>
                  <ConfirmationCheckbox 
                      isCheckboxChecked={isCheckboxChecked}
                      handleCheckboxCheck={handleCheckboxCheck}
                      isModalOpen={isModalOpen}
                      setIsModalOpen={setIsModalOpen}
                      handleRequestApproval={handleRequestApproval}
                      offeringDetailsCrn={offeringDetailsCrn}
                      isCrnApproval={isCrnApproval}
                      />
                  <div className='offering-details__available'>
                    <div className='offering-details__subscribe'>
                      <StatusTag status={offeringDetails.status}/> 
                      <p>
                      {`This course is ${offeringDetails.status.name.toLowerCase()}`}
                      </p>
                    </div>

                    { isAddedToCart.status 
                      ? <ButtonCounter 
                            label="view cart"
                            counter={cartCounter}
                            handleBtnClick={handleViewCart}
                        />
                      : <ButtonIconLarge 
                          label="add to cart"
                          isButtonDisabled={isButtonDisabled}
                          handleBtnClick={() => handleAddToCard(offeringDetails)}
                          type= {isButtonDisabled ? "disabled" : "primary"}
                        />

                    }
                    
                  </div>
              </div> 
              : <div className='offering-details__available'>
                  <div className='offering-details__subscribe'>
                    <StatusTag status={offeringDetails.status}/> 
                    <p>
                      {`This course is ${offeringDetails.status.name.toLowerCase()}.`}
                    </p>
                  </div>
                  <ButtonIconLarge 
                    label="notify me"
                    isButtonDisabled={false}
                    handleBtnClick={handleNotifyMe}
                    type= "secondary"
                  />
                </div>)
          : <ButtonLink 
            label="View details"
            handleClick={handleViewDetailsClick}
            /> 
        }
      </div>
        {isViewDetailsClicked.isClicked && isViewDetailsClicked.id === offeringDetails.crn && (
          <div className='offeringFooter__container'>
            <div className='offeringFooter__contact'>
              <span className='offeringFooter__contact-description'>If you have any questions about this course, please <TextLink text='contact us' /> </span>
              
            </div>
            <div className='offeringFooter__hide-btn-container'>
              <ButtonLink 
                label="Hide details"
                handleClick={handleHideDetailsClick}
              />
            </div>
          </div>
            
          )
        }
      </div>
  )
}

export default OfferingFooterCoursePage