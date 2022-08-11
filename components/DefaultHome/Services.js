import React, { Component } from 'react';
import Link from 'next/link';

class Services extends Component {
    render() {
        return (
            <>
                <div className="bg-fcfbfb ptb-100 pb-60" id='features'>
                    <div className="container">
                        <div className="section-title">
                            <h2>Customizable white-label digital wallets</h2>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one">
                                    <img src='https://assets.rumsan.com/esatya/react.png'/>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Built in React Native</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one">
                                <img src='https://assets.rumsan.com/esatya/web-and-mobile.png'/>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Web and Mobile</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one">
                                <img src='https://assets.rumsan.com/esatya/customize.png'/>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Customized Branding</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one">
                                    <img src='https://assets.rumsan.com/esatya/white-label-license.png'/>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>White Label License</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one">
                                    <img src='https://assets.rumsan.com/esatya/customized-branding.png'/>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Customizable</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Services;