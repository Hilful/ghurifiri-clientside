import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div className="container-fluid">
  <div className="row bg-dark text-secondary ps-5 pe-5 pb-5 pt-5 mt-5">
                <div className="col-lg-3">
                    <h5 className="fw-bold text-light"><span className="text-info">Trav</span>elsia</h5>
                    <small>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</small>
                    <p style={{ color: 'white', marginTop: '10px' }}><i className="bg-secondary p-2 rounded-pill fab fa-facebook"></i> <i className="bg-secondary p-2 rounded-pill fab fa-instagram"></i>  <i className="bg-secondary p-2 rounded-pill fab fa-twitter"></i></p>
                </div>
                <div className="col-lg-3">
                    <h6 className="fw-bold text-light">Services</h6>
                    <ul className="list-unstyled">
                      <li><Link className="navDesign text-secondary" to="/about">About us</Link></li>
                      <li><Link className="navDesign text-secondary" to="/about">How It Works</Link></li>
                      <li><Link className="navDesign text-secondary" to="/blog">Our Blog</Link></li>
                      <li><Link className="navDesign text-secondary" to="/services">Our services</Link></li>
                      <li><Link className="navDesign text-secondary" to="/contact">Contact us</Link></li>
                    </ul>
                </div>
                <div className="col-lg-3 footer">
                    <h6 className="fw-bold text-light">Instagram</h6>
                    <p><img src="https://smartdemowp.com/travio/wp-content/uploads/2021/02/footer-gallery-1.jpg" alt="" style={{ width: '90px', height: '90px' }} />
                        <img src="https://smartdemowp.com/travio/wp-content/uploads/2021/02/footer-gallery-2.jpg" alt="" style={{ width: '90px', height: '90px' }} />
                        <img src="https://smartdemowp.com/travio/wp-content/uploads/2021/02/footer-gallery-4.jpg" alt="" style={{ width: '90px', height: '90px' }} /> <br />

                        <img src="https://smartdemowp.com/travio/wp-content/uploads/2021/02/footer-gallery-6.jpg" alt="" style={{ width: '90px', height: '90px' }} />
                        <img src="https://smartdemowp.com/travio/wp-content/uploads/2021/02/footer-gallery-5.jpg" alt="" style={{ width: '90px', height: '90px' }} />
                        <img src="https://smartdemowp.com/travio/wp-content/uploads/2021/02/footer-gallery-3.jpg" alt="" style={{ width: '90px', height: '90px' }} />
                    </p>

                </div>
                <div className="col-lg-3">
                    <h6 className="fw-bold text-light">Newsletter</h6>
                    <small>Far far away, behind the word mountains, far from the countries.</small>
                    <form action="#" className="subscribe-form">
                        <div className="form-group">
                        <input type ="text" class ="form-control mb-2 mt-4 coloring text-center" placeholder="Enter email address"style={{backgroundColor:'#2C2B2B'}}/>
                        <input type ="submit" value="Subscribe" class ="form-control submit px-3"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Footer;