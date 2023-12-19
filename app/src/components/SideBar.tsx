import { Box, Divider, Heading, Text } from "@chakra-ui/react"

export const SideBar = () => {
  return (
    <Box h='100vH' w='20%' bg='teal.50'>
      <Heading p={4}>
        サイドバーのつもり
      </Heading>
      <Divider />
      <Box p={4}>
        <Text>なんか0</Text>
      </Box>
      <Divider />
      <Box p={4}>
        <Text>なんか1</Text>
      </Box>
      <Divider />
      <Box p={4}>
        <Text>なんか2</Text>
      </Box>
      <Divider />
      <Box p={4}>
        <Text>なんか3</Text>
      </Box>
      <Divider />
      <Box p={4}>
        <Text>なんか4</Text>
      </Box>
      <Divider />
      <Box p={4}>
        <Text>なんか5</Text>
      </Box>
      <Divider />
      <Box p={4}>
        <Text>なんか6</Text>
      </Box>
    </Box>
  )
}