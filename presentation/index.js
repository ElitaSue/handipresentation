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
  Text,
  Table,
  TableRow,
  TableItem,
  Appear
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
  logo: require("../assets/handilogo.svg"),
  bg1: require("../assets/bg1.jpg"),
  handiPost: require("../assets/handipost.png"),
  handiFind: require("../assets/handifind.png"),
  reactLogo: require("../assets/reactlogo1.png"),
  mongoDbLogo: require("../assets/mongodblogo1.png"),
  tools1: require("../assets/tools1.png"),
  jump: require("../assets/jump.jpg"),
  iphone: require("../assets/iphone.jpg"),
  team: require("../assets/team.jpg"),
  tree1: require("../assets/tree1.jpg"),
  frowny: require("../assets/frowny.png"),
  google: require("../assets/google.png"),
  ksl: require("../assets/ksl.png"),
  craigslist: require("../assets/craigslist.png"),
  buried: require("../assets/buried.png"),
  laptopgirl: require("../assets/laptopgirl.jpg"),
  bgPost: require("../assets/bgPost.png"),
  bgQuote: require("../assets/bgQuote.png"),
  logostrip: require("../assets/logostrip.png"),
  ThankYou: require("../assets/ThankYou.png"),
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
        <Slide bgImage={images.jump} bgDarken="0.6" transition={["zoom"]} bgColor="primary">
          <Image src={images.logo} width="500px" />
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            Choose from hundreds of contractors, handymen and laborers
          </Text>
        </Slide>
        <Slide transition={["fade","zoom"]} bgColor="cyan">          
          <Heading size={3} textColor="primary">The Tree</Heading>   
            <Table>
              <TableRow>
                <TableItem>
                  <Image src={images.tree1} width="800px"/>
                </TableItem>
                <TableItem>
                  <Appear><Image src={images.frowny} width="200px" margin="-150"/></Appear>
                </TableItem>
              </TableRow>
            </Table>                                 
        </Slide>
        <Slide transition={["fade","zoom"]} bgColor="cyan">
            <Table>
              <TableRow>
                <TableItem>
                  <Image src={images.google} width="400px"/>
                </TableItem>
                <TableItem>
                  <Appear><Image src={images.craigslist} width="400px" margin="-300"/></Appear>
                </TableItem>
                <TableItem>
                  <Appear><Image src={images.ksl} width="500px" margin="-150"/></Appear>
                </TableItem>
                <TableItem>
                  <Appear><Image src={images.buried} width="400px" margin="-150"/></Appear>
                </TableItem>
              </TableRow>
            </Table>   
        </Slide>
        <Slide transition={["fade","zoom"]} bgColor="cyan">          
          <Heading size={1} textColor="secondary">What is handi?</Heading>
          <Text size={6} textColor="primary">Handi app helps you connect quickly with available contractors, laborers and handymen in your area and get the best deal for your budget.</Text>
        </Slide>
        <Slide transition={["spin"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>What can you do?</Heading>
          <List>
            <Appear><ListItem textColor="cyan">Create your Account</ListItem></Appear>
            <Appear><ListItem textColor="cyan">Share a job you need done</ListItem></Appear>
            <Appear><ListItem textColor="cyan">Place a bid on a job you want to do</ListItem></Appear>
            <Appear><ListItem textColor="cyan">Hire someone for the job</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgImage={images.bgPost} transition={["spin"]} bgColor="cyan" textColor="white">
          <Table>
            <TableRow>
              <TableItem>
                <Heading size={4} textColor="white" textAlign="left">For Customers</Heading>
                <List>
                  <Appear><ListItem>Post</ListItem></Appear>
                  <Appear><ListItem>Review</ListItem></Appear>
                  <Appear><ListItem>Hire</ListItem></Appear>
                </List>
              </TableItem>
              <TableItem>
                
              </TableItem>
            </TableRow>
          </Table>
        </Slide>
        <Slide bgImage={images.bgQuote} transition={["zoom"]} bgColor="cyan" textColor="white">
          <Table>
            <TableRow>
              <TableItem>
                <Heading size={4} textAlign="left" textColor="white">For Contractors</Heading>
                <List>
                  <Appear><ListItem>Search</ListItem></Appear>
                  <Appear><ListItem>Review</ListItem></Appear>
                  <Appear><ListItem>Quote</ListItem></Appear>
                </List>
              </TableItem>
              <TableItem>
              </TableItem>
            </TableRow>
          </Table>
        </Slide>
         <Slide bgImage={images.laptopgirl} transition={["fade","zoom"]} bgColor="cyan">          
          <Heading size={1} textColor="secondary"></Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="white" textColor="primary">
          <Table>
            <TableRow>
              <TableItem>
                <Heading size={4}>The Team</Heading>
                <Image src={images.team} width="500px" /> 
              </TableItem>
              </TableRow>
              <TableRow>
              <TableItem>            
                <Image src={images.logostrip} width="500px"/>              
              </TableItem>
            </TableRow>
          </Table>
        </Slide>
        <Slide transition={["fade"]} bgColor="cyan">
          <Image src={images.ThankYou} width="1000px"/>  
          <Text textColor="white" textAlign="center">See the app @ https://handiapp.herokuapp.com</Text>
        </Slide>
      </Deck>
    );
  }
}
