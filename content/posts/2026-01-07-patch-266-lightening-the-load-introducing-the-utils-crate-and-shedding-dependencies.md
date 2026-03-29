---
title: "Patch #266: Lightening the Load: Introducing the Utils Crate and Shedding Dependencies"
date: "2026-01-07 07:02:18"
description: "As a project grows, so does its complexity and the number of its dependencies. In our latest update, we’ve taken a major step toward a leaner and faster toolchain by introducing a dedicated utils crate and eliminating our dependency on the heavy rege..."
tags: ["programming languages", "patch", "wave-lang", "Programming Blogs", "programming"]
cover: "https://cdn.hashnode.com/res/hashnode/image/upload/v1767769132693/e8dfeddb-ea81-4e18-9183-963c6186c0c2.png"
---

# Patch #266: Lightening the Load: Introducing the Utils Crate and Shedding Dependencies

As a project grows, so does its complexity and the number of its dependencies. In our latest update, we’ve taken a major step toward a leaner and faster toolchain by introducing a dedicated `utils` crate and eliminating our dependency on the heavy `regex` engine.

### Why the Change?

While external libraries are powerful, they often come with a cost: increased compilation time and larger binary sizes. We realized that our use of the `regex` library—primarily for counting placeholders like `{}` in I/O operations—was a classic case of using a "sledgehammer to crack a nut." By replacing it with targeted, lightweight logic, we’ve significantly improved our build performance.

### 1\. The New `utils` Crate

We’ve centralized common logic into a new internal crate: `utils`. This improves code reusability across the workspace and keeps our core logic clean.

* `formatx.rs`: This module now houses `count_placeholders`, a custom-built, high-performance function that replaces the regex-based placeholder counting. It’s faster, simpler, and tailored exactly to our needs.
    
* `colorex.rs`: We’ve moved our color formatting logic here. This centralizes how our compiler styles terminal output, making it easier to maintain a consistent look across the CLI.
    

### 2\. Streamlining Dependencies

The most significant impact of this update is the removal of the `regex` crate from `front/parser`.

* **Faster Compilation**: By removing one of our largest dependencies, developers will notice a meaningful reduction in clean build times.
    
* **Smaller Binaries**: Eliminating the regex engine—which includes complex state machine logic—helps keep our final executable size minimal.
    
* **Simplified Parser**: The parser now relies on our lightweight `utils` crate, making the `front/parser/src/parser/`[`io.rs`](http://io.rs) logic more straightforward.
    

### 3\. Improved Error Integration

The `utils` crate is now a foundational piece of our architecture. We’ve updated `front/error` and our main application entry points to depend on `utils::colorex`. This ensures that every error message and log output utilizes a unified coloring system, providing a more cohesive user experience.

### Looking Ahead

By taking control of our utility functions and reducing reliance on heavy external crates, we are ensuring that the compiler remains agile and performant. This refactoring sets a standard for how we will manage shared logic and external dependencies moving forward.

Build fast, stay lean!

### Link

* [Pull request](https://github.com/wavefnd/Wave/pull/266)
    
* [GitHub](https://github.com/wavefnd/Wave)
    
* [Community](https://discord.gg/3nev5nHqq9)