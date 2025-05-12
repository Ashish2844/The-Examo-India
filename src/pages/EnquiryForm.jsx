import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const EnquiryForm = () => {
    return (
        <div>
            <section>
                <Header />
            </section>

            <section className="enquiry-image">
                <h1>Enquiry Form</h1>
                <div className="img">
                    <img src="https://media.istockphoto.com/id/700287204/photo/female-user-passes-security-authorization-system.jpg?s=612x612&w=0&k=20&c=BWxu89eOQyX2pC6wpXPp1DhjqbOjz5Ptk2d5IOlir8M=" alt="image" />
                </div>
            </section>


            {/* Form Section Start */}
            <section className="form w-100 h-100 mt-5 mb-5">
                <h1 className='mb-5 ms-5 fw-bold'>Message Your Query</h1>
                <form class="row g-3">
                    <div class="col-md-5 ms-5">
                        <label for="inputEmail4" class="form-label fw-bold text-secondary fs-5">First Name</label>
                        <input type="text" class="form-control" id="fname" required/>
                    </div>
                    <div class="col-md-5 ms-5">
                        <label for="inputPassword4" class="form-label fw-bold text-secondary fs-5">Last Name</label>
                        <input type="text" class="form-control" id="lname" required/>
                    </div>
                    <div class="col-5 ms-5">
                        <label for="inputAddress" class="form-label fw-bold text-secondary fs-5">Phone Number</label>
                        <input type="number" class="form-control" id="number" required />
                    </div>
                    <div class="col-5 ms-5">
                        <label for="inputAddress2" class="form-label fw-bold text-secondary fs-5">Email Address </label>
                        <input type="text" class="form-control" id="email" required />
                    </div>
                    <div class="col-md-11 ms-5">
                        <label for="floatingTextarea2" className='fw-bold text-secondary fs-5'>Message</label>
                        <textarea class="form-control" placeholder="write your message" id="floatingTextarea2"></textarea>
                    </div>
                    <div class="col-11 ms-5">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </section>
            {/* Form Section End */}

            <section>
                <Footer />
            </section>


        </div>
    )
}

export default EnquiryForm

