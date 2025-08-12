import React from 'react' 
import Layout from '../Components/Layout/Layout.jsx'
import ContactFormPopup from '../Components/ContactFormPopup/ContactFormPopup.jsx'
import PropertyList from '../Components/PropertyList/PropertyList.jsx'
import Hero from '../Components/Hero/Hero.jsx';
import Hero2 from '../Components/Hero2/Hero2.jsx';
import Footer from '../Components/Footer/Footer.jsx';

// Import the sold properties data here:
import { SoldList } from '../data/SoldList.jsx';  // adjust the path as needed

const SoldListings = () => {
 return (
   <div>
      <Layout/>

      <div>
        <Hero2
          title="OUR SOLD LISTINGS"
          description="Emma Ju features Bergen Counties property. Ju can find real estate in Alpine, Tenafly, Englewood Cliffs, NJ & more"
          showButton={false}
          backgroundImage='https://images.pexels.com/photos/2988860/pexels-photo-2988860.jpeg'
        />
      </div>

      <PropertyList properties={SoldList} />

      <div>
        <Hero
          subtitle="New Jersey & New York Licensed Realtor"
          title="CONNECT WITH EMMA"
          description="Emma specializes in Bergen County NJ and NYC buyers, sellers, and renters."
          btnText="CONTACT EMMA"
          backgroundImage='https://images.pexels.com/photos/87378/pexels-photo-87378.jpeg'
          height="700px"
        />
      </div>

      <ContactFormPopup/>

      <div className='container-type1'>
        <Footer/>
      </div>

   </div>
 )
}

export default SoldListings;
