import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";

function CustomersItem({firstName, lastName , email , phone , subject , message }) {

    const [details,setDetails] = useState(false);

  return (
    <div className="customerItem">
      <div className="row justify-content-between pl-15 pr-15">
        <div className="col-lg-6" style={{ placeSelf: "center" }}>
          <h5>{firstName} {lastName}</h5>
        </div>
        <div className="col-lg-6" style={{ textAlign: "end" }}>
          <button className="button greenBgColor" onClick={(e)=> setDetails(!details)}>
            Details <i className={details ? "bx bx-chevron-down btn-down-arrow active" : "bx bx-chevron-down btn-down-arrow"}></i>
          </button>
        </div>
      </div>

      <div className={details ? "customerDetails active" : "customerDetails"}>
        <div className="mt-5 mb-5" style={{borderTop: "1px solid"}}>
          <div className="container">
            <form>
              <div className="row justify-content-between mt-2">
                <div className="col-md-6">
                  
                  
                    <span className="float-left whiteColor mb-2">
                      First name
                    </span>
                    <input
                      type="text"
                      name="firstName"
                      className="custom-input  white"
                      autoComplete="off"
                      value={firstName}
                    />
                  
                </div>

                <div className="col-md-6">
                 
                    <span className="float-left whiteColor mb-2">
                      Last name
                    </span>
                    <input
                      type="text"
                      name="lastName"
                      className="custom-input  white "
                      autoComplete="off"
                      value={lastName}
                    />
                  
                </div>
                <div className="col-md-6">
                  
                    <span className="float-left whiteColor mb-2">Email</span>
                    <input
                      type="email"
                      name="email"
                      className="custom-input  white "
                      autoComplete="off"
                      value={email}
                    />
                  
                </div>
                <div className="col-md-6">
                  
                    <span className="float-left whiteColor mb-2">
                      Phone number
                    </span>
                    <input
                      type="phone"
                      name="phone"
                      className="custom-input  white "
                      autoComplete="off"
                      value={phone}
                    />
                  
                </div>
                <div className="col-md-6">
                  
                    <span className="float-left whiteColor mb-2">Subject</span>
                    <textarea
                      name="subject"
                      className="custom-input  white pt-10 pb-10"
                      autoComplete="off"
                      value={subject}
                    />
                  
                </div>
                <div className="col-md-6">
                  
                    <span className="float-left whiteColor mb-2">Message</span>
                    <textarea
                      className="custom-input  white pt-10 pb-10"
                      name="message"
                      autoComplete="off"
                      value={message}
                    />
                  
                </div>
                <div className="col-md-12">
                  
                    <div className="text-center mt-4">
                      <button className="button greenBgColor blackColor bounce" onClick={(e)=> setDetails(false)}>
                        Close
                      </button>
                    </div>
                  
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomersItem;
