import React, { Component } from "react";
import { Form, Text, TextArea } from "informed";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      successMessage: false
    };
    this.showConf = this.showConf.bind(this);
    this.sendMail = this.sendMail.bind(this);
  }

  showConf() {
    console.log("show success Message");
    this.setState({
      successMessage: true
    });
  }

  sendMail(data) {
    console.log("Form submitted and valid with:", data);
    const url = "https://formspree.io/mgydvdem";
    const dummyUrl = "https://formspree.io/fobos.salmeron@gmail.com";

    var myself = this;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Accept", "application/json; charset=utf-8");
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

    // Send the collected data as JSON
    xhr.send(JSON.stringify(data));

    // Callback function
    xhr.onloadend = function(response) {
      if (response.target.status === 0) {
        // Failed XmlHttpRequest should be considered an undefined error.
        console.log("Danger");
      } else if (response.target.status === 403) {
        console.log(response.responseText);
        console.log("formspree submission failed")
      } else if (response.target.status === 200) {
        console.log("AJAX success, mail sent!");
        myself.showConf();
      }
    };
  }

  render() {
    const sentMessage = (
      <p>
        Message sent!<br /> We will get in touch with you soon.
      </p>
    );
    const mailSent = this.state.successMessage ? sentMessage : null;

    const nameValidation = value => {
      return !value ? "A name is required" : undefined;
    };

    const businessValidation = value => {
      return !value ? "A business is required" : undefined;
    };

    const emailValidation = value => {
      if (!value) {
        return "An email is required";
      } else if (!value.match(/^(?=.*\b@\b)(?=.*\b\.\b).*$/)) {
        return "Please provide a valid email";
      } else {
        return value.match(
          /^(?=.*\bgmail.com\b)|(?=.*\bhotmail.com\b)|(?=.*\blive.com\b)|(?=.*\baol.com\b)|(?=.*\byahoo.com\b)|(?=.*\bicloud.com\b)|(?=.*\bmsn.com\b)|(?=.*\bme.com\b).*$/
        )
          ? "Sorry for the inconvenience but we only work with businesses, please provide a business email"
          : undefined;
      }
    };

    const phoneValidation = value => {
      if (!value) {
        return "Phone number is missing";
      } else {
        return !value.match(
          /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
        )
          ? "Please enter a valid phone number"
          : undefined;
      }
    };
    const messageValidation = value => {
      return !value ? "Don't forget to write your message" : undefined;
    };

    return (
      <div className="form">
        <Form
          onSubmit={formState => {
            this.sendMail(formState);
          }}
        >
          {({ formState }) => (
            <div className="formGrid">
              <Text field='page' initialValue={document.URL} className='hidden'/>
              <div>
                <Text
                  field="name"
                  placeholder="name"
                  autoComplete="name"
                  validateOnChange
                  validate={nameValidation}
                />
                <span>{formState.errors.name}</span>
              </div>
              <div>
                <Text
                  field="business"
                  autoComplete="organization"
                  placeholder="company"
                  validateOnChange
                  validate={businessValidation}
                />
                <span>{formState.errors.business}</span>
              </div>
              <div>
                <Text
                  field="email"
                  autoComplete="email"
                  placeholder="email"
                  validateOnChange
                  validate={emailValidation}
                />
                <span>{formState.errors.email}</span>
              </div>
              <div>
                <Text
                  field="phone"
                  autoComplete="tel tel-national"
                  placeholder="phone"
                  validateOnChange
                  validate={phoneValidation}
                />
                <span>{formState.errors.phone}</span>
              </div>
              <div className="textArea">
                <TextArea
                  field="message"
                  placeholder="what’s your challenge?"
                  validateOnBlur
                  validateOnChange
                  validate={messageValidation}
                />
                <span>{formState.errors.message}</span>
              </div>
              <button type="submit">send</button>
              {mailSent}
            </div>
          )}
        </Form>
      </div>
    );
  }
}

export default ContactForm;
