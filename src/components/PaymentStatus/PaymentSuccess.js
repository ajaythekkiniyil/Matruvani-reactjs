import React from 'react'

function PaymentSuccess() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto mt-5">
          <div className="payment">
            <div className="payment_header bg-success">
              <div className="check"><i>&#10003;</i></div>
            </div>
            <div className="content">
              <h1>Payment Success !</h1>
              <p>Your book will recive with in 7 days</p>
              <a href="/">Go to Home</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentSuccess