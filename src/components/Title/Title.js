const Title = ({ title, paragraph }) => {
  return (
    <div className='container-header-section '>
            <h1 className="title">{title}</h1>
            <p className="paragraph">{paragraph}</p>
    </div>
  );
};

export default Title;