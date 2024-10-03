import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Card from '../Card'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import PricingTableList from '../PricingTable/PricingTableList'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from '../Spacing'

export default function ServicesPage() {
  pageTitle('Service');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <PageHeading 
        title='Services'
        bgSrc='images/service_hero_bg.jpeg'
        pageLinkText='Services'
      />
      <Spacing lg='150' md='80'/>
      <Div className='cs-shape_wrap_4 service-page'>
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title='Why Learn Musical Pitch?' 
                subtitle='You can do more'
              />
              <Spacing lg='90' md='45'/>
            </Div>
            <Div className='col-xl-8'>
              <Div className='row'>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title="Enhances Language Acquisition"
                    link='/service/1'
                    src='/images/service_1.jpeg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                     title="Double Their Synaptic Architecture"
                    link='/service/2'
                    src='/images/service_2.gif'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title="Give Them The Gift Of Music"
                    link='/service/3'
                    src='/images/service_3.jpeg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title="It Is Easy & Automatic"
                    link='/service/4'
                    src='/images/service_4.gif'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                {/* <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Consultancy'
                    link='/service/consultancy'
                    src='/images/service_5.jpeg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div> */}
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                {/* <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Creative Design'
                    link='/service/creative-design'
                    src='/images/service_6.jpeg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div> */}
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      <Div className="container-fluid px-5">
        <SectionHeading
          title='Providing best <br/>pricing for client' 
          subtitle='Pricing & Packaging'
        />
        <Spacing lg='85' md='40'/>
        <PricingTableList/>
      </Div>
      <Spacing lg='125' md='55'/>
      <TestimonialSlider/>
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Cta 
          title='Let’s disscuse make <br />something <i>cool</i> together' 
          btnText='Apply For Meeting' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}
