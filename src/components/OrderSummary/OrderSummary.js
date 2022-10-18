import React, { useEffect, useState } from 'react'
import secureLocalStorage from 'react-secure-storage'
import axios from 'axios'
import Constants from '../Constants'

function OrderSummary() {
    const [purchaseData, setPurchaseData] = useState(secureLocalStorage.getItem('purchaseData'))
    const [key, setKey] = useState()
    const [txnid, setTxnid] = useState()
    const [hash, setHash] = useState()
    useEffect(() => {
        axios.get(Constants.apiEndPointNodejs).then((resp) => {
            setKey(resp.data.key)
            setTxnid(resp.data.txnid)
        })
        const obj = {
            purchaseData,
            txnid ////////    
        }
        axios.post(Constants.apiEndPointNodejs, obj ).then((resp)=>{
            setHash(resp.data)
        })
    }, [])
    return (
        <>
            <section className='summary'>
                <div className="container mt-5">
                    <h3>Shipping</h3>
                    <div className="row">
                        <div className="col-md-8">
                            <form className='order-details'>
                                <div className="row">
                                    <div className="col-md-6">
                                        <small>First Name</small>
                                        <input type="text" className="form-control mb-3" value={purchaseData.address.firstname} name="firstname" />
                                    </div>
                                    <div className="col-md-6">
                                        <small>Last Name</small>
                                        <input type="text" className="form-control mb-3" value={purchaseData.address.lastname} name="lastname" />
                                    </div>
                                    <div className="col-md-6">
                                        <small>Email</small>
                                        <input type="text" className="form-control mb-3" value={purchaseData.address.email} name="email" />
                                    </div>
                                    <div className="col-md-6">
                                        <small>Phone</small>
                                        <input type="tel" className="form-control mb-3" value={purchaseData.address.phone} name="phone" />
                                    </div>
                                    <div className="col-md-6">
                                        <small>State</small>
                                        <input type="text" className="form-control mb-3" value={purchaseData.address.state} name="state" />
                                    </div>
                                    <div className="col-md-6">
                                        <small>Country</small>
                                        <input type="text" className="form-control mb-3" value={purchaseData.address.country} name="country" />
                                    </div>
                                    <div className="col-md-6">
                                        <small>City</small>
                                        <input type="text" className="form-control mb-3" value={purchaseData.address.city} name="city" />
                                    </div>
                                    <div className="col-md-6">
                                        <small>Pin</small>
                                        <input type="text" className="form-control mb-3" value={purchaseData.address.pin} name="pin" />
                                    </div>
                                    <div className="col-md-12">
                                        <small>Address</small>
                                        <input type="text" className="form-control mb-3" value={purchaseData.address.address} name="address" />
                                    </div>
                                </div>
                            </form>

                            {/* hidden form */}
                            <form action="https://secure.payu.in/_payment" method="Post">
                                <input type="text" name="udf5" value="PayUBiz_NODE_JS_KIT" />
                                <input type="text" name="surl" value="http://localhost:3000/success" />
                                <input type="text" name="furl" value="http://localhost:3000/failed" />
                                <input type="text" name="curl" value="http://localhost:3000/cancel" />
                                <input type="text" name="key" value={key} />
                                <input type="text" name="txnid" value={txnid} />
                                <input type="text" name="amount" value={purchaseData.updatedPrice} />
                                <input type="text" name="productinfo" value={purchaseData.bookDetails.bookTitle} />
                                <input type="text" name="firstname" value={purchaseData.address.firstname} />
                                <input type="text" name="email" value={purchaseData.address.email} />
                                <input type="text" name="phone" value={purchaseData.address.phone} />
                                <input type="text" name="hash" value={hash} />
                                <button type="submit" className="form-control mb-3 order-now-btn" >Buy now</button>
                            </form>
                        </div>
                        <div className="col-md-4">
                            <div className="row order-blk">
                                <div className="col-md-8">
                                    <h5 className='pt-4'>Title: {purchaseData.bookDetails.bookTitle}</h5>
                                    <p><small>Volume: {purchaseData.bookDetails.bookVolume}</small></p>
                                    <p>Language: {purchaseData.bookDetails.bookLanguage}</p>
                                    <p>
                                        <strong>Price: {purchaseData.updatedPrice}</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default OrderSummary