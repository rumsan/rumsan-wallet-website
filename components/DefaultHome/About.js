import React, { Component } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

class About extends Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <>
        <section className="about-area ptb-100" id="aboutUs">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="about-image">
                  <img
                    src="https://assets.rumsan.com/esatya/about-rumsan-image.png"
                    alt="image"
                    className="rounded-10"
                  />
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <div className="about-content about-content-two">
                  <div className="section-title">
                    <h2>About Rumsan</h2>
                    <p>
                      We provide blockchain services and specialized blockchain
                      development teams to help companies revolutionize their
                      businesses. We also provide advisory, lectures, workshops
                      and developing Proof of Concepts for our clients.
                    </p>
                  </div>
                  <Link href="https://rumsan.com/">
                    <a className="btn btn-primary">Learn More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* If you want to change the video need to update below videoID */}
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId="_ysd-zHamjk"
            onClose={() => this.setState({ isOpen: false })}
          />
        </section>
      </>
    );
  }
}

export default About;
