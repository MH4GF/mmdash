import { Grid, GridItem } from '@chakra-ui/react'
import type { FC } from 'react'

import { BalanceCard } from '../../moneyforward/balance/components'

export const DashboardPage: FC = () => {
  return (
    <Grid>
      <GridItem>
        <BalanceCard></BalanceCard>
      </GridItem>
    </Grid>
  )
}
