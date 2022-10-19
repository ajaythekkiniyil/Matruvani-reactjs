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
        axios.post(Constants.apiEndPointNodejs, purchaseData).then((resp) => {
            setHash(resp.data.hash)
            setKey(resp.data.key)
            setTxnid(resp.data.txnid)
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
                                <small className='text-danger'>You can only view details can't edit</small><br></br><br></br>
                                <div className="row">
                                    
                                    <div className="col-md-6">
                                        <small>First Name</small>
                                        <input type="text" className="form-control mb-3" readOnly value={purchaseData.address.firstname} name="firstname" />
                                    </div>
                                    <div className="col-md-6">
                                        <small>Last Name</small>
                                        <input type="text" className="form-control mb-3" readOnly value={purchaseData.address.lastname} name="lastname" />
                                    </div>
                                    <div className="col-md-6">
                                        <small>Email</small>
                                        <input type="text" className="form-control mb-3" readOnly value={purchaseData.address.email} name="email" />
                                    </div>
                                    <div className="col-md-6">
                                        <small>Phone</small>
                                        <input type="tel" className="form-control mb-3" readOnly value={purchaseData.address.phone} name="phone" />
                                    </div>
                                    <div className="col-md-6">
                                        <small>State</small>
                                        <input type="text" className="form-control mb-3" readOnly value={purchaseData.address.state} name="state" />
                                    </div>
                                    <div className="col-md-6">
                                        <small>Country</small>
                                        <input type="text" className="form-control mb-3" readOnly value={purchaseData.address.country} name="country" />
                                    </div>
                                    <div className="col-md-6">
                                        <small>City</small>
                                        <input type="text" className="form-control mb-3" readOnly value={purchaseData.address.city} name="city" />
                                    </div>
                                    <div className="col-md-6">
                                        <small>Pin</small>
                                        <input type="text" className="form-control mb-3" readOnly value={purchaseData.address.pin} name="pin" />
                                    </div>
                                    <div className="col-md-12">
                                        <small>Address</small>
                                        <input type="text" className="form-control mb-3" readOnly value={purchaseData.address.address} name="address" />
                                    </div>
                                </div>
                            </form>

                            {/* hidden form */}
                            <form action="https://secure.payu.in/_payment" method="Post">
                                <input type="hidden" name="udf5" value="PayUBiz_NODE_JS_KIT" />
                                <input type="hidden" name="surl" value={Constants.paymentStatusUrl} />
                                <input type="hidden" name="furl" value={Constants.paymentStatusUrl} />
                                <input type="hidden" name="curl" value={Constants.paymentStatusUrl} />
                                <input type="hidden" name="key" value={key} />
                                <input type="hidden" name="txnid" value={txnid} />
                                <input type="hidden" name="amount" value={purchaseData.updatedPrice} />
                                <input type="hidden" name="productinfo" value={purchaseData.bookDetails.bookTitle} />
                                <input type="hidden" name="firstname" value={purchaseData.address.firstname} />
                                <input type="hidden" name="email" value={purchaseData.address.email} />
                                <input type="hidden" name="phone" value={purchaseData.address.phone} />
                                <input type="hidden" name="hash" value={hash} />
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