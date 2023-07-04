import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSolidMessageRounded } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 my-bor">
                <img src="https://webstrot.com/html/cooltown/html/images/logo.png" alt="" />
                <p>Donec id elit non mi porta gravida at eget metus. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.
                <br />
                <br />
                
                Vestibulum id ligula porta felis euismod semper. pharetra augue. Maecenas faucibus interdum...
                </p>
                <button>
                  Read More <BsArrowRight />
                </button>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3">
              <h3>Recent Posts</h3>
              <div className="con">
                <img
                  src="https://webstrot.com/html/cooltown/html/images/blg1.jpg"
                  alt=""
                />
                <div className="p">
                  <p>Donec Id Elit Non Mi Porta Gravida</p>
                  <p className="pink">22 APRIL, 2022</p>
                </div>
              </div>
              <div className="con">
                <img
                  src="https://webstrot.com/html/cooltown/html/images/blg3.jpg"
                  alt=""
                />
                <div className="p">
                  <p>Elit Non Mi Porta Donec Id Gravida</p>
                  <p className="pink">11 APRIL, 2022</p>
                </div>
              </div>
              <div className="con">
                <img
                  src="https://webstrot.com/html/cooltown/html/images/blg2.jpg"
                  alt=""
                />
                <div className="p">
                  <p>Donec Id Elit Non Elit Non Mi Porta</p>
                  <p className="pink">12 APRIL, 2022</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3">
              <h3>Get In Touch</h3>
              <form>
                <div>
                <input type="text" placeholder="Joahn Doe" />
                <BsFillPersonFill className="i"/>
                </div>
                <div>
                <input type="email" placeholder="Email ID" />
                <BiSolidMessageRounded className="i"/>
                </div>
                <textarea
                  cols="23"
                  rows="5"
                  placeholder="Your Message..."
                  className="textarea"
                ></textarea>
              </form>
                <button className="button">Send Message</button>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3">
              <h3>Contact Info</h3>
              <div className="p-con">
                <span>Santa Cruz Office:</span>
                <p className="ms-2">
                  Crorpo Technologies, 9860 Mill Road, Deltona, FL 32725, US
                </p>
              </div>
              <div className="p-con">
                <span>Phone:</span>
                <p>+1-202-555-0175 +1-202-555-0107</p>
              </div>
              <div className="p-con">
                <span>Email:</span>
                <p>crorpo@example.com support@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
