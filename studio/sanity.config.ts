import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'SPK demo',

  projectId: '0hxm6fmh',
  dataset: 'spk-blog-demo',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
