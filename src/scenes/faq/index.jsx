import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Q: What is your music distribution and publishing service?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A: Our music distribution and publishing service is a platform for artists to distribute and publish their music on various streaming services, such as Spotify, Apple Music, and Amazon Music, as well as to collect royalties from these services.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Q: How do I sign up for your service?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A: You can sign up for our service by creating an account on our website and providing us with your personal and payment information. Once your account is created, you can upload your music to our platform and start distributing it.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Q: How much does your service cost?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A: We offer various pricing plans to suit different needs and budgets. Our plans range from a free plan that allows you to distribute your music to a limited number of streaming services, to premium plans that offer additional features and services. Please visit our pricing page for more information.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Q: Which streaming services do you distribute to?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A: We distribute to all major streaming services, including Spotify, Apple Music, Amazon Music, YouTube Music, and Tidal, as well as to a number of smaller services.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Q: How do I get paid for my music?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A: We collect royalties on your behalf from the streaming services and pay you directly through our platform. You can track your earnings and payouts on your account dashboard.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Q: How long does it take for my music to be available on streaming services?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           A: It typically takes 2-3 weeks for your music to be available on streaming services, although this can vary depending on the service
          </Typography>
        </AccordionDetails>
      </Accordion>
        <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Q: Can I distribute cover songs or remixes through your service?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A: Yes, you can distribute cover songs and remixes through our service, as long as you have obtained the necessary licenses and permissions
          </Typography>
        </AccordionDetails>
      </Accordion>
            <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
           Q: Do I retain ownership of my music?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A: Yes, you retain full ownership of your music. We act as a distributor and publisher on your behalf, but you maintain all rights to your music.
          </Typography>
        </AccordionDetails>
      </Accordion>
           <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
           Q: What kind of support do you offer?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           A: We offer email and chat support to all of our users, as well as a knowledge base with frequently asked questions and tutorials. We also offer phone support to users on our premium plans.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </Box>
  );
};

export default FAQ;
