import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* Home */}

      <section className="home" id="home">
        <div className="home-text">
          <h1>Medical Landing Page</h1>
          <div><h2 className="line">________________________________________________</h2></div>
          <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores at illo quibusdam rem repudiandae eum quisquam ad
              repellat adipisci repellendus iste, tempore amet harum pariatur
              assumenda voluptate eligendi modi corporis
            
          </h5>
          <br/>
          <button className="btn btn-primary">MAKE AN APPOINTEMENT</button> 
          &nbsp; &nbsp;
          <button className="btn btn-warning">LEARN MORE</button>
        </div>
        <div className="home-img">
          <img src="" />
        </div>
      </section>
      {/* Sub-service  */}
      <section className="sub-service">
        <h3 className="text-center">Professional Treatments</h3>
        <br/><br/><br/>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores at illo quibusdam rem repudiandae eum quisquam ad
              repellat adipisci repellendus iste</p>
        <div className="items">
          <div className="sub-box">
            <div className="sub-img">
              <img src="https://icons.iconarchive.com/icons/google/noto-emoji-people-family-love/1024/12144-blue-heart-icon.png" />
            </div>
            <h3>Experience</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores at illo.
            </p>
          </div>
          <div className="sub-box">
            <div className="sub-img">
              <img src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/47030/eye-emoji-clipart-md.png" />
            </div>
            <h3>Protection</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores at illo quibusdam.
            </p>
          </div>
          <div className="sub-box">
            <div className="sub-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE6oIuYtw8imDaEnfJFbxWsLti_uoFeNkVEg&usqp=CAU" />
            </div>
            <h3>Qualifications</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores at illo quibusdam rem repudiandae.
            </p>
          </div>
        </div>
      </section>

      {/* About US  */}
      <h3 className="text-center">About Us</h3>

      <section className="about" id="about">
        <div className="about-img">
          <img src="https://the-riotact.com/wp-content/uploads/2011/01/The-Best-Bulk-Billing-Doctors-in-Canberra.jpg" />
        </div>
        <div className="about-text">
          <h3>We provide High Quality Services </h3>
          <h2>Visit Our New Clinic</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            itaque nisi tempore libero quidem mollitia aspernatur, reprehenderit
            corporis nam totam sapiente eveniet dolorem nulla dicta est quasi
            quibusdam rerum facilis. Magnam rerum laboriosam blanditiis vel!
            Facere dignissimos ducimus porro inventore ex officiis, a
            perspiciatis atque accusantium aperiam.
          </p>
          <button className="btn btn-primary">Contact Us</button>
        </div>
      </section>
<footer className="text-center text-lg-start bg-white text-muted">
  <section className="f2 d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
      <span className="text-light">Get connected with us on social networks:</span>
    </div>

    <div>
      <a to="" className="me-4 link-light">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a to="" className="me-4 link-light">
        <i class="fab fa-twitter"></i>
      </a>
      <a to="" className="me-4 link-light">
        <i class="fab fa-google"></i>
      </a>
      <a to="" className="me-4 link-light">
        <i class="fab fa-instagram"></i>
      </a>
      <a to="" className="me-4 link-light">
        <i className="fab fa-linkedin"></i>
      </a>
      <a to="" className="me-4 link-light">
        <i className="fab fa-github"></i>
      </a>
    </div>
  </section>

  <section className="f1">
    <div className="container text-center text-md-start mt-5 ">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-primary"></i>Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a to="#!" className="text-reset">Link 1</a>
          </p>
          <p>
            <a to="#!" className="text-reset">Link 2</a>
          </p>
          <p>
            <a to="#!" className="text-reset">Link 3</a>
          </p>
          <p>
            <a to="#!" className="text-reset">Link 4</a>
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a to="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a to="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a to="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a to="#!" className="text-reset">Help</a>
          </p>
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3 text-primary"></i> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3 text-primary"></i>
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3 text-primary"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3 text-primary"></i> + 01 234 567 89</p>
        </div>
      </div>
    </div>
  </section>

  <div className="text-center p-4 f2 text-light">
    © 2022 Copyright: Utkarsh Singh
  </div>
</footer>

    </div>
  );
};

export default Home;
