import React from 'react'
import { BsFacebook,BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";


function Footer() {
    return (
        <div className='footer-main'>
           


            <div class="container1">
                <div class="row">
                    <div class="col">
                        <p className='footer-header'>Social Presence</p>
                        <ul>
                            <li>
                                About Us
                            </li>
                            <li>
                                Careers
                            </li>
                            <li>
                                Contact Us</li>
                                <li><BsFacebook /> {"\t"} <BsInstagram/>{"\t"}  <FaXTwitter/>{"\t"}  <FaLinkedinIn/></li>
                        </ul>
                    </div>
                    <div class="col">
                        <p className='footer-header'>Services</p>
                        <ul>
                            <li>
                            Web Development
                            </li>
                            <li>
                            Mobile Application Development
                            </li>
                            <li>
                            UI/UX Design</li>
                            <li>
                            Digital Marketing
                            </li>
                            <li>
                            IT Consultancy & Support
                            </li>
                            <li>
                            Artificial Intelligence (AI)</li>
                            <li>
                            Cybersecurity</li>
                        </ul>
                    </div>
                    <div class="col">
                        <p className='footer-header'>International Contact Center</p>
                        <ul>
                            <li>
                            4143 SETON DEIVE SE,
                            </li>
                            <li>
                            CALGARY, ALBERTA, 
                            </li>
                            <li>
                            CANADA. T3M 3A6 </li>
                                <li>
                                Telephone: +19491318897</li>
                        </ul>
                    </div>
                    <div class="col">
                        <p className='footer-header'>Development Center</p>
                        <ul>
                            <li>
                            +91 9432588119
                            </li>
                            <li>
                            info@ssmtsolutions.com
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>

<div className='footer-line'></div>

<p className='footer-mark'>© 2024 SSMT Solutions. All rights reserved.</p>
        </div>
    )
}

export default Footer
