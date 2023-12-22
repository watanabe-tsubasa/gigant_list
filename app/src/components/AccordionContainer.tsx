import { Accordion } from "@chakra-ui/react";
import { CommonAccordion } from "./CommonAccordion";
import { useDataContext } from "../contexts/useDataContext";

interface AccordionContainerProps {
  categoryUpdateRef: React.MutableRefObject<{[key: string]: number} | null>;
}

export const AccordionContainer: React.FC<AccordionContainerProps> = ({ categoryUpdateRef }) => {
  const { divisions } = useDataContext();
  const divisionArray = Object.entries(divisions).map(([id, division]) => ({
    id: id,
    division: division
  }));
  return(
    <Accordion allowMultiple>
      {divisionArray.map(({ id, division }) => (
        <CommonAccordion key={id} id={id} division={division} categoryUpdateRef={categoryUpdateRef} />
      ))}
    </Accordion>
  )
}