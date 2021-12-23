import "./App.css";
import { Flex, Text, Box, Image, Button } from "rebass";
import Section from "./components/molecules/section/section";
import Cservices from "./components/molecules/cservices/cservices";
import TitleSection from "./components/atoms/title-section/title-section";
import OrderSection from "./components/molecules/order-section/order-section";
import OrderContext from "./data/order-context";

function App() {
  return (
    <div>
      <Flex
        className="Nav"
        p={3}
        color="black"
        sx={{ backgroundColor: "#015EE5" }}
        alignItems="center"
      >
        <Image
          ml={6}
          width={64}
          height={64}
          src="https://www.pikpng.com/pngl/b/471-4719948_service-logo-clipart.png"
        />
        <Text as="h1" mx="auto" p={2} fontWeight="bold">
          Car Service Station
        </Text>
        <Box mx="auto" />
      </Flex>
      <OrderContext.Provider>
        <Flex flexWrap="wrap" mx={-2}>
          <Box px={5} py={4} width={2 / 3}>
            <Section title={"Choose service spot"}></Section>
            <TitleSection
              title={"Cabriolet Model"}
              subtitle={"Car Plate L-4285"}
            ></TitleSection>
            <Flex flexWrap="wrap" mx={-2}>
              <Box px={4} py={4} variant="badge">
                <Image
                  px={6}
                  mx={6}
                  src="https://www.pngkit.com/png/full/77-774918_classic-car-transparent-background.png"
                />
              </Box>
            </Flex>
            <Flex flexWrap="wrap">
              <Cservices
                title="Services recommended to you"
                subtitle="See all services"
                width={1}
              ></Cservices>
            </Flex>
          </Box>
          <Box px={4} py={4} width={1 / 3} backgroundColor="#F2F8FE">
            <OrderSection />
          </Box>
        </Flex>
      </OrderContext.Provider>
    </div>
  );
}

export default App;
