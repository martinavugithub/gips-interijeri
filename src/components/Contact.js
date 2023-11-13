import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    ime: '',
    email: '',
    poruka: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ovdje možete dodati logiku za slanje podataka, kao poziv API-ja ili drugu akciju
    console.log('Podaci za slanje:', formData);
    // Nakon slanja možete očistiti formu
    setFormData({
      ime: '',
      email: '',
      poruka: '',
    });
  };

  return (
    <div className="contact" id="contact">
      <div>
        <h2>Kontaktirajte nas</h2>
      </div>
      <div className="contactWrap">
        <div className="formWrap">
          <h3>Ukoliko imate bilo kakvih pitanja, trebate savjet ili ponudu, obratite nam se s povjerenjem.</h3>
          <form id="form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                id="ime"
                name="ime"
                type="text"
                className="form-control"
                placeholder="Ime i prezime"
                value={formData.ime}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                id="e-mail"
                name="email"
                type="text"
                className="form-control"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <textarea
                id="poruka"
                name="poruka"
                className="form-control"
                placeholder="Vaša poruka"
                value={formData.poruka}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="sendBtn">
              <button type="submit" className="btn btn-primary">
                Pošalji
              </button>
            </div>
          </form>
        </div>
        <div className="contactInfo">
          <div>
            <h3>Kontakt info</h3>
          </div>
          <div>
            <p>Mobitel: 099/836-6412</p>
            <p>E-mail: martinavu1@gmail.com</p>
            <p>Adresa: Vukovarskih vitezova 49, 32000 Vukovar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
