import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <ul>
        <li>Introduction</li>
        <li>Components</li>
        <li><Link to='/prototypes/course'>Course Page Prototype</Link></li>
                <li><Link to='/prototypes/course-crn'>Course Page CRN Approval Prototype</Link></li>
        <li><Link to='/prototypes/cart'>Cart Page Prototype</Link></li>
        <li><Link to='/prototypes/donation'>Donation Page Prototype</Link></li>
      </ul>
    </div>
  )
}

export default Home