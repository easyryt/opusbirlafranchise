import React, { useEffect } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ThankYouPage = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container
        maxWidth="md"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          py: 4,
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: 4,
            p: 6,
            mx: "auto",
            width: "100%",
            textAlign: "center",
            boxShadow: 3,
            "@media (max-width:600px)": {
              p: 3,
            },
          }}
        >
          <CheckCircleIcon
            sx={{
              fontSize: 80,
              color: "#4caf50",
              mb: 4,
              "@media (max-width:600px)": {
                fontSize: 60,
              },
            }}
          />

          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: "#1976d2",
              "@media (max-width:900px)": {
                fontSize: "2rem",
              },
            }}
          >
            THANK YOU
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 500,
              mb: 4,
              color: "rgba(0, 0, 0, 0.87)",
              "@media (max-width:600px)": {
                fontSize: "1.25rem",
              },
            }}
          >
            Your Application Has Been Successfully Submitted!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              color: "rgba(0, 0, 0, 0.6)",
              mb: 6,
              maxWidth: 600,
              mx: "auto",
              "@media (max-width:600px)": {
                fontSize: "1rem",
              },
            }}
          >
            Thank you for expressing interest in partnering with{" "}
            <strong>opusbirlafranchise.com</strong>. Your application has been
            received and is under review. Our team will get in touch with you
            within 3-5 business days.
            <br />
            <br />
            In the meantime, visit our stores and explore a spectrum of colours
            and designs to inspire your next paint project. Connect with our
            experts for an interactive colour consultation and discover how you
            can bring your creative vision to life!
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            to="/"
            startIcon={<ArrowBackIcon />}
            sx={{
              px: 6,
              py: 1.5,
              borderRadius: 2,
              fontSize: "1.1rem",
              textTransform: "none",
              boxShadow: 2,
              "&:hover": {
                boxShadow: 4,
              },
            }}
          >
            Back to Home
          </Button>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default ThankYouPage;
