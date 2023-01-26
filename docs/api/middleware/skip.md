---
id: skip
title: Skip
sidebar_position: 19
---

Skip middleware for [Fiber](https://github.com/gofiber/fiber) that skips a wrapped handler if a predicate is true.

### Signatures
```go
func New(handler fiber.Handler, exclude func(c *fiber.Ctx) bool) fiber.Handler
```

### Examples
Import the middleware package that is part of the Fiber web framework
```go
import (
  "github.com/gofiber/fiber/v2"
  "github.com/gofiber/fiber/v2/middleware/skip"
)
```

After you initiate your Fiber app, you can use the following possibilities:
```go
app.Use(skip.New(handler, func(ctx *fiber.Ctx) bool { return ctx.Method() == fiber.MethodOptions }))
```