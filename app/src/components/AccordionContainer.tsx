import { Accordion } from "@chakra-ui/react";
import { CommonAccordion } from "./CommonAccordion";
import { useDataContext } from "../contexts/useDataContext";

export const AccordionContainer = () => {
  const { divisions } = useDataContext();
  const divisionArray = Object.entries(divisions).map(([id, division]) => ({
    id: id,
    division: division
  }));
  return(
    <Accordion allowMultiple>
      {divisionArray.map(({ id, division }) => (
        <CommonAccordion key={id} id={id} division={division} />
      ))}
    </Accordion>
  )
}