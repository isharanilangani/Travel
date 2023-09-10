import React, {useEffect} from "react";
import './main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import img from '../../Assets/img(1).jpg'
import img2 from '../../Assets/img(2).jpg'
import img3 from '../../Assets/img(3).jpg'
import img4 from '../../Assets/img(4).jpg'
import img5 from '../../Assets/img(5).jpg'
import img6 from '../../Assets/img(6).jpg'
import img7 from '../../Assets/img(7).jpg'
import img8 from '../../Assets/img(8).jpg'
import img9 from '../../Assets/img(9).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

//let me paste the array name data

const data = [
    {
        id:1,
        imgSrc:img,
        desrTitle: 'Bora Bora',
        location:'New Zealand',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'ghmfgvjykujlhliloilil.ih.jhjkhnjnhjkhkjhjkhjkh'
    },

    {
        id:2,
        imgSrc:img2,
        desrTitle: 'machu picchu',
        location:'Peru',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'ghmfgvjykujlhliloilil.ih.jhjkhnjnhjkhkjhjkhjkh'   
    },
    {
        id:3,
        imgSrc:img3,
        desrTitle: 'Bora Bora',
        location:'New Zealand',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'ghmfgvjykujlhliloilil.ih.jhjkhnjnhjkhkjhjkhjkh'
    },
    {
        id:4,
        imgSrc:img4,
        desrTitle: 'Bora Bora',
        location:'New Zealand',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'ghmfgvjykujlhliloilil.ih.jhjkhnjnhjkhkjhjkhjkh'
    },
    {
        id:5,
        imgSrc:img5,
        desrTitle: 'Bora Bora',
        location:'New Zealand',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'ghmfgvjykujlhliloilil.ih.jhjkhnjnhjkhkjhjkhjkh'
    },
    {
        id:6,
        imgSrc:img6,
        desrTitle: 'Bora Bora',
        location:'New Zealand',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'ghmfgvjykujlhliloilil.ih.jhjkhnjnhjkhkjhjkhjkh'
    },
    {
        id:7,
        imgSrc:img7,
        desrTitle: 'Bora Bora',
        location:'New Zealand',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'ghmfgvjykujlhliloilil.ih.jhjkhnjnhjkhkjhjkhjkh'
    },
    {
        id:8,
        imgSrc:img8,
        desrTitle: 'Bora Bora',
        location:'New Zealand',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'ghmfgvjykujlhliloilil.ih.jhjkhnjnhjkhkjhjkhjkh'
    },
    {
        id:9,
        imgSrc:img9,
        desrTitle: 'Bora Bora',
        location:'New Zealand',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'ghmfgvjykujlhliloilil.ih.jhjkhnjnhjkhkjhjkhjkh'
    },
]

const Main = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return(
        <section className="main container section">
            <div className="sectionTitle">
                <h3 data-aos="fade-right" className="title">Most visited destination</h3>
            </div>

            <div className="secContent grid">
                {
                    data.map(({id,imgSrc,desrTitle,location,grade,fees,description })=>{
                        return(
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                        
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={desrTitle}/>
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{desrTitle}</h4>
                                    <span className="continet flex">
                                        <HiOutlineLocationMarker className="icon"/>
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small> +1</small></span>
                                        </div>

                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        DETAILS <HiOutlineClipboardCheck className="icon"/>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default Main