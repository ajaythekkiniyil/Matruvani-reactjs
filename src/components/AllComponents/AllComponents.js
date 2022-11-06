import React from 'react'

import Header from '../Header/Header';
import BuyNow from '../BuyNow/BuyNow';
import Editions from '../Editions/Editions';
import Footer from '../Footer/Footer';
import SpecialEdition from '../SpecialEdition/SpecialEdition';
import Blogs from '../Blogs/Blogs';
import secureLocalStorage from 'react-secure-storage';

function AllComponents() {
    window.addEventListener('load', (event) => {
        secureLocalStorage.clear()
      });
    return (
        <>
            <Header />
            <BuyNow />
            <Editions />
            <Blogs />
            <SpecialEdition />
            <Footer />
        </>
    )
}

export default AllComponents