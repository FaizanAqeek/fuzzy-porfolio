/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Rating from 'components/rating';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';
import X628C from 'assets/devices/X628-C.png';
import U300C from 'assets/devices/U300-C.png';
import U260C from 'assets/devices/U260-C.png';
import iClock360 from 'assets/devices/iClock360.png';
import iClock680 from 'assets/devices/iClock680.png';


const data = [
  {
    id: 1,
    title: 'X628-C',
    description:
      'The firmware of X628-C has been upgraded to the New Firmware. It brings many new experiences, including the new stunning GUI, rock-solid stability, faster matching speed and better expandability. Users can easily manage data by networking X628-C via RS232, TCP/IP, and USB-host. Most importantly, all the functions can still operate in a networking state. X628-C is compatibility with various types of USB flash disks, ADMS and former SDK. It also supports data backup and retrieve to avoid the risk of accidental deletion. It promotes the fingerprint time & attendance management to the next level. You can get the best of benefits from the X628-C.',
    avatar: X628C,
    review: 4,
  },
  {
    id: 2,
    title: 'U300-C',
    description:
      'The firmware of U300-C has been upgraded to the New Firmware. It brings many new experiences, including the new stunning GUI, rock-solid stability, faster matching speed and better expandability. Users can easily manage data by networking U300-C via RS232, TCP/IP, and USB-host/client. Most importantly, all the functions can still operate in a networking state. U300-C is compatibility with various types of USB flash disks, ADMS and former SDK. It also supports data backup and retrieve to avoid the risk of accidental deletion. It promotes the fingerprint time & attendance management to the next level. You can get the best of benefits from the U300-C.',
    avatar: U300C,
    review: 5,
  },
  {
    id: 3,
    title: 'U260-C',
    description:
      'The firmware of U260-C has been upgraded to the new firmware, it has new features like stunning GUI, more stability, faster matching speed and better expandability. Users can easily manage data by networking U260-C via RS232, TCP/IP, and USB-host / client. Most importantly, all the functions can still operate in a networking state. It also supports data backup and retrieve to avoid the risk of accidental deletion.',
    avatar: U260C,
    review: 5,
  },
  {
    id: 4,
    title: 'iClock360',
    description:
      'The firmware of iClock360 has been updated to the New version with whole new experiences including stunning GUI, rock-solid stability, fast matching and expandability. Users can easily manage data by networking iClock360 via RS232, TCP/IP, and USB host / client (optional). Most importantly, all the functions can still operate in a networking state. iClock360 is compatible with various types of USB flash disks, ADMS and former SDK. It also supports data backup and retrieve to avoid the risk of accidental deletion. It promotes the fingerprint time & attendance management to the next level. You can get the best of benefits from the iClock360.',
    avatar: iClock360,
    review: 4,
  },
  {
    id: 5,
    title: 'iClock680',
    description:
      'iClock 680 is a biometric fingerprint reader for time & attendance and access control applications. It adopts a brand new firmware and provides an unprecedented user experiences with stunning GUI, rock-solid stability, fast matching speed and expandability. Users can easily manage data by networking iClock680 via RS232 / 485, TCP/IP. Most importantly, all the functions can still operate in a networking state. iClock680 is compatible with various types of USB flash disks, ADMS and former SDK. It also supports data backup and retrieve to avoid the risk of accidental deletion. The iClock680 has access control interfaces for retrieval, Wiegand-out, door lock connection, alarm, and bell.',
    avatar: iClock680,
    review: 4,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
}

export default function ProductCard() {
  return (
    <section id="product" sx={{ variant: 'section.testimonial' }}>
      <Container css={{ textAlign: 'center' }}>
        <SectionHeader slogan="Products"
          title="Prodcut List"
        />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel {...carouselParams}>
          {data.map(item => (
            <Box key={item.title} sx={styles.reviewCard}>
              <Rating rating={item.review} />
              <Heading sx={styles.title} as="h3">
                {item.title}
              </Heading>
              <Image src={item.avatar} alt="Client Image" />
              <Text sx={styles.description}>
                {item.description}
              </Text>
              
            </Box>
          ))}
        </Carousel>
      </Box>

    </section>

  );
}

const styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: [
      '30px 20px 35px',
      '30px 25px 35px',
      '30px 20px 35px',
      '35px 30px 40px 40px',
      '30px 30px 35px',
      '35px 30px 40px 40px',
    ],
    bg: 'white',
    textAlign: 'left',
    m: [
      '28px 5px 30px 5px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '30px 20px 40px',
    ],
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex',
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0,
        },
      },
      '.star': {
        color: 'primary',
        mr: '1px',
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px',
      },
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '128px',
          height: '128px',
          borderRadius: '50%',
          objectFit: 'cover',
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    maxHeight: '100px',
    overflow: 'hidden',
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3,
  },
  designation: {
    color: 'primary',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4,
  },
};
