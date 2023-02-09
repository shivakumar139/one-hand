import React from 'react'
import logo from "../utils/img/icon-white.png"


export const Footer = () => {
  return (
    <footer>
        <div className="container-fluid w-100 p-5 bg-success">
            <div className="row">
                <div className="col">
                    <img src={logo} alt="logo" />
                    <h3 className='h3 fw-bold py-2 text-white'>One Hand</h3>
                    <p className='fw-bold text-white'>If you can’t feed a hundred people, then feed just one.
                    </p>
                </div>
                <div className="col border-start border-white p-4 text-white">
                    <p className='fw-bold'> GET IN TOUCH</p>
                    <div className="py-4 gap-4">
                        <div className="btn text-white btn-floating m-1 rounded-circle"
                        style={{background: "#3b5998"}}>
                        <i className="bi bi-facebook"></i>
                        </div>

                        <div className="btn text-white btn-floating m-1 rounded-circle"
                        style={{background: "#55acee"}}>
                        <i className="bi bi-twitter"></i>
                        </div>

                        <div className="btn text-white btn-floating m-1 rounded-circle"
                        style={{background: "#333333"}}>
                        <i className="bi bi-github"></i>
                        </div>
                        <div className="btn text-white btn-floating m-1 rounded-circle"
                        style={{background: "#d62976"}}>
                        <i className="bi bi-instagram"></i>
                        </div>
                        <div className="btn text-white btn-floating m-1 rounded-circle"
                        style={{background: "#0082ca"}}>
                        <i className="bi bi-linkedin"></i>
                        </div>
                    </div>


                </div>
            </div>
            
        </div>
        <div className="container-fluid text-center py-5 fw-bold" style={{background: "#C6F6D4"}}>
                <p>Copyright © 2022 OneHand. All Rights Reserved.
                </p>
        </div>

        
    </footer>
  )
}
