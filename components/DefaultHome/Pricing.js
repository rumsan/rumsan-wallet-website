import React, { Component } from 'react';
import Link from 'next/link';

class PricingStyleOne extends Component {
    render() {
        return (
            <>
                <section className="pricing-area ptb-100 bg-f9f6f6" id='pricing'>
                    <div className="container">
                        <div className="section-title">
                            <h2>Pricing Plans</h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 offset-lg-0 offset-md-3">
                                <div className="pricing-table">
                                    <div className="pricing-header">
                                        <h3>White Label Wallet Design and Development</h3>
                                    </div>
                                    
                                    <div className="price">
                                        <span>
                                            $10,000
                                        </span>
                                    </div>
                                    
                                    <div className="pricing-features">
                                        <ul>
                                            <li className="active">White Label Web </li>
                                            <li className="active">White Label Mobile (Android) App</li>
                                            <li className="active">Training and documentation </li>
                                        </ul>
                                    </div>
                                    
                                    <div className="pricing-footer">
                                        <Link href="#">
                                            <a className="btn btn-primary">Get Started</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 offset-lg-0 offset-md-3">
                            <img src='https://assets.rumsan.com/esatya/pricing-image.png' style={{width:'450px'}}/>
                        </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default PricingStyleOne;