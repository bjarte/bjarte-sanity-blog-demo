// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [
		mdx(),
		sitemap(),
		sanity({
			projectId: 'clgf9dv0',
			dataset: 'production',
			useCdn: false, // See note on using the CDN
			apiVersion: "2025-04-28", // insert the current date to access the latest version of the API
		}),
		react()]
});
