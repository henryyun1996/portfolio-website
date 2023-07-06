import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import NavBar from './NavBar';
import Footer from './Footer';
import { Grid, Form, Button } from 'semantic-ui-react';

function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    subject: '',
    message: ''
  });
  const [ alertMessage, setAlertMessage] = useState(null);
  const [ showPopup, setShowPopup ] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    console.log(formData);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.from_name || !formData.reply_to || !formData.subject || !formData.message) {
        alert('Please fill out all form fields before submitting.');
        return;
      }

    const serviceId = 'service_d14cu7r';
    const templateId = 'template_4on1nqq';
    const userId = 'Poj2GZTMk1TRVJq3O';

    emailjs.send(serviceId, templateId, formData, userId)
      .then(response => {
        console.log('Email sent successfully!', response.status, response.text);
        setFormData({
            from_name: '',
            reply_to: '',
            subject: '',
            message: ''
        });
        setAlertMessage('Email sent successfully!');
      })
      .catch(error => {
        console.error('Error sending email:', error);
        setAlertMessage('Error sending email. Please try again.');
      });
  }

  useEffect(() => {
    if (alertMessage) {
      const timeout = setTimeout(() => {
        setAlertMessage(null);
      }, 5000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [alertMessage]);

  function handleDiscordClick() {
    const textToCopy = "hengryyun";
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log('Text copied to clipboard:', textToCopy);
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
      })
      .catch((error) => {
        console.error('Error copying text to clipboard:', error);
      });
  }

    return (
        <div>
            <div style={{ backgroundColor: '#f1ebcd', padding: '2% 0 2% 0' }}>
                <NavBar />
            </div>
            <div style={{ padding: '7%', backgroundColor: '#f1ebcd' }}>
                <Grid columns={2}>
                    <Grid.Column style={{ backgroundColor: '#60a69e', marginLeft: '10%' , width: '25%' }}>
                    <div className="contact-form" style={{ color: '#f1ebcd', textAlign: 'center', padding: '20px 0 20px 0' }}>
                        <h2>contact henry</h2>
                        <h4>by email:</h4>
                        <p>henrysungyun@gmail.com</p>
                        <h4>by social:</h4>
                        <div className="socialButtons">
                            <i className="linkedin icon" style={{ fontSize: '2.3em', cursor: 'pointer' }} onClick={(e) => window.location.href = "https://www.linkedin.com/in/henry-yun/"}></i>
                            <i className="instagram icon" style={{ fontSize: '2.3em', cursor: 'pointer' }} onClick={(e) => window.location.href = "https://www.instagram.com/henryyyun/"}></i>
                            <i className="github icon" style={{ fontSize: '2.3em', cursor: 'pointer' }} onClick={(e) => window.location.href = "https://github.com/henryyun1996"}></i>
                            <i className="discord icon" style={{ fontSize: '2.3em', cursor: 'pointer' }} onClick={handleDiscordClick}></i>
                            <i className="medium icon" style={{ fontSize: '2.3em', cursor: 'pointer'}} onClick={(e) => window.location.href = "https://medium.com/me/stories/public"}></i>
                            {showPopup ? (
                                <div className="popup-show" style={{ marginLeft: '30%' }}>
                                    <p style={{ color: '#f1ebcd' }}>Username copied!</p>
                                </div>
                                ) : (
                                <div className="popup-hide">
                                    <p style={{ color: '#60a69e' }}>Username copied!</p>
                                </div>
                            )}

                        </div>
                        <div style={{ position: 'relative', marginTop: '20px' }}>
                            <h4>by form:</h4>
                            <p style={{ margin: '0 10% 0 10%' }}>Use the contact form to send me a message. I'll get back to you within 24 business hours.</p>
                            <br />
                            <p style={{ margin: '0 10% 0 10%' }}>Thanks for contacting me! I look forward to hearing from you!</p>
                        </div>
                    </div>
                    </Grid.Column>
                    <Grid.Column>
                        <Form style={{ margin: '0 0 0 25%'}} onSubmit={handleSubmit}>
                            <Form.Field>
                                <div className="nameInput">
                                    <label style={{ fontFamily: 'Nexa Bold', fontSize: '16px', color: '#60a69e' }}>name: </label>
                                    <input
                                        type="text"
                                        name="from_name"
                                        value={formData.from_name}
                                        onChange={handleChange}
                                        placeholder="your name"
                                        style={{ fontFamily: 'Crimson Pro', fontSize: '15px' }}
                                    />
                                </div>
                            </Form.Field>
                            <Form.Field>
                                <div className="emailInput">
                                    <label style={{ fontFamily: 'Nexa Bold', fontSize: '16px', color: '#60a69e' }}>email: </label>
                                    <input
                                        type="text"
                                        name="reply_to"
                                        value={formData.reply_to}
                                        onChange={handleChange}
                                        placeholder="email"
                                        style={{ fontFamily: 'Crimson Pro', fontSize: '15px' }}
                                    />
                                </div>
                            </Form.Field>
                            <Form.Field>
                                <div className="subjectInput">
                                    <label style={{ fontFamily: 'Nexa Bold', fontSize: '16px', color: '#60a69e' }}>subject: </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="subject"
                                        style={{ fontFamily: 'Crimson Pro', fontSize: '15px' }}
                                    />
                                </div>
                            </Form.Field>
                            <Form.Field>
                                <div className="messageInput">
                                    <label style={{ fontFamily: 'Nexa Bold', fontSize: '16px', color: '#60a69e' }}>message: </label>
                                    <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="message"
                                    style={{ height: '150px', resize: 'vertical', fontFamily: 'Crimson Pro', fontSize: '16px' }}
                                    />
                                </div>
                            </Form.Field>
                            <Button className="ui teal basic button" style={{marginLeft: '40%', fontFamily: 'Nexa Bold' }}>send</Button>
                        </Form>
                        <br/>
                        {alertMessage && (
                            <div className="alert">
                                <div className="alert-content">{alertMessage}</div>
                            </div>
                        )}
                    </Grid.Column>
                </Grid>
            </div>
            <div>
                <Footer style={{ position: 'relative', zIndex: 2 }} />
            </div>
        </div>
    )
}

export default Contact;