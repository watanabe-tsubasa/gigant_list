import { AccordionPanel, Box, Button, HStack, Spacer, Text } from "@chakra-ui/react";
import { useDataContext } from "../contexts/useDataContext";
import { Suspense } from "react";

interface AccordionCellProps {
  category: string;
  divId: string;
  selectedDivision: number;
}

export const AccordionCell: React.FC<AccordionCellProps> = ({category, divId, selectedDivision }) => {
  return (
    <Box
     outline='0.5px solid'
     outlineColor='gray.200'
    >
      <AccordionPanel p={4}>
        <HStack>
          <Text>{category}</Text>
          <Spacer />
          <Suspense fallback={<p>...loading</p>}>
            <DivSetButton category={category} divId={divId} selectedDivision={selectedDivision} />
          </Suspense>
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
}

const DivSetButton: React.FC<DivSetButtonProps> = ({ category, divId, selectedDivision }) => {
  const { CategoryDispatch } = useDataContext();

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
        return `設定済み: ${selectedDivision.toString()}`
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
          category: category,
          selectedDivision: 0,
        })
        break
      case 'notSetteled':
        CategoryDispatch({
          type:'checked',
          category: category,
          selectedDivision: Number(divId),
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