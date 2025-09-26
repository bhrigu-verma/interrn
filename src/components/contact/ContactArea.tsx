'use client'

import React from 'react';

const ContactArea = () => {

  return (
    <>
      {/* This style block specifically targets the button to remove animations */}
      <style jsx>{`
        .no-fx-button.cs_btn.cs_style_1 {
          width: 100%;
          background: linear-gradient(90deg, #F33C52 0%, #ff6b6b 100%);
          color: #fff;
          font-weight: 700;
          font-size: 1.18rem;
          border-radius: 10px;
          padding: 16px 0;
          letter-spacing: 1.2px;
          box-shadow: 0 4px 18px rgba(243,60,82,0.13);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.22s, box-shadow 0.22s, transform 0.18s;
          margin-top: 18px;
        }
        .no-fx-button.cs_btn.cs_style_1:hover,
        .no-fx-button.cs_btn.cs_style_1:active,
        .no-fx-button.cs_btn.cs_style_1:focus {
          background: linear-gradient(90deg, #ff6b6b 0%, #F33C52 100%);
          box-shadow: 0 6px 24px rgba(243,60,82,0.18);
          transform: translateY(-2px) scale(1.03);
        }
        .no-fx-button.cs_btn.cs_style_1::before,
        .no-fx-button.cs_btn.cs_style_1::after {
          display: none !important;
        }
      `}</style>

      <div className="cs_height_150 cs_height_lg_120"></div>
      <section>
        <div className="container">
          <div className="cs_contact_ms">
            <div className="cs_contact">
              <div className="cs_contact_text">
                <p className="cs_contact_subtitle">
                  Contact Us
                </p>
                <h2 className="cs_contact_title" style={{ fontSize: '2rem', marginBottom: '10px' }}>
                  Get in Touch
                </h2>
              </div>
              <div className="cs_height_40 cs_height_lg_10"></div>
              <div className="cs_form_section" style={{ background: 'linear-gradient(135deg, #1a1a1a 60%, #F33C52 100%)', borderRadius: '18px', padding: '32px 24px', boxShadow: '0 8px 32px rgba(243,60,82,0.08)', maxWidth: 600, margin: '0 auto' }}>
                <h3 style={{ color: 'white', fontWeight: 600, fontSize: '1.3rem', marginBottom: 18, letterSpacing: 0.5 }}>Send a Message</h3>
                <form onClick={e => e.preventDefault()}>
                  <div className="row">
                    <div className="cs_field_group col">
                      <input className="cs_input_field" type="text" id="test1" placeholder="Name" name="test" />
                      <label htmlFor="test1" className="cs_input_label">Name</label>
                    </div>
                    <div className="cs_field_group col">
                      <input className="cs_input_field" type="text" id="test2" placeholder="Email" name="test" />
                      <label htmlFor="test2" className="cs_input_label">Email</label>
                    </div>
                  </div>
                  <div className="cs_height_10 cs_height_lg_20"></div>
                  <div className="row">
                    <div className="cs_field_group col">
                      <input className="cs_input_field" type="text" id="test3" placeholder="Phone" name="test" />
                      <label htmlFor="test3" className="cs_input_label">Phone</label>
                    </div>
                    <div className="cs_field_group col">
                      <input className="cs_input_field" type="text" id="test4" placeholder="Subject" name="test" />
                      <label htmlFor="test4" className="cs_input_label">Subject</label>
                    </div>
                  </div>
                  <div className="cs_height_30 cs_height_lg_20"></div>
                  <div className="cs_field_group">
                    <textarea className="cs_input_field" id="test5" placeholder="Message" name="test" rows={4} style={{ resize: 'vertical', minHeight: 80 }} />
                    <label htmlFor="test5" className="cs_input_label">Message</label>
                  </div>
                  <div className="cs_height_30 cs_height_lg_20"></div>
                  {/* I've added the new "no-fx-button" class here to apply the style override */}
                  <button type="submit" className="cs_btn cs_style_1 cs_type_btn no-fx-button">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="cs_contact_section_2 anim_div_ShowRightSide">
              <div className="cs_google_map cs_bg" data-src="assets/img/map_img.png">

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.433362947413!2d77.4439060759364!3d23.190630909568297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43c6ffffffff%3A0x89d6e61413c54c4!2sBawadia%20Kalan%2C%20Gulmohar%20Colony%2C%20Bhopal%2C%20Madhya%20Pradesh%20462026!5e0!3m2!1sen!2sin!4v1726517791890!5m2!1sen!2sin"
                  allowFullScreen={true} style={{border: 0, width: '100%', height: '100%'}}></iframe>
              </div>
              <div className="cs_height_50 cs_height_lg_50"></div>
              <div className="row">
                <div className="col-md-4">
                  <div className="cs_icon">
                    <a href="https://www.google.com/maps" className="cs_icon_style">
                      <i>
                        <svg width="14" height="19" viewBox="0 0 14 19" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 0.0195312C3.14027 0.0195312 0 3.01027 0 6.68621C0 7.78973 0.289693 8.88387 0.840408 9.85434L6.6172 17.8047C6.69411 17.9373 6.84065 18.0195 7 18.0195C7.15935 18.0195 7.30589 17.9373 7.3828 17.8047L13.1617
                                9.85105C13.7103 8.88387 14 7.78969 14 6.68617C14 3.01027 10.8597 0.0195312 7 0.0195312ZM7 10.0195C5.07014 10.0195 3.50002 8.52418 3.50002 6.68621C3.50002 4.84824 5.07014 3.35289 7 3.35289C8.92986 3.35289 10.5 4.84824 10.5 6.68621C10.5
                                8.52418 8.92986 10.0195 7 10.0195Z" fill="white"></path>
                        </svg>
                      </i>
                    </a>
                    <div className="cs_icon_text">
                      <h6 className="cs_icon_title">Address</h6>
                      <p className="cs_icon_subtitle">A-17 Pallavi Nagar, Bawadiya Kalan, Bhopal - 462026, M.P. India</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cs_icon">
                    <a href="tel:+919752000546" className="cs_icon_style">
                      <i>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M13.6837 11.9266C13.0957 11.3461 12.3616 11.3461 11.7773 11.9266C11.3316 12.3686 10.8859 12.8105 10.4477 13.26C10.3278 13.3836 10.2267 13.4098 10.0806 13.3274C9.79225 13.1701 9.48513 13.0427 9.20797 12.8704C7.91581 12.0577 6.8334 11.0127 5.87458 9.83668C5.39891 9.2524 4.97568 8.62692 4.6798 7.92279C4.61987 7.78046 4.63111 7.68683 4.74721 7.57072C5.19292 7.14 5.62738 6.69805 6.06559 6.25609C6.67609 5.64185 6.67609 4.92273 6.06185 4.30474C5.71353 3.95268 5.3652 3.6081 5.01688 3.25604C4.65733 2.89648 4.30151 2.53318 3.93821 2.17736C3.35018 1.60432 2.61609 1.60432 2.03181 2.18111C1.58236 2.62306 1.15164 3.07626 0.694705 3.51072C0.271476 3.91148 0.0579884 4.40212 0.0130438 4.97517C-0.0581186 5.90777 0.17035 6.78794 0.492454 7.64563C1.15164 9.42095 2.15541 10.9978 3.37266 12.4435C5.01688 14.3986 6.97947 15.9454 9.27539 17.0615C10.3091 17.5634 11.3803 17.9492 12.5451 18.0129C13.3466 18.0578 14.0433 17.8556 14.6013 17.2301C14.9834 16.8031 15.4141 16.4136 15.8186 16.0053C16.4178 15.3986 16.4216 14.6645 15.8261 14.0652C15.1145 13.3499 14.3991 12.6382 13.6837 11.9266Z"
                            fill="white"></path>
                          <path
                            d="M12.9672 8.93825L14.3493 8.70229C14.132 7.4326 13.5328 6.28277 12.6227 5.36889C11.6601 4.40633 10.4428 3.79957 9.10199 3.6123L8.90723 5.00184C9.9447 5.14791 10.8885 5.61609 11.6339 6.36142C12.338 7.06555 12.7987 7.95696 12.9672 8.93825Z"
                            fill="white"></path>
                          <path
                            d="M15.1294 2.93344C13.5338 1.33791 11.5151 0.330398 9.28656 0.0195312L9.0918 1.40907C11.0169 1.67874 12.7623 2.55141 14.1406 3.92597C15.4477 5.23311 16.3054 6.88483 16.6163 8.70134L17.9983 8.46538C17.635 6.36047 16.6425 4.45033 15.1294 2.93344Z"
                            fill="white"></path>
                        </svg>
                      </i>
                    </a>
                    <div className="cs_icon_text">
                      <h6 className="cs_icon_title">Phone</h6>
                      <p className="cs_icon_subtitle">+91 9752000546</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cs_icon">
                    <a href="mailto:services@shoutotb.com" className="cs_icon_style">
                      <i>
                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10.5043 8.78757C10.0565 9.08612 9.53631 9.24394 9 9.24394C8.46373 9.24394 7.94356 9.08612 7.49574 8.78757L0.119848 3.87016C0.0789258 3.84288 0.0390586 3.81444 0 3.78519V11.8429C0 12.7667 0.749707 13.4999 1.65702 13.4999H16.3429C17.2668 13.4999 18 12.7502 18 11.8429V3.78516C17.9608 3.81448 17.9209 3.84299 17.8799 3.87031L10.5043 8.78757Z"
                            fill="white"></path>
                          <path
                            d="M0.704883 2.99347L8.08077 7.91091C8.35998 8.09707 8.67997 8.19012 8.99996 8.19012C9.31999 8.19012 9.64002 8.09703 9.91923 7.91091L17.2951 2.99347C17.7365 2.69939 18 2.2072 18 1.67599C18 0.762594 17.2569 0.0195312 16.3435 0.0195312H1.65646C0.743098 0.0195664 0 0.762629 0 1.67687C0 2.2072 0.263531 2.69939 0.704883 2.99347Z"
                            fill="white"></path>
                        </svg>
                      </i>
                    </a>
                    <div className="cs_icon_text">
                      <h6 className="cs_icon_title">Email</h6>
                      <p className="cs_icon_subtitle">services@shoutotb.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default ContactArea;