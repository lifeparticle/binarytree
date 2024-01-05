## 1: When do you update the major, minor, and patch versions?

**A:** We follow the Semantic Versioning (SemVer) standard for versioning our project. Here's how we determine version updates:

| Change Description                  | Version Update |
| ----------------------------------- | -------------- |
| UI changes (backwards incompatible) | Major Version  |
| New features or feature changes     | Minor Version  |
| Bug fixes (backwards compatible)    | Patch Version  |

## 2. Folder and File Naming Conventions for Pages

When structuring folders and files, it's important to ensure they are organized in a way that makes sense for the project. This can help improve efficiency and maintainability. Here is a proposed structure that offers clear organization for pages, components, and utilities, facilitating seamless navigation within the project. 

- Use PascalCase for component files and folders (e.g., `Button.jsx`).

```
PageName/
├── index.tsx
├── PageName.tsx
├── PageName.module.scss # Combines styles for PageName, CompA, and CompB
├── components/
│   ├── CompA/
│   │   ├── CompA.tsx
│   └── CompB/
│       ├── CompB.tsx
├── useHookName.ts # Put this inside a hooks folder if you have more than one hooks
├── someData.ts
└── __tests__/
    └── PageName.test.tsx
```

**`PageName/`**: Root directory for a specific page in the React application.
  - **`index.tsx`**: Entry file for the `PageName` directory, typically used to export the main page component.
  - **`PageName.tsx`**: The main React component file for the page, containing JSX and logic for `PageName`.
  - **`PageName.module.scss`**: SCSS module with styles for `PageName` and its child components.
  - **`components/`**: Subdirectory for components part of or used by `PageName`.
    - **`CompA/`**: 
      - **`CompA.tsx`**: React component file for `CompA`.
    - **`CompB/`**: 
      - **`CompB.tsx`**: React component file for `CompB`.
  - **`hooks/`**: Directory for custom hooks relevant to `PageName` or its components.
    - **`useHookName.ts`**: Custom hook file.
  - **`someData.ts`**: File holding specific data relevant to `PageName`.
  - **`__tests__/`**: Directory for test files related to `PageName`.
    - **`PageName.test.tsx`**: Test file for the `PageName` component.

Adopting consistent naming conventions helps in understanding and navigating the codebase. 

## 3. How to add a feature


3.1. Use scaffdog to create the page folder

```shell
npx scaffdog generate
```

```shell
? Please select a document. page.md
? Please select the output destination directory. src/pages
? Please enter a page name. progressive web app
```
It will create the following files and folders structure:

```shell
ProgressiveWebApp/
|── ProgressiveWebApp.module.scss
|── ProgressiveWebApp.tsx
|── __tests__/
|   |── ProgressiveWebApp.test.tsx
|── index.ts
```

3.2. Update

`ui/src/pages/index.ts`

3.3. Update

`ui/src/data/featureData.ts`

3.4. Update

`ui/src/data/helpData.ts`

3.5. Update

`ui/src/data/menuData.ts`

3.6. Update

`ui/src/data/routeData.tsx`
