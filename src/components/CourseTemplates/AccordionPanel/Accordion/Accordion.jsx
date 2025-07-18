import './Accordion.scss';
import AccordionRow from '../AccordionRow/AccordionRow';

const Accordion = ({courseDetails='', isPopupTipOpen, setIsPopupTipOpen}) => {
  return (
    <div className='accordion'>
      <AccordionRow 
        title='Course Overview'
        courseDetails={courseDetails}
        isPopupTipOpen = {isPopupTipOpen}
        setIsPopupTipOpen = {setIsPopupTipOpen}
      />
      <AccordionRow 
        title='Learning Outcomes'
        courseDetails={courseDetails}
        isPopupTipOpen = {isPopupTipOpen}
        setIsPopupTipOpen = {setIsPopupTipOpen}
      />
      <AccordionRow 
        title='Related Programs'
        courseDetails={courseDetails}
        isPopupTipOpen = {isPopupTipOpen}
        setIsPopupTipOpen = {setIsPopupTipOpen}
      />
    </div>
  )
}

export default Accordion