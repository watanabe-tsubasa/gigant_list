import { AccordionButton, AccordionIcon, AccordionItem, Box, HStack, Text } from "@chakra-ui/react";
import { AccordionCell } from "./AccordionCell";
import { useState } from "react";
import { useDataContext } from "../contexts/useDataContext";
import { InputField } from "./InputField";

interface CommonAccordionProps {
  id: string;
  division: string;
}

export const CommonAccordion: React.FC<CommonAccordionProps> = ({id, division}) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickAccordionButton = () => {
    setIsOpen(current => (!current));
  }
 
  const { categories } = useDataContext();
  const categoriesArray = Object.entries(categories).map(([id, category]) => ({
    id: id,
    category: category
  }));

  return(
    <AccordionItem>
      <Box p='4px'>
        <HStack>
          <InputField id={id} defaultValue={division} />
          <AccordionButton onClick={onClickAccordionButton} w='50%' h='fit-content'>
            <AccordionIcon />
            <Text>詳細</Text>
          </AccordionButton>
        </HStack>
      </Box>
      {categoriesArray.map(elem => {
        const { id, category } = elem;
        return <AccordionCell key={id} id={id} category={category} isOpen={isOpen} />
      })}
    </AccordionItem>
  )
}