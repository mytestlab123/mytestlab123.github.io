import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://mytestlab123.github.io',
  integrations: [
    starlight({
      title: 'Amit Engineering Lab',
      description: 'Public engineering portfolio and knowledge lab for AWS, DevSecOps, automation, agentic AI, MCP, and cloud security.',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/amitkarpe' }
      ],
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Explore',
          items: [
            { label: '🏠 Home', slug: '' },
            { label: '🚀 Projects', slug: 'projects' }
          ]
        },
        {
          label: 'Lab',
          items: [
            { label: '🧪 Feature Lab', slug: 'lab/feature-lab' }
          ]
        }
      ]
    })
  ]
});
