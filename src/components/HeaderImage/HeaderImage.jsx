import React from 'react'
import logol from './leftlogo.png'
import logor from './rightlogo.png'
import './HeaderImage.css'

export default function HeaderImage() {
  return (
    <div className='container mt-2 mb-2'>
        <div className="row ">
            <div className="col-2">
                <img src={logol} alt="" />
            </div>
            <div className="col-8 text-center mb-3 mb-md-0">
            <h1 className="ag-heading">ACCOUNTANT GENERAL {'(A & E),'} KERALA</h1>
            <h2 className="ag-desc">Field Office of the Supreme Audit Institution of 
            India,<br/> The Comptroller and Auditor General of India</h2>
            </div>
            <div className="col-2">
              <img src={logor} alt="" />
            </div>
        </div>

    </div>
  )
}
