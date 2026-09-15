# Environment

Status: READY

## Runtime

- Context: PERSONAL / LAB
- Primary runtime: GitHub Actions + GitHub Pages
- Local development: optional

## Development Tools

- Node.js: 22 in CI
- npm: required
- Astro: project dependency
- Starlight: project dependency
- Docker/Podman: not required
- Terraform/Terragrunt: not required

## Cloud

- Provider: none required for v1
- AWS profile: N/A
- Region: N/A
- Environment alias: personal public lab

## External Dependencies

- GitHub repository
- GitHub Actions
- GitHub Pages
- npm registry during CI dependency installation

## Credentials And Secrets

No project secrets are required for the v1 public static site. GitHub Pages deployment uses GitHub's workflow permissions and OIDC-backed Pages deployment action.

## Readiness

The dependencies needed for the current milestone are known. CI will provide the authoritative build validation.
