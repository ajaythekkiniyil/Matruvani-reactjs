import { useState, useEffect } from 'react'
import secureLocalStorage from "react-secure-storage";
import axios from 'axios'
import Constants from '../Constants';

import coverImage from '../../images/pr-gallery-image-01.jpg'
import thumbnailImage from '../../images/pr-gallery-image-02.jpg'
import thumbnailImage2 from '../../images/pr-gallery-image-03.jpg'
import Loading from '../Loading/Loading'

function BuyNow() {

    const [loading, setLoading] = useState(true)
    const [coverImg, setCoverImg] = useState(coverImage)
    const [thumbnailImages, setthumbnailImages] = useState({
        thumbnailOne: coverImg,
        thumbnailTwo: thumbnailImage2,
        thumbnailThree: thumbnailImage,
        thumbnailFour: thumbnailImage2,
    })
    const [bookData, setBookData] = useState({
        bookTitle: 'March 2022',
        bookVolume: 'Vol. 31 No.8',
        bookPrice: '1',
        bookLanguage: 'English',
    })
    async function fetchData() {
        // fetch latest book details from backend and store to book data
        const url = Constants.apiEndPoint + 'latest-books?populate=*'
        const resp = await axios.get(url)
        // storing boodData
        const latestBook = (resp.data.data[0].attributes)
        setBookData((prevS) => (
            { ...latestBook }
        ))
        
        // storing images
        const coverImage = resp.data.data[0].attributes.coverImage.data.attributes.url
        setCoverImg(coverImage)
        // storing thumbnail images
        const thumbnailOne = resp.data.data[0].attributes.thumbnailImages.data[0].attributes.url
        const thumbnailTwo = resp.data.data[0].attributes.thumbnailImages.data[1].attributes.url
        const thumbnailThree = resp.data.data[0].attributes.thumbnailImages.data[2].attributes.url
        const thumbnailFour = resp.data.data[0].attributes.thumbnailImages.data[3].attributes.url
        setthumbnailImages({
            thumbnailOne: thumbnailOne,
            thumbnailTwo: thumbnailTwo,
            thumbnailThree: thumbnailThree,
            thumbnailFour: thumbnailFour,
        })
        setLoading(false)
    }
    useEffect(() => {
        fetchData()
    }, [])
    useEffect(() => {
        // book data securly store to localStorage - onloading time and if any change(user select language)
        secureLocalStorage.setItem('bookData', bookData)
    }, [bookData])

    // function handlechage to change language
    function handleChange(e) {
        setBookData((prevS) => {
            return (
                {
                    ...prevS,
                    bookLanguage: e.target.value
                }
            )
        })
    }
    function handleThumbnail(e) {
        setCoverImg(e.target.src)
    }
    return (
        <section className="pb-5 single_product">
            {
                loading ? <Loading /> :
                    <>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 text-center">
                                    <img className="large-view" src={coverImg} alt="largeView" />
                                    <div className="img-select row p-2" style={{ cursor: 'pointer' }}>
                                        <img className='col-3 m-0 p-1' src={thumbnailImages.thumbnailOne} onClick={handleThumbnail} alt='thumbnail' />
                                        <img className='col-3 m-0 p-1' src={thumbnailImages.thumbnailTwo} onClick={handleThumbnail} alt='thumbnail' />
                                        <img className='col-3 m-0 p-1' src={thumbnailImages.thumbnailThree} onClick={handleThumbnail} alt='thumbnail' />
                                        <img className='col-3 m-0 p-1' src={thumbnailImages.thumbnailFour} onClick={handleThumbnail} alt='thumbnail' />
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="product-content">
                                        <h3>{bookData.bookTitle}</h3>
                                        <p className="pr-vl">{bookData.bookVolume}</p>
                                        <p className="pr-desc">FREE delivery: Saturday, Feb 19 Order within 2 hrs and 26 mins</p>
                                        <p className="pr-price">Price : ???{bookData.bookPrice}</p>
                                        <div className="row">
                                            <div className="col-2">
                                                <p className="pr-lang">Language: </p>
                                            </div>
                                            <div className="col-4">
                                                <select className="form-select col-6" aria-label="Default select example"
                                                    onChange={handleChange}
                                                >
                                                    <option>English</option>
                                                    <option>Malayalm</option>
                                                    <option>Tamil</option>
                                                    <option>Hindi</option>
                                                </select>
                                            </div>
                                        </div>
                                        {/* <a href="/cart">Buy Now</a> */}
                                        {/* <a href="#">Buy Now</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </section>

    )
}
export default BuyNow
