import { useState } from 'react'

function BuyNow() {
    // fetch latest book details from backend and store to book data
    const [bookData, setBookData] = useState({
        bookTitle: 'March 2022',
        bookVolume: 'Vol. 31 No.8',
        bookPrice: '50.00',
        bookLanguage: 'English',
    })

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

    return (
        <section className="pb-5 single_product">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 text-center">
                        <img className="large-view" src={require('../../images/pr-gallery-image-01.jpg')} alt="largeView" />
                    </div>
                    <div className="col-lg-6">
                        <div className="product-content">
                            <h3>{bookData.bookTitle}</h3>
                            <p className="pr-vl">{bookData.bookVolume}</p>
                            <p className="pr-desc">FREE delivery: Saturday, Feb 19 Order within 2 hrs and 26 mins</p>
                            <p className="pr-price">Price : ₹{bookData.bookPrice}</p>
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
                            <a href="/cart">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BuyNow