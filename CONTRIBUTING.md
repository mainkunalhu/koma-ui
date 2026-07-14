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

Adding a new component to Koma UI involves writing the component, building it into the registry, and adding it to the documentation site. Follow these steps:

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

### 4. Create Documentation & Previews

To make your component visible on the documentation site, you must create its preview components and MDX documentation page.

**A. Create Preview Components**
Create a new folder for your component previews: `components/mdx/components-preview/[your-component-name]/`. Inside this folder, create two separate files to avoid React Server/Client conflicts:
1. `previewer.tsx`: Create an interactive wrapper for your component. This file MUST include `"use client"` at the top.
2. `usages.tsx`: Create a server component displaying the code block using `<CodePreviewRender />`. This file MUST NOT include `"use client"`.
3. `index.ts`: Export both components from this file.

**B. Register the Preview Components**
- Export your new preview directory in `components/mdx/components-preview/index.ts`.
- Import and register your preview components (Preview, Props, Usages) into the `getMDXComponents` function inside `components/mdx/mdx.tsx`.

**C. Update the Components List**
Add your component to the array in `components/mdx/components-list.tsx` to ensure it appears on the main components listing page.

**D. Create the MDX Page**
Finally, create your component's documentation page at `content/docs/components/[your-component-name].mdx`. Use the registered preview components inside this file to render the live demo, installation command, usages, and props table.

### 5. Test and Verify

Verify that your component renders correctly in the local development environment and that the registry build completes without errors. Check the `/docs/components` route to ensure your component's documentation page works flawlessly.

## Pull Requests

- Keep your pull requests focused on a single feature, component, or bug fix.
- Ensure your code is formatted correctly.
- Provide a clear description of the changes in your pull request.

Thank you for helping make Koma UI better!
