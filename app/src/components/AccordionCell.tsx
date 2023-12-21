import { AccordionPanel, Box, Button, HStack, Spacer, Text } from "@chakra-ui/react";
import { useState } from "react";
interface AccordionCellProps {
  category: string;
  divId: string;
  selectedDivision: number;
  updateCategoryRef: React.MutableRefObject<{[key: string]: number}>;
}

export const AccordionCell: React.FC<AccordionCellProps> = ({category, divId, selectedDivision, updateCategoryRef }) => {
  return (
    <Box outline='0.5px solid'outlineColor='gray.200'>
      <AccordionPanel p={4}>
        <HStack>
          <Text>{category}</Text>
          <Spacer />
          <DivSetButton category={category} divId={divId} selectedDivision={selectedDivision} updateCategoryRef={updateCategoryRef} />
          <Spacer />
        </HStack>
      </AccordionPanel>
    </Box>
  )
}

interface DivSetButtonProps {
  category: string;
  divId: string;
  selectedDivision: number;
  updateCategoryRef: React.MutableRefObject<{[key: string]: number}>;
}

const DivSetButton: React.FC<DivSetButtonProps> = ({ category, divId, selectedDivision, updateCategoryRef }) => {

  const [divisionState, setDivisionState] = useState(selectedDivision);
  const result = (divId: string,divisionState: string): 'notSetteled' | 'thisCategory' | 'otherCategory' => {
    switch (divisionState) {
      case '0':
        return 'notSetteled'
      case divId:
        return 'thisCategory'
      default:
        return 'otherCategory'
    }
  };
  const res = result(divId, divisionState.toString())
  const isDisabled = () => {
    switch(res) {
      case 'otherCategory':
        return true
      default:
        return false
    }
  };
  const buttonString = () => {
    switch(res) {
      case 'notSetteled':
        return '設定する'
      case 'thisCategory':
        return '解除する'
      case 'otherCategory':
        return '設定済み'
      default:
        throw Error('予期せぬ文字列です')
    }
  }
  const setColorScheme = () => {
    switch (res) {
      case 'notSetteled':
        return 'blue'
      default:
        return 'gray'
    }
  }
  const onClick = () => {
    switch (res) {
      case 'thisCategory':
        setDivisionState(0)
        updateCategoryRef.current = {
          ...updateCategoryRef.current,
          [category]: 0
        };
        console.log(updateCategoryRef.current)
        break
      case 'notSetteled':
        setDivisionState(Number(divId));
        updateCategoryRef.current = {
          ...updateCategoryRef.current,
          [category]: Number(divId)
        }
        console.log(updateCategoryRef.current)
        break
      default:
        return
    }
  }

  return (
    <Button
     w={200}
     isDisabled={isDisabled()}
     colorScheme={setColorScheme()}
     onClick={onClick}
    >
      {buttonString()}
    </Button>
  )
}