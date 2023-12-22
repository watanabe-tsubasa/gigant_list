import { useEffect, useRef, useState } from "react";
import { useDataContext } from "../contexts/useDataContext";
import { AccordionContainer } from "./AccordionContainer";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import { RegisterButton } from "./atoms/ResisterButton";

export const PageBody = () => {
  const { CategoryDispatch, DivisionDispatch } = useDataContext();
  const [isLoading, setIsLoading] = useState(true); 
  const dataFetcher = () => {
    CategoryDispatch({ type: 'fetch' });
    DivisionDispatch({ type: 'fetch' });
    setIsLoading(false); 
  };
  const categoryUpdateRef = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      dataFetcher();
    }, 1000); 

    return () => {
      clearTimeout(timer);
      CategoryDispatch({ type: 'unmount' });
      DivisionDispatch({ type: 'unmount' }); 
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    isLoading
    ? 
    <Flex w='80%' justify='center' align='center'>
      <Spinner />
    </Flex>
    :
    <Box h='100vH' w='80%'>
      <Box pb={4}>
        <AccordionContainer categoryUpdateRef={categoryUpdateRef} /> 
      </Box>
      <RegisterButton categoryUpdateRef={categoryUpdateRef} />
    </Box>
  );
}
