import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class MainBanner extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <>
                <div className="main-banner item-bg1">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="main-banner-content">
                                            <span>Rumsan Wallet</span>
                                            <h1>White Label Mobile Wallet</h1>
                                            <p>
                                                Rumsan wallet is a secure white-label web and mobile wallet for Android, built in React Native. Features include biometrics, scan to pay and more.
                                            </p>

                                            <Link href="https://drive.google.com/file/d/1jHXh_PWN9uVpMjcn91QtrgVn2n-Afe7f/view">
                                                <a className="btn btn-primary">Need A Wallet ?</a>
                                            </Link>
 
                                            <Link href="https://drive.google.com/file/d/1jHXh_PWN9uVpMjcn91QtrgVn2n-Afe7f/view">
                                                <a
                                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                                    className="btn btn-secondary"
                                                > 
                                                    Google Play
                                                </a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="banner-animation-image">
                                            {/* Main Image */}
                                            <img 
                                                src="https://assets.rumsan.com/esatya/main-image.png" 
                                                alt="image" 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* If you want to change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='_ysd-zHamjk' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </>
        );
    }
}

export default MainBanner;