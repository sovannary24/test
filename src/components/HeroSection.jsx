import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Fade,
  Slide,
  useTheme,
  useMediaQuery,
  Stack,
  IconButton,
} from '@mui/material';
import {
  ArrowForward as ArrowForwardIcon,
  PlayArrow as PlayArrowIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
} from '@mui/icons-material';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    // Handle navigation or action
    console.log('Get Started clicked');
  };

  const handleWatchDemo = () => {
    // Handle demo video or action
    console.log('Watch Demo clicked');
  };

  const handleScrollDown = () => {
    // Smooth scroll to next section
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      sx={{
        backgroundImage: 'url(https://i.pinimg.com/1200x/9d/cc/d8/9dccd87fc552bda9db5eca34dbaf8a61.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated Background Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(21, 8, 143, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%)',
          zIndex: 1,
        }}
      />

      {/* Floating Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: 100,
          height: 100,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite',
          zIndex: 1,
          '@keyframes float': {
            '0%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
            '100%': { transform: 'translateY(0px)' },
          },
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: 60,
          height: 60,
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '50%',
          animation: 'float 4s ease-in-out infinite reverse',
          zIndex: 1,
        }}
      />

      <Container sx={{ zIndex: 2, position: 'relative' }}>
        <Fade in={loaded} timeout={1000}>
          <Box>
            <Slide direction="up" in={loaded} timeout={800}>
              <Typography
                variant={isSmall ? 'h4' : isMobile ? 'h3' : 'h2'}
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  mb: 2,
                  textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
                  background: 'linear-gradient(45deg, #fff 30%, #f0f0f0 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Welcome to My Portfolio
              </Typography>
            </Slide>

            <Slide direction="up" in={loaded} timeout={1000}>
              <Typography
                variant={isSmall ? 'body1' : 'h5'}
                component="p"
                sx={{
                  mb: 4,
                  fontWeight: 400,
                  opacity: 0.9,
                  maxWidth: '600px',
                  mx: 'auto',
                  lineHeight: 1.6,
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
                }}
              >
                Build something amazing with React and MUI. Creating beautiful, 
                responsive web applications with modern design principles.
              </Typography>
            </Slide>

            <Slide direction="up" in={loaded} timeout={1200}>
              <Stack
                direction={isSmall ? 'column' : 'row'}
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{ mb: 6 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  onClick={handleGetStarted}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: 3,
                    textTransform: 'none',
                    backgroundColor: '#15088fff',
                    background: 'linear-gradient(45deg, #15088fff 30%, #1a0a9fff 90%)',
                    boxShadow: '0 8px 32px rgba(21, 8, 143, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 40px rgba(21, 8, 143, 0.4)',
                      background: 'linear-gradient(45deg, #1a0a9fff 30%, #15088fff 90%)',
                    },
                  }}
                >
                  Get Started
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<PlayArrowIcon />}
                  onClick={handleWatchDemo}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: 3,
                    textTransform: 'none',
                    color: '#fff',
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      borderColor: '#fff',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Watch Demo
                </Button>
              </Stack>
            </Slide>
          </Box>
        </Fade>

        {/* Scroll Down Indicator */}
        <Fade in={loaded} timeout={2000}>
          <Box
            sx={{
              position: 'absolute',
              bottom: 30,
              left: '50%',
              transform: 'translateX(-50%)',
              
              textAlign: 'center',
              cursor: 'pointer',
            }}
            onClick={handleScrollDown}
          >
            {/* <Typography
              variant="body2"
              sx={{
                mb: 1,
                opacity: 0.8,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontSize: '0.8rem',
              }}
            >
              Scroll Down
            </Typography> */}
            {/* <IconButton
              color="inherit"
              sx={{
                animation: 'bounce 2s ease-in-out infinite',
                '@keyframes bounce': {
                  '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
                  '40%': { transform: 'translateY(-10px)' },
                  '60%': { transform: 'translateY(-5px)' },
                },
              }}
            >
              <KeyboardArrowDownIcon />
            </IconButton> */}
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default HeroSection;