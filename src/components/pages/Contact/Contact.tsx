import React from 'react';

const Contact: React.FC = () => (
  <section id="contact-form bg-primary">
    <div className="row mb-5 mt-lg-5">
      <div className="col-12 col-md-6">
        <h1 className="h2 text-primary text-uppercase fw-light">Contact</h1>
        <h2 className="text-uppercase fw-bold">
          Everything Begins <br />
          With a Hello.
        </h2>
      </div>
      <div className="col-12 col-md-6 text-sm-start text-md-end mt-sm-4">
        <div
          className="
                  h-100
                  d-flex
                  flex-column
                  align-items-md-end
                  justify-content-center
                "
        >
          <p className="mb-0">
            <a
              className="text-decoration-none link-dark"
              href="tel:+61466661525"
            >
              <i className="fas fa-phone me-2" />
              +61 466 661 525
            </a>
          </p>
          <p>
            <a
              className="text-decoration-none link-dark"
              href="mailto:kevin@dandydigital.com.au"
            >
              <i className="fas fa-envelope me-2" />
              kevin@dandydigital.com.au
            </a>
          </p>
        </div>
      </div>
    </div>

    <div className="row justify-content-center">
      <div className="col-sm col-lg-7 mx-auto">
        <form
          className="
                  text-center
                  d-flex
                  flex-column
                  justify-content-between
                  rounded
                  text-center
                  pt-4
                  pb-5
                  px-5
                  bg-primary
                "
        >
          <h3 className="text-light mb-3 h4 fw-light">Get in Touch</h3>

          <div className="row">
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="nameInput"
                  placeholder="Name"
                />
                <label htmlFor="nameInput">Name</label>
              </div>
            </div>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="name@example.com"
            />
            <label htmlFor="emailInput">Email Address</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Leave your message here"
              id="messageInput"
              style={{ height: '100px' }}
            />
            <label htmlFor="messageInput">Leave your message here</label>
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-dark py-3">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
