import React, { Component } from 'react';
import { Form, Text, Select, TextArea, NestedForm, FormError } from 'react-form';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      successMessage: false
    };
  this.showConf = this.showConf.bind(this);
  }

  showConf(){
    console.log("show success Message");
    this.setState({
        successMessage: true
    })
  }
  render (){
    const actualForm = (
      <div>
        <Text field='name' placeholder='name'/>
        <Text field='business' placeholder='company'/>
        <Text field='email' placeholder='email'/>
        <Text field='phone' placeholder='phone'/>
        <TextArea field='message' placeholder='what’s your challenge?'/>
        <button type='submit'>send</button>
      </div>
    )
    const sentMessage = (
      <div>
        <p>Message sent! We will get in touch with you soon.</p>
      </div>
    )
    const message = this.state.successMessage ? sentMessage : actualForm ;
    const messageClass = this.state.successMessage ? 'form messaged' : 'form';
    return (
        <div className={messageClass}>
          <Form
            onSubmit={(values) => {
              console.log('Form Submitted Succesfully with:', values)

              const url = 'https://formspree.io/fobos.salmeron@gmail.com';
              var data = values;
              var myself = this;
              var xhr = new XMLHttpRequest();
                  xhr.open('POST', url, true);
                  xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
                  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

                  // Send the collected data as JSON
                  xhr.send(JSON.stringify(data));

                  // Callback function
                  xhr.onloadend = function (response) {
                    if (response.target.status === 0) {
                        // Failed XmlHttpRequest should be considered an undefined error.
                        console.log('Danger');

                    } else if (response.target.status === 400) {
                        console.log(JSON.parse(responseText).error);

                    } else if (response.target.status === 200) {
                        console.log('Success!');
                        myself.showConf()
                      }
                  }
            }}

            validate={({ name, email, phone, business, message }) => {
              return {
                name: !name ? 'A name is required' : undefined,
                business: !business ? 'A business name is required' : undefined,
                message: !message? 'The message cannot be empty' : undefined,
                phone:
                  !phone ?
                '*Phone number is missing' :
                  !phone.match(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/)?
                '*Please enter a valid phone number' :
                undefined,
                email:
                  !email ?
                'The email cannot be empty' :
                  email.search('@') == -1?
                'Please give a valid email' :
                  email.search(/@gmail.com/i) !== -1?
                'Sorry for the inconvenience but we only work with businesses, please provide a business email' :
                  email.search(/@aol.com/i) !== -1?
                'Sorry for the inconvenience but we only work with businesses, please provide a business email' :
                  email.search(/@msn.com/i) !== -1?
                'Sorry for the inconvenience but we only work with businesses, please provide a business email' :
                  email.search(/@icloud.com/i) !== -1?
                'Sorry for the inconvenience but we only work with businesses, please provide a business email' :
                  email.search(/@me.com/i) !== -1?
                'Sorry for the inconvenience but we only work with businesses, please provide a business email' :
                  email.search(/@yahoo.com/i) !== -1?
                'Sorry for the inconvenience but we only work with businesses, please provide a business email' :
                  email.search(/@live.com/i) !== -1?
                'Sorry for the inconvenience but we only work with businesses, please provide a business email' :
                  email.search(/@hotmail.com/i) !== -1?
                'Sorry for the inconvenience but we only work with businesses, please provide a business email' :
                  undefined
              }
            }}
            >
            {({submitForm}) => {
              return (
                <form onSubmit={submitForm}>
                  {message}
                </form>
              )
            }}
          </Form>
        </div>
    );
  }
};

export default ContactForm;
