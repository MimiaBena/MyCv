
console.log("coucou mimi!");
import React, { useState } from "react";
import ReactDOM from 'react-dom';
import '/css/cv.css';

const App = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  console.log("mimi");

  const isEmail = () => {
    let mail = document.getElementById('not-mail');
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.match(regex)) {
      mail.style.display = 'none';
      return true;
    } else {
      mail.style.display = 'block';
      mail.style.animation = 'dongle 3s';
      setTimeout(() => {
        mail.style.animation = 'none';
      }, 1000);
      return false;
    }
  };

  const failMessage = (message) => {
    let formaMsg = document.querySelector('.form-message');
    formaMsg.innerHTML = message;
    formaMsg.style.opacity = '1';
    formaMsg.style.background = 'red';

    document.getElementById('name').classList.add('error');
    document.getElementById('email').classList.add('error');
    document.getElementById('message').classList.add('error');
  };

  const successMesg = () => {
    let formaMsg = document.querySelector('.form-message');

    formaMsg.innerHTML = 'Message envoyé!';
    formaMsg.style.background = 'green';
    formaMsg.style.opacity = '1';

    document.getElementById('name').classList.remove('error');
    document.getElementById('email').classList.remove('error');
    document.getElementById('message').classList.remove('error');

    setTimeout(() => {
      formaMsg.style.opacity = '0';
    }, 5000);

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && isEmail() && message) {
      sendFeedback('template_jok6x7d', {
        name,
        company,
        phone,
        email,
        message,
      });
    } else {
      failMessage("Merci de remplir correctement les champs requis!");
    }
  };

  const sendFeedback = (templateId, variables) => {

    window.emailjs
      .send('Mokhtaria', templateId, variables)
      .then((res) => {
        successMesg();
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) => {
          failMessage("Une erreur s'est produite, veuillez réessayer.");
        }
      );
  };


  return (
    <form >
      <div className="col-md-8">
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name *"
          value={name}
          autoComplete="off"
        />
      </div>
      <div className="col-md-8">
        <input
          type="text"
          id="company"
          name="company"
          onChange={(e) => setCompany(e.target.value)}
          placeholder="LastName"
          value={company}
        />
      </div>
      <div className="col-md-8">

        <input
          type="tel"
          id="phone"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          value={phone}
        />
      </div>
      <div className="col-md-8">
        <div className="email-content">
          <label id="not-mail">Email non valide</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email *"
            value={email}
            autoComplete="off"
          />

        </div>

        <div className="col-md-12">
          <textarea
            id="message"
            name="message"
            rows="4"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message *"
            value={message}

          />
        </div>
        <div className="row col-md-12">
          <input
            className="buttonForm"
            type="button"
            value="SUBMIT"
            onClick={handleSubmit}
          />
        </div>
        <div className="form-message"></div>
      </div>
    </form>
  );
};



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


  //const domContainer = document.getElementById('root');
//ReactDOM.render(React.createElement(App) , domContainer);