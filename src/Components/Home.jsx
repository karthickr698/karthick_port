import React, { useEffect } from "react";
import emailjs from 'emailjs-com';

function Home() {
  useEffect(() => {
      let templateParams = {
        from_name: 'rkarthick410@gmail.com',
        to_name: 'karthick184r@gmail.com',
        subject: "send",
        message_html: "datas",
      }
      emailjs.send(
        'gmail',
        'template_xxKzOdyD',
        templateParams,
        'user_dRRjC8Dekxlz2UBL2EKrF'
      )
  }
  )
  return (
    <section id="margin">
      <div className="row container justify-content-end">
        <div className="col-md-5 ml-5">
          <h1>Hello, I'M KARTHICK R</h1>
          <h1>Full Stack Developer</h1>
          <h6 style={{ textAlign: "justify" }}>
            To pursue a career with a company having a global vision that encourages creativity and offers an
opportunity to learn and develop both in professional and personal life, wish to use and enhance my
technical knowledge and ability to work.
          </h6>
          <hr />
          <div className="row" style={{ marginLeft: "2px" }}>
            <a
              target="_none"
              href="https://www.linkedin.com/in/karthick-r-a3bab3163/"
            >
              <i className="fab mr-2 fa-linkedin fa-2x raise"></i>
            </a>
            <a target="_none" href="https://github.com/karthickr698">
              <i className="fab mx-2 fa-github fa-2x raise"></i>
            </a>
            <a target="_none" href="https://github.com/karthickr698">
              <i class="fab mx-2 fa-2x raise fa-twitter" aria-hidden="true"></i>
            </a>
            <a
              target="_none"
              href="https://www.hackerrank.com/rkarthick410"
            >
              <i class="fab fa-hackerrank mx-2 fa-2x raise"></i>
            </a>
            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1d_Wl_7DMm5VrNvwk1F_E2Pj1pYQQ_CIn/view?usp=sharing"
                )
              }
              className="btn btn-outline-dark mx-2"
            >
              My Resume
            </button>
          </div>
          <h6 className="mt-4">
            Chennai, India <b> +91 8220504785 </b>
            ||<b> rkarthick410@gmail.com </b>
          </h6>
        </div>
        <div className="col-md-5">
          <div className="display_div ml-auto">
            <img src="/karthick.jpg" className="display_img" alt="." />
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-offset="400"
        data-aos-delay="200"
        data-aos-duration="800"
        data-aos-easing="ease-in-right"
        data-aos-mirror="true"
        data-aos-once="false"
        className="container"
      >
        <h2 className="text-center">
          <strong>Tech Stack</strong>
        </h2>
        <div className="p-4 d-flex flex-wrap container " >
          <img
            src="https://cdn.svgporn.com/logos/html-5.svg"
            alt="."
            className="stack_icon m-auto raise"
          />
          <img
            src="https://cdn.svgporn.com/logos/mongodb.svg"
            alt="."
            className="stack_icon m-auto raise"
          />
          <img
            src="https://cdn.svgporn.com/logos/css-3.svg  "
            alt="."
            className="stack_icon m-auto raise"
          />
          <img
            src="https://cdn.svgporn.com/logos/javascript.svg"
            alt="."
            className="stack_icon m-auto raise"
          />
          <img
            src="https://cdn.svgporn.com/logos/nodejs.svg"
            alt="."
            className="stack_icon m-auto raise"
          />
          <img
            src="https://cdn.svgporn.com/logos/react.svg"
            alt="."
            className="stack_icon m-auto raise"
          />
          <img
            src="https://cdn.svgporn.com/logos/django.svg"
            alt="."
            className="stack_icon m-auto raise"
          />
          <img
            src="https://cdn.svgporn.com/logos/mysql.svg"
            alt="."
            className="stack_icon m-auto raise"
          />
          <img
            src="https://cdn.svgporn.com/logos/python.svg"
            alt="."
            className="stack_icon m-auto raise"
          />
          <img
            src="https://cdn.svgporn.com/logos/aws.svg"
            alt="."
            className="stack_icon m-auto raise"
          />

        </div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="400"
        data-aos-delay="200"
        data-aos-duration="800"
        data-aos-easing="ease-in-right"
        data-aos-mirror="true"
        data-aos-once="false"
        className="text-center"
      >
        <h2 id="margin" className="mb-4">
          <strong>My Proficiency</strong>
        </h2>
        <div className="row container m-auto ">
          <div className="col-md-4 ">
            <img
              className="raise"
              alt="."
              src="https://santhisrikh.github.io/images/react.png"
            />
            <h2>Front End</h2>
            <p className="lead">JavaScript,React-Redux</p>
          </div>
          <div className="col-md-4">
            <img
              className="raise"
              alt="."
              src="https://santhisrikh.github.io/images/back.png"
            />
            <h2>Back End</h2>
            <p className="lead">Python,Flask, Node js, Mongo DB, Mysql</p>
          </div>
          <div className="col-md-4">
            <img
              className="raise"
              alt="."
              src="https://santhisrikh.github.io/images/data.png"
            />
            <h2>Data Structures</h2>
            <p className="lead">Arrays,Stacks and Queues,Algorithms</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
