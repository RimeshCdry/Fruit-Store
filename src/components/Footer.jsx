import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {/* company details section */}
          <div data-aos="fade-up"
          className="space-y-6 max-w-[300px]">
            <h1 className="text-3xl font-bold">Orange Mint</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus dolorum fugit ipsum? Repellendus iure quod culpa
              consequuntur, et quisquam accusamus aliquam deleniti
              reprehenderit. Sed, eligendi.
            </p>
          </div>

          {/* Nav Link section */}
          <div data-aos="fade-up"
          data-aos-delay ="300"          
          className="space-y-6">
            <h1 className="text-4xl font-bold">Quick Links</h1>
            <div className="grid grid-cols-2 gap-2">
              {/* first column links */}
              <div>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>

              {/* second column links */}
              <div>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social links section */}
          <div data-aos="fade-up"
          data-aos-delay ="500" 
          className="space-y-6">
            <h1 className="text-4xl font-bold">Follow Us</h1>

            <div className="flex items-center gap-3">
              <p>+977-9815438956</p>
              <p>Kathmandu, Nepal</p>
            </div>

            <div className="flex items-center gap-4 ">
              <FaFacebook className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300" />
              <FaTwitter className="text-3xl hover:scale-105 duration-300" />
            </div>
          </div>
        </div>
        {/* Copy right section */}
        <p
        className="text-white text-center mt-8 pt-8 border-t-2">
          Copyright &copy; 2024 <strong>Rimesh Chaudhary</strong> | All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
