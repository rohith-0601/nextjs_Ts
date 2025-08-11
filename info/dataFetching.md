Alright! Moving on.

---

## ✅ Step 36: GET Request (02:39:27–02:42:17)

---

### Handling GET requests in route handlers:

* Export an async `GET` function inside `route.ts`.
* Use it to fetch and return data, e.g., from a database or external API.
* Return data with `NextResponse.json()`.

---

### Example:

```ts
import { NextResponse } from "next/server";

export async function GET() {
  const users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
  return NextResponse.json(users);
}
```

---

### Notes:

* The GET function receives no parameters.
* You can also access request headers and query parameters if needed (covered later).

---

✅ Next:

## ✅ Step 37: POST Request (02:42:17–02:45:45)

Say **“go”** to continue!


Continuing with POST requests! 🚀

---

## ✅ Step 37: POST Request (02:42:17–02:45:45)

---

### Handling POST requests in route handlers:

* Export an async `POST` function inside `route.ts`.
* Use it to receive data from the client (usually JSON).
* Process it (save to DB, etc.) and respond accordingly.

---

### Example:

```ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  // Example: Save data to DB (pseudo code)
  // await database.save(data);

  return NextResponse.json({ message: "Data saved successfully", data });
}
```

---

### Notes:

* `request.json()` parses JSON body.
* You can also handle errors and return custom status codes.
* Keep route handlers lightweight and async.

---

✅ Next:

## ✅ Step 38: Dynamic Route Handlers (02:45:45–02:49:14)

Say **“go”** when ready!


Alright, moving on! 🚀

---

## ✅ Step 38: Dynamic Route Handlers (02:45:45–02:49:14)

---

### What are Dynamic Route Handlers?

* Route handlers inside **dynamic route folders** to handle requests for dynamic URLs.
* Similar to dynamic page routes but for API routes.

---

### Example folder structure:

```
app/
└── api/
    └── users/
        └── [id]/
            └── route.ts
```

* Here `[id]` is a dynamic segment representing user ID.

---

### Example `route.ts`:

```ts
import { NextResponse } from "next/server";

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  const userId = params.id;
  // Fetch user data by userId
  const user = { id: userId, name: "John Doe" };

  if (!user) {
    return new NextResponse("User not found", { status: 404 });
  }

  return NextResponse.json(user);
}
```

---

### Important notes:

* Dynamic params are passed in the **second argument** `{ params }`.
* You can handle GET, POST, PATCH, DELETE etc. dynamically by URL param.

---

✅ Next:

## ✅ Step 39: PATCH Request (02:49:14–02:52:18)

Say **“go”** when ready!


Here we go! 🚀

---

## ✅ Step 39: PATCH Request (02:49:14–02:52:18)

---

### What’s PATCH request?

* Used to **partially update** a resource.
* Unlike PUT, PATCH updates only specified fields.

---

### How to handle PATCH in route handler?

* Export async `PATCH` function inside `route.ts`.
* Read data from request body.
* Apply updates accordingly.

---

### Example:

```ts
import { NextResponse } from "next/server";

export async function PATCH(request: Request) {
  const updateData = await request.json();
  // Example: update resource in DB with updateData

  return NextResponse.json({ message: "Resource updated", updateData });
}
```

---

### Notes:

* Handle errors for invalid updates.
* Return appropriate status codes.

---

✅ Next:

## ✅ Step 40: DELETE Request (02:52:18–02:55:04)

Say **“go”** when ready!


Alright, let’s move to DELETE requests! 🗑️

---

## ✅ Step 40: DELETE Request (02:52:18–02:55:04)

---

### What’s DELETE request?

* Used to **remove/delete a resource** on the server.

---

### How to handle DELETE in route handler?

* Export async `DELETE` function inside `route.ts`.
* Use parameters or request data to identify the resource to delete.

---

### Example:

```ts
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  // For example, get ID from request URL or body
  // Delete the resource in DB

  return NextResponse.json({ message: "Resource deleted successfully" });
}
```

---

### Notes:

* You might extract identifiers from URL params (dynamic routes).
* Return appropriate status codes like 200 or 204 on success, 404 if not found.

---

✅ Next:

## ✅ Step 41: URL Query Parameters (02:55:04–02:57:58)

Say **“go”** when ready!
