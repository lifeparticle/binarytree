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
|-- PageName.scss <- CompA.scss + CompB.scss + .......
|-- CompA.tsx
|-- CompA.scss
|-- compAData.ts
|-- types.ts
|-- useHookName.ts
```

Let's break this down:

PageName/: This is the root directory for a specific page in the application.

`index.tsx`: This is the main TypeScript file for the page.
`PageName.scss`s: This contains the styles for the page and other related components.
`CompA.tsx`: This is the main TypeScript file for the 'CompA' component.
