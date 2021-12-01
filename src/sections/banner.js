/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button,Flex } from 'theme-ui';
// import BannerImg from 'assets/banner-thumb.png';
import homeImg from 'assets/home-font.png';
import bottomShap from 'assets/home-bottom-shape.png';

import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';

export default function Banner() {
  return (
    <section sx={styles.homeBanner} id="home">
      <Container sx={styles.homeBanner.container}>
        <Box sx={styles.homeBanner.contentBox}>
          <Box>
              <Heading as="h1" sx={styles.homeBanner.heading} variant="heroPirmary">
                  IT Solutions & Business Services Company
              </Heading>
              <Text as="p" sx={{width:'39ch'}} variant="descPrimary">
                  Check out our website to find great software products and deals!
                  if you need a website or a web application this is the place to go!
              </Text>
              <Button variant="primary"> Explore
              <span></span>
              </Button>
          </Box>
          <Box sx={{paddingTop:50}}>
           <Image src={homeImg} alt="banner"/>
          </Box>
        </Box>
        <Box sx={styles.homeBanner.b_shape}>
          <Image src={bottomShap} alt="banner"/>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  homeBanner : {
    overflow: 'hidden',
    position: 'relative',
    zIndex: 1,
    height: 800,
    background: 'linear-gradient(to bottom, #370b6f, #00429b, #006dba, #0095ce, #2dbcdc)',
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    heading:{
      fontSize:[35,35,null,null,null,55,55,55],
      fontWeight:700,
      textAlign:'left',
      color:'heading'
    },
    b_shape:{
      position: 'absolute',
      bottom: -5,
      left: 0,
      width: '100%',
      height: 'auto',
      zIndex: -1,
    },
    contentBox: {
      // width: ['25%', "33%", "50%", null, null, null, null, '100%'],
      mx: 'auto',
      textAlign: 'center',
      display:'flex',
      flexDirection:['column', 'column', 'column', 'row', 'row', 'row', 'row', 'row'],
      alignItems:'center',
      justifyContent: 'center',
      paddingTop:'6%',
      '> div':{
        flex: '0 0 50%',
        maxWidth:'50%',
        minHeight:1,
        pl:15,
        pr:15
      }
      // mb: ['40px', null, null, null, null, 7],
      
    }
  },
  // banner: {
  //   pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
  //   pb: [2, null, 0, null, 2, 0, null, 5],
  //   position: 'relative',
  //   zIndex: 2,
  //   '&::before': {
  //     position: 'absolute',
  //     content: '""',
  //     bottom: 6,
  //     left: 0,
  //     height: '100%',
  //     width: '100%',
  //     zIndex: -1,
  //     backgroundImage: `url(${ShapeLeft})`,
  //     backgroundRepeat: `no-repeat`,
  //     backgroundPosition: 'bottom left',
  //     backgroundSize: '36%',
  //   },
  //   '&::after': {
  //     position: 'absolute',
  //     content: '""',
  //     bottom: '40px',
  //     right: 0,
  //     height: '100%',
  //     width: '100%',
  //     zIndex: -1,
  //     backgroundImage: `url(${ShapeRight})`,
  //     backgroundRepeat: `no-repeat`,
  //     backgroundPosition: 'bottom right',
  //     backgroundSize: '32%',
  //   },
  //   container: {
  //     minHeight: 'inherit',
  //     display: 'flex',
  //     flexDirection: 'column',
  //     justifyContent: 'center',
  //   },
  //   contentBox: {
  //     width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
  //     mx: 'auto',
  //     textAlign: 'center',
  //     mb: ['40px', null, null, null, null, 7],
  //   },
  //   imageBox: {
  //     justifyContent: 'center',
  //     textAlign: 'center',
  //     display: 'inline-flex',
  //     mb: [0, null, -6, null, null, '-40px', null, -3],
  //     img: {
  //       position: 'relative',
  //       height: [245, 'auto'],
  //     },
  //   },
  // },
};
