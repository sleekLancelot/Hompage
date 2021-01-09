import React from 'react'
import { Link } from 'react-router-dom';

import advisory from '../../assets/productAssets/advisory.jpg';
import cpbs from '../../assets/productAssets/cpbs.png';
import dyi from '../../assets/productAssets/dyi.jpg';
import fern from '../../assets/productAssets/fern.jpg';
import smp from '../../assets/productAssets/smp.jpg';
import verification from '../../assets/productAssets/veri_serv.png';
import workers from '../../assets/workers.jpg';

import '../../../css/products/Product.css'

import Con2 from '../Con2';

const Product = () => {
    return (
        <div>
            <section className="page-title">
                <div className="auto-container">
                    <h1>Our Products</h1>
                    <ul className="bread-crumb clearfix">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                    </ul>
                </div>
            </section>


            <section className="news-section alternate">
                <div className="auto-container">
                    <div className="row">

                        <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to="#noWhere"><img src={verification} alt="verification" /></Link></figure>
                                </div>
                                <div className="lower-content">
                                    <h4><Link to="#noWhere">Verification Services</Link></h4>
                                    <p> Due to the prevalence of demolition, eviction, dispute and scam issues relating to landed properties, we set out to help individuals and corporate investors to verify and clear their subject of interest either before paying for the new found property or for already existing property against government acquisition...</p>
                                    <div className="btn-box"><Link to="#noWhere" className="read-more">View Now</Link></div>
                                </div>
                            </div>
                        </div>

                        <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to="#noWhere"><img src={cpbs} alt="service" /></Link></figure>
                                </div>
                                <div className="lower-content">
                                    <h4><Link to="#noWhere"> Complete Property Buyer Service</Link></h4>
                                    <p>Our property acquisition team is always available and ready to help prospective property buyers handle their property purchase from start to finish at 100% done-for-you either land or building, within Estate or with Omo-Onile, for individual or corporate large expanse across Nigeria...</p>
                                    <div className="btn-box"><Link to="#noWhere" className="read-more">View Now</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to="#noWhere"><img src={fern} alt="Floracity" /></Link></figure>
                                </div>
                                <div className="lower-content">
                                    <h4><Link to="#noWhere">Floracity</Link></h4>
                                    <p>With our experienced and ethically groomed team of property professionals, we pride ourselves at delivering a community based, green, smart, verified, authenticated and government approved/approvable planned out land parcels and homes in our own bonafide estates...
</p>
                                    <div className="btn-box"><Link to="#noWhere" className="read-more">View Now</Link></div>
                                </div>
                            </div>
                        </div>

                        <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to="#noWhere"><img src={workers} alt="Design,Build and Manage" /></Link></figure>
                                </div>
                                <div className="lower-content">
                                    <h4><Link to="#noWhere">Design, Build & Manage</Link></h4>
                                    <p>Our construction team that consist of Architects, Civil Engineers, Townplanners, Quantity Surveyors, Land Surveyors, Estate Surveyors etc and  is always ready to help prospective property developers to handle their property development project from start to finish either for individual residence, multi-family condo, estates or city development across different states in Nigeria...</p>
                                    <div className="btn-box"><Link to="#noWhere" className="read-more">View Now</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to="#noWhere"><img src={dyi} alt="Investment Packages" /></Link></figure>
                                </div>
                                <div className="lower-content">
                                    <h4><Link to="#noWhere">Books</Link></h4>
                                    <p>The Time-Tested Information to Making ZERO MISTAKE When Buying Real Estate Anywhere In Nigeria and EXACTLY what you need to do to build huge wealth in real estate.
                                    These books include the exact things you must do to make a stress-free, wahala-free, argument-free, and court case-free profitable property investment deal.
</p>
                                    <div className="btn-box"><Link to="#noWhere" className="read-more">View Now</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to="#noWhere"><img src={advisory} alt="advisory" /></Link></figure>
                                </div>
                                <div className="lower-content">
                                    <h4><a href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform">Professional Advisory Session</a></h4>
                                    <p>We offer both existing and aspiring real estate investors the opportunity to get clarification, high quality communication and experienced advice with our landed property experts. We achieve this either through one on one advisory or group training, both online and physical offline. It is available for individuals, groups, clubs, corporate, religious organizations, NGOs, etc</p>
                                    <div className="btn-box"><a href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform" className="read-more">View Now</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to="#noWhere"><img src={smp} alt="Sell my property" /></Link></figure>
                                </div>
                                <div className="lower-content">
                                    <h4><Link to="#noWhere"> Sell My Property</Link></h4>
                                    <p>We help individuals, groups, Omo-Onile, organizations to sell their properties after having verified them free from any issues, then these properties are recommended to our waiting list of customers both in Nigeria and in diaspora.</p>
                                    <div className="btn-box"><Link to="#noWhere" className="read-more">View Now</Link></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Con2 />

        </div>
    )
}

export default Product
