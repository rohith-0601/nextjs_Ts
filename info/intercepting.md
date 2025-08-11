
## ✅ Step 33: Intercepting Routes (02:14:52–02:28:09)

---

### What are Intercepting Routes?

* They let you **render one route inside another route’s UI without changing the URL**.
* Useful for **modals, sidebars, or nested overlays** that don’t cause full page navigation.
* Keeps the current route visible while showing “intercepted” content on top.

---

### How to use them?

* Use the special syntax `@segment` in the route folder name to create an intercepting route.

---

### Example folder structure:

```
app/
├── dashboard/
│   ├── page.tsx
│   └── @modal/
│       └── page.tsx
```

---

### Behavior:

* Navigating to `/dashboard` renders the dashboard page.
* Navigating to `/dashboard/@modal` **renders the modal UI inside dashboard’s layout** but **URL stays `/dashboard`**.
* You can open modals or sidebars as overlay without leaving the page.

---

### How to trigger in code?

Use the `router.push` with the special URL pattern:

```tsx
"use client";

import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  function openModal() {
    router.push("/dashboard/@modal");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={openModal}>Open Modal</button>
    </div>
  );
}
```

---

### Why is this powerful?

* UX stays smooth with no full page reloads.
* URL remains clean and intuitive.
* You can nest multiple intercepting routes for complex overlays.

---

