import { ToastPosition, useToast, AlertStatus } from "@chakra-ui/react";

type ShowToastOptions = {
  title?: string;
  description?: string;
  status?: AlertStatus ;
  duration?: number;
  isClosable?: boolean;
  position?: ToastPosition;
};

export const useCommonToast = () => {
  const toast = useToast();

  const showToast = ({
    title = "Default Title",
    description = "Default Description",
    status = "success",
    duration = 4000,
    isClosable = true,
    position = "top",
  }: ShowToastOptions = {}) => {
    toast({
      title,
      description,
      status,
      duration,
      isClosable,
      position,
    });
  };

  return showToast;
};