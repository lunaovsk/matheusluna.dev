import React, { useState } from 'react';
import './Contact.css';
import Title from '../../components/Title/Title.js';
import Form from '../../components/Form/Form.js';
import ContactCard from '../../components/Form/ContactCard.js';
import { data as contactData } from '../../components/Form/ContactInfo.js';

const Contact = ({ title, paragraph, fields }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviando...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "4473292a-2288-4d6f-bd1f-b557a96b0145");
    formData.append("from_name", "Meu Portfólio");
    formData.append("subject", `Novo Contato: ${formData.get("name")}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const resData = await response.json();
      if (resData.success) {
        setResult("Mensagem enviada!");
        event.target.reset();
      } else {
        setResult(resData.message);
      }
    } catch (error) {
      setResult("Erro de conexão.");
    }
  };

  return (
    <section className='contact' id='contato'>
      <Title title={title} paragraph={paragraph} />
      
      <div className='container-contactAll'>
        
        <Form fields={fields} onSubmit={onSubmit} />
        {result && <p className="form-status-message" style={{gridColumn: '1/-1', textAlign: 'center'}}>{result}</p>}

        <div className="container-contact-infos">
          {contactData.map((info, index) => (
            <ContactCard
              key={index}
              icon={info.icon}
              cont={info.cont}
              text={info.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;