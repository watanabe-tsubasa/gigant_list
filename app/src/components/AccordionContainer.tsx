import { Accordion } from "@chakra-ui/react";
import { CommonAccordion } from "./CommonAccordion";
import { useDataContext } from "../contexts/useDataContext";
import { useRef } from "react";

export const AccordionContainer = () => {
  const { divisions } = useDataContext();
  const updateCategoryRef = useRef({});
  const divisionArray = Object.entries(divisions).map(([id, division]) => ({
    id: id,
    division: division
  }));
  return(
    <Accordion>
      {divisionArray.map(({ id, division }) => (
        <CommonAccordion key={id} id={id} division={division} updateCategoryRef={updateCategoryRef} />
      ))}
    </Accordion>
  )
}