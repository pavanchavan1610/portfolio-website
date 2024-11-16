import React from 'react'
import './portfolio.css'
import { Link } from 'react-router-dom'
import Itorix from '../../assets/Itorixinfotech.png'
import set from '../../assets/set.webp'
import bharat from '../../assets/bharat.webp'
import allflow from '../../assets/allflow.webp'
import oprive from '../../assets/oprive.webp'
import vision from '../../assets/vision.webp'
import master from '../../assets/master.webp'
import heramb from '../../assets/heramb.webp'
import phone from '../../assets/phone.webp'
import custom from '../../assets/custom.webp'
import sourayan from '../../assets/sourayan.webp'
import testing from '../../assets/testing.webp'



const portfolio = () => {
    return (
        <div>
            {/* Portfolio Section*/}
            <div id='portfolio' className='mywork'>
                <div className="mywork-title">
                    <h1>My Latest Work</h1>
                    <img src="" alt="" />
                </div>
                <div className="mywork-container">
                    <div className="work">
                        <img src={Itorix} alt="" />
                        <div className="work-title">
                            <h3>Itorix Infotech</h3>
                            <Link to="https://www.itorixinfotech.com/">view Website</Link>
                        </div>
                    </div>
                    <div className="work">
                        <img src={oprive} alt="" />
                        <div className="work-title">
                            <h3>Oprive Realtors</h3>
                            <Link to="https://opriverealtors.com/">view Website</Link>
                        </div>
                    </div>
                    <div className="work">
                        <img src={set} alt="" />
                        <div className="work-title">
                            <h3>Set By Pune Dusk</h3>
                            <Link to="https://www.setsbypunedusk.com/">view Website</Link>
                        </div>
                    </div>
                    <div className="work">
                        <img src={heramb} alt="" />
                        <div className="work-title">
                            <h3>Heramb Developer</h3>
                            <Link to="https://herambdevelopers.com/">view Website</Link>
                        </div>
                    </div>
                    <div className="work">
                        <img src={vision} alt="" />
                        <div className="work-title">
                            <h3>Vision Holidays</h3>
                            <Link to="https://www.visionholidayss.com/">view Website</Link>
                        </div>
                    </div>
                    <div className="work">
                        <img src={allflow} alt="" />
                        <div className="work-title">
                            <h3>Allflow</h3>
                            <Link to="https://allflow.com.au/">view Website</Link>
                        </div>
                    </div>
                    <div className="work">
                        <img src={master} alt="" />
                        <div className="work-title">
                            <h3>800 Master Pergola</h3>
                            <Link to="https://www.800masterpergola.com/">view Website</Link>
                        </div>
                    </div>
                    <div className="work">
                        <img src={bharat} alt="" />
                        <div className="work-title">
                            <h3>Education Bharat</h3>
                            <Link to="https://www.educationbharat.com/">view Website</Link>
                        </div>
                    </div>
                    <div className="work">
                        <img src={sourayan} alt="" />
                        <div className="work-title">
                            <h3>Sourayan</h3>
                            <Link to="https://sourayn.swastikselfdrive.com/">view Website</Link>
                        </div>
                    </div>
                    <div className="work">
                        <img src={phone} alt="" />
                        <div className="work-title">
                            <h3>800 Master Phone Pod</h3>
                            <Link to="https://www.800masterphonepod.com/">view Website</Link>
                        </div>
                    </div>
                    <div className="work">
                        <img src={custom} alt="" />
                        <div className="work-title">
                            <h3>Custome Soul Design</h3>
                            <Link to="https://customsouldesign.com/">view Website</Link>
                        </div>
                    </div>
                    <div className="work">
                        <img src={testing} alt="" />
                        <div className="work-title">
                            <h3>Testing Shastra</h3>
                            <Link to="https://www.testingshastra.com/">view Website</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default portfolio
