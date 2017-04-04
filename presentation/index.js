// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Image,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../assets/style.css");


const images = {
  logo: require("../assets/handilogo.svg")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE",
  cyan: "#0097a7",
  smallFont: "12px"
}, {
  primary: "Lato",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide bgImage="https://images.pexels.com/photos/33343/building-joy-planning-plans.jpg?w=1260&h=750&auto=compress&cs=tinysrgb" bgDarken="0.6" transition={["zoom"]} bgColor="primary">
          <Image src={images.logo} width="500px" />
          <Text margin="10px 0 0" textColor="cyan" size={1} fit bold>
            Choose from hundreds of contractors, handymen and laborers
          </Text>
        </Slide>
        <Slide transition={["fade","zoom"]} bgColor="cyan">          
          <Heading size={1} textColor="secondary">What is handi?</Heading>
          <Text size={6} textColor="primary">Handi app helps you connect quickly with available contractors, laborers and handyman in you area and get the best deal for your budget.</Text>
        </Slide>
        <Slide transition={["spin"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>What can you do?</Heading>
          <List>
            <ListItem textColor="cyan">Create your Account</ListItem>
            <ListItem textColor="cyan">Share a job you need done</ListItem>
            <ListItem textColor="cyan">Place a bid on a job you want to do</ListItem>
            <ListItem textColor="cyan">Hire someone for the job</ListItem>
          </List>
        </Slide>
        <Slide bgImage="https://images.pexels.com/photos/3327/construction-work-carpenter-tools.jpg?w=1260&h=750&auto=compress&cs=tinysrgb" bgDarken="0.7" transition={["spin"]} bgColor="cyan" textColor="white">
          <Heading size={2} textColor="white">For Customers</Heading>
          <List>
            <ListItem>Post your job, the description, the time-frame and your budget.</ListItem>
            <ListItem>Contractors, laborers and handyman interested in your project quote you on your job.</ListItem>
            <ListItem>Select from multiple offers to find the specific quote and worker that is the best fit for your project.</ListItem>
          </List>
        </Slide>
        <Slide bgImage="https://static.pexels.com/photos/94762/pexels-photo-94762.jpeg" bgDarken="0.7" transition={["zoom"]} bgColor="cyan" textColor="white">
          <Heading size={2} textColor="white">For Contractors</Heading>
          <List>
            <ListItem>Find customers who need work in your area of specialty.</ListItem>
            <ListItem>Review their project and budget.</ListItem>
            <ListItem>Quote your price or rate for doing their job, along with the time frame it may take to do the job and add a description.</ListItem>
          </List>
        </Slide>
        <Slide bgImage="https://images.pexels.com/photos/40011/iphone-smartphone-apps-apple-inc-40011.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" bgDarken="0.7" transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Successful people are not gifted; they just work hard, then succeed on purpose.</Quote>
            <Cite textColor="cyan">Unknown</Cite>
            <Image src={images.logo} width="250px" />
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
