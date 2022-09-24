import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { DashboardPage } from '.'

export default {
  component: DashboardPage,
} as ComponentMeta<typeof DashboardPage>

const Template: ComponentStory<typeof DashboardPage> = () => <DashboardPage />

export const Default = Template.bind({})
