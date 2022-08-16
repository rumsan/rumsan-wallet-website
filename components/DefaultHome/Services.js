import React, { Component } from "react";
import Link from "next/link";

class Services extends Component {
  render() {
    return (
      <>
        <div className="bg-fcfbfb ptb-100 pb-60" id="features">
          <div className="container">
            <div className="section-title">
              <h2>Features</h2>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-3 col-6 col-sm-4">
                <div className="service-card-one">
                  <img
                    src="https://assets.rumsan.com/rumsan-group/evm-rumsan-wallet.png"
                    style={{ width: "60px" }}
                  />
                  <h3 style={{ fontSize: "20px", textAlign: "center" }}>
                    <Link href="/service-details">
                      <a>EVM compatible wallet</a>
                    </Link>
                  </h3>
                </div>
              </div>

              <div className="col-lg-3 col-6 col-sm-4">
                <div className="service-card-one">
                  <img
                    src="https://assets.rumsan.com/rumsan-group/qr-scanner-rumsan-wallet.png"
                    style={{ width: "60px" }}
                  />
                  <h3 style={{ fontSize: "20px", textAlign: "center" }}>
                    <Link href="/service-details">
                      <a>Built-in QR Code scanner</a>
                    </Link>
                  </h3>
                </div>
              </div>

              <div className="col-lg-3 col-6 col-sm-4">
                <div className="service-card-one">
                  <img
                    src="https://assets.rumsan.com/rumsan-group/erc-token-rumsan-wallet.png"
                    style={{ width: "60px" }}
                  />
                  <h3 style={{ fontSize: "20px", textAlign: "center" }}>
                    <Link href="/service-details">
                      <a>ERC20 Asset list</a>
                    </Link>
                  </h3>
                </div>
              </div>

              <div className="col-lg-3 col-6 col-sm-4">
                <div className="service-card-one">
                  <img
                    src="https://assets.rumsan.com/rumsan-group/google-drive-rumsan-wallet.png"
                    style={{ width: "60px" }}
                  />
                  <h3 style={{ fontSize: "20px", textAlign: "center" }}>
                    <Link href="/service-details">
                      <a>Backup to Google Drive</a>
                    </Link>
                  </h3>
                </div>
              </div>

              <div className="col-lg-3 col-6 col-sm-4">
                <div className="service-card-one">
                  <img
                    src="https://assets.rumsan.com/rumsan-group/rumsan-wallet-react-image.png"
                    style={{ width: "60px" }}
                  />
                  <h3 style={{ fontSize: "20px", textAlign: "center" }}>
                    <Link href="/service-details">
                      <a>Built in react native</a>
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-6 col-sm-4">
                <div className="service-card-one">
                  <img
                    src="https://assets.rumsan.com/esatya/customized-branding.png"
                    style={{ width: "60px" }}
                  />
                  <h3 style={{ fontSize: "20px", textAlign: "center" }}>
                    <Link href="/service-details">
                      <a>Customizable</a>
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-6 col-sm-4">
                <div className="service-card-one">
                  <img
                    src="https://assets.rumsan.com/esatya/white-label-license.png"
                    style={{ width: "60px" }}
                  />
                  <h3 style={{ fontSize: "20px" }}>
                    <Link href="/service-details">
                      <a>White label license</a>
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-6 col-sm-4">
                <div className="service-card-one">
                  <img
                    src="https://assets.rumsan.com/rumsan-group/multi-network-rumsan-wallet.png"
                    style={{ width: "60px" }}
                  />
                  <h3 style={{ fontSize: "20px", textAlign: "center" }}>
                    <Link href="/service-details">
                      <a>Multi Blockchain Network Support</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="section-title">
              <h2>Add-on features</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-3 col-6 col-sm-4">
                <div className="service-card-one">
                  <img
                    src="https://assets.rumsan.com/rumsan-group/doc-vault-rumsan-wallet.png"
                    style={{ width: "60px" }}
                  />
                  <h3 style={{ fontSize: "20px", textAlign: "center" }}>
                    <Link href="/service-details">
                      <a> IPFS based DocVault</a>
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-6 col-sm-4">
                <div className="service-card-one">
                  <img
                    src="https://assets.rumsan.com/rumsan-group/nft-rumsan-wallet.png"
                    style={{ width: "60px" }}
                  />
                  <h3 style={{ fontSize: "20px", textAlign: "center" }}>
                    <Link href="/service-details">
                      <a>NFT Asset list</a>
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-6 col-sm-4">
                <div className="service-card-one">
                  <img
                    src="https://assets.rumsan.com/rumsan-group/qr-based-login-rumsan-wallet.png"
                    style={{ width: "60px" }}
                  />
                  <h3 style={{ fontSize: "20px", textAlign: "center" }}>
                    <Link href="/service-details">
                      <a>QR-code based no-password login</a>
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
