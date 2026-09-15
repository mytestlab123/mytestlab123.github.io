import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
import starlightLlmActions from 'starlight-llm-actions';
import starlightTags from 'starlight-tags';
import starlightViewModes from 'starlight-view-modes';

export default defineConfig({
  site: 'https://mytestlab123.github.io',
  integrations: [
    starlight({
      title: 'Amit Engineering Lab',
      description: 'Public engineering portfolio and knowledge lab for AWS, DevSecOps, automation, agentic AI, MCP, and cloud security.',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/amitkarpe' }
      ],
      plugins: [
        starlightImageZoom(),
        starlightViewModes({
          zenModeSettings: {
            keyboardShortcut: ['Ctrl+Shift+Z']
          }
        }),
        starlightLlmActions({
          actions: {
            copyMarkdown: true,
            viewMarkdown: true,
            printPdf: false,
            openIn: false
          },
          linkAlternate: true,
          llmsTxt: {
            title: 'Amit Engineering Lab',
            description: 'Curated public engineering knowledge for AWS, DevSecOps, automation, agentic AI, MCP, cloud security, and offline workflow engineering.',
            subsets: [
              {
                label: 'Small',
                description: 'Compact index of the Knowledge Base and its six project landing pages.',
                paths: ['kb', 'kb/*']
              }
            ]
          }
        }),
        starlightTags({
          configPath: 'tags.yml',
          tagsPagesPrefix: 'tags',
          tagsIndexSlug: 'tags',
          onInlineTagsNotFound: 'error',
          sidebar: false
        })
      ],
      customCss: ['./src/styles/custom.css', './src/styles/diagrams.css'],
      sidebar: [
        {
          label: 'Explore',
          items: [
            { label: '🏠 Home', slug: '' },
            { label: '🚀 Projects', slug: 'projects' },
            { label: '📚 Knowledge Base', slug: 'kb' },
            { label: '🏷️ Tags', link: '/tags/' }
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
            {
              label: '🧠 AgentCore AI Platform',
              items: [
                { label: 'Overview', slug: 'kb/agentcore-ai-platform' },
                { label: 'Platform Architecture', slug: 'kb/agentcore-ai-platform/platform-architecture' },
                { label: 'Bedrock API Keys', slug: 'kb/agentcore-ai-platform/bedrock-api-keys' },
                { label: 'Gateway & Policy', slug: 'kb/agentcore-ai-platform/gateway-policy' },
                { label: 'Harness & Governed Workflow', slug: 'kb/agentcore-ai-platform/harness-governed-workflow' }
              ]
            },
            {
              label: '🤖 SecCop',
              items: [
                { label: 'Overview', slug: 'kb/seccop' },
                { label: 'Secure-Agent Harness', slug: 'kb/seccop/secure-agent-harness' },
                { label: 'EC2 & SSM Remediation', slug: 'kb/seccop/ec2-ssm-remediation' },
                { label: 'Multi-Source Operator', slug: 'kb/seccop/multi-source-operator' },
                { label: 'Approval & Verification', slug: 'kb/seccop/approval-verification' }
              ]
            },
            {
              label: '🧬 Nextflow Offline',
              items: [
                { label: 'Overview', slug: 'kb/nextflow-offline' },
                { label: 'Architecture', slug: 'kb/nextflow-offline/architecture' },
                { label: 'Image Discovery & Mirroring', slug: 'kb/nextflow-offline/image-discovery-mirroring' },
                { label: 'Offline Runtime', slug: 'kb/nextflow-offline/offline-runtime' },
                { label: 'Validation & Evidence', slug: 'kb/nextflow-offline/validation-evidence' }
              ]
            }
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
