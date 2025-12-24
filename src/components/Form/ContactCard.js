const ContactCard = ({icon, cont, text}) => {
    return (
        <div className='container-info'>
            <div className='container-icon'>{icon}</div>
            <div className="container-info-text">
                <h5 className='title-info'> {cont}</h5>
                <p className='paragraph-info'>{text}</p>
            </div>
        </div>
    )
}

export default ContactCard;