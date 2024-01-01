---
name: "page.md"
root: "."
output: "src/pages"
ignore: ["."]
questions:
    value: "Please enter a page name."
---

# `{{ inputs.value | pascal }}/index.ts`

```typescript
export { default } from "./{{ inputs.value }}";
```

# `{{ inputs.value | pascal }}/{{ inputs.value | pascal }}.tsx`

```typescript
import { FC } from "react";
import style from "./{{ inputs.value | pascal }}.module.scss";

const {{ inputs.value | pascal }} : FC = () => {
	return <div className={style.{{inputs.value | lower}}}>{{inputs.value}}</div>;
};

export default {{ inputs.value | pascal }};
```

# `{{ inputs.value | pascal }}/{{ inputs.value | pascal }}.module.scss`

```scss
.{{inputs.value | lower}} {

}
```

# `{{ inputs.value | pascal }}/__test__/{{ inputs.value | pascal }}.test.tsx`

```tsx
import { render } from "@testing-library/react";
import {{ inputs.value }} from "pages/{{ inputs.value }}";

describe("{{ inputs.value }} Component", () => {
	it("renders correctly", () => {
		const { getByText } = render(<{{ inputs.value }} />);
		expect(getByText("{{ inputs.value }}")).toBeInTheDocument();
	});
});
```
