import React from 'react'
// import { Link } from 'react-router-dom';
const Total = (props) => {
  return (
    <>
      <div className="row bottom">
      <button
        className="btn btn-danger col-2"
        onClick={() => {
          props.resetQuantity();
        }}
      >
        Reset
      </button>
      <div className="col-8 bg-dark text-white text-center">
        {props.totalAmount}
      </div>
      <button className="btn btn-primary col-2">Pay Now</button>
    </div>
    </>
  )
}

export default Total
