const LandingPageComponent = () => {
  return (
    <>
      {/* Preloader */}
      <div className="preloader">
        <div className="loader">
          <div className="loader-outter"></div>
          <div className="loader-inner"></div>
          <div className="indicator">
            <svg width="1px" height="12px">
              <polyline
                id="back"
                points="1 6 4 6 6 11 10 1 12 6 15 6"
              ></polyline>
              <polyline
                id="front"
                points="1 6 4 6 6 11 10 1 12 6 15 6"
              ></polyline>
            </svg>
          </div>
        </div>
      </div>
      {/* End Preloader */}

      {/* Get Pro Button 
          <ul className="pro-features">
              <a className="get-pro" href="#">Get Pro</a>
              <li className="big-title">Pro Version Available on Themeforest</li>
              <li className="title">Pro Version Features</li>
              <li>2+ premade home pages</li>
              <li>20+ html pages</li>
              <li>Color Plate With 12+ Colors</li>
              <li>Sticky Header / Sticky Filters</li>
              <li>Working Contact Form With Google Map</li>
              <div className="button">
                  <a href="http://preview.themeforest.net/item/mediplus-medical-and-doctor-html-template/full_screen_preview/26665910?_ga=2.145092285.888558928.1591971968-344530658.1588061879" target="_blank" className="btn">Pro Version Demo</a>
                  <a href="https://themeforest.net/item/mediplus-medical-and-doctor-html-template/26665910" target="_blank" className="btn">Buy Pro Version</a>
              </div>
          </ul>*/}

      {/* Slider Area */}
      <section className="slider">
        <div className="hero-slider">
          {/* Start Single Slider */}
          <div
            className="single-slider"
            style={{ backgroundImage: 'url("/assets/slider2.jpg")' }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="text">
                    <h1>
                      We Provide <span>Medical</span> Services That You Can{" "}
                      <span>Trust!</span>
                    </h1>
                    <p>
                      We deliver trustworthy medical services, prioritizing your
                      well-being with a commitment to excellence and compassion.{" "}
                    </p>
                    <div className="button">
                      <a href="#" className="btn">
                        Get Appointment
                      </a>
                      <a href="#" className="btn primary">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Single Slider */}
          {/* Start Single Slider */}
          <div
            className="single-slider"
            style={{ backgroundImage: 'url("/assets/slider.jpg")' }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="text">
                    <h1>
                      We Provide <span>Medical</span> Services That You Can{" "}
                      <span>Trust!</span>
                    </h1>
                    <p>
                      We deliver trustworthy medical services, prioritizing your
                      well-being with a commitment to excellence and compassion.
                    </p>
                    <div className="button">
                      <a href="#" className="btn">
                        Get Appointment
                      </a>
                      <a href="#" className="btn primary">
                        About Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Start End Slider */}
          {/* Start Single Slider */}
          <div
            className="single-slider"
            style={{ backgroundImage: 'url("/assets/slider3.jpg")' }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="text">
                    <h1>
                      We Provide <span>Medical</span> Services That You Can{" "}
                      <span>Trust!</span>
                    </h1>
                    <p>
                      We deliver trustworthy medical services, prioritizing your
                      well-being with a commitment to excellence and compassion.
                    </p>
                    <div className="button">
                      <a href="#" className="btn">
                        Get Appointment
                      </a>
                      <a href="#" className="btn primary">
                        Conatct Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Single Slider */}
        </div>
      </section>
      {/* End Slider Area */}

      {/* Start Schedule Area */}
      <section className="schedule">
        <div className="container">
          <div className="schedule-inner">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12 ">
                {/* single-schedule */}
                <div className="single-schedule first">
                  <div className="inner">
                    <div className="icon">
                      <i className="fa fa-ambulance"></i>
                    </div>
                    <div className="single-content">
                      <span>Lorem Amet</span>
                      <h4>Emergency Cases</h4>
                      <p>
                        In emergency cases, trust our dedicated team to deliver
                        reliable medical services with a commitment for your
                        well-being.
                      </p>
                      <a href="#">
                        LEARN MORE<i className="fa fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* single-schedule */}
                <div className="single-schedule middle">
                  <div className="inner">
                    <div className="icon">
                      <i className="icofont-prescription"></i>
                    </div>
                    <div className="single-content">
                      <span>Fusce Porttitor</span>
                      <h4>Doctors Timetable</h4>
                      <p>
                        Complementing our doctors&#39; timetable, our committed
                        medical services prioritize trust for your optimal
                        well-being.
                      </p>
                      <a href="#">
                        LEARN MORE<i className="fa fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-12">
                {/* single-schedule */}
                <div className="single-schedule last">
                  <div className="inner">
                    <div className="icon">
                      <i className="icofont-ui-clock"></i>
                    </div>
                    <div className="single-content">
                      <span>Donec luctus</span>
                      <h4>Opening Hours</h4>
                      <ul className="time-sidual">
                        <li className="day">
                          Monday - Fridayp <span>8.00-20.00</span>
                        </li>
                        <li className="day">
                          Saturday <span>9.00-18.30</span>
                        </li>
                        <li className="day">
                          Monday - Thusday <span>9.00-15.00</span>
                        </li>
                      </ul>
                      <a href="#">
                        LEARN MORE<i className="fa fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/End Start schedule Area */}

      {/* Start Feautes */}
      <section className="Feautes section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Are Always Ready to Help You & Your Family</h2>
                <img src="/assets/section-img.png" alt="#" />
                <p>
                  Ensuring your peace of mind, our unwavering commitment is to
                  be always ready to help you and your family with trusted and
                  compassionate medical services.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-12">
              {/* Start Single features */}
              <div className="single-features">
                <div className="signle-icon">
                  <i className="icofont icofont-ambulance-cross"></i>
                </div>
                <h3>Emergency Help</h3>
                <p>
                  In emergency cases, trust our dedicated team to deliver
                  reliable medical services
                </p>
              </div>
              {/* End Single features */}
            </div>
            <div className="col-lg-4 col-12">
              {/* Start Single features */}
              <div className="single-features">
                <div className="signle-icon">
                  <i className="icofont icofont-medical-sign-alt"></i>
                </div>
                <h3>Enriched Pharmecy</h3>
                <p>
                  Count on our enriched pharmacy to support your health needs
                </p>
              </div>
              {/* End Single features */}
            </div>
            <div className="col-lg-4 col-12">
              {/* Start Single features */}
              <div className="single-features last">
                <div className="signle-icon">
                  <i className="icofont icofont-stethoscope"></i>
                </div>
                <h3>Medical Treatment</h3>
                <p>
                  Experience the assurance of our medical treatment, dedicated
                  to your well-being.
                </p>
              </div>
              {/* End Single features */}
            </div>
          </div>
        </div>
      </section>
      {/*/ End Feautes */}

      {/* Start Fun-facts */}
      <div id="fun-facts" className="fun-facts section overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Fun */}
              <div className="single-fun">
                <i className="icofont icofont-home"></i>
                <div className="content">
                  <span className="counter">3468</span>
                  <p>Hospital Rooms</p>
                </div>
              </div>
              {/* End Single Fun */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Fun */}
              <div className="single-fun">
                <i className="icofont icofont-user-alt-3"></i>
                <div className="content">
                  <span className="counter">557</span>
                  <p>Specialist Doctors</p>
                </div>
              </div>
              {/* End Single Fun */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Fun */}
              <div className="single-fun">
                <i className="icofont-simple-smile"></i>
                <div className="content">
                  <span className="counter">4379</span>
                  <p>Happy Patients</p>
                </div>
              </div>
              {/* End Single Fun */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Fun */}
              <div className="single-fun">
                <i className="icofont icofont-table"></i>
                <div className="content">
                  <span className="counter">32</span>
                  <p>Years of Experience</p>
                </div>
              </div>
              {/* End Single Fun */}
            </div>
          </div>
        </div>
      </div>
      {/*/ End Fun-facts */}

      {/* Start Why choose */}
      <section className="why-choose section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Offer Different Services To Improve Your Health</h2>
                <img src="/assets/section-img.png" alt="#" />
                <p>
                  Elevating your well-being is our mission through a variety of
                  health-improving services tailored just for yous.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
              {/* Start Choose Left */}
              <div className="choose-left">
                <h3>Who We Are</h3>
                <p>
                  At MediPlus, our mission is to be more than a healthcare
                  provider — we aspire to be your trusted partner on your
                  journey to optimal health and well-being. With a commitment to
                  excellence, compassion, and personalized care, we are here for
                  you every step of the way.{" "}
                </p>
                <p>
                  At the heart of our commitment, these services reflect our
                  dedication to your well-being and overall health.{" "}
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul className="list">
                      <li>
                        <i className="fa fa-caret-right"></i>General Treatment.{" "}
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>Teeth Whitening.
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>Heart Surgery.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list">
                      <li>
                        <i className="fa fa-caret-right"></i>Ear Treatment.{" "}
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>Vision Problems.
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>Blood Transfusion.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Choose Left */}
            </div>
            <div className="col-lg-6 col-12">
              {/* Start Choose Rights */}
              <div className="choose-right">
                <div className="video-image">
                  {/* Video Animation */}
                  <div className="promo-video">
                    <div className="waves-block">
                      <div className="waves wave-1"></div>
                      <div className="waves wave-2"></div>
                      <div className="waves wave-3"></div>
                    </div>
                  </div>
                  {/*/ End Video Animation */}
                  <a
                    href="https://www.youtube.com/watch?v=RFVXy6CRVR4"
                    className="video video-popup mfp-iframe"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                </div>
              </div>
              {/* End Choose Rights */}
            </div>
          </div>
        </div>
      </section>
      {/*/ End Why choose */}

      {/* Start Call to action */}
      <section
        className="call-action overlay"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="content">
                <h2>Do you need Emergency Medical Care? Call @ 1234 56789</h2>
                <p>
                  For urgent medical attention, reach us immediately at 1234
                  56789. Your well-being is our top priority.
                </p>
                <div className="button">
                  <a href="#" className="btn">
                    Contact Now
                  </a>
                  <a href="#" className="btn second">
                    Learn More<i className="fa fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ End Call to action */}

      {/* Start portfolio */}
      <section className="portfolio section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Maintain Cleanliness Rules Inside Our Hospital</h2>
                <img src="/assets/section-img.png" alt="#" />
                <p>
                  Committed to your safety, we uphold strict cleanliness
                  standards throughout our hospital premises
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="owl-carousel portfolio-slider">
                <div className="single-pf">
                  <img src="/assets/pf1.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
                <div className="single-pf">
                  <img src="/assets/pf2.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
                <div className="single-pf">
                  <img src="/assets/pf3.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
                <div className="single-pf">
                  <img src="/assets/pf4.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
                <div className="single-pf">
                  <img src="/assets/pf1.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
                <div className="single-pf">
                  <img src="/assets/pf2.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
                <div className="single-pf">
                  <img src="/assets/pf3.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
                <div className="single-pf">
                  <img src="/assets/pf4.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ End portfolio */}

      {/* Start service */}
      <section className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Offer Different Services To Improve Your Health</h2>
                <img src="/assets/section-img.png" alt="#" />
                <p>
                  Explore our diverse health-improving services tailored to
                  enhance your well-being and vitality.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Service */}
              <div className="single-service">
                <i className="icofont icofont-prescription"></i>
                <h4>
                  <a href="service-details.html">General Treatment</a>
                </h4>
                <p>
                  Providing comprehensive care, our general treatment services
                  are dedicated to your overall health and wellness.{" "}
                </p>
              </div>
              {/* End Single Service */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Service */}
              <div className="single-service">
                <i className="icofont icofont-tooth"></i>
                <h4>
                  <a href="service-details.html">Teeth Whitening</a>
                </h4>
                <p>
                  Discover a brighter smile with our professional teeth
                  whitening services, enhancing your confidence and dental
                  well-being.
                </p>
              </div>
              {/* End Single Service */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Service */}
              <div className="single-service">
                <i className="icofont icofont-heart-alt"></i>
                <h4>
                  <a href="service-details.html">Heart Surgery</a>
                </h4>
                <p>
                  At the core of our expertise, trust us for advanced and
                  compassionate heart surgery, prioritizing your cardiac
                  well-being.{" "}
                </p>
              </div>
              {/* End Single Service */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Service */}
              <div className="single-service">
                <i className="icofont icofont-listening"></i>
                <h4>
                  <a href="service-details.html">Ear Treatment</a>
                </h4>
                <p>
                  Experience specialized care for your ears with our dedicated
                  ear treatment services, ensuring your auditory well-being and
                  comfort.{" "}
                </p>
              </div>
              {/* End Single Service */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Service */}
              <div className="single-service">
                <i className="icofont icofont-eye-alt"></i>
                <h4>
                  <a href="service-details.html">Vision Problems</a>
                </h4>
                <p>
                  Addressing your vision concerns, our specialized services for
                  vision problems focus on enhancing your eye health and visual
                  well-being.
                </p>
              </div>
              {/* End Single Service */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Service */}
              <div className="single-service">
                <i className="icofont icofont-blood"></i>
                <h4>
                  <a href="service-details.html">Blood Transfusion</a>
                </h4>
                <p>
                  Ensuring your well-being, our blood transfusion services
                  provide a critical lifeline, delivering vital support when you
                  need it the most.{" "}
                </p>
              </div>
              {/* End Single Service */}
            </div>
          </div>
        </div>
      </section>
      {/*/ End service */}

      {/* Pricing Table */}
      <section className="pricing-table section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Provide You The Best Treatment In Resonable Price</h2>
                <img src="/assets/section-img.png" alt="#" />
                <p>
                  Delivering top-notch treatment at reasonable prices, we
                  prioritize your well-being by making quality healthcare
                  accessible to all.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Single Table */}
            <div className="col-lg-4 col-md-12 col-12">
              <div className="single-table">
                {/* Table Head */}
                <div className="table-head">
                  <div className="icon">
                    <i className="icofont icofont-ui-cut"></i>
                  </div>
                  <h4 className="title">Plastic Suggery</h4>
                  <div className="price">
                    <p className="amount">
                      $199<span>/ Per Visit</span>
                    </p>
                  </div>
                </div>
                {/* Table List */}
                <ul className="table-list">
                  <li>
                    <i className="icofont icofont-ui-check"></i>Cosmetic
                    Enhancements
                  </li>
                  <li>
                    <i className="icofont icofont-ui-check"></i>Reconstructive
                    Procedures
                  </li>
                  <li className="cross">
                    <i className="icofont icofont-ui-close"></i>Aesthetic
                    Surgery
                  </li>
                  <li className="cross">
                    <i className="icofont icofont-ui-close"></i>Facial
                    Transformations
                  </li>
                  <li className="cross">
                    <i className="icofont icofont-ui-close"></i>Body Contouring
                  </li>
                </ul>
                <div className="table-bottom">
                  <a className="btn" href="#">
                    Book Now
                  </a>
                </div>
                {/* Table Bottom */}
              </div>
            </div>
            {/* End Single Table*/}
            {/* Single Table */}
            <div className="col-lg-4 col-md-12 col-12">
              <div className="single-table">
                {/* Table Head */}
                <div className="table-head">
                  <div className="icon">
                    <i className="icofont icofont-tooth"></i>
                  </div>
                  <h4 className="title">Teeth Whitening</h4>
                  <div className="price">
                    <p className="amount">
                      $299<span>/ Per Visit</span>
                    </p>
                  </div>
                </div>
                {/* Table List */}
                <ul className="table-list">
                  <li>
                    <i className="icofont icofont-ui-check"></i>Brightening
                    Smiles
                  </li>
                  <li>
                    <i className="icofont icofont-ui-check"></i>Professional
                    Whitening
                  </li>
                  <li>
                    <i className="icofont icofont-ui-check"></i>Dazzling Teeth
                    Treatments
                  </li>
                  <li className="cross">
                    <i className="icofont icofont-ui-close"></i>Smile
                    Enhancement
                  </li>
                  <li className="cross">
                    <i className="icofont icofont-ui-close"></i>Luminous Dental
                    Solutions
                  </li>
                </ul>
                <div className="table-bottom">
                  <a className="btn" href="#">
                    Book Now
                  </a>
                </div>
                {/* Table Bottom */}
              </div>
            </div>
            {/* End Single Table*/}
            {/* Single Table */}
            <div className="col-lg-4 col-md-12 col-12">
              <div className="single-table">
                {/* Table Head */}
                <div className="table-head">
                  <div className="icon">
                    <i className="icofont-heart-beat"></i>
                  </div>
                  <h4 className="title">Heart Suggery</h4>
                  <div className="price">
                    <p className="amount">
                      $399<span>/ Per Visit</span>
                    </p>
                  </div>
                </div>
                {/* Table List */}
                <ul className="table-list">
                  <li>
                    <i className="icofont icofont-ui-check"></i>Cardiac
                    Interventions
                  </li>
                  <li>
                    <i className="icofont icofont-ui-check"></i>Heart Procedures
                  </li>
                  <li>
                    <i className="icofont icofont-ui-check"></i>Cardiovascular
                    Surgery
                  </li>
                  <li>
                    <i className="icofont icofont-ui-check"></i>Life-saving
                    Heart Operations
                  </li>
                  <li>
                    <i className="icofont icofont-ui-check"></i>Advanced Cardiac
                    Care
                  </li>
                </ul>
                <div className="table-bottom">
                  <a className="btn" href="#">
                    Book Now
                  </a>
                </div>
                {/* Table Bottom */}
              </div>
            </div>
            {/* End Single Table*/}
          </div>
        </div>
      </section>
      {/*/ End Pricing Table */}

      {/* Start Blog Area */}
      <section className="blog section" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Keep up with Our Most Recent Medical News.</h2>
                <img src="/assets/section-img.png" alt="#" />
                <p>
                  Stay informed with our latest medical updates for ongoing
                  insights into healthcare advancements and wellness
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              {/* Single Blog */}
              <div className="single-news">
                <div className="news-head">
                  <img src="/assets/blog1.jpg" alt="#" />
                </div>
                <div className="news-body">
                  <div className="news-content">
                    <div className="date">22 Aug, 2020</div>
                    <h2>
                      <a href="blog-single.html">
                        We have annnocuced our new product.
                      </a>
                    </h2>
                    <p className="text">
                      Exciting news! We&#39;ve just unveiled our latest product,
                      bringing innovation and excellence to your healthcare
                      experience.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Blog */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Single Blog */}
              <div className="single-news">
                <div className="news-head">
                  <img src="/assets/blog2.jpg" alt="#" />
                </div>
                <div className="news-body">
                  <div className="news-content">
                    <div className="date">15 Jul, 2020</div>
                    <h2>
                      <a href="blog-single.html">
                        Top five way for solving teeth problems.
                      </a>
                    </h2>
                    <p className="text">
                      Discover the top five strategies for addressing dental
                      issues and achieving optimal oral health.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Blog */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Single Blog */}
              <div className="single-news">
                <div className="news-head">
                  <img src="/assets/blog3.jpg" alt="#" />
                </div>
                <div className="news-body">
                  <div className="news-content">
                    <div className="date">05 Jan, 2020</div>
                    <h2>
                      <a href="blog-single.html">
                        We provide highly business soliutions.
                      </a>
                    </h2>
                    <p className="text">
                      Empowering enterprises with highly effective business
                      solutions tailored to drive success and growth..
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Blog */}
            </div>
          </div>
        </div>
      </section>
      {/* End Blog Area */}

      {/* Start clients */}
      <div className="clients overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="owl-carousel clients-slider">
                <div className="single-clients">
                  <img src="/assets/client1.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="/assets/client2.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="/assets/client3.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="/assets/client4.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="/assets/client5.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="/assets/client1.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="/assets/client2.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="/assets/client3.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="/assets/client4.png" alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/Ens clients */}

      {/* Start Appointment */}
      <section className="appointment">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Are Always Ready to Help You. Book An Appointment</h2>
                <img src="/assets/section-img.png" alt="#" />
                <p>
                  Ready to assist you at any time. Schedule your appointment now
                  for personalized and timely support
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <form className="form" action="#">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input name="name" type="text" placeholder="Name" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input name="email" type="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input name="phone" type="text" placeholder="Phone" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <div
                        className="nice-select form-control wide"
                        tabIndex="0"
                      >
                        <span className="current">Department</span>
                        <ul className="list">
                          <li data-value="1" className="option selected ">
                            Department
                          </li>
                          <li data-value="2" className="option">
                            Cardiac Clinic
                          </li>
                          <li data-value="3" className="option">
                            Neurology
                          </li>
                          <li data-value="4" className="option">
                            Dentistry
                          </li>
                          <li data-value="5" className="option">
                            Gastroenterology
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <div
                        className="nice-select form-control wide"
                        tabIndex="0"
                      >
                        <span className="current">Doctor</span>
                        <ul className="list">
                          <li data-value="1" className="option selected ">
                            Doctor
                          </li>
                          <li data-value="2" className="option">
                            Dr. Akther Hossain
                          </li>
                          <li data-value="3" className="option">
                            Dr. Dery Alex
                          </li>
                          <li data-value="4" className="option">
                            Dr. Jovis Karon
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input type="text" placeholder="Date" id="datepicker" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Write Your Message Here....."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5 col-md-4 col-12">
                    <div className="form-group">
                      <div className="button">
                        <button type="submit" className="btn">
                          Book An Appointment
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-8 col-12">
                    <p>( We will be confirm by an Text Message )</p>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <div className="appointment-image">
                <img src="/assets/contact-img.png" alt="#" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Appointment */}

      {/* Start Newsletter Area */}
      <section className="newsletter section">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6  col-12">
              {/* Start Newsletter Form */}
              <div className="subscribe-text ">
                <h6>Sign up for newsletter</h6>
                <p className="">
                  Stay connected and informed. Sign up for our newsletter to
                  receive the latest updates,
                  <br /> health tips, and exclusive offers.
                </p>
              </div>
              {/* End Newsletter Form */}
            </div>
            <div className="col-lg-6  col-12">
              {/* Start Newsletter Form */}

              {/* End Newsletter Form */}
            </div>
          </div>
        </div>
      </section>
      {/* /End Newsletter Area */}
    </>
  );
};

export default LandingPageComponent;
