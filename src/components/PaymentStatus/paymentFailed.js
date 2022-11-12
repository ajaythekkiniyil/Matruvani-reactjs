import React from 'react'

function paymentFailed() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto mt-5">
          <div className="payment">
            <div className="payment_header bg-danger">
              <div className="check"><i>&#215;</i></div>
            </div>
            <div className="content">
              <h1>Payment Failed !</h1>
              <p>try agin payment process</p>
              <a href="/">Go to Home</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default paymentFailed