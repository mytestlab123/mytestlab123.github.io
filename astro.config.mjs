import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://mytestlab123.github.io',
  integrations: [
    starlight({
      title: 'MyTestLab Engineering Lab',
      description: 'A public learning portal for Astro, Starlight, AWS, DevOps, security, and agentic AI experiments.',
      social: {
        github: 'https://github.com/mytestlab123/mytestlab123.github.io'
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        { label: 'Start', items: [{ label: 'Home', slug: '' }] },
        {
          label: 'Lab',
          items: [
            { label: 'Feature Lab', slug: 'lab/feature-lab' }
          ]
        }
      ]
    })
  ]
});
