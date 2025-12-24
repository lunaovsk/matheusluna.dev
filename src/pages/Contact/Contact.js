import './Contact.css'
import Title from '../../components/Title/Title.js'
import Form from '../../components/Form/Form.js'
import ContactCard from '../../components/Form/ContactCard.js'
import { data } from '../../components/Form/ContactInfo.js'



const Contact = ({ title, paragraph, fields }) => {
  return (
    <section className='contact' id='contato'>
      <Title title={title} paragraph={paragraph} />
      <div className='container-contactAll'>
        <Form fields={fields} />

        <div className="container-contact-infos">
          {data.map((info, index) => (
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
  )
}



export default Contact;