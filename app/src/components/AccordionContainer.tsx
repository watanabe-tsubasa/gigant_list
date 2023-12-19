import { Accordion } from "@chakra-ui/react";
import { CommonAccordion } from "./CommonAccordion";
import { useDataContext } from "../contexts/useDataContext";

export const AccordionContainer = () => {
  const { divisions } = useDataContext();
  const divisionArray = Object.entries(divisions).map(([key, division]) => ({
    key: key,
    division: division
  }));
  return(
    <Accordion allowMultiple>
      {divisionArray.map(({ key, division }) => (
        <CommonAccordion key={key} id={key} division={division} />
      ))}
    </Accordion>
  )
}