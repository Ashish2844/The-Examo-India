import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { FaArrowCircleRight } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <section className='registration w-100 h-auto bg-warning'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 content border-3 border-right border-warning">
                            <Link to="/"><Button>Test Registration <FaArrowCircleRight /> </Button></Link>
                        </div>
                        <div className="col-md-6 content border-3 border-left border-warning">
                            <Link to="/enquiry-form"><Button>Enquriy Form <FaArrowCircleRight /> </Button></Link>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-dark text-light pt-5 pb-3">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4 mb-4">
                            <h5>Examo</h5>
                            <p>Building solutions for a better examo experience. Reach out to us with any questions or feedback.</p>
                        </div>

                        <div className="services col-md-4 mb-4">
                            <h5>Our Services</h5>
                            <p>
                                <li><a href="#">Examination Delivery</a></li>
                                <li><a href="#">Examination Manpower Services</a></li>
                                <li><a href="#">Examination Infrastructure Services</a></li>
                                <li><a href="#">Examination Auxiliary Services</a></li>
                            </p>
                        </div>


                        <div className="col-md-4 mb-4">
                            <h5>Contact Us</h5>
                            <ul className="list-unstyled">
                                <li>Email: <a href="mailto:info@yourcompany.com" className="text-decoration-none text-info">info@yourcompany.com</a></li>
                                <li>Phone: <a href="tel:+1234567890" className="text-decoration-none text-info">+1 (234) 567-890</a></li>
                                <li>Address: 123 Main St, Your City, Country</li>
                            </ul>
                        </div>


                        {/* <div className="col-md-4 mb-4">
                            <h5>Follow Us</h5>
                            <div className="d-flex gap-2">
                                <a href="#" className="btn btn-outline-info btn-sm">Facebook</a>
                                <a href="#" className="btn btn-outline-info btn-sm">Twitter</a>
                                <a href="#" className="btn btn-outline-info btn-sm">Instagram</a>
                                <a href="#" className="btn btn-outline-info btn-sm">LinkedIn</a>
                            </div>
                        </div> */}

                    </div>

                    <div className="text-center mt-4 small text-secondary">
                        &copy; 2025 Your Company. All rights reserved.
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
