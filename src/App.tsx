import { Box } from "@chakra-ui/react";
import "./App.css";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Box>
      <Navbar />
      <Home />
      <Carousel />
      <Box></Box>
      <Footer />
    </Box>
  );
}

export default App;
