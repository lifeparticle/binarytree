## 1: When do you update the major, minor, and patch versions?

**A:** We follow the Semantic Versioning (SemVer) standard for versioning our project. Here's how we determine version updates:

| Change Description                  | Version Update |
| ----------------------------------- | -------------- |
| UI changes (backwards incompatible) | Major Version  |
| New features or feature changes     | Minor Version  |
| Bug fixes (backwards compatible)    | Patch Version  |

## 2: How to structure folders and files?

**A:** When structuring folders and files, it's important to ensure they are organized in a way that makes sense for the project. This can help improve efficiency and maintainability. Here is a proposed structure that offers clear organization for pages, components, and utilities, facilitating seamless navigation within the project.

```shell
PageName/
|
|-- index.tsx
|-- PageName.scss
|-- components/
|   |-- CompA/
|       |-- index.tsx
|       |-- CompA.scss
|-- tests/
|   |-- PageName.test.tsx
|   |-- CompA.test.tsx
|-- utils/
    |-- constants.ts
    |-- helper.ts
    |-- types.ts
    |-- hooks.ts
```

Let's break this down:

PageName/: This is the root directory for a specific page in the application.

`index.tsx`: This is the main TypeScript file for the page.
`PageName.scs`s: This contains the styles for the page.

`components/`: This directory contains all the components related to the page.
`CompA/`: This sub-directory includes files for a specific component, 'CompA'.
`index.tsx`: This is the main TypeScript file for the 'CompA' component.
`CompA.scss`: This contains the styles for the 'CompA' component.

`tests/`: This directory houses all test files.
`PageName.test.tsx` & `CompA.test.tsx`: These are the test files for the page and 'CompA' component respectively.

`utils/`: This directory contains utility files like constants, helpers, types, and hooks. Each of these has its own `.ts` file.
