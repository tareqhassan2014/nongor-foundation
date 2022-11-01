// material-ui
import { Box, Grid, Typography } from '@mui/material';
import { useCreateDonationMutation } from 'features/donation/conationAPI';
import SwiperCore, { Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Autoplay]);

// project import

const Donate = () => {
    // set title
    document.title = 'Donate | Nongor Frontend';

    const [initDonation] = useCreateDonationMutation();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log(data);

        const { url } = await initDonation(data as unknown as Donate).unwrap();

        if (url) window.location.replace(url);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                mx: {
                    lg: 10,
                    xs: 0,
                },
                mt: {
                    lg: 5,
                    xs: 0,
                },
            }}
        >
            <Box>
                <Box component="form" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="name" />
                    <br />
                    <input type="text" name="email" placeholder="email" />
                    <br />
                    <input type="text" name="amount" placeholder="Amount" />
                    <br />
                    <input type="text" name="currency" placeholder="Currency" />
                    <br />
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                    />
                    <br />
                    <input type="text" name="email" placeholder="Email" />
                    <br />
                    <input type="text" name="name" placeholder="Name" />
                    <br />
                    <input type="text" name="phone" placeholder="Phone" />
                    <br />
                    <input
                        type="text"
                        name="redirect_url"
                        placeholder="Redirect URL"
                    />
                    <br />
                    <input
                        type="text"
                        name="reference"
                        placeholder="Reference"
                    />
                    <br />
                    <input
                        type="text"
                        name="subaccount"
                        placeholder="Subaccount"
                    />
                    <br />
                    <input
                        type="text"
                        name="transaction_charge"
                        placeholder="Transaction Charge"
                    />
                    <br />

                    <button type="submit">Donate</button>
                </Box>
            </Box>

            <Box>
                <Box
                    sx={{
                        py: { md: '60px', sm: 2, xs: 1 },
                        px: { md: 5, sm: 1, xs: 0.5 },
                        background:
                            'linear-gradient(to right, #1e3c72, #2a5298)',
                        color: 'white',
                    }}
                >
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
                        <SwiperSlide>
                            <Grid
                                container
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    background:
                                        'linear-gradient(to right, #1e3c72, #2a5298)',
                                }}
                            >
                                <Grid
                                    md={6}
                                    sm={12}
                                    xs={12}
                                    item
                                    sx={{
                                        mb: { md: 0, sm: 4, xs: 4 },
                                        height: {
                                            md: 430,
                                            sm: 350,
                                            xs: 300,
                                        },
                                    }}
                                >
                                    <img src="" alt="carosole images" />
                                </Grid>
                                <Grid md={6} sm={12} xs={12} item>
                                    <Box
                                        sx={{
                                            p: { sm: 5, xs: 0, md: 0 },
                                            mt: { sm: 5, xs: 5 },
                                            mx: { sm: 3, xs: 2 },
                                            mb: { md: 0, sm: 4, xs: 4 },
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                mt: { md: 5, sm: 2 },
                                                fontSize: {
                                                    md: '46px',
                                                    xs: '24px',
                                                    sm: '32px',
                                                },
                                                fontWeight: '700',
                                                lineHeight: '1.2',
                                                fontFamily:
                                                    'Poppins, sans-serif',
                                            }}
                                        >
                                            <h1>Title</h1>
                                        </Typography>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                pt: { md: 2 },
                                                pb: { md: 1 },
                                                mt: { md: 2.5, xs: 3 },
                                                mb: { md: 4, xs: 3 },
                                                textAlign: {
                                                    xm: 'justify',
                                                },
                                                fontSize: {
                                                    md: '16px',
                                                    // xs: '24px',
                                                    // sm: '32px',
                                                },
                                                fontWeight: 'normal',
                                                lineHeight: '24px',
                                                fontFamily:
                                                    'Poppins, sans-serif',
                                            }}
                                        >
                                            <h1>Description</h1>
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </SwiperSlide>
                    </Swiper>
                </Box>
            </Box>
        </Box>
    );
};

export default Donate;
