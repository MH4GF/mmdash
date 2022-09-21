import { Box, Heading, HStack, Text } from '@chakra-ui/react'
import { FC } from 'react'

export const BalanceCard: FC = () => {
  return (
    <HStack>
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl">MoneyForward</Heading>
        <Text mt={4}>支出</Text>
      </Box>
    </HStack>
  )
}
