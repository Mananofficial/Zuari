import { Link } from "react-router";
import logo from "../assets/ZuariLogo.png";
import AppStore from "../assets/app_store-removebg-preview.png";
import InstaLog from "../assets/insta.jpg";
import Faceboo from "../assets/facebookLogo.png";
import LinkedI from "../assets/LinkedInLogo.jpg";
import Play from "../assets/PlayStore.png";

const Footer = () => {
    return (
        <footer className="mt-24 border-t border-(--border)/60 bg-(--secondary)/40">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-12 md:grid-cols-4">
                    <div className="md:col-span-2">
                        <Link to="/" className="flex items-center gap-2">
                            <img
                                src={logo}
                                alt="Zurai Insurance Brokers"
                                className="h-10 w-auto object-contain"
                            />
                        </Link>
                        <p className="mt-4 max-w-sm text-sm text-(--muted-foreground)">
                            An insurance brokerage helping modern companies protect their people and their business — with human advisors and better technology.
                        </p>
                        <div className="mt-6 flex items-center gap-4">
                        <p>Follow us </p>
                        <img src={InstaLog} alt="Download on the App Store" className="mt-4 h-18 w-auto" />
                        <img src={Faceboo} alt="Download on the App Store" className="mt-4 h-18 w-auto" />
                        <img src={LinkedI} alt="Download on the App Store" className="mt-4 h-18 w-auto" />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold">Company</h4>
                        <ul className="mt-4 space-y-2 text-sm text-(--muted-foreground)">

                            <li><Link to="" className="hover:text-(--foreground)">Newsletters</Link></li>
                            <li><Link to="" className="hover:text-(--foreground)">Testimonials</Link></li>
                            <li><Link to="" className="hover:text-(--foreground)">Apps</Link></li>
                            <li><Link to="/privacy" className="hover:text-(--foreground)">Privacy Notice</Link></li>
                            <li><Link to="" className="hover:text-(--foreground)">FAQs</Link></li>
                        </ul>
                        <img src={AppStore} alt="Download on the App Store" className="mt-4 h-24 w-auto" />
                        <img src={Play} alt="Download on the App Store" className="mt-1 h-24 w-auto" />
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold">Get in touch</h4>
                        <ul className="mt-2 space-y-2 text-sm text-(--muted-foreground) mb-4">
                            <li>hello@zuariinsurance.in</li>
                            <li>011-45494500</li>
                        </ul>
                        <h2>Registered Office</h2>
                        <ul className="mt-2 space-y-2 text-sm text-(--muted-foreground) mb-4">
                            <li>8th Floor, Tower-A, Global Business Park,
                                Sector-26, M.G Road Gurgaon-122002, Haryana</li>
                        </ul>
                        <h2>Corporate Office</h2>
                        <ul className="mt-2 space-y-2 text-sm text-(--muted-foreground) mb-4">
                            <li>A-32, First Floor, Mohan Cooperative Industrial Estate
                                Mathura Road, Badarpur, New Delhi-110044</li>
                        </ul>
                        <p className=" text-sm font-semibold">CIN : U66010HR2003PLC137044</p>

                    </div>
                </div>
                <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-(--border)/60 pt-6 md:flex-row md:items-center">
                    <p className="text-xs text-(--muted-foreground)">© {new Date().getFullYear()} Zuari Insurance Brokers Limited. IRDAI licensed. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer