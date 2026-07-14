# Contributing to Koma UI

Thank you for your interest in contributing to Koma UI! This document provides guidelines for contributing to the repository and adding new components to the library.

## Local Setup

To run the project locally and start developing:

1. Clone the repository and navigate to the project directory.
2. Install the dependencies using Bun:
   ```bash
   bun install
   ```
3. Start the development server:
   ```bash
   bun run dev
   ```

## Adding New Components to the Library

Koma UI operates as a component registry. To submit a new component, please follow these steps:

### 1. Create the Component

Place your new component's source code in the `components/mdx/components/` directory. Ensure your code follows the existing style, utilizes Tailwind CSS, and leverages existing UI primitives where appropriate.

### 2. Update the Registry

Open the `registry.json` file located in the root directory and append your new component's configuration to the `items` array. 

Your entry should include the following properties:
- `name`: The unique identifier for your component (e.g., `my-new-component`).
- `type`: Must be set to `registry:ui`.
- `title`: A human-readable title for the component.
- `description`: A clear and concise explanation of what the component does.
- `dependencies`: An array of any external npm packages required by your component (e.g., `motion`, `lucide-react`).
- `registryDependencies`: An array of any internal Koma UI or shadcn components your component relies on.
- `files`: An array of objects pointing to your component's file path. For example:
  ```json
  [
    {
      "path": "components/mdx/components/my-new-component.tsx",
      "type": "registry:ui"
    }
  ]
  ```

### 3. Build the Registry

Once your component is ready and the registry is updated, run the registry build script to process and generate the necessary files:

```bash
bun run registry:build
```

### 4. Test and Verify

Verify that your component renders correctly in the local development environment and that the registry build completes without errors.

## Pull Requests

- Keep your pull requests focused on a single feature, component, or bug fix.
- Ensure your code is formatted correctly.
- Provide a clear description of the changes in your pull request.

Thank you for helping make Koma UI better!
