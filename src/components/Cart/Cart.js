import React from 'react'

function Cart() {   
    return (
        <section className='cart'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Summary Order</h3>
                        <p>Check your item and select your shipping for better experience order item.</p>
                        <div className="row order-blk">
                            <div className="col-md-3"><img src={require('../../images/matruvani-issue.jpg')} alt="item" className='order-item' /></div>
                            <div className="col-md-9">
                                <h5 className='pt-4'>Title: Matruvani Edition 1</h5>
                                <p>Language: English</p>
                                <p><strong>Price: $120</strong></p>
                                <button className='plusMinus'>+</button>
                                <button className='plusMinus'>-</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3>Order Details</h3>
                        <p>Complete your purchase item by providing your payment details order.</p>
                        <form action="" className='order-details'>
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Email" aria-label="Email" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Phone" aria-label="Phone" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="State" aria-label="State" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Country" aria-label="Country" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="City" aria-label="City" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Pin" aria-label="Pin" />
                                </div>
                                <div className="col-md-12">
                                    <input type="text" className="form-control" placeholder="Address" aria-label="Address" />
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="form-control order-now-btn">Order now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart