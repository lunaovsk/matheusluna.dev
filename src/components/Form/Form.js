import Input from '../Input/Input.js';
import Button from '../Button/Buttons.js'
import { buttonContact } from '../../config/buttonConfig.js';
import { useScroll } from '../../utils/useScroll';

const Form = ({ fields }) => {

    const {toSection} = useScroll();

    return (
        <div className='container-form'>
            <div className='contact-form'>
                <h4 className='title-form'>Envie uma Mensagem</h4>
                <p className='paragraph-form'>Preencha o formulário e responderei o mais breve possível</p>
            </div>
            <div className='container-form-contact'>
                <form id='formulario'>
                {fields.map((field, index) => (
                    <Input
                    key={index}
                    label={field.label}
                    type={field.type}
                    placeholder={field.placeholder}
                    />
                    ))}
                    <Button 
                        text={buttonContact.text}
                        variant={buttonContact.variant}
                        onClick={() => toSection(buttonContact.target)}
                    />
                </form>
            </div>
        </div>
    );
};

export default Form;