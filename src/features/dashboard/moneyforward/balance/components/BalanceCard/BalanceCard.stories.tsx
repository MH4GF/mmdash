import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { BalanceCard } from '.'

export default {
  component: BalanceCard,
} as ComponentMeta<typeof BalanceCard>

const Template: ComponentStory<typeof BalanceCard> = () => <BalanceCard />

export const Default = Template.bind({})
