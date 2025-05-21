import { Box, Button, Flex, Text } from "@radix-ui/themes";
import "./App.css";
import { Students } from "./components/Students";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

function App({appearance,setAppearance}) {

  console.log(appearance);
  
  return (
    <>
      <Flex gap="3" direction="column">
        <Text>The quick brown fox jumps over the lazy dog.</Text>
        <Box width="64px" height="64px" style={{position:'absolute',top:'0',right:0}}>
          <Button variant="classic" radius="small"
            onClick={()=>setAppearance(appearance=='light' ? 'dark' : 'light')}
          >
            {appearance=='dark' ? <MdDarkMode/> : <MdLightMode/>}
          </Button>
        </Box>
        <Students/>
      </Flex>
    </>
  );
}

export default App;
