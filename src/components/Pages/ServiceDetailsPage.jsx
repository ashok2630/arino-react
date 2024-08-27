import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Accordion from '../Accordion'
import Button from '../Button'
import Cta from '../Cta'
import IconBox from '../IconBox'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from '../Spacing'

const services = [
  {
    id: 1,
    src: "/images/service_1.jpeg",
    details: "Enhances Language Acquisition",
    details2: "Language is the brain’s largest accomplishment. It pairs meaning to sound. The brain is programmed to learn language first and there is a critical period for both language and pitch. During this time, you can expand the sounds they learn to identify from phonemes to musical. English has 44 phonemes. Musical pitch has 28 basic notes and chords.",
  },
  {
    id: 2,
    src: "/images/service_2.gif",
    details: "Double Their Synaptic Architecture",
    details2:
      "The developing brain is expanding its neural connections at the blazing pace of hundreds of thousands per second! It cannot “Not Learn” when exposed to novel stimulation. Repeated pairing of musical notes with their image, must be uploaded just like language! Adding these associations, doubles their library of identifiable sounds.",
  },
  {
    id: 3,
    src: "/images/service_3.jpeg",
    details: "Create A Musical Prodigy",
    details2: "Pitch recognition is acquired at the same time as language. History shows that musical prodigies are introduced to music early. Start your child’s musical career as soon as they can focus their eyes.",
  },
  {
    id: 4,
    src: "/images/service_4.gif",
    details: "It Is Easy & Automatic",
    details2: "We have created a library of amazingly entertaining videos that will entertain any child. They are learning through subconscious repetition. Simply tap play or refine their session to even adjust for individual notes and even mood.",
  },

];

export default function ServiceDetailsPage() {
  pageTitle('Service Details');
  const params = useParams();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  let stringid  = useParams().serviceDetailsId;
  let id = stringid-1;
  console.log("stringid",stringid);
  console.log("id",id);

  return (
    <>
      <PageHeading 
        title='Service Details'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText={params.serviceDetailsId}
      />
      <Spacing lg='145' md='80'/>

{/* service detail */}
      <Div className="serviceDetailsContent">
          <Div className="serviceDetailsTop">
            <h1>{services[id].details}</h1>
            <img
              src={services[id].src}
              alt={services[id].details}
              className="img-fluid"
            />
          </Div>
            <p>{services[id].details2}</p>
          </Div>


      <Div className="container service-detail">
        {/* <SectionHeading 
          title='Design working process' 
          subtitle={params.serviceDetailsId} 
          variant='cs-style1 text-center'/> */}
        <Spacing lg='90' md='45'/>
        <Div className="row">

          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_1.svg'
              title='Sketching'
              subtitle='Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium also a doloremque laudantium, totam remain beatae vitae dictaro enim ipsam sunt explicabo.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_2.svg'
              title='Wireframing'
              subtitle='Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium also a doloremque laudantium, totam remain beatae vitae dictaro enim ipsam sunt explicabo.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_3.svg'
              title='Prototyping'
              subtitle='Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium also a doloremque laudantium, totam remain beatae vitae dictaro enim ipsam sunt explicabo.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
        </Div>
      </Div>
      <Spacing lg='120' md='50'/>
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img src="/images/service_img_1.jpeg" alt="Service" className='cs-radius_15 w-100' />
            </Div>
            <Spacing lg='0' md='40'/>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">Below our most design related services</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-lg-6">
                <Button btnLink='/service/service-details' btnText='Web page design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='eCommerce design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='Landing page' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='Email template' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='Application design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='Illustration' variant='cs-type2'/>
                <Spacing lg='0' md='10'/>
              </Div>
              <Div className="col-lg-6">
                <Button btnLink='/service/service-details' btnText='Infographic design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='Mobile apps design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='Banner, brochure, card' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='Other design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      <TestimonialSlider />
      <Spacing lg='145' md='80'/>
      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title='Some pre questions and answers' 
                subtitle='FAQ’s'
              />
              <Spacing lg='90' md='45'/>
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Accordion/>
            </Div>
          </Div>
        </Div>
      </Div>
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
