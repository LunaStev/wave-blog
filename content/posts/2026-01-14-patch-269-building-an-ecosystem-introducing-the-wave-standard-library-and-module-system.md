---
title: "Patch #269: Building an Ecosystem: Introducing the Wave Standard Library and Module System"
date: "2026-01-14 08:47:18"
description: "A programming language is more than just syntax and a compiler; it is defined by its ecosystem. Today, we are excited to introduce the infrastructure for the Wave Standard Library (std)—a system designed to distribute, manage, and use common utilitie..."
tags: ["wave-lang", "Programming Blogs", "programming languages", "compiler"]
cover: "https://cdn.hashnode.com/res/hashnode/image/upload/v1768378221357/3d67f770-428d-4e08-85ed-80f32ec1864c.png"
---

# Patch #269: Building an Ecosystem: Introducing the Wave Standard Library and Module System

A programming language is more than just syntax and a compiler; it is defined by its ecosystem. Today, we are excited to introduce the infrastructure for the **Wave Standard Library (std)**—a system designed to distribute, manage, and use common utilities efficiently and intuitively.

### 1\. Seamless Library Management via CLI

We’ve added first-class support for managing the standard library directly through the Wave CLI. You no longer need to manually clone repositories or manage paths.

* `wavec install std`: This command sets up the standard library environment on your machine. It uses Git's **sparse-checkout** logic to pull only the necessary library files from our source repository, storing them in `~/.wave/lib/wave/std`.
    
* `wavec update std`: Keeps your library up to date with the latest official releases.
    

By leveraging sparse-checkout, we ensure that you only download what is needed, keeping the installation lightweight and fast. The system also includes manifest validation to guarantee that the library is correctly installed and intact.

### 2\. Namespaced Imports with `std::`

To make library usage intuitive, we have revamped our import resolution mechanism. You can now use the `std::` prefix to access official modules, clearly separating them from local project files.

```kotlin
// Example of the new import syntax
import("std::io::format");

fun main() {
    // Usage of standard library functions
    format("Hello, Wave!");
}
```

While standard library imports are automatically resolved to your local installation directory, relative imports (`import("./utils")`) continue to work seamlessly. This namespacing prevents naming conflicts and makes your code's dependencies much clearer.

### 3\. A Lean Philosophy: Custom JSON Parser

In line with our goal of keeping the compiler lean (as seen in our previous removal of the `regex` crate), we decided not to add heavy external dependencies for manifest handling.

Instead, we implemented a **custom, lightweight JSON parser** within `utils::json`. It supports all basic JSON types—Objects, Arrays, Strings, Numbers, and Booleans—providing exactly what we need to parse library manifests without the overhead of a general-purpose library.

### 4\. Smarter CLI and Better Error Handling

The CLI is now more aware of its environment. We’ve added specific error handling for:

* **Environment Issues**: Alerts if the `HOME` directory is not set.
    
* **Missing Dependencies**: Notifies you if `Git` is missing when attempting an install.
    
* **Manifest Failures**: Detailed reports if a library manifest is corrupt or missing.
    

### 5\. Initial Standard Library Content

This release includes the boilerplate for our standard library, starting with basic I/O and formatting logic in `std/io/format.wave`. While it's just the beginning, this foundation allows us to build out complex string manipulation, math, and system utilities independently of the compiler's core logic.

### Moving Forward

With the standard library infrastructure in place, Wave is now ready to grow its library of reusable components. This modular approach ensures that the compiler stays focused on code generation, while the standard library provides the rich feature set developers expect.

Try running `wavec install std` and start exploring the new module system today!

### Link

* [Pull request](https://github.com/wavefnd/Wave/pull/269)
    
* [GitHub](https://github.com/wavefnd/Wave)
    
* [Community](https://discord.gg/3nev5nHqq9)