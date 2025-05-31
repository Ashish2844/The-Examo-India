import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AnimatedOnView from '../components/AnimatedOnView'

const Services = () => {
    return (
        <div>
            <section><Header /></section>
            <h1 className='text-center fw-bold text-primary mt-5 mb-4'>Services</h1>\

            {/* Delivery Section Start */}
            <AnimatedOnView direction='left'>
                <section className='delivery'>
                    <div className="container mt-5">
                        <div className="row mt-5 mb-5">
                            <div className="col-md-6 mt-4 mb-4">
                                <div className="image">
                                    <img src="https://media.gettyimages.com/id/1072472414/photo/male-student-in-classroom-writing-in-notebook-stock-image.jpg?s=612x612&w=0&k=20&c=cuQi67TN1tyuH5JhaDFW_O7AMabgDsGnQMAfaau4M1E=" alt="image" className='w-100 h-100' />
                                </div>
                            </div>
                            <div className="col-md-6 mt-4 mb-4 content">
                                <h3 className='text-primary fw-bold'>Examination Delivery Solutions</h3>
                                <p className='text-secondary fw-bold fs-5'>We specialize in managing the complete delivery of examinations — from registration to result publishing — using state-of-the-art technology and proven processes.</p>
                                <span className='fw-bold'>Our offerings include:</span>
                                <p>
                                    <ul>
                                        <li className='mt-2 mb-2'>
                                            <b>Computer-Based Testing (CBT): </b><span>Secure online exams with real-time monitoring and instant result generation.</span>
                                        </li>

                                        <li className='mt-2 mb-2'>
                                            <b>Paper-Based Testing (PBT):</b><span>Traditional exam formats with efficient logistics and invigilation management.</span>
                                        </li>
                                        <li className='mt-2 mb-2'>
                                            <b>Hybrid Examinations:</b><span>Combining online and offline methods to meet diverse assessment needs.</span>
                                        </li>
                                        <li className='mt-2 mb-2'>
                                            <b>Remote Proctoring:</b><span> AI-enabled and live proctoring services ensuring integrity in remote examinations.</span>
                                        </li>
                                        <li className='mt-2 mb-2'>
                                            <b>Candidate Management:</b><span> Smooth scheduling, admit card distribution, and on-site candidate verification.</span>
                                        </li>
                                        <li className='mt-2 mb-2'>
                                            <b>Real-time Analytics:</b><span>Instant reporting dashboards and exam performance insights.</span>
                                        </li>
                                    </ul>

                                </p>
                            </div>
                        </div>
                    </div>

                </section>
            </AnimatedOnView>
            {/* Delivery Section End */}

            {/* Process Section Start */}
            <AnimatedOnView direction='left'>
            <section className="process bg-primary border mb-5">
                <h2 className='text-center fw-bold text-white mt-5 mb-5'>Process And Assessment Solutions</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 mb-5 mt-5 bg-white border border-3 rounded-4 text-center">
                            <h4 className='text-warning fw-bold mt-3 mb-3'>Question Bank Management</h4>
                            <p className='fs-5 text-secondary fw-bold mt-4 mb-3'>Creation, moderation, and secure storage of diverse question formats.</p>
                        </div>
                        <div className="col-md-2 mb-5 mt-5 bg-white border border-3 rounded-4 text-center">
                            <h4 className='text-warning fw-bold mt-3 mb-3'>Online Application and Registration Systems</h4>
                            <p className='fs-5 text-secondary fw-bold mt-4 mb-3'> Custom portals to manage candidate enrollment with ease.</p>
                        </div>
                        <div className="col-md-2 mb-5 mt-5 bg-white border border-3 rounded-4">
                            <h4 className='text-warning fw-bold mt-3 mb-3'>
                                Evaluation and Result Processing
                            </h4>
                            <p className='fs-5 text-secondary fw-bold mt-4 mb-3'>
                                Secure and accurate result processing with audit trails.
                            </p>
                        </div>
                        <div className="col-md-2 mb-5 mt-5 bg-white border border-3 rounded-4">
                            <h4 className='text-warning fw-bold mt-3 mb-3'>
                                Skill Testing and Certification
                            </h4>
                            <p className='fs-5 text-secondary fw-bold mt-4 mb-3'>Customizable assessment modules for corporate and academic certifications.</p>
                        </div>
                        <div className="col-md-2 mb-5 mt-5 bg-white border border-3 rounded-4">
                            <h4 className='text-warning fw-bold mt-3 mb-3'>Psychometric and Aptitude Testing</h4>
                            <p className='fs-5 text-secondary fw-bold mt-4 mb-3'>Scientifically designed tests for recruitment and career development.</p>
                        </div>
                    </div>
                </div>

            </section>
            </AnimatedOnView>
            {/* Process Section End*/}

            {/* Infra Section Start */}
            <AnimatedOnView direction='left'>
            <section className="infra">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mt-5 mb-5 content">
                            <h2 className='text-primary fw-bold'>InfraStructure Support Services</h2>
                            <p className='fw-bold text-secondary fs-5'>We deliver comprehensive infrastructure management, so you can focus on delivering an outstanding assessment experience.</p>
                            <p>
                                <ul>
                                    <li className='mt-4 mb-4'>
                                        <b>Pan-India Exam Centers:</b><span>Deployment and management of hundreds of certified centers.</span>
                                    </li>
                                    <li className='mt-4 mb-4'>
                                        <b>On-Site Support Teams:</b><span>Experienced technical and administrative staff to manage day-to-day operations.</span>
                                    </li>
                                    <li className='mt-4 mb-4'>
                                        <b>Biometric Verification & CCTV Surveillance:</b><span>Ensuring the authenticity and security of every candidate.</span>
                                    </li>
                                    <li className='mt-4 mb-4'>
                                        <b>Logistics and Resource Planning:</b><span>Exam material handling, secure transportation, and on-ground management..</span>
                                    </li>
                                    <li className='mt-4 mb-4'>
                                        <b>Disaster Recovery Systems:</b><span>Zero downtime solutions with backup systems to manage unexpected disruptions.</span>
                                    </li>

                                </ul>
                            </p>

                        </div>
                        <div className="col-md-6 image mt-5 mb-5">
                            <div className="image rounded-4">
                                <img src="https://media.gettyimages.com/id/170486052/photo/the-secondary-school-certificate-ssc-dakhil-and-vocational-examinations-started-today-at-10-am.jpg?s=612x612&w=0&k=20&c=krn7c7Hb3N11HvQF4xua9J1VuVW4nbjh6t4Fh9cwxBI=" alt="image" className='rounded-4' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </AnimatedOnView>
            {/* Infra Section End */}

            {/* Sectors Section Start */}
            <AnimatedOnView direction='left'>
            <section className="sector bg-primary">
                <h1 className='text-white fw-bold text-center'>Sectors We Serve</h1>
                <p>
                    <ul>
                        <li>
                            <img src="https://img.icons8.com/?size=160&id=70836&format=png" alt="star" />
                            <span className='fs-3 text-white fw-bold ms-2'>Universities and Higher Education Institutions</span>
                        </li>
                        <li>
                            <img src="https://img.icons8.com/?size=160&id=70836&format=png" alt="star" />
                            <span className='fs-3 text-white fw-bold ms-2'>Government Recruitment and Entrance Examinations</span>
                        </li>
                        <li>
                            <img src="https://img.icons8.com/?size=160&id=70836&format=png" alt="star" />
                            <span className='fs-3 text-white fw-bold ms-2'>Public Sector Undertakings (PSUs)</span>
                        </li>
                        <li>
                            <img src="https://img.icons8.com/?size=160&id=70836&format=png" alt="star" />
                            <span className='fs-3 text-white fw-bold ms-2'>Corporate Skill Assessments and Certifications</span>
                        </li>
                        <li>
                            <img src="https://img.icons8.com/?size=160&id=70836&format=png" alt="star" />
                            <span className='fs-3 text-white fw-bold ms-2'>Professional Certification and Licensing Bodies</span>
                        </li>
                        <li>
                            <img src="https://img.icons8.com/?size=160&id=70836&format=png" alt="star" />
                            <span className='fs-3 text-white fw-bold ms-2'>Non-Governmental Organizations (NGOs) conducting skill tests</span>
                        </li>

                    </ul>
                </p>
            </section>
            </AnimatedOnView>
            {/* Sectors Section End */}



            <section><Footer /></section>

        </div>
    )
}

export default Services

