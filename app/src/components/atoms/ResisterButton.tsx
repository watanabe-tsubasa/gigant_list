import { Box, Button, Spinner } from "@chakra-ui/react";
import { useCommonToast } from "../../Hooks/useCommonToast"
import { useState } from "react";


export const RegisterButton = () => {
  const showToast = useCommonToast();
  const [isFetching, setIsFetching] = useState(false);
  const onClickButton = () => {
    setIsFetching(true)
    setTimeout(() => {
      showToast({
        title: '実行完了',
        description: '正常に登録されました'
      })
      setIsFetching(false);
    }, 3000)
    
  }

  return (
    <Box>
      <Button
       colorScheme='blue'
       onClick={onClickButton}
       isDisabled={isFetching}
       w={200}
      >
        {isFetching ? <Spinner /> : '登録'}
      </Button>
    </Box>
  )
}