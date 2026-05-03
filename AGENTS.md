<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Package and runtime management

- **Node/JavaScript**: Use **Yarn** for all Node package management and scripts (`yarn install`, `yarn add`, `yarn run`, etc.). Do **not** use npm (`npm install`, `npx`, etc.).

- **Python**: Target **Python ≥ 3.12** only. Use **UV** for environments, dependency resolution, and running Python (`uv sync`, `uv run`, `uv add`, etc.). Do **not** use `pip`, `pip install`, or pip-based workflows — default is UV only.

## Test coverage

- Maintain a **minimum of 80%** code coverage for project code as measured by the repo’s configured test tooling. New or changed behavior should include tests sufficient to stay at or above that threshold unless an existing carve-out applies.

## Environemt Variables

- Any changes made to the **.env** file must also be added to the **env.example** file with the values sanitized.
