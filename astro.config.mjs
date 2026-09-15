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
            { label: '🚀 Projects', slug: 'projects' },
            { label: '📚 Knowledge Base', slug: 'kb' }
          ]
        },
        {
          label: '📚 Knowledge Base',
          items: [
            {
              label: '🛡️ AWS Compliance Agent',
              items: [
                { label: 'Overview', slug: 'kb/aws-compliance-agent' },
                { label: 'Architecture', slug: 'kb/aws-compliance-agent/architecture' },
                { label: 'Authorization Boundary', slug: 'kb/aws-compliance-agent/authorization-boundary' },
                { label: 'Remediation & Verification', slug: 'kb/aws-compliance-agent/remediation-verification' },
                { label: 'Reliability Lessons', slug: 'kb/aws-compliance-agent/reliability-lessons' }
              ]
            },
            {
              label: '🔐 AgentGuard',
              items: [
                { label: 'Overview', slug: 'kb/agentguard' },
                { label: 'Trust Model', slug: 'kb/agentguard/trust-model' },
                { label: 'Decision Model', slug: 'kb/agentguard/decision-model' },
                { label: 'Approval, Replay & Drift', slug: 'kb/agentguard/approval-replay-drift' },
                { label: 'Read-only to Mutation', slug: 'kb/agentguard/read-only-to-mutation' }
              ]
            },
            {
              label: '🔗 ChatGPT AWS Lab',
              items: [
                { label: 'Overview', slug: 'kb/chatgpt-aws' },
                { label: 'Operating Model', slug: 'kb/chatgpt-aws/operating-model' },
                { label: 'GitHub OIDC', slug: 'kb/chatgpt-aws/github-oidc' },
                { label: 'MCP vs CI/CD', slug: 'kb/chatgpt-aws/mcp-vs-cicd' },
                { label: 'Public Repo Security', slug: 'kb/chatgpt-aws/public-repo-security' }
              ]
            },
            { label: '🧠 AgentCore AI Platform', slug: 'kb/agentcore-ai-platform' },
            { label: '🤖 SecCop', slug: 'kb/seccop' },
            { label: '🧬 Nextflow Offline', slug: 'kb/nextflow-offline' }
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
