import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { motion } from "framer-motion";
import AnimatedOnView from '../components/AnimatedOnView';

const About = () => {
    const [shouldScrollToTop, setShouldScrollToTop] = useState(false);

    return (
        <div>
            <section>
                <Header />
            </section>

            <h1 className="mb-4 text-center fw-bold">About Us</h1>
            {/* Aboutus Section Start */}
            <AnimatedOnView direction='left'>
                <section className="mb-5 aboutus bg-info">

                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 content">
                                <h2 className='text-primary text-left'>Who We Are</h2>
                                <p className='text-secondary'>
                                    Founded in early 2016 and recognized as a Startup Company by the Department for Promotion for Industry & Internal Trade (DPIIT), The Examo India has been a pioneer in providing examination delivery, process and assessment solutions, and infrastructural support to Educational Institutions, Government/Public Sector and Corporates.
                                </p>
                                <p className='text-secondary'>
                                    The Examo India is a trusted examination delivery and infrastructure provider in the public and private sectors. On their behalf, we securely deliver a reliable, convenient and hassle-free examination experience to those seeking to improve their lives by starting a new career or developing skills/qualifications for professional development.
                                </p>
                                <p className='text-secondary'>
                                    The Examo India is a leading online aggregator, tech enabler, and service provider in the computer-based testing ecosystem. We specialize in providing seamless booking and management of examination centers and supporting infrastructure across India.
                                    Our goal is to simplify and digitize the way exams are conducted, ensuring a secure, efficient, and scalable process for educational institutions, government bodies, and corporates alike.
                                </p>
                                <p className='text-secondary'>Our customized services have the scope, scale, and ability to meet client-specific examination needs, including hardware, networking, scheduling and registration, test distribution and administration, and identity management. From solutions that promote portability to increased security, like the use of cameras, we design customized programs. </p>
                            </div>
                            <div className="col-md-6 image start-first">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src="https://cdn.pixabay.com/photo/2024/11/21/16/18/ai-generated-9214143_1280.jpg" alt="image" className='img1 img-fluid' />
                                        </div>
                                        <div className="col-md-4">
                                            <img src="https://cdn.pixabay.com/photo/2018/09/14/12/20/conference-3677032_1280.jpg" alt="image" className='img2 img-fluid' />
                                        </div>
                                        <div className="col-md-4">
                                            <img src="https://cdn.pixabay.com/photo/2021/06/20/09/22/exam-6350373_1280.jpg" alt="image" className='img3 img-fluid' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </AnimatedOnView >

            {/*AboutUs Section End  */}

            {/* Mission and Vision Section start */}
            <AnimatedOnView direction='left'>
                <section className="mb-5 bg-primary w-100 mission">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12  border bg-white content rounded-5">
                                <h2 className='text-primary text-center fw-bold'>Mission</h2>
                                <p className='fs-5 text-secondary'>At The Examo India, our mission is to transform the examination landscape by delivering seamless, secure, and scalable digital assessment solutions. We are committed to bridging the gap between organizations and high-quality testing infrastructure by offering end-to-end services—from booking and managing examination centers to providing advanced technology support and on-ground execution.

                                    We strive to ensure that every stakeholder—be it educational institutions, government agencies, corporates, or test-takers—experiences a smooth and reliable examination process. By integrating smart technology with a human-centric approach, we aim to enhance accessibility, reduce administrative burden, and uphold the highest standards of transparency and integrity in computer-based testing.</p>
                            </div>
                            <div className="col-md-12  border bg-white mb-3 content rounded-5">
                                <h2 className='text-primary text-center fw-bold'>Vision</h2>
                                <p className='fs-5 text-secondary'>Our vision is to become India’s leading and most trusted examination facilitation platform—empowering the future of assessments through innovation, reliability, and excellence.

                                    We envision a future where every examination, regardless of scale or complexity, is delivered effortlessly with the help of intelligent systems, efficient infrastructure, and a nationwide network of best-in-class testing centers. Our goal is to set new benchmarks in the field of online assessments by continuously evolving our services, embracing emerging technologies, and staying aligned with the dynamic needs of the education and recruitment sectors.

                                    By building strong partnerships and a reputation for quality, Examo India aspires to be the backbone of modern digital examinations in the country.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedOnView >
            {/* Mission and Vision End */}


            {/* Values Section Start */}
            <AnimatedOnView direction='left'>
                <section className="values mb-5">
                    <h1 className='text-center fw-bold text-primary mt-4 mb-5'>Values</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 content">
                                <h5 className='fw-bold'>Integrity and Transparency</h5>
                                <p className='text-center text-secondary'>We believe in conducting all our operations with honesty, fairness, and openness. Integrity is at the heart of every exam we facilitate, ensuring trust and credibility across all stakeholders.</p>
                            </div>
                            <div className="col-md-2 content">
                                <h5 className='fw-bold mt-5 ms-3'>
                                    Innovation and Technology Leadership
                                </h5>
                                <p className='text-center text-secondary'>
                                    We continuously embrace emerging technologies to enhance the examination process. Our commitment to innovation drives us to create smarter, more efficient, and secure solutions for modern-day assessments.</p>
                            </div>
                            <div className="col-md-2 content">
                                <h5 className='fw-bold'>
                                    Customer-Centric Approach
                                </h5>
                                <p className='text-center text-secondary'>
                                    Our clients’ needs are at the core of our services. We listen, adapt, and tailor our solutions to ensure seamless experiences and long-term partnerships based on trust, support, and success.
                                </p>

                            </div>
                            <div className="col-md-2 content">
                                <h5 className='fw-bold mt-3'>
                                    Excellence in Service Delivery
                                </h5>
                                <p className='text-center text-secondary'>
                                    We strive for perfection in every project, big or small. Our team is dedicated to delivering high-quality service with precision, speed, and professionalism, ensuring every examination experience is smooth and hassle-free.
                                </p>
                            </div>
                            <div className="col-md-2 content">
                                <h5 className='fw-bold'>
                                    Security and Confidentiality
                                </h5>
                                <p className='text-center text-secondary'>
                                    We uphold the highest standards of data security and confidentiality. Safeguarding exam content, candidate information, and organizational data is a non-negotiable priority for us.
                                </p>
                            </div>
                            <div className="col-md-2 content">
                                <h5 className='fw-bold mt-5'>
                                    Accessibility and Inclusiveness
                                </h5>
                                <p className='text-center text-secondary'>
                                    We are committed to making examinations accessible to all candidates across diverse geographies and backgrounds. Our infrastructure is designed to accommodate different needs, promoting fairness and equal opportunity.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedOnView >
            {/* Values Section End */}



            {/* Offer Section Start */}
            <AnimatedOnView direction='left'>
                <section className="offer border bg-primary w-100 h-100">
                    <h2 className='text-center mt-5 mb-4 text-white'>What We Offer</h2>
                    <h1 className="text-center mb-5 text-white fw-bold">The Examo Services</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 ms-2 mt-2 mb-5 content">
                                <div className="logo mt-5 ms-3 mb-3"><i className="fa-solid fa-file-pen"></i></div>
                                <h4 className='fw-bold ms-2 mt-4 mb-4'>Examination Delivery</h4>
                                <div className="list">
                                    <ul>
                                        <li>A large global network and inventory of reliable centers --colleges and universities equipped with state-of-the-art facilities</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-3 ms-3 mt-2 mb-5 content">
                                <div className="logo mt-5 ms-3 mb-3"><i className="fa-solid fa-people-group"></i></div>
                                <h4 className='fw-bold ms-2 mt-4 mb-4'>Examination <br />Manpower Services</h4>
                                <div className="list">
                                    <ul>
                                        <li>Invigilation Manpower</li>
                                        <li>Administrative Manpower</li>
                                        <li>Technical Manpower</li>
                                        <li>eProctor (for virtual exams)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-3 ms-3 mt-2 mb-5 content">
                                <div className="logo mt-5 ms-3 mb-3"><i className="fa-solid fa-house-laptop"></i></div>
                                <h4 className='fw-bold ms-2 mt-4 mb-4'>Examination <br />Infrastructure Services</h4>
                                <div className="list">
                                    <ul>
                                        <li>IT & server support</li>
                                        <li>Computer hardware</li>
                                        <li>Biometric Attendance</li>
                                        <li>CCTV Security</li>
                                        <li>Webcam photo</li>
                                        <li>Signage Direction</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-3 ms-3 mt-2 mb-5 content">
                                <div className="logo mt-5 ms-3 mb-3"><i className="fa-solid fa-hand-holding-hand"></i></div>
                                <h4 className='fw-bold ms-2 mt-4 mb-4'>Examination <br />Auxiliary Services</h4>
                                <div className="list">
                                    <ul>
                                        <li>Additional security requirement</li>
                                        <li>Additional manpower</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedOnView >
            {/* Offer Section End */}


            {/* Why Choose Section Start */}
            <AnimatedOnView direction='left' >
                <section className="mb-5 choose">
                    <div className="container">
                        <div className="row">
                            <h1 className='text-primary fw-bold text-center mt-5 mb-5'>Why Choose Us </h1>
                            <div className="col-md-6 mt-2 mb-2 border border-4 rounded-4">
                                <h3 className='text-warning fw-bold'>Pan-India Network of Verified Exam Centers:</h3>
                                <p className='text-secondary'>The Examo India offers a widespread network of thoroughly verified and well-equipped exam centers across the country. This extensive reach ensures seamless exam conduction, even in remote and tier-2/3 cities, providing greater accessibility for candidates while maintaining high standards of infrastructure and security.</p>
                            </div>
                            <div className="col-md-6 mt-2 mb-2 border border-4 rounded-4">
                                <h3 className='text-warning fw-bold'>Robust, Scalable Technology Platform:</h3>
                                <p className='text-secondary'>At the core of our services is a powerful, secure, and scalable tech platform designed to handle examinations of any size and complexity. Our advanced systems ensure real-time monitoring, data security, smooth candidate management, and efficient delivery of both online and offline assessments, without disruptions.</p>
                            </div>
                            <div className="col-md-6 mt-2 mb-2 border border-4 rounded-4">
                                <h3 className='text-warning fw-bold'>Expert Support Team and Logistics Coordination:</h3>
                                <p className='text-secondary'>The Examo India’s experienced and responsive support team works closely with clients to ensure end-to-end coordination. From pre-exam setup and candidate communication to on-ground logistics and post-exam processes, we offer complete support to guarantee a hassle-free experience. Our logistics team ensures timely delivery of exam materials and smooth management of onsite operations.</p>
                            </div>
                            <div className="col-md-6 mt-2 mb-2 border border-4 rounded-4">
                                <h3 className='text-warning fw-bold'>Flexible Solutions Tailored to Your Exam Needs:</h3>
                                <p className='text-secondary'>Understanding that every examination has its own unique requirements, The Examo India provides highly customizable solutions. Whether you require remote proctoring, hybrid models, customized test content, scalable scheduling, or specialized accessibility arrangements, we design our services to fit your specific needs. Our flexible approach allows educational institutions, certification bodies, and corporates to conduct exams that align perfectly with their objectives, timelines, and candidate expectations.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedOnView >
            {/* Why Choose Section End */}


            {/* Footer Section Start */}

            <AnimatedOnView direction='left'>
                <section>
                    <Footer />
                </section>
            </AnimatedOnView >
            {/* Footer Section End */}
        </div>
    )
}

export default About;
