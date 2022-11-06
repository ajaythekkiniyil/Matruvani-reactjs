import React, { useState } from 'react'
import secureLocalStorage from "react-secure-storage";

function Cart() {
    const bookData = secureLocalStorage.getItem('bookData')
    const [bookDetails, setbookDetails] = useState(bookData)
    const [address, setAddress] = useState({})
    const [count, setCount] = useState(1)
    // handling price change
    function handleIncDec(operator) {
        if (operator === '+') {
            setCount(count + 1)
        }
        if (operator === '-') {
            setCount(count - 1)
        }
    }
    // address store to state address
    function handleAddress(e) {
        setAddress((prevS) => (
            {
                ...prevS,
                [e.target.name]: e.target.value
            }
        ))
    }
    // payment gateway call and store data to backend
    function handleSubmit(e) {
        e.preventDefault()
        const purchaseData = {
            updatedPrice: count * bookDetails.bookPrice,
            bookDetails,
            address
        }
        secureLocalStorage.setItem('purchaseData', purchaseData)
        window.location.href = '/order-summary'
    }
    return (
        <>
            <section className='cart'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Summary Order</h3>
                            <p>Check your item and select your shipping for better experience order item.</p>
                            <div className="row order-blk">
                                <div className="col-md-4"><img src={require('../../images/matruvani-issue.jpg')} alt="item" className='order-item' /></div>
                                <div className="col-md-8">
                                    <h5 className='pt-4'>Title: {bookDetails.bookTitle}</h5>
                                    <p><small>{bookDetails.bookVolume}</small></p>
                                    <p>Language: {bookDetails.bookLanguage}</p>
                                    <p>
                                        <strong>Price: {bookDetails.bookPrice * count}</strong>
                                    </p>
                                    <button className='plusMinus' onClick={() => handleIncDec('+')}>+</button>
                                    <button className='plusMinus' style={{ display: (count < 1) ? 'none' : 'inline' }} onClick={() => handleIncDec('-')}>-</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h3>Order Details</h3>
                            <p>Complete your purchase item by providing your payment details order.</p>
                            <form className='order-details' onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="First name" name="firstname" onChange={handleAddress} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="Last name" name="lastname" onChange={handleAddress} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="Email" name="email" onChange={handleAddress} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="tel" className="form-control" placeholder="Phone" name="phone" onChange={handleAddress} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="State" name="state" onChange={handleAddress} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="Country" name="country" onChange={handleAddress} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="City" name="city" onChange={handleAddress} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="Pin" name="pin" onChange={handleAddress} />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" placeholder="Address" name="address" onChange={handleAddress} />
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="form-control order-now-btn" >Buy now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Cart