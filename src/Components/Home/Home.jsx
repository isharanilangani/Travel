import React, {useEffect} from 'react'
import './home.css'
import video from '../../Assets/video.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {SiTripadvisor} from 'react-icons/si'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div className="Content container">
                <div className="textDiv">

                    <span data-aos="fade-up" className="smallText">
                        Our Packages
                    </span>

                    <h1 data-aos="fade-up" className="homeTitle">
                        Search your Holidays
                    </h1>

                </div>

                <div data-aos="fade-up" className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor='city'>Search your destination:</label>
                        <div className="input flex">
                            <input type='text' placeholder='Enter name here.............'></input>
                            <GrLocation className="icon"/>
                        </div>
                    </div>

                    <div className="dateinput">
                        <label htmlFor='date'>Selecr your date:</label>
                        <div className="input flex">
                            <input type='date' placeholder='Enter date here..'></input>
                        </div>
                    </div>
                
                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor='price'>Max price:</label>
                            <h3 className='total'>$5000</h3>
                        </div>
                        <div className="input flex">
                            <input type='range' max="5000" min="1000"></input>
                        </div>
                    </div>

                    <div className="searchOption flex">
                        <HiFilter className="icon"/>
                        <span>MORE FILTERS</span>
                    </div>
                </div>

                <div data-aos="fade-up" className="homefooterIcon flex">
                    <div className='rightIcon'>
                        <FiFacebook className="icon"/>
                        <AiOutlineInstagram className="icon"/>
                        <SiTripadvisor className="icon"/>
                    </div>

                    <div className="leftIcon">
                        <BsListTask className="icon"/>
                        <TbApps className="icon"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home
