'use client'

import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'

// interface Props {
//   children: React.ReactNode
// }

// const NavLink = (props: Props) => {
//   const { children } = props

//   return (
//     <Box
//       as="a"
//       px={2}
//       py={1}
//       rounded={'md'}
//       _hover={{
//         textDecoration: 'none',
//         bg: useColorModeValue('gray.200', 'gray.700'),
//       }}
//       href={'#'}>
//       {children}
//     </Box>
//   )
// }

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const {  onOpen  } = useDisclosure()
  return (
    <>
      <Box position="sticky" top="0" color={useColorModeValue('gray.700', 'gray.400')} bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} marginLeft={'200px'} alignItems={'center'} justifyContent={'space-between'}>
          <Box fontSize={'2xl'} fontFamily={'mono'}>Adiwidiawan.</Box>

          <Box gap={1} display={{ base: 'none', md: 'flex' }}>
            <Button onClick={onOpen}> 
            Home
            </Button>
            <Button onClick={onOpen}>
            Experience & Education
            </Button>
            <Button onClick={onOpen}>
            Portfolio
            </Button>
            </Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}