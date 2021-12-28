import React, { Component  } from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import { send } from 'emailjs-com';
init('user_TxSDTfNbWa5B29DEHpjkC');


const Contact = () => {

    const [toSend, setToSend] = useState({
        name: '',
        subject: '',
        message: '',
        reply_to: '',
      });
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

      const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_vmolzkk',
          'template_smxl95l',
          toSend,
          'user_TxSDTfNbWa5B29DEHpjkC'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Thank you for the message');
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };




        return (
          <section id="about">
            <div className="col-md-12">
              <h1 style={{ color: "black" }}>
                <span>{}Contact Me</span>
              </h1>
              <div className="row center mx-auto mb-5">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header">
                        <span
                          className="iconify"
                          data-icon="emojione:red-circle"
                          data-inline="false"
                        ></span>{" "}
                        &nbsp;{" "}
                        <span
                          className="iconify"
                          data-icon="twemoji:yellow-circle"
                          data-inline="false"
                        ></span>{" "}
                        &nbsp;{" "}
                        <span
                          className="iconify"
                          data-icon="twemoji:green-circle"
                          data-inline="false"
                        ></span>
                      </div>
                      <div
                        className="card-body font-trebuchet text-justify ml-3 mr-3 mb-5 center"
                        style={{
                          fontSize: "132%",
                        }}
                      >
                        <br />
                        <form onSubmit={onSubmit}>
                            <div class="col-6 form-group">
                            <input
                                type='text'
                                name='name'
                                placeholder='Your name'
                                value={toSend.name}
                                onChange={handleChange}
                            />
                            </div>
                            <div class="col-6 form-group">
                            <input
                                type='text'
                                name='reply_to'
                                placeholder='Your email'
                                value={toSend.reply_to}
                                onChange={handleChange}
                            />
                            </div>
                            <div class="col-12 form-group ">
                            <input
                                type='text'
                                name='subject'
                                placeholder='Subject'
                                value={toSend.subject}
                                onChange={handleChange}    
                            />
                            </div>
                            <div class="col-12 col-xs-4 form-group form-group-lg">
                            <textarea
                                type='text'
                                name='message'
                                placeholder='Your message'
                                value={toSend.message}
                                onChange={handleChange}
                                style={{paddingBottom: "8px", overflow: "auto", width:"100%", height:"100%"}} 
                                class="input-lg form-control-lg mb-2"
                                
                            />
                            </div>

                            <button type='submit' className="contactBtn center ml-4">Send Message</button>
                            </form>
                        <br />
                        <br />
                        {}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>
        );
      }
    

export default Contact;
