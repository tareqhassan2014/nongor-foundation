// material-ui
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link as DomLink } from 'react-router-dom';
import SwiperCore, { Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Caracole1 from 'assets/photos/Caracole-1.jpg';
import Caracole2 from 'assets/photos/Caracole-2.jpg';
import Caracole3 from 'assets/photos/Caracole-3.jpg';

//custom css
import { Link, Typography } from '@mui/material';
import './Caracole.css';

SwiperCore.use([Autoplay]);

// project import

const bannerItem = [
    {
        title: 'নোঙ্গর ফাউন্ডেশন একটি অলাভজনক সামাজিক প্রতিষ্ঠান',
        description:
            'You can live like royalty in elegant hostels or find a bargain at hostels right in the city center. Come fast and get your chance.',
        image: Caracole1,
    },
    {
        title: 'নোঙ্গর ফাউন্ডেশন একটি অলাভজনক সামাজিক প্রতিষ্ঠান',
        description:
            'A numerous analytical update defines different role player&#39;s experience.get our services and create your dashboard.',
        image: Caracole2,
    },
    {
        title: 'নোঙ্গর ফাউন্ডেশন একটি অলাভজনক সামাজিক প্রতিষ্ঠান',
        description:
            ' Replace your products by purchasing and selling them. make money and decorate your rooms with super new set-up',
        button: 'Deal With Your Need',
        image: Caracole3,
    },
    {
        title: 'নোঙ্গর ফাউন্ডেশন একটি অলাভজনক সামাজিক প্রতিষ্ঠান',
        description:
            'Get your exact quality products without any kinds of scratch and fracture. Make your delivery man satisfied and be happy yourself.',

        image: Caracole1,
    },
];

export const themBtnSX = {
    color: 'white',
    position: 'relative',
    fontSize: '15px',
    fontWeight: '700',
    borderRadius: '50px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    mt: {
        xs: '20px',
    },
    // backgroundColor: '#f9a826',
    backgroundColor: '#21cdc0',
    zIndex: 1,
    overflow: 'hidden',
    height: {
        xs: '40px',
        lg: '50px',
        xl: '60px',
    },
    width: {
        xs: '115px',
        lg: '200px',
        xl: '250px',
    },
    padding: {
        xs: '0px 10px',
        md: '0px 12px',
        lg: '0px 15px',
    },
    '&:hover': {
        color: 'white',
        textDecoration: 'none',

        '&:before': {
            transform: 'scaleX(1)',
            transformOrigin: 'left center',
        },
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        transform: 'scaleX(0)',
        transformOrigin: 'right center',
        backgroundColor: '#213360',
        transition: 'transform 0.3s ease',
    },
};

const Caracole = () => {
    return (
        <div>
            <Swiper
                loop={true}
                slidesPerView={'auto'}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                effect={'fade'}
                modules={[Autoplay, EffectFade]}
            >
                {bannerItem.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img
                            className="caracole-img"
                            src={item.image}
                            alt={item.title}
                        />

                        <div className="caracole-content-container">
                            <div className="caracole-content">
                                <Typography
                                    color="white"
                                    sx={{
                                        mt: { md: 5, sm: 2 },
                                        fontSize: {
                                            md: '46px',
                                            xs: '24px',
                                            sm: '32px',
                                        },
                                        fontWeight: '700',
                                        lineHeight: '1.2',
                                        fontFamily: 'Poppins, sans-serif',
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Link
                                    to="/donate"
                                    sx={themBtnSX}
                                    component={DomLink}
                                    className="booking-btn"
                                >
                                    <TbCurrencyTaka
                                        style={{ fontSize: '1.5rem' }}
                                    />
                                    <span>অংশ নিন</span>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Caracole;

/* 


                                '&:after': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'rgba(0,0,0,0.5)',
                                    zIndex: 1,
                                },

*/
