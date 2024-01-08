---
name: "page.md"
root: "."
output: "src/pages"
ignore: ["."]
questions:
    value: "Please enter a page name."
---

# Variables

-   name: `{{ inputs.value | pascal }}`

# `{{ name }}/index.ts`

```typescript
export { default } from "./{{ name }}";
```

# `{{ name }}/{{ name }}.tsx`

```typescript
import { FC } from "react";
import style from "./{{ name }}.module.scss";

const {{ name }} : FC = () => {
	return <div className={style.{{inputs.value | lower | replace " " "" }}}>{{inputs.value}}</div>;
};

export default {{ name }};
```

# `{{ name }}/{{ name }}.module.scss`

```scss
.{{inputs.value | lower | replace " " ""}} {

}
```

# `{{ name }}/__test__/{{ name }}.test.tsx`

```tsx
import { render } from "@testing-library/react";
import {{ name }} from "pages/{{ name }}";

describe("{{ inputs.value }} Component", () => {
	it("renders correctly", () => {
		const { getByText } = render(<{{ name }} />);
		expect(getByText("{{ inputs.value }}")).toBeInTheDocument();
	});
});
```
