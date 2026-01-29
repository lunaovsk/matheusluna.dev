import React, { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";


const CardPortfolio = ({id, img, name, description, tech, linkDemo, linkGit}) => {
    const [currentTagIndex, setCurrentTagIndex] = useState(0);
    const tagsPerPage = 3;

    const moveTags = (direction) => {
        const totalTags = tech.length;
        let newIndex = currentTagIndex + direction;
        
        if (newIndex < 0) {
            const lastPageStartIndex = totalTags - (totalTags % tagsPerPage || tagsPerPage);
            newIndex = Math.max(0, lastPageStartIndex);
        } else if (newIndex >= totalTags) {
            newIndex = 0;
        }
        if (newIndex < 0) newIndex = 0;
        setCurrentTagIndex(newIndex);
    };
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const totalImg = img.length;
    const moveImg = (direction) => {
        let newIndex = currentImgIndex + direction;

        if (newIndex < 0) {
            newIndex = totalImg - 1;
        } else if (newIndex >= totalImg) {
            newIndex = 0;
        }
    setCurrentImgIndex(newIndex);
    };

    const displayedTags = tech.slice(currentTagIndex, currentTagIndex + tagsPerPage);
    const hasMultiplePages = tech.length > tagsPerPage;
    
    return (
        <div className='container-cardProjects'>  
            <div className="image-carousel">
                <img src={img[currentImgIndex]} alt={name} className={`img ${id === 'abrace-back' ? 'contain' : ''}`} />
                {img.length > 1 && (
                    <>
                        <button 
                            className="carousel-btn-img prev"
                            onClick={() => moveImg(-1)}
                            aria-label="Imagem anterior"
                        >
                            &#10094;
                        </button>

                        <button 
                            className="carousel-btn-img next"
                            onClick={() => moveImg(1)}
                            aria-label="Próxima imagem"
                        >
                            &#10095;
                        </button>
                    </>
                )}
            </div>
            <h3 className='title-project'>{name}</h3>
            <p className='container-descriptionProject'>{description}</p>
            <div className="container-tags-wrapper">
                <div className='container-tags-portfolio'>
                    {displayedTags.map((t, index) => (
                        <span key={index} className="tags-portfolio">{t}</span>
                    ))}
                </div>
                
                {hasMultiplePages && (
                    <div className="tags-carousel-controls">
                        <button 
                            className="tags-prev" 
                            onClick={() => moveTags(-tagsPerPage)}
                            aria-label="Tags anteriores"
                        >
                            &#10094;
                        </button>
                        <button 
                            className="tags-next" 
                            onClick={() => moveTags(tagsPerPage)}
                            aria-label="Próximas tags"
                        >
                            &#10095;
                        </button>
                    </div>
                )}
            </div>
            
            <div className="container-linkProjects">
                <a href={linkDemo} target="_blank" className={`linkDemo ${linkDemo}`}><FiExternalLink/> Demo</a>
                <a href={linkGit} target="_blank" className="linkGit"><FiGithub/> Código</a>
            </div>
        </div>
    )
}

export default CardPortfolio;