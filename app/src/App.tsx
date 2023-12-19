
import { HStack } from "@chakra-ui/react";
import { PageBody } from "./components/PageBody";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <HStack>
      <SideBar />
      <PageBody />
    </HStack>
  );
}

export default App;
