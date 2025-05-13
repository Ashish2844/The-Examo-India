import { React } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { FaArrowCircleRight } from "react-icons/fa";
import Slider from "react-slick";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import pic1 from './../assets/images/pic3.jpg'
import pic2 from './../assets/images/exampic2.jpg'
import { MdOutlinePersonPin } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import { IoEarthOutline } from "react-icons/io5";
import Counter from '../components/Counter';
import { FaFlagCheckered } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { FaChair } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import AnimatedSection from '../components/AnimatedSection';
import AnimatedOnView from '../components/AnimatedOnView';


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };

  return (
    <div>
      <section className='header'><Header /></section>

      {/* Slider Section Start */}
      <AnimatedSection delay={0.5}>
        <section className="slider">
          <div className="slider-container mb-4">
            <Slider {...settings}>
              <div className='swiperslide'>
                <img src={pic1} alt="examimg" className='pic1' />
                <div className="cont">
                  <p>Expert, Secure and Reliable Solution for Examination Delievery.</p>
                </div>
              </div>
              <div className='swiperslide'>
                <img src={pic2} alt="examimg" className='pic2' />
                <div className="cont">
                  <p>Global Network of Colleges and Universities with state-of-the-Art Facilities.</p>
                </div>
              </div>
            </Slider>
          </div>
        </section>
      </AnimatedSection>
      {/* Slide Section End */}


      {/* About Section Start */}

      <AnimatedOnView direction="left">
        <section className="about mt-4" style={{ padding: '2rem', background: '#f5f5f5' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-6  images">
                <img src="https://testpanindia.com/wp-content/uploads/2023/09/Photo-2.jpg" alt="" className='img1' />
                <img src="https://testpanindia.com/wp-content/uploads/2023/09/Photo-3.jpg" alt="" className='img2' />
                <img src="https://testpanindia.com/wp-content/uploads/2023/09/Photo-1.jpg" alt="" className='img3' />
              </div>
              <div className="col-md-6 content">
                <h3 className='text-primary'>Who We Are ?</h3>
                <h2 className='text-secondary'>About Examo India</h2>
                <p>Founded in early 2016 and recognized as a Startup Company by the Department for Promotion for Industry & Internal Trade (DPIIT), The Examo India has been a pioneer in providing examination delivery, process and assessment solutions, and infrastructural support to Educational Institutions, Government/Public Sector and Corporates.</p>
                <p>The Examo India is a trusted examination delivery and infrastructure provider in the public and private sectors. On their behalf, we securely deliver a reliable, convenient and hassle-free examination experience to those seeking to improve their lives by starting a new career or developing skills/qualifications for professional development. </p>
                <button className='text-center'><a href="#">Test Center Registration <FaArrowCircleRight /></a></button>
              </div>
            </div>
          </div>
        </section>
      </AnimatedOnView>


      {/* About Section End */}


      {/* Purpose Section Start */}
      <AnimatedOnView direction="left">
        <section className="purpose">
          <h3 className='text-center text-primary mt-3'>Our Purpose</h3>
          <h1 className='text-center text-secondary mt-3 mb-4'>The Examo India Philosophy</h1>

          <div className="container mb-4">
            <div className="row">
              <div className="col-md-4 ms-4 mb-4 box">
                <h3 className='text-left ms-4 mt-5 text-primary'>Vision</h3>
                <p className='text-left mt-4 ms-4 w-75'>Become the preferred and reliable partner in the global examination delivery ecosystem, providing the best-in-class service, infrastructure and manpower through state-of-the-art technology, standardized examination delivery, and a customer-centric approach facilitating stellar performance of examination takers. </p>
              </div>
              <div className="col-md-4 ms-4 mb-4 box">
                <h3 className='text-left ms-4 mt-5 text-primary'>Mission</h3>
                <p className='text-sm-left mt-4 ms-4 w-75'>Providing high quality, trusted and standardized examination experience through reliable centres globally, with connectivity, security and futuristic hi-tech solutions, infrastructure and manpower that guarantee a level playing field for all examination takers.</p>
              </div>
              <div className="col-md-4 ms-4 mb-4 box">
                <h3 className='text-left ms-4 mt-5 text-primary'>Values</h3>
                <p className='text-sm-left mt-4 ms-4 w-75'>Our Values are fundamental to our organization's culture and behaviors and serve as a reinforcing bedrock to our commitment towards quality, standardization and reliability.</p>
                <div className='text-left ms-4'>
                  <p>
                    <MdOutlinePersonPin />
                    <b>Customer Centeric </b><br />
                    <i>Putting customer first</i>
                  </p>
                  <p>
                    <FaRegHandshake />
                    <b>Trustworthy </b><br />
                    <span>Your trusted partner</span>
                  </p>
                  <p>
                    <IoEarthOutline />
                    <b>Futuristic </b><br />
                    <span>Leading with vision</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedOnView>


      {/* Purpose Section End */}

      {/* Experience Section Start */}
      <AnimatedOnView direction='left'>
        <section className='experience'>
          <h1 className='text-center mt-5'>The Examo Experience</h1>
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <div className="logo">
                  <FaFlagCheckered />
                </div>
                <Counter start={0} end={15} delay={2} duration={5}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef}></span>
                    </div>
                  )}
                </Counter>
                <p>Countries</p>
              </div>

              <div className="col-md-2">
                <div className="logo">
                  <FaMap />
                </div>
                <Counter start={0} end={427} delay={1} duration={5}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </Counter>
                <p>Cities</p>
              </div>

              <div className="col-md-2">
                <div className="logo">
                  <FaChair />
                </div>
                <Counter start={0} end={58739} delay={1} duration={5}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </Counter>
                <p>Seats</p>
              </div>

              <div className="col-md-2">
                <div className="logo">
                  <IoLocation />
                </div>
                <Counter start={0} end={2896} delay={1} duration={5}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </Counter>
                <p>Examination Centers</p>
              </div>

              <div className="col-md-2">
                <div className="logo">
                  <IoIosPeople />
                </div>
                <Counter start={0} end={46} delay={1} duration={5}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </Counter>
                <p>Active Clients</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedOnView>


      {/* Experience Section End */}


      {/* Clients Section Start */}
      <AnimatedOnView direction='left'>
        <section className='clients w-auto h-auto'>
          <h1 className='text-center mt-5 fw-bold'>The Examo Clients</h1>
          <div className="container">
            <div className="row">
              <div className="col-md-2 images"><img src="https://testpanindia.com/wp-content/uploads/2023/09/Logos-49.png" alt="image" /></div>
              <div className="col-md-2 images"><img src="https://testpanindia.com/wp-content/uploads/2023/09/Logos-10.png" alt="image" /></div>
              <div className="col-md-2 images"><img src="https://testpanindia.com/wp-content/uploads/2023/09/Logos-02.png" alt="image" /></div>
              <div className="col-md-2 images"><img src="https://testpanindia.com/wp-content/uploads/2023/09/Logos-18.png" alt="image" /></div>
              <div className="col-md-2 images"><img src="https://testpanindia.com/wp-content/uploads/2023/09/Logos-47.png" alt="image" /></div>
              <div className="col-md-2 images"><img src="https://testpanindia.com/wp-content/uploads/2023/09/Logos-05.png" alt="image" /></div>
            </div>
          </div>

          <div className='text-center mb-5'>
            <Link to="/">
              <Button className='border border-primary bg-primary text-white'>More Clients <FaArrowCircleRight className='ms-2' /></Button>
            </Link>
          </div>

        </section>
      </AnimatedOnView>

      {/* Clients Section End */}


      {/* Services Section Start */}
      <AnimatedOnView>
        <section className="services border bg-primary w-100 h-100">
          <h2 className='text-center mt-5 mb-4 text-white'>What We Do</h2>
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
      </AnimatedOnView>

      {/* Services Section End */}


      {/* examination Section Start */}
      <AnimatedOnView direction='left'>
        <section className="examination">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 mt-5 data">
                <div className="image">
                  <img src="https://testpanindia.com/wp-content/uploads/2024/08/Artboard-9-768x299.jpg" alt="image" />
                </div>
                <h6 className='fw-bold text-danger'>Enhancing Exam Venues: Best Practices for Creating the Perfect Testing Environment</h6>
                <p className='fw-normal fs-6 text-secondary'>Enhancing Exam Venues: Best Practices for Creating the Perfect Testing Environment Designing an optimal exam venue is crucial to ensuring that candidates can perform at their best. The right environment can significantly impact their concentration and overall</p>
                <Link to='/'><Button className='text-danger fw-bold'>Read More {">>"}</Button></Link>
              </div>

              <div className="col-12 col-md-4 mt-5 data">
                <div className="image">
                  <img src="https://testpanindia.com/wp-content/uploads/2024/08/Artboard-11-768x299.jpg" alt="image" />
                </div>
                <h6 className="fw-bold text-danger">How Innovations and Technology are Shaping the Future of Examinations</h6>
                <p className='fw-normal fs-6 text-secondary'>How Innovations and Technology are Shaping the Future of Examinations The way we conduct exams is undergoing a major transformation, driven by technological advancements and changing needs. As traditional methods evolve, new innovations are reshaping the examination</p>
                <Link to='/'><Button className='text-danger fw-bold'>Read More {">>"}</Button></Link>
              </div>

              <div className="col-12 col-md-4 mt-5 data">
                <div className="image">
                  <img src="https://testpanindia.com/wp-content/uploads/2024/08/Artboard-10-768x299.jpg" alt="image" />
                </div>
                <h6 className="fw-bold text-danger">Mastering Examination Administration: Key Steps for Online and Offline Assessments</h6>
                <p className='fw-normal fs-6 text-secondary'>Mastering Examination Administration: Key Steps for Online and Offline Assessments In today’s tech-driven world, exams have largely gone digital, bringing flexibility and convenience but also new challenges. Organizing an exam, whether online or offline, requires thorough planning,</p>
                <Link to='/'><Button className='text-danger fw-bold'>Read More {">>"}</Button></Link>
              </div>

            </div>
          </div>
        </section>
      </AnimatedOnView>

      <AnimatedOnView direction='left'>
        <section className="examination2">
          <div className="container mb-4 mt-4">
            <div className="row">
              <div className="col-12  col-md-4 mt-4 data">
                <div className="image">
                  <img src="https://testpanindia.com/wp-content/uploads/2022/03/Optimizing-ExamCentres-768x512.jpg" alt="image" />
                </div>
                <h6 className="fw-bold text-danger">Optimizing Examination Centres: Creating the Perfect Testing Environment</h6>
                <p className='fw-normal fs-6 text-secondary'>Creating a perfect testing environment is essential for any examination. This environment must be optimized for candidates’ psychological and physiological well-being so that they perform at their best.</p>
                <Link to='/'><Button className='text-danger fw-bold'>Read More {">>"}</Button></Link>
              </div>

              <div className="col-12 col-md-4 mt-4 data">
                <div className="image">
                  <img src="https://testpanindia.com/wp-content/uploads/2022/03/Streamlining-Examination-Management-768x512.jpg" alt="image" />
                </div>
                <h6 className="fw-bold text-danger">Streamlining Examination Management and Delivery</h6>
                <p className='fw-normal fs-6 text-secondary'>The education industry is constantly evolving, and so is the need to streamline examination management and delivery.</p>
                <Link to='/'><Button className='text-danger fw-bold'>Read More {">>"}</Button></Link>
              </div>

              <div className="col-12 col-md-4 mt-4 data">
                <div className="image">
                  <img src="https://testpanindia.com/wp-content/uploads/2022/03/Future-of-Exams-Trends-768x513.jpg" alt="image" />
                </div>
                <h6 className="fw-bold text-danger">The Future of Conducting Examinations: Trends and Innovations</h6>
                <p className='fw-normal fs-6 text-secondary'>The COVID-19 pandemic has impacted almost every sector, and education is no exception. It has forced educational institutes to adopt new methods of learning dissemination.</p>
                <Link to='/'><Button className='text-danger fw-bold'>Read More {">>"}</Button></Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedOnView>

      {/* examination Section End */}

      <section className='footer'>
        <Footer />
      </section>


    </div >
  )
}

export default Home
