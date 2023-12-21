import { AccordionButton, AccordionIcon, AccordionItem, Box, HStack, Text } from "@chakra-ui/react";
import { AccordionCell } from "./AccordionCell";
import { useDataContext } from "../contexts/useDataContext";
import { InputField } from "./InputField";
import { useEffect } from "react";
interface CommonAccordionProps {
  id: string;
  division: string;
  updateCategoryRef: React.MutableRefObject<{[key: string]: number}>;
}

export const CommonAccordion: React.FC<CommonAccordionProps> = ({id, division, updateCategoryRef}) => {
  const { categories, CategoryDispatch } = useDataContext()
  const onClickAccordionButton = () => {
    console.log(id)
    console.log(updateCategoryRef.current)
    Object.entries(updateCategoryRef.current).forEach(([category, selectedDivision]) => {
      CategoryDispatch({
        type: 'checked',
        category: category,
        selectedDivision: selectedDivision
      });
    })
    updateCategoryRef.current = {};
  }
  useEffect(() => {
    console.log(categories)
  },[categories])
  
  const categoriesArray = Object.entries(categories).map(([category, selectedDivision]) => ({
    category: category,
    selectedDivision: selectedDivision
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
        return <AccordionCell
                 key={elem.category}
                 category={elem.category}
                 divId={id}
                 selectedDivision={elem.selectedDivision}
                 updateCategoryRef={updateCategoryRef}
                />
      })}
    </AccordionItem>
  )
}