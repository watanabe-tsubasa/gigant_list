import { AccordionPanel, Box, Button, HStack, Spacer, Text } from "@chakra-ui/react";
import { useDataContext } from "../contexts/useDataContext";

interface AccordionCellProps {
  category: string;
  divId: string;
  selectedDivision: number;
  isOpen: boolean;
}

export const AccordionCell: React.FC<AccordionCellProps> = ({category, divId, selectedDivision, isOpen}) => {
  return (
    <Box borderBottom={isOpen ? '1px':'0px'} borderColor='gray.200'>
      <AccordionPanel p={4}>
        <HStack>
          <Text>{category}</Text>
          <Spacer />
          <DivSetButton category={category} divId={divId} selectedDivision={selectedDivision} />
          <Spacer />
        </HStack>
      </AccordionPanel>
    </Box>
  )
};

interface DivSetButtonProps {
  category: string;
  divId: string;
  selectedDivision: number
}

const DivSetButton: React.FC<DivSetButtonProps> = ({ category, divId, selectedDivision }) => {

  const { CategoryDispatch } = useDataContext()
  const result = (divId: string,selectedDivision: string): 'notSetteled' | 'thisCategory' | 'otherCategory' => {
    switch (selectedDivision) {
      case '0':
        return 'notSetteled'
      case divId:
        return 'thisCategory'
      default:
        return 'otherCategory'
    }
  };
  const res = result(divId, selectedDivision.toString())
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
        CategoryDispatch({
          type: 'checked',
          selectedDivision: 0,
          category: category
        })
        break
      case 'notSetteled':
        CategoryDispatch({
          type: 'checked',
          selectedDivision: Number(divId),
          category: category
        })
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