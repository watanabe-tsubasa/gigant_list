import { Input, Text, Box } from "@chakra-ui/react";
import { useState } from "react";

interface InputFieldProps {
  id: string;
  defaultValue: string;
}

export const InputField: React.FC<InputFieldProps> = ({ id, defaultValue }) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Box as="span" flex='1' textAlign='left' w='50%'>
      <Text>{id}</Text>
      <Input value={inputValue} onChange={onChange} />
    </Box>
  );
};
