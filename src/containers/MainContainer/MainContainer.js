import React from 'react';
import './MainContainer.css';
import Button from '../../components/UI/Button/Button';
import Heading from '../../components/UI/Heading/Heading';
import SmallCard from '../../components/UI/SmallCard/SmallCard';
import Card from '../../components/UI/Card/Card';
import CustomerFeedback from '../../components/CustomerFeedback/CustomerFeedback';
import SquareCard from '../../components/UI/SquareCards/SquareCards';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import axios from 'axios';

class MainContainer extends React.Component {
  state = {
    feedbackData: [],
  };

  componentDidMount() {
    //window.addEventListener('scroll', this.scrollAnimation());
    this.fetchFeedbackData();
  }

  fetchFeedbackData = () => {
    axios.get('https://demo2802982.mockable.io/feedbackdata').then((resp) => {
      const fetchedData = [];
      for (let key in resp.data) {
        fetchedData.push({
          ...resp.data[key],
          id: key,
        });
      }
      this.setState({ feedbackData: fetchedData });
    });
  };

  scrollAnimation = () => {
    window.addEventListener('scroll', this.scrollAnimation);
    const sections = document.querySelectorAll('section');
    const triggerBottom = (window.innerHeight / 5) * 4.3;
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add('show');
      } else {
        section.classList.remove('show');
      }
    });
  };

  render() {
    // const data = this.state.feedbackData;

    const feedback = this.state.feedbackData.map((data, i) => {
      return (
        <CustomerFeedback
          imgLink={data.imgLink}
          feedbackData={data.feedbackData}
          customerName={data.customerName}
          key={i}
        />
      );
    });

    const feedbackSliderSettings = {
      dots: true,
      fade: true,
      autoplay: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      className: 'slides',
    };

    return (
      <div className='container'>
        <section className='first-section'>
          <div className='front-div'>
            <div className='text-div'>
              <h1 className='text-div-heading'>Discover a Healthier You.</h1>
              <p className='text-div-p'>
                Get a personalized nutrition program based on your lifestyle,
                habits and blood analysis.
              </p>
              <Button>Get Started</Button>
            </div>
            <div className='img-div'>
              <img
                src='https://static.wixstatic.com/media/9d3b92_99f1a6ad907e4aae84ca1d2bb15edf58~mv2.png/v1/fill/w_455,h_370,al_c,q_85,usm_0.66_1.00_0.01/HP_Image.webp'
                alt='img'
              ></img>
            </div>
          </div>
        </section>
        <section style={{ backgroundColor: '#e3e3e3' }}>
          <div className='second-section-div'>
            <Heading>Redefine your relationship with food</Heading>
            <div className='small-cards-div'>
              <SmallCard title='No Diet Charts' />
              <SmallCard title='No Restrictive Diets' />
              <SmallCard title='No Staying Hungry' />
            </div>
          </div>
        </section>

        <section>
          <div className='third-section-div'>
            <Heading>WE HELP YOU ACHIEVE YOUR HEALTH GOALS</Heading>
            <div className='cards-div'>
              <Card
                image=''
                label='Blood Biomaker Analysis'
                data='Get a scientific explanation for how specific biomarkers affect your body and what foods can be used to improve them.'
              />
              <Card
                image=''
                label='One on one lifestyle analysis'
                data='Discover how your habits are affecting your health and immunity with consultations over video/audio calls.'
              />
              <Card
                image=''
                label='Weekly Consultation'
                data='Discuss your goals/plans and build healthy habis with your nutritionist to boost your immunity.'
              />
              <Card
                image=''
                label='Superfood Library'
                data='Identify your superfoods as per your blood biomakers and take the guesswork out of eating right.'
              />
              <Card
                image=''
                label='24/7 Support'
                data='Get real time feedback on your food decisions. Questions are answered by your nutritionist.'
              />
              <Card
                image=''
                label='Sova Community'
                data='Get access to network of experts(nutritionists, chefs, fitness trainers and immunologists) with daily health tips, easy recipes, immunity boosting foods and lifestyle recommendations.'
              />
            </div>
            <div className='video-container'>
              <iframe
                width='560'
                height='315'
                src='https://www.youtube.com/embed/-3O3TVzbEJ8'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                title='video'
              ></iframe>
            </div>
          </div>
        </section>

        <section>
          <div className='fourth-section-div'>
            <Heading>How it works?</Heading>
            <div className='square-cards-div'>
              <SquareCard
                num='1'
                cardImg='https://i.ibb.co/CP96wHf/Capture.png'
                label='Sign up'
              />
              <SquareCard
                num='2'
                cardImg='https://i.ibb.co/y5mFH8p/Capture.png'
                label='Get Tested'
              />
              <SquareCard
                num='3'
                cardImg='https://i.ibb.co/N1QTp2p/Capture.png'
                label='Learn'
              />
              <SquareCard
                num='4'
                cardImg='https://i.ibb.co/hCFQH4P/Capture.png'
                label='Get Advice'
              />
              <SquareCard
                num='5'
                cardImg='https://i.ibb.co/LS8jtGj/Capture.png'
                label='Re-Test'
              />
            </div>

            <Heading>See how the complete process works.</Heading>
          </div>
        </section>

        <section>
          <div className='fifth-section-div'>
            <Heading>What our customers say</Heading>
            <div className='slider-div'>
              <Slider {...feedbackSliderSettings}>{feedback}</Slider>
            </div>
          </div>
        </section>
        {/* <section>
          <Heading>Our Partners</Heading>
          <img
            src='https://static.wixstatic.com/media/9d3b92_e1d9d90c304c4ef999d674989bf1eaff~mv2.png/v1/fill/w_875,h_260,al_c,q_85,usm_0.66_1.00_0.01/partners.webp'
            alt='partners'
          />
        </section> */}
      </div>
    );
  }
}

export default MainContainer;
