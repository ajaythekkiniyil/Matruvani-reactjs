import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Editions() {
    const options = {
        responsiveClass: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            375: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 4,

            }
        },
    };
    return (
        <section className='product_slider'>
            <div className="container">
                <div className="row">
                    <OwlCarousel {...options}>
                        <div className="item">
                            <img src={require('../../images/matruvani-issue.jpg')} alt="issues"/>
                                <p>Dec - 2021</p>
                        </div>
                        <div className="item">
                            <img src={require('../../images/matruvani-issue.jpg')} alt="issues"/>
                                <p>Dec - 2021</p>
                        </div>
                        <div className="item">
                            <img src={require('../../images/matruvani-issue.jpg')} alt="issues"/>
                                <p>Dec - 2021</p>
                        </div>
                        <div className="item">
                            <img src={require('../../images/matruvani-issue.jpg')} alt="issues"/>
                                <p>Dec - 2021</p>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>
    )
}

export default Editions