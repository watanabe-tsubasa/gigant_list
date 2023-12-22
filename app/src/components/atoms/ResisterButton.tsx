import { Box, Button, Spinner } from "@chakra-ui/react";
import { useCommonToast } from "../../Hooks/useCommonToast"
import { startTransition, useEffect, useState } from "react";
import { useDataContext } from "../../contexts/useDataContext";

interface RegisterButtonProps {
  categoryUpdateRef: React.MutableRefObject<{[key: string]: number} | null>
}

export const RegisterButton: React.FC<RegisterButtonProps> = ({categoryUpdateRef}) => {
  const { categories, CategoryDispatch } = useDataContext();
  const showToast = useCommonToast();
  const [isFetching, setIsFetching] = useState(false);
  const onClickButton = () => {
    if (categoryUpdateRef.current){
      setIsFetching(true)
      startTransition(() => {
        if (!categoryUpdateRef.current) {
          return
        }
        Object.entries(categoryUpdateRef.current).forEach(([category, selectedDivision]) => {
          CategoryDispatch({
            type: 'checked',
            category: category,
            selectedDivision: selectedDivision,
          })
        })
        console.log(categories);
        setIsFetching(false);
        
      })
    } else{
      showToast({
        title: 'info',
        description: '変更がありませんでした',
        status: 'info'
      })
      setIsFetching(false);
    }
  }
  useEffect(() => {
    if(!isFetching && categoryUpdateRef.current) {
      showToast({
        title: '実行完了',
        description: '正常に登録されました'
      });
      window.location.reload();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching])

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