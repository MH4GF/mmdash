/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test'
    readonly MONEY_FORWARD_EMAIL: string
    readonly MONEY_FORWARD_PASSWORD: string
  }
}
