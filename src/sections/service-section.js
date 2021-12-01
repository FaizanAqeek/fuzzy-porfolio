import React, { useState } from 'react';
/** @jsx jsx */
import { jsx, Container, Box, Grid, Text, Heading, Button, Image } from 'theme-ui';
import { keyframes } from '@emotion/core';
import TextFeature from 'components/text-feature';
import ModalVideo from 'react-modal-video';
import { IoIosPlay } from 'react-icons/io';

import ServiceThumb from 'assets/service-thumb.png';
import shapePattern from 'assets/shape-pattern1.png';

import Smart from 'assets/services/smart.svg';
import Secure from 'assets/services/secure.svg';
import About from 'assets/services/about.jpg';
import slider from 'assets/services/slider-2.jpg';

const data = {
  subTitle: 'our services',
  title: 'Business Goals Achieved with Design',
  features: [
    {
      id: 1,
      imgSrc: Smart,
      altText: 'Smart Features',
      title: 'Smart Features',
      text:
        'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.',
    },
    {
      id: 2,
      imgSrc: Secure,
      altText: 'Secure Contents',
      title: 'Secure Contents',
      text:
        'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.',
    },
  ],
};

const Skill = ({heading,barWidth = 2}) => {
  return (
       <Box pt={4}>
            <Heading as="h6" variant="title">
                {heading}
            </Heading>
          <Box className="skill" sx={{width:`${barWidth}%`}} />
      </Box>
  )
}

export default function ServiceSection() {
   const [videoOpen,setVideoOpen] = useState(false);
  const handleClick = (e) => {
      e.preventDefault();
      setVideoOpen(true);
  }
  return (
    <section sx={{variant:"section.services"}}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.skills}>
          <Heading as="h6" variant="title">
             About Our Company
          </Heading>
          <Heading as="h2" variant="lead">
             Providing your business with a quality IT service is our passion.
          </Heading>
          <Text as='p'>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, nostrud
          </Text>
          <Box >
            <Skill heading="IT Consulting" barWidth={90}/>
            <Skill heading="Virtual Workstation" barWidth={80}/>
            <Skill heading="Virtual Workstation" barWidth={70}/>
          </Box>
        </Box>

        <Box pl="8%"> 
            <Box className="about-image">
                <Image src={About} alt="About image"/>
                <Box className="years-design">
                  <h2>5</h2>
                  <h5>Years Experience</h5>
                </Box>
            </Box>

        </Box>

        <Box>

        </Box>
      {/* <Box sx={styles.thumbnail}>
        <Image src={ServiceThumb} alt="Thumbnail"/>
        <Button sx={styles.videoBtn} 
           onClick={handleClick}
           aria-label="Play Button"
           >
             <span><IoIosPlay/></span>
        </Button>
        <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt="Shape"/>
        </Box>
      </Box>
      <Box sx={styles.contentBox}>
        <TextFeature subTitle={data.subTitle} title={data.title}/>
        <Grid sx={styles.grid}>
          {data.features.map(feature => (
            <Box sx={styles.card} key={feature.id}>
              <Image src={feature.imgSrc} alt={feature.altText} sx={styles.icon} />
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>
              {feature.title}
                </Heading>
                <Text sx={styles.wrapper.subTitle}>{feature.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
        </Box> */}
      </Container>
      <ModalVideo 
        channel="youtube"
        isOpen={videoOpen}
        videoId="iGBERMGMIvc"
        onClose={()=> setVideoOpen(false)}
      />
    </section>
  );
}

const playPluse = keyframes`
  from {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  to {
	transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;

const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: 'relative',
  },
  skills:{
    width: ['100%', '90%', '535px', null, '57%', '60%', '50%', '50%'],
    position:'relative',
    p:[5,null,null,null,null,null,2,5]
  },
  containerBox: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pb: [0, null, null, null, null, 7],
    '.skill':{
      minHeight:5,
      backgroundColor:'primary',
      mt:2,
      mb:2,
      transition:'width 0.5s ease-in-out,heigth 0.5s ease-in-out'
    },
    '.about-image':{
      position: 'relative',
      textAlign: 'center',
      marginLeft: 0,
      '.years-design':{
        position: 'absolute',
        left: -75,
        bottom: 25,
        textAlign: 'left',
        padding: '20px 40px 20px 40px',
        background: '#ffffff',
        borderBottom: '2px solid #FF9800',
        boxShadow: '-1px 3px 20px 0px rgb(82 90 101 / 10%)',
        'h2':{
          fontSize: 70,
          fontWeight: 700,
          background:`url(${slider}) no-repeat`,
          backgroundPosition: '47% 53%',
          '-webkitBackgroundClip': 'text',
          '-webkitTextFillColor': 'transparent',
          margin:0,
          lineHeight: 1.1,
        }
      }
    }
  },
  // thumbnail: {
  //   mr: ['auto', null, null, 6, 60, 85],
  //   order: [2, null, null, 0],
  //   ml: ['auto', null, null, 0],
  //   display: 'inline-flex',
  //   position: 'relative',
  //   '> img': {
  //     position: 'relative',
  //     zIndex: 1,
  //     height: [310, 'auto'],
  //   },
  // },
  // shapeBox: {
  //   position: 'absolute',
  //   bottom: -68,
  //   left: -160,
  //   zIndex: -1,
  //   display: ['none', null, null, null, null, 'inline-block'],
  // },
  // videoBtn: {
  //   zIndex: 2,
  //   position: 'absolute',
  //   left: '50%',
  //   top: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   width: ['60px', null, '80px', null, '100px'],
  //   height: ['60px', null, '80px', null, '100px'],
  //   p: '0px !important',
  //   backgroundColor: 'transparent',
  //   '&::before': {
  //     position: 'absolute',
  //     content: '""',
  //     left: '50%',
  //     top: '50%',
  //     transform: 'translateX(-50%) translateY(-50%)',
  //     display: 'block',
  //     width: ['60px', null, '80px', null, '100px'],
  //     height: ['60px', null, '80px', null, '100px'],
  //     backgroundColor: 'primary',
  //     borderRadius: '50%',
  //     animation: `${playPluse} 1.5s ease-out infinite`,
  //     opacity: 0.5,
  //   },
  //   '> span': {
  //     backgroundColor: 'rgba(255,255,255,0.5)',
  //     width: 'inherit',
  //     height: 'inherit',
  //     textAlign: 'center',
  //     borderRadius: '50%',
  //     cursor: 'pointer',
  //     transition: 'all 0.5s',
  //     display: 'flex',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     position: 'relative',
  //     zIndex: 2,
  //   },
  //   svg: {
  //     fontSize: [40, null, 48, null, 62],
  //   },
  // },
  // contentBox: {
  //   width: ['100%', null, null, 315, 390, 450, null, 500],
  //   flexShrink: 0,
  //   mb: [7, null, 60, 0],
  //   textAlign: ['center', null, null, 'left'],
  // },
  // grid: {
  //   pr: [2, 0, null, null, 6, '70px'],
  //   pl: [2, 0],
  //   pt: [2, null, null, null, 3],
  //   mx: 'auto',
  //   width: ['100%', 370, 420, '100%'],
  //   gridGap: ['35px 0', null, null, null, '50px 0'],
  //   gridTemplateColumns: ['repeat(1,1fr)'],
  // },
  // card: {
  //   display: 'flex',
  //   alignItems: 'flex-start',
  //   transition: 'all 0.3s',
  // },

  // icon: {
  //   width: ['45px', null, null, null, '55px'],
  //   height: 'auto',
  //   flexShrink: 0,
  //   mr: [3, null, null, null, 4],
  // },
  // wrapper: {
  //   width: '100%',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   textAlign: 'left',
  //   mt: '-5px',
  //   title: {
  //     fontSize: 3,
  //     color: 'heading_secondary',
  //     lineHeight: 1.4,
  //     fontWeight: 700,
  //     mb: [2, null, 3, 2, 3],
  //   },

  //   subTitle: {
  //     fontSize: [1, null, null, '14px', 1],
  //     fontWeight: 400,
  //     lineHeight: 1.9,
  //   },
  // },
  // videoWrapper: {
  //   maxWidth: '100%',
  //   position: 'relative',
  //   width: '900px',
  //   '&:before': {
  //     content: '""',
  //     display: 'block',
  //     paddingTop: '56.25%',
  //   },
  //   iframe: {
  //     width: '100%',
  //     height: '100%',
  //     position: 'absolute',
  //     top: 0,
  //     left: 0,
  //   },
  // },
};
