import { Box, Button, Flex, Text } from "@radix-ui/themes";
import "./App.css";
import { Students } from "./components/Students";

function App() {
  return (
    <>
      <Flex gap="3" direction="column">
        <Text>The quick brown fox jumps over the lazy dog.</Text>
        <Box width="64px" height="64px">
          <Button variant="classic" radius="small">Radix UI</Button>
        </Box>
        <Students/>
      </Flex>
    </>
  );
}

export default App;
