import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'nzngc1kg',
    dataset: 'production'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
    /**
     * App ID del Studio hospedado (cunori-ingenierias.sanity.studio), para que
     * `npx sanity deploy` no pregunte por él en cada deploy.
     */
    appId: 'yxe6ujt39o8pvdx3ul2qp8d9',
  },
  typegen: {
    enabled: true,
    path: '../src/**/*.{ts,tsx}',
    schema: 'schema.json',
    generates: '../sanity.types.ts',
  },
})
