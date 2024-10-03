import React from 'react'
import { useState } from 'react'
import PricingTable from '.'
import Section from '../Div'
import Spacing from '../Spacing'

export default function PricingTableList() {
  const [tab, setTab] = useState('monthly')
  return (
    <Section className="position-relative">
      {/* <ul className="cs-tab_links cs-style1 cs-mp0 cs-primary_font">
        <li className={tab === 'monthly' ? "active" : ""} onClick={()=>setTab('monthly')}>Monthly</li>
        <li className={tab === 'yearly' ? "active" : ""} onClick={()=>setTab('yearly')}>Yearly</li>
      </ul>
      <Section className="row">
        <Section className="col-lg-4">
          {tab==='monthly' && (
            <PricingTable 
              title='Standard'
              price='29'
              currency='$'
              timeline='monthly'
              features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
              btnText='Purchase Now'
              btnLink='/'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='Standard'
              price='59'
              currency='$'
              timeline='yearly'
              features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
              btnText='Purchase Now'
              btnLink='/'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
        <Section className="col-lg-4">
         {tab==='monthly' && (
            <PricingTable 
              title='Professional'
              price='199'
              currency='$'
              timeline='monthly'
              features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
              btnText='Purchase Now'
              btnLink='/'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='Professional'
              price='399'
              currency='$'
              timeline='yearly'
              features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
              btnText='Purchase Now'
              btnLink='/'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
        <Section className="col-lg-4">
          {tab==='monthly' && (
            <PricingTable 
              title='Ultimate'
              price='299'
              currency='$'
              timeline='monthly'
              features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
              btnText='Purchase Now'
              btnLink='/'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='Ultimate'
              price='599'
              currency='$'
              timeline='yearly'
              features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
              btnText='Purchase Now'
              btnLink='/'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
      </Section> */}
      <div className="final-output">
        <div className="box-container">
          <div className="box-fit">
            <div className="box">
              <div className="box-image">
                <img src="images/music1.png" alt="" className="img-fluid" />
              </div>
              <div className="box-heading">
                <h3>Free</h3>
                <h5>Free</h5>
              </div>
              <div className="buttons">
                <button className="Dates">1 Month</button>
              </div>
              <div className="subscribe">
                <button className="subscribe">Subscribe Now</button>
              </div>
              <ul className="offers">
                <li><img src="images/check.png" alt="" className="check" /> <span>72 Classical
                  Pieces</span></li>
                <li><img src="images/cross.png" alt="" className="cross" /> <span>No images</span>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="box-fit">
            <div className="box">
              <div className="box-image">
                <img src="images/music2.png" alt="" className="img-fluid" />
              </div>
              <div className="box-heading">
                <h3>Basic</h3>
                <h5>9.99$/Month</h5>
              </div>
              <div className="buttons">
                <button className="one-month">1 Month</button>
                <button className="one-year">1 Year</button>
              </div>
              <div className="subscribe">
                <button className="subscribe">Subscribe Now</button>
              </div>
              <ul className="offers">
                <li><img src="images/check.png" alt="" className="check" /> <span>144 Classical
                  Pieces</span></li>
                <li><img src="images/check.png" alt="" className="check" /> <span>Only Letter
                  Format</span>
                </li>
                <li></li>
              </ul>
              <ul className="wavs">
                <li><img src="images/subs1.png" className="img-fluid" alt="" /></li>
              </ul>
            </div>
          </div>
          <div className="box-fit">
            <div className="box">
              <div className="box-image">
                <img src="images/music3.png" alt="" className="img-fluid" />
              </div>
              <div className="box-heading">
                <h3>Premium</h3>
                <h5>14.5$/Month</h5>
              </div>
              <div className="buttons">
                <button className="one-month">1 Month</button>
                <button className="one-year">1 Year</button>
              </div>
              <div className="subscribe">
                <button className="subscribe">Subscribe Now</button>
              </div>
              <ul className="offers">
                <li><img src="images/check.png" alt="" className="check" />
                  <span>144 Classical
                    Pieces</span>
                </li>
                <li><img src="images/check.png" alt="" className="check" />
                  <span>144 Original
                    Pieces</span>
                </li>
                <li><img src="images/check.png" alt="" className="check" />
                  <span>Images + Letter + Staff + Keys</span>
                </li>
              </ul>
              <ul className="wavs">
                <li><img src="images/subs1.png" className="img-fluid" alt="" /></li>
                <li><img src="images/subs2.png" className="img-fluid" alt="" /></li>
                <li><img src="images/subs3.png" className="img-fluid" alt="" /></li>
              </ul>
            </div>
          </div>
          <div className="box-fit">
            <div className="box">
              <div className="box-heading">
                <h3>Sample Library</h3>
              </div>
              <video preload="auto" width="390px" controls id="player_rand">
                <source src="https://absolutepitch.net/upload_image/songs/Bbm_Cereghetti_Future_O4_21_93_MI_Mellow_Staff_P.mp4" type="audio/ogg" />
                Your browser does not support the audio element.
              </video>
              <div id="new_songs"></div>
              <button id="playVid_rand" className="sigma_video-popup playVideo2"><i className="fa fa-play"></i></button>
              <div className="buttons select_songs">
                <a className="one-month" onclick="getSongs('C')"><i className="fa fa-chevron-left"></i></a>
                <a className="one-year" onclick="getSongs('O')"><i className="fa fa-chevron-right"></i></a>
              </div>
              <div className="buttons select_songs2">
                <a className="one-month" onclick="getSongs('C')">Classics</a>
                <a className="one-year" onclick="getSongs('O')">Originals</a>
              </div>
            </div>
          </div>
          <div className="box-fit">
            <div className="box">
              <div className="box-image">
                <img src="images/music3.png" alt="" className="img-fluid" />
              </div>
              <div className="box-heading">
                <h3>Mobile Premium</h3>
                <h5></h5>
              </div>
              <div className="buttons">
                <button className="one-month">1 Month</button>
                <button className="one-year">1 Year</button>
              </div>
              <div className="subscribe">
                <button className="subscribe">Subscribe Now</button>
              </div>
              <ul className="offers">
                <li><img src="images/check.png" alt="" className="check" />
                  <span>144 Classical
                    Pieces</span>
                </li>
                <li><img src="images/check.png" alt="" className="check" />
                  <span>144 Original
                    Pieces</span>
                </li>
                <li><img src="images/check.png" alt="" className="check" />
                  <span>Images + Letter + Staff + Keys</span>
                </li>
              </ul>
              <ul className="wavs">
                <li><img src="images/subs1.png" className="img-fluid" alt="" /></li>
                <li><img src="images/subs2.png" className="img-fluid" alt="" /></li>
                <li><img src="images/subs3.png" className="img-fluid" alt="" /></li>
              </ul>
            </div>
            <div className="overlay-mobile">
              <p>COMING SOON TO MOBILE!</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
