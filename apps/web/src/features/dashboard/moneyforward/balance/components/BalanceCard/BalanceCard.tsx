import {
  Box,
  Heading,
  HStack,
  StackDivider,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react'
import type { FC } from 'react'

export const BalanceCard: FC = () => {
  return (
    <Box>
      <Heading as={'h1'} size="lg">
        Money Forward
      </Heading>
      <HStack divider={<StackDivider />}>
        <Stat shadow="md" p={4}>
          <StatLabel>収入</StatLabel>
          <StatNumber>100</StatNumber>
          <StatHelpText>
            先月比 10.5%
            <StatArrow type="increase" />
          </StatHelpText>
        </Stat>
        <Stat shadow="md" p={4}>
          <StatLabel>支出</StatLabel>
          <StatNumber>100</StatNumber>
          <StatHelpText>
            先月比 10.5%
            <StatArrow type="increase" />
          </StatHelpText>
        </Stat>
      </HStack>
    </Box>
  )
}
