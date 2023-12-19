import { AccordionPanel, Box, Divider } from "@chakra-ui/react";

export const AccordionCell = () => {
  return (
    <Box>
      <AccordionPanel pb={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </AccordionPanel>
      <Divider />
    </Box>
  )
}