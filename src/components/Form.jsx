import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="subscribe-form">
      <h1 className='secondary-sub-title'>Свяжитесь с нами</h1>
      <p className="secondary-title">join the community</p>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Имя"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Фамилия"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <button className='form-button' type="submit">Отправить</button>
        </form>
      ) : (
        <p className='form-text'>Спасибо, мы скоро свяжемся с вами!</p>
      )}
    </div>
  );
}

export default Form;
