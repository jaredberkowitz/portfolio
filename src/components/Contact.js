import React, { Component  } from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";

const Contact = () => {


    
        
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && email && message) {
           // TODO - send mail
    
            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };


        return (
          <section id="about">
            <div className="col-md-12">
              <h1 style={{ color: "black" }}>
                <span>{}</span>
              </h1>
              <div className="row center mx-auto mb-5">
                <div className="col-md-8 center">
                  <div className="col-md-10">
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
                        className="card-body font-trebuchet text-justify ml-3 mr-3"
                        style={{
                          height: "auto",
                          fontSize: "132%",
                          lineHeight: "200%",
                        }}
                      >
                        <br />
                        <form id="contact-form" onSubmit="" method="POST">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)}  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" rows="5" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
                        </form>
                        <br />
                        <br />
                        {}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      }
    

export default Contact;
