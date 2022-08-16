import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();

    return (
      <>
        <footer className="footer-area" id="footer">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <div className="single-footer-widget">
                  <div className="logo">
                    <Link href="https://rumsan.com/">
                      <a target="_blank">
                        <img
                          src="https://assets.rumsan.com/rumsan-group/rumsan-logo-raha-footer.png"
                          alt="image"
                          style={{ width: "245px", marginTop: "-15px" }}
                        />
                      </a>
                    </Link>
                  </div>

                  <p>
                    Rumsan is a blockchain-focused digital innovation company.
                    We envision creating societal impact through frontier
                    technologies. We support and invest in promising ideas and
                    innovators to make a bigger impact.
                  </p>

                  <div className="company-logo">
                    <Link href="https://hamrolifebank.com/">
                      <a target="_blank">
                        <img src="https://assets.rumsan.com/esatya/hlb-blk-rumsan.png" />
                      </a>
                    </Link>
                    <Link href="https://askbhunte.com/">
                      <a target="_blank">
                        <img
                          src="https://assets.rumsan.com/askbhunte/assets/askbhunte-sq.png"
                          alt=""
                        />
                      </a>
                    </Link>
                    <Link href="https://agriclear.io/">
                      <a target="_blank">
                        <img
                          src="https://assets.rumsan.com/esatya/agriclear-sq.png"
                          alt=""
                        />
                      </a>
                    </Link>
                    <Link href="https://esatya.io/">
                      <a target="_blank">
                        <img
                          src="https://assets.rumsan.com/esatya/esatya-square-logo-500x500.png"
                          alt=""
                        />
                      </a>
                    </Link>
                    <Link href="https://lonetreenepal.com/">
                      <a target="_blank">
                        <img
                          src="https://assets.rumsan.com/rumsan-test/lonetree-100x100.png"
                          alt=""
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="single-footer-widget ml-4 pl-5">
                  <h3>Navigation</h3>

                  <ul className="list">
                    <li>
                      <Link href="/#features">
                        <a>Features</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#aboutUs">
                        <a>About Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#pricing">
                        <a>Pricing</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2 col-sm-6">
                <div className="single-footer-widget ml-4">
                  <h3>Technology</h3>

                  <ul className="list">
                    <li>
                      <Link href="https://docs.rahat.io/docs/intro">
                        <a target="_blank">Documentation</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://discord.gg/mpDbTAsnEe">
                        <a target="_blank">Discord</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://github.com/esatya?tab=repositories">
                        <a target="_blank">GitHub</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://drive.google.com/drive/folders/15pe-Stv9iDwV0sm6-ohHJWLHFnuV-wDG">
                        <a target="_blank">Media Kit</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget ml-4">
                  <h3>Get in Touch</h3>

                  <ul className="list">
                    <li>
                      <i className="icofont-home"></i>Sanepa-02 Lalitpur, Nepal
                    </li>
                    <li>
                      <i className="icofont-live-support"></i>
                      <a href="tel:+977 9801109713"> +977 9801109713</a>
                    </li>
                    <li>
                      <i className="icofont-envelope"></i>
                      <a href="mailto:team@rahat.io"> team@rahat.io</a>
                    </li>
                  </ul>
                  <ul className="social-links">
                    <li>
                      <Link href="https://twitter.com/rahataid">
                        <a target="_blank">
                          <i className="icofont-twitter"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com/company/esatya/">
                        <a target="_blank">
                          <i className="icofont-linkedin"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://esatya.medium.com/">
                        <a target="_blank">
                          <i className="icofont-read-book"></i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <div className="container">
              <p>
                Copyright &copy; {currentYear} Rumsan Wallet. A part of{" "}
                <a href="https://rumsan.com" target="_blank">
                  Rumsan Company.
                </a>{" "}
                Designed by{" "}
                <a href="https://tech.rumsan.com/" target="_blank">
                  {" "}
                  Rumsan.
                </a>
              </p>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
