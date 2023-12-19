import { AccordionPanel, Box } from "@chakra-ui/react";

interface AccordionCellProps {
  id: string;
  category: number;
  isOpen: boolean;
}

export const AccordionCell: React.FC<AccordionCellProps> = ({id, category, isOpen}) => {

  return (
    <Box borderBottom={isOpen ? '1px':'0px'} borderColor='gray.200'>
      <AccordionPanel p={4}>
        {`${id}: ${category.toString()}`}
      </AccordionPanel>
    </Box>
  )
};