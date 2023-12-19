import { useEffect, useState } from "react";
import { AccordionContainer } from "./components/AccordionContainer";
import { useDataContext } from "./contexts/useDataContext";

function App() {
  const { CategoryDispatch, DivisionDispatch } = useDataContext();
  const [isLoading, setIsLoading] = useState(true); 
  const dataFetcher = () => {
    CategoryDispatch({ type: 'fetch' });
    DivisionDispatch({ type: 'fetch' });
    setIsLoading(false); 
  };

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
    isLoading ? <div>Loading...</div> : <AccordionContainer />
  );
}

export default App;
