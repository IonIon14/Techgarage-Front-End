import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Phone } from '../../assets/icons/phone.svg';
import { ReactComponent as Mail } from '../../assets/icons/mail.svg';
import { ReactComponent as GitHub } from '../../assets/icons/github.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin.svg';
// Importam CSS.
import './Footer.css';

function Footer() {
    return(
        // Am mai adaugat clase(footer-group) pentru stilizares pe mobile!
        <footer className="pt-3 mt-3">
            <div className="container-fluid container-min-max-width d-flex justify-content-between">
            <div class="col-md-3 m-b-30">
					<div class="footer-title m-t-5 m-b-20 p-b-8">
						About us
					</div>	
					<p class="white-text">
                    TechGarage will provide computer and technical consulting (repairs, training, networking and upgrade service) to local small businesses as well as home PC users. The company will focus on marketing, responsiveness, quality, and creating and retaining customer relations.
					</p>
				</div>        
                <div class="col-md-3 m-b-30">
					<div class="footer-title m-t-5 m-b-20 p-b-8 mb-3">
						Quick Links
					</div>	
					<div class="footer-links">
                        <Link to='*'>
                            <p>Blog</p>
                        </Link>
						<Link to='*'>
                            <p>FAQ</p>
                        </Link>
						<Link to='/terms-and-conditions'>
                            <p>Terms and conditions</p>
                        </Link>
						<Link to='/about'>
                            <p>About</p>
                        </Link>
					</div>
				</div>
                <div className="footer-group">
                    <div className="footer-links">
                    <div class="footer-title m-t-5 m-b-20 p-b-8 mb-3">
						Contracteaza-ne si telefonic:
					</div>
                    <p className="m-0">
                        <a href="mailto:ionutaloha22@gmail.com" className="">
                            <Mail className="mr-1 mb-1 footer-icon"/>
                            ionutaloha22@gmail.com
                        </a>
                    </p>
                    <p className="m-0"><Phone className="mr-1 footer-icon"/>+40771540106</p>
                </div>
                </div>
                <div className="footer-group">
                    <div className="footer-links">
                    <div class="footer-title m-t-5 m-b-20 p-b-8 mb-3">
						Contracteaza-ne si telefonic:
					</div>
                    <p className="m-0">
                        <a href="https://github.com/IonIon14" className="">
                            <GitHub className="mr-1 mb-1 footer-icon"/>
                            IonIon14
                        </a>
                    </p>
                    <p className="m-0">
                        <a href="https://www.linkedin.com/in/ionut-baciu-773b3618b/" className="">
                            <LinkedIn className="mr-1 footer-icon"/>
                            ionutbaciu
                        </a>
                    </p>
                    </div>
                </div>
            </div>
            <div className="text-center py-3 footer-bottom">
                &copy; Ionut Baciu, 2021
            </div>
        </footer>
    );
}

export default Footer;