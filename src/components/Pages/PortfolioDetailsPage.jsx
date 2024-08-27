import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Button from '../Button'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import Spacing from '../Spacing'


const portfolio = [
  {
    src: "/images/portfolio_1.gif",
    details: "Learning Is Actually Automatic",
    details2: "A young child cannot 'Not Learn' if the information is presented correctly. Learning is an automatic and mechanical process for children. The developing brain is specifically designed to learn and absorb everything initially. Repetition is all that is required. We exploit this opportunity by uploading musical pitch through pleasant and entertaining repetition. We flash the image of 36 basic notes and chords, simultaneously to its being heard in 288 classical and original compositions.",
  },
  {
    src: "/images/portfolio_2.gif",
    details: "Theta Brainwaves",
    details2:
      "A child's brain activity starts slow and gradually speeds up. This happens in frequencies like Theta, which is 3-6 cycles per second. Theta is the frequency of learning for children because, at that level, all that is required for them to learn is that their brains are firing in Theta. That means attention is not required.",
  },
  {
    src: "/images/portfolio_3.gif",
    details: "A Perfect Presentation!",
    details2: "The science of teaching musical pitch to the youngest children is new and requires a versatile way to present the compositions. Our player is both simple and sophisticated. Start with a few simple rules of classical and original compositions. Watch as they happily amuse themselves. The library is deep, so the number of hours of musical images and compositions are vast. You can choose what you want, or you can keep them happy any time of the day and in any mood.",
  },

];

export default function PortfolioDetailsPage() {
  const params = useParams()
  pageTitle('Portfolio Details');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const stringid  = useParams().portfolioDetailsId;
  const id = stringid-1;

  const iseven = id % 2 ==0;

  return (
    <>
      <PageHeading 
        title='Portfolio Details'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText={params.portfolioDetailsId}
      />
      <Spacing lg='150' md='80'/>

      {/* portfolio detail */}
      {iseven ? (     //if id value will odd so this section will show
         <Div className="serviceDetailsContent portfolio-detail">
          <Div className="serviceDetailsTop">
            <h1>{portfolio[id].details}</h1>
            <img
              src={portfolio[id].src}
              alt={portfolio[id].details}
              className="img-fluid"
            />
          </Div>
            <p>{portfolio[id].details2}</p>
          </Div>

        ) :(    //else this section will show if id value will even 
      <Div className="serviceDetailsContent portfolio-detail2">
          <Div className="serviceDetailsTop">
            <img
              src={portfolio[id].src}
              alt={portfolio[id].details}
              className="img-fluid"
            />
          </Div>
          <Div className="serviceDetailsRight">
            <h1>{portfolio[id].details}</h1>
            <p>{portfolio[id].details2}</p>
            </Div>
          </Div>

        )}

        {/* end of portfolio */}



      <Div className="graffiti">
        {/* <img src="/images/portfolio_details_1.jpeg" alt="Details" className="cs-radius_15 w-100" /> */}
        <Spacing lg='90' md='40'/>
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title='Graffiti wall artwork' 
              subtitle='Creative' 
            >
              <Spacing lg='40' md='20'/>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium voltire doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
              <Spacing lg='10' md='10'/>
              <p>Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.</p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Project Info -</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3>
                <p className='cs-m0'>Artwork</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
                <p className='cs-m0'>United Kindom</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Software:</h3>
                <p className='cs-m0'>Adobe Illustrator</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Dated:</h3>
                <p className='cs-m0'>14-Aug-2022</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>Andreo Bowla</p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg='65' md='10'/>
          {/* <Div className="cs-page_navigation cs-center">
            <Div>
              <Button btnLink='/portfolio/portfolio-details' btnText='Prev Project' variant='cs-type1'/>
            </Div>
            <Div>
              <Button btnLink='/portfolio/portfolio-details' btnText='Next Project'/>
            </Div>
          </Div> */}
      </Div>
      <Spacing lg='145' md='80'/>
      <Cta 
        title='agency@arino.com' 
        bgSrc='/images/cta_bg_2.jpeg'
        variant='rounded-0'
      />
    </>
  )
}
