import { Box } from "@chakra-ui/react";
import "./App.css";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { Home } from "./pages/Home";
function App() {
  return (
    <Box>
      <Navbar />
      <Home />
      <Carousel />
      <Box>
        <br></br>
        <br></br>
        <br></br>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
