import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '0hxm6fmh',
    dataset: 'spk-blog-demo',
  },
  studioHost: 'bjarte-sanity-blog-demo-spk',
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
