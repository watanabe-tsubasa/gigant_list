import { AccordionButton, AccordionIcon, AccordionItem, Box, Input, Text } from "@chakra-ui/react";
import { AccordionCell } from "./AccordionCell";
import { useState } from "react";

interface CommonAccordionProps {
  id: string;
  division: string;
}

export const CommonAccordion: React.FC<CommonAccordionProps> = ({id, division}) => {
  const [inputValue, setInputValue] = useState(division);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }
  return(
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' textAlign='left'>
            <Text>{id}</Text>
            <Input
             value={inputValue}
             onChange={onChange}
             w='50%'
            />
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionCell />
    </AccordionItem>
  )
}