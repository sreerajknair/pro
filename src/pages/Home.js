import React from "react";
import {Link} from "react-router-dom";

function Home(){
    return(
        <div>
            <div className="main_area">
      
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <a className="navbar-brand" href="index.html">
                <span>
                  Astala-vista
                </span>
              </a>
    
              <div className="navbar-collapse" id="">
                <div className="d-none d-lg-flex ml-auto flex-column flex-lg-row align-items-center">
                  <ul className="navbar-nav ">
                    <li className="nav-item">
                      <Link to="/Login">
                        <img src="/design/images/login.png" alt="" />
                        <span>Login</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                       <Link to="/Signup">
                        <img src="/design/images/signup.png" alt="" />
                        <span>Sign Up</span>
                      </Link>
                    </li>
                  </ul>
                  <form className="form-inline my-2 mb-3 mb-lg-0 mr-5">
                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                  </form>
                </div>
    
                <div className="custom_menu-btn">
                  <button >
                    <span className="s-1">
    
                    </span>
                    <span className="s-2">
    
                    </span>
                    <span className="s-3">
    
                    </span>
                  </button>
                </div>
                <div id="myNav" className="overlay">
                  <a href="index.html" className="closebtn"></a>
                  <div className="overlay-content">
                    <a href="index.html">HOME</a>
                    <a href="index.html">TEAM</a>
                    <a href="index.html">PORTFOLIO</a>
    
                    <a href="index.html">CONTACT US</a>
    
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        
        <section className=" courosel_section ">

          <div id="carousel-begins" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carousel-begins" data-slide-to="0" className="active">01</li>
              <li data-target="#carousel-begins" data-slide-to="1">02</li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-3 offset-md-2">
                    <div className="courosel_detail">
                      <h1>
                        SOFTWARE
                        <span>
                          SOLUTIONS
                        </span>
                      </h1>
                      <p>
                        We find the best solutions for you, we redesign your home and work places.
                        Discover why over 5,100 home owners trust initiative
                      </p>
                      <div>
                        <a href="index.html">
                          Find More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="courosel_img-box">
                      <img src="/design/images/slider-img.png" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-3 offset-md-2">
                    <div className="courosel_detail">
                      <h1>
                        JUST TECHNOLOGICAL
                        <span>
                          THINGS
                        </span>
                      </h1>
                      <ul>
                        <li>Television</li>
                        <li>Computers</li>
                        <li>Mobile Phones</li>
                        <li>Artificial Intelligence</li>
                      </ul>  
                      <div>
                        <a href="index.html">
                          Find More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="courosel_img-box">
                      <img src="/design/images/slider-img.png" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel_btn-container">
              <a className="carousel-control-prev" href="#carousel-begins" role="button" data-slide="prev">
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carousel-begins" role="button" data-slide="next">
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
    
        </section>
    
    </div> 
      
        <section className="detail_section layout_padding" >
          <div className="container">
            <h2>
              WHY INITIATIVE COMPANY
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at
              its layout. The point of using Lorem
            </p>
          </div>
      
          <div className="container">
            <div className="about_card-container">
              <div className="about_card">
                <div className="about-detail">
                  <div className="about_img-box">
                    <img src="/design/images/card-img-1.png" alt=""/>
                  </div>
                  <div className="card_detail-ox">
                    <h4>
                      10 YEARS EXPERIENCE
                    </h4>
                    <p>
                      The only way to get this right, at scale, is to connect the data points of all 100 million customers and map them back to an individual customer journey. To do this, companies must master the three essentials of the customer journey.
                    </p>
                  </div>
                </div>
                <div>
                  <a href="index.html" className="about_btn">
                    Find More
                  </a>
                </div>
              </div>
              <div className="about_card">
                <div className="about-detail">
                  <div className="about_img-box">
                    <img src="/design/images/card-img-2.png" alt=""/>
                  </div>
                  <div className="card_detail-ox">
                    <h4>
                      A PRO ARCHITECTS TEAM
                    </h4>
                    <p>
                      The only way to get this right, at scale, is to connect the data points of all 100 million customers and map them back to an individual customer journey. To do this, companies must master the three essentials of the customer journey.
                    </p>
                  </div>
                </div>
                <div>
                  <a href="index.html" className="about_btn">
                    Find More
                  </a>
                </div>
              </div>
              <div className="about_card">
                <div className="about-detail">
                  <div className="about_img-box">
                    <img src="/design/images/card-img-3.png" alt=""/>
                  </div>
                  <div className="card_detail-ox">
                    <h4>
                      1000+ HAPPY CUSTOMERS
                    </h4>
                    <p>
                      The only way to get this right, at scale, is to connect the data points of all 100 million customers and map them back to an individual customer journey. To do this, companies must master the three essentials of the customer journey.
                    </p>
                  </div>
                </div>
                <div>
                  <a href="index.html" className="about_btn">
                    Find More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="portfolio_section layout_padding">
          <div className="container">
            <h2>
              OUR PORTFOLIO
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at
              its layout. The point of using Lorem
            </p>
          </div>
          <div className="container layout_padding ">
            <div className="row">
              <div className="col-md-8">
                <div className="portfolio_img-box">
                  <img src="/design/images/portfolio-img-1.png" alt=""/>
                </div>
              </div>
              <div className="col-md-4">
                <div className="portfolio_img-box">
                  <img src="/design/images/portfolio-img-2.jpg" alt=""/>
                </div>
              </div>
              <div className="col-md-4">
                <div className="portfolio_img-box">
                  <img src="/design/images/portfolio-img-3.png" alt=""/>
                </div>
              </div>
              <div className="col-md-8">
                <div className="/design/portfolio_img-box">
                  <img src="/design/images/portfolio-img-4.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </section>
     
  <section className="team_section layout_padding">
    <div className="container">
      <h2>
        OUR TEAM
      </h2>
      <p>
        It is a long established fact that a reader will be distracted by the readable
      </p>
    </div>
    <div className="container">
      <div className="team_card-container layout_padding">
        <div className="team_card">
          <div className="team_img-box">
            <img src="/design/images/team-1.png" alt=""/>
          </div>
          <div className="team_detail-box">
            <h5>
              SREERAJ K NAIR
            </h5>
            <p>
              CEO - DEVELOPMENT
            </p>
            <div className="team_follow">
              <h6>
                Follow On
              </h6>
              <div className="team_social">
                <div>
                  <a href="index.html">
                    <img src="images/facebook-logo-button.png" alt=""/>
                  </a>
                </div>
                <div>
                  <a href="index.html">
                    <img src=" /design/images/twitter-logo-button.png" alt=""/>
                  </a>
                </div>
                <div>
                  <a href="index.html">
                    <img src="/design/images/linkedin.png" alt=""/>
                  </a>
                </div>
                <div>
                  <a href="index.html">
                    <img src="/design/images/instagram.png" alt=""/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team_card">
          <div className="team_img-box">
            <img src="/design/images/team-2.png" alt=""/>
          </div>
          <div className="team_detail-box">
            <h5>
              HARIKRISHNAN E
            </h5>
            <p>
              HR - MANAGER
            </p>
            <div className="team_follow">
              <h6>
                Follow On
              </h6>
              <div className="team_social">
                <div>
                  <a href="index.html">
                    <img src="vimages/facebook-logo-button.png" alt=""/>
                  </a>
                </div>
                <div>
                  <a href="index.html">
                    <img src=" /design/images/twitter-logo-button.png" alt=""/>
                  </a>
                </div>
                <div>
                  <a href="index.html">
                    <img src="/design/images/linkedin.png" alt=""/>
                  </a>
                </div>
                <div>
                  <a href="index.html">
                    <img src="/design/images/instagram.png" alt=""/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team_card">
          <div className="team_img-box">
            <img src="/design/images/team-3.png" alt=""/>
          </div>
          <div className="team_detail-box">
            <h5>
              ROSHY-JOHN
            </h5>
            <p>
              DEVELOPER
            </p>
            <div className="team_follow">
              <h6>
                Follow On
              </h6>
              <div className="team_social">
                <div>
                  <a href="index.html">
                    <img src="/design/images/facebook-logo-button.png" alt=""/>
                  </a>
                </div>
                <div>
                  <a href="index.html">
                    <img src=" /design/images/twitter-logo-button.png" alt=""/>
                  </a>
                </div>
                <div>
                  <a href="index.html">
                    <img src="/design/images/linkedin.png" alt=""/>
                  </a>
                </div>
                <div>
                  <a href="index.html">
                    <img src="/design/images/instagram.png" alt=""/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team_card">
          <div className="team_img-box">
            <img src="/design/images/team-4.png" alt=""/>
          </div>
          <div className="team_detail-box">
            <h5>
              RASHIK AHAMMED
            </h5>
            <p>
             DESIGHNER
            </p>
            <div className="team_follow">
              <h6>
                Follow On
              </h6>
              <div className="team_social">
                <div>
                  <a href="index.html">
                    <img src="/design/images/facebook-logo-button.png" alt=""/>
                  </a>
                </div>
                <div>
                  <a href="index.html">
                    <img src=" /design/images/twitter-logo-button.png" alt=""/>
                  </a>
                </div>
                <div>
                  <a href="index.html">
                    <img src="/design/images/linkedin.png" alt=""/>
                  </a>
                </div>
                <div>
                  <a href="index.html">
                    <img src="/design/images/instagram.png" alt=""/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>





   <section className="contact_section layout_padding">
    <div className="container">
      <p>
        Come and Ask
      </p>
      <h2 className="">
        FREE CONSULTATION
      </h2>
    </div>
    <div className="container">

      <div className="row">
        <div className="col-md-6 ">
          <form action="">
            <div className="contact_form-container">
              <div>
                <div>
                  <label>
                    Name
                    <input type="text" placeholder="name" />
                  </label>
                </div>
                <div>
                  <label>
                    Email
                    <input type="email" placeholder="email" />
                  </label>
                </div>

                <div>
                  <label>
                    Phone Number
                    <input type="text" placeholder="phone number" />
                  </label>
                </div>

                <div>
                  <label>
                    Message
                    <textarea name="" id="" cols="30" rows="10" placeholder="write any message"></textarea>
                  </label>
                </div>
                <div className="mt-5">
                  <button type="submit">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div className="contact_img-box">
            <img src="/design/images/form-img.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>
  
   <section className="Why_section layout_padding">
    <div className="container">
      <h2>WHY CHOOSE US?</h2>
      <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout. The point of using LoremIt is a long established fact that a reader will be distracted by the
        readable
        content of a page when looking at its layout. The point of using Lorem
      </p>
    </div>
  </section>



  
  <section className="info_section layout_padding">
    <div className="container info_content">
      <div>
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <h5>
                  About Us
                </h5>
                <p>
                  It is a long established 
                  fact that a reader will
                  be distracted by the read
                  It is a long established 
                  fact that a reader will
                  be distracted by the read
                </p>
              </div>
              <div className="col-md-6">
                <h5>
                  Contact Us
                </h5>
                <p>
                  It is a long established 
                  fact that a reader will
                  be distracted by the read
                  It is a long established 
                  fact that a reader will
                  be distracted by the read
                </p>
              </div>
            </div>
            <div className="form_container mt-5">
              <form action="">
                <input type="email" placeholder="Enter Your email" />
                <button type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info_img-box">
              <img src="/design/images/map.png" alt=""/>
            </div>
            <div className="d-flex justify-content-end pr-5">
              <div className="social-box">
                <a href="index.html">
                  <img src="/design/images/fb.png" alt="" />
                </a>

                <a href="index.html">
                  <img src="/design/images/twitter.png" alt="" />
                </a>
                <a href="index.html">
                  <img src="/design/images/linkedin1.png" alt="" />
                </a>
                <a href="index.html">
                  <img src="/design/images/instagram1.png" alt="" />
                </a>
              </div>
            </div>
          </div>


        </div>
      </div>

    </div>
  </section>

 
  <hr className="footer_hr"/>
 
  <section className="container-fluid footer_section">
    <p>
      &copy;
      2019 All Rights Reserved. Design by
      <a href="https://html.design/">Free Html Templates</a>
    </p>
  </section>
        </div>
    )
}
export default Home;