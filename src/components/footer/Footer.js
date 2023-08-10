import React from 'react'
import "./Footer.css";


function Footer() {

    const year = new Date().getFullYear();
    console.log(year);

  return (
    <footer>
    <div className="footer_container">
        <div className="footr_details_one">
            <h3>Get to Know US</h3>
            <p>About us</p>
            <p>Careers</p>
            <p>Press Releases</p>
            <p>Amazon Cares</p>
        </div>
        <div className="footr_details_one">
            <h3>Connect with Us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
        </div>
        <div className="footr_details_one forres">
            <h3>Make Money with Us</h3>
            <p>Sell on Amazon</p>
            <p>Protect and Build Your Brand</p>

            <p>Become an Affiliate</p>

            <p>Advertise Your Products</p>
        </div>
        <div className="footr_details_one forres">
            <h3>Let Us Help You</h3>
            <p>Your Account</p>
            <p>Returns Centre</p>
            <p>Help</p>
        </div>
    </div>
    <div className="lastdetails">
        <img src="https://static.vecteezy.com/system/resources/previews/019/040/342/non_2x/amazon-logo-editorial-free-vector.jpg" alt="logo" />
        <p>Conditions of Use & Sale &nbsp; &nbsp;&nbsp;  Privacy Notice  &nbsp; &nbsp;&nbsp; Interest-Based Ads  &nbsp; &nbsp;&nbsp;  © 1996-{year}, Amazon.com, Inc. or its affiliates</p>
    </div>
</footer>
  )
}

export default Footer

