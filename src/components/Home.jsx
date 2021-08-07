import React from 'react';
import { NavLink } from 'react-router-dom';
//mport "../components/Home.css";
import img from  "../components/images/web.png"

const Home = () => {
    return(
    <>
     <div className="container mt-4">
       <div class="row">
        <div class="col-10-mx-auto">
            <div className="row">
            <div className="col-md-6 pt-5 pt-lg-1 order-2 order-lg-0">
                <h2>Grow Your Business with <strong className="text-primary">TechGroup</strong>
                </h2>
                <h3 className="my-3">
                    We are the team of talented Developer Making websites
                </h3>
                <div className="mt-3">
                    <NavLink to="/services" className="btn btn-primary  font-weight-normal mt-2">
                        Get Started
                    </NavLink>
                  </div>
                </div>
            <div className="col-md-6 pt-5 pt-lg-1 order-2 order-lg-0">
                <img src={img} className="img-fluid animated rounded-circle"/>
            </div>
            </div>
            </div>
            </div>
         </div>
    
    </>
        )
}
export default Home;