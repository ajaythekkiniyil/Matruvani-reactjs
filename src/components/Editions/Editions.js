import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios'
import Constants from '../Constants'
import { useNavigate } from "react-router-dom";
import secureLocalStorage from 'react-secure-storage'

function Editions() {
    const [oldEditions, setOldEditions] = useState()
    const navigate = useNavigate();
    // const [coverImage, setCoverImage] = useState()
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
    }

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        // const apiEndPoint = Constants.apiEndPoint + 'old-editions?populate=coverImage'
        const apiEndPoint = Constants.apiEndPoint + 'old-editions?populate=coverImage'
        const resp = await axios.get(apiEndPoint)
        if (resp) {
            setOldEditions(resp.data.data)
            // setCoverImage(resp.data.data)
        }
    }

    function handleClick(eachItem){
        const oldEditions = {
            eachItem,
            status : true
        }
        secureLocalStorage.setItem('oldEditions', oldEditions)
        // navigate("cart");
    }

    return (
        <section className='product_slider'>
            <div className="container">
                <div className="row">
                    <OwlCarousel {...options}>
                        { oldEditions &&
                            oldEditions.map((eachItem,index) => {
                                // console.log(eachItem.attributes)
                                const url = Constants.imageUrl + eachItem.attributes.coverImage.data.attributes.url
                                return (
                                    <div key={index}>
                                        <div className="item">
                                            <img src={url} alt="issues"  onClick={()=>handleClick(eachItem)}/>
                                            <p>{eachItem.attributes.bookTitle}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </OwlCarousel>
                </div>
            </div>
        </section>
    )
}

export default Editions