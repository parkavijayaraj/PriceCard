import React from 'react'

function Card({data}) {
    console.log(data);
  
  return <>
  <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{data.plan}</h5>
            <h6 className="card-price text-center">{data.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={data.userenabler?"":"text-muted"}><span className="fa-li"><i className={data.userfont?"fas fa-check":"fas fa-times"}></i></span><strong>{data.user}</strong>
              </li>
              <li className={data.storageenabler?"":"text-muted"}><span className="fa-li"><i className={data.storagefont?"fas fa-check":"fas fa-times"}></i></span>{data.storage}</li>
              <li className={data.projectenabler?"":"text-muted"} ><span className="fa-li"><i className={data.projectfont?"fas fa-check":"fas fa-times"}></i></span>{data.project}</li>
              <li className={data.accessenabler?"":"text-muted"}><span className="fa-li"><i className={data.accessfont?"fas fa-check":"fas fa-times"}></i></span>{data.access}</li>
              <li  className={data.privateenabler?"":"text-muted"}><span className="fa-li"><i className={data.privatefont?"fas fa-check":"fas fa-times"}></i></span>{data.privateproject}</li>
              <li  className={data.supportenabler?"":"text-muted"}><span className="fa-li"><i className={data.supportfont?"fas fa-check":"fas fa-times"}></i></span>{data.support}</li>
              <li  className={data.subdomainenabler?"":"text-muted"}><span className="fa-li"><i className={data.subdomainfont?"fas fa-check":"fas fa-times"}></i></span>{data.subdomains}
                </li>
              <li  className={data.reportenabler?"":"text-muted"}><span className="fa-li"><i className={data.reportfont?"fas fa-check":"fas fa-times"}></i></span>{data.statusreport}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
  </>
}

export default Card