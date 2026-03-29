---
title: "Patch #285: Strengthening the Type System: Enums, Aliases, and Iterative Constants"
date: "2026-02-09 07:46:06"
description: "As we move toward v0.1.7-pre-beta, Wave is becoming more than just a tool for low-level systems programming; it’s becoming a language that helps you organize complex logic with ease. Our latest update focuses on expanding the type system and making t..."
tags: ["wave-lang", "Programming Blogs", "programming languages", "patching", "languages", "compiler"]
cover: "https://cdn.hashnode.com/res/hashnode/image/upload/v1770623089274/2500483b-a3dd-4a64-89f0-5c500434c4b6.png"
---

# Patch #285: Strengthening the Type System: Enums, Aliases, and Iterative Constants

As we move toward **v0.1.7-pre-beta**, Wave is becoming more than just a tool for low-level systems programming; it’s becoming a language that helps you organize complex logic with ease. Our latest update focuses on expanding the type system and making the compiler significantly smarter about compile-time values.

### 1\. New Organizational Tools: Enums & Type Aliases

To write clean, maintainable code, you need tools to describe your data and its meaning. We’ve added two core features:

* **Enums**: You can now define a set of named constants with an underlying representation.
    
    ```kotlin
    enum Status -> i32 {
        Success,
        Error,
        Pending
    }
    ```
    
    Enum variants are automatically registered as global constants, making them easy to use throughout your program.
    
* **Type Aliases**: Long or complex types can now be given simpler names, improving code reuse and readability.
    
    ```kotlin
    type Handle = u64;
    type Callback = ptr<i32>;
    ```
    

To support this, we’ve implemented a pre-codegen **Type Resolution Pass** that flattens aliases and ensures all types are correctly resolved before the first line of LLVM IR is even written.

### 2\. A More Powerful Constant Evaluation Engine

Our constant evaluator has graduated from simple arithmetic to handling complex data.

* **Aggregate Support**: You can now define constants that are **struct literals** or **array literals**. This allows you to bake complex configuration data directly into your binary.
    
* **Iterative Resolution**: Constants can now depend on other constants defined later in the file. The compiler performs multiple passes (multi-round resolution) until all dependencies are resolved, giving you more freedom in how you organize your code.
    
* **Built-in Keywords**: `true`, `false`, and `null` are now fully supported in constant contexts.
    

### 3\. Safer ABI Handling & Vector Support

When interfacing with C libraries, passing structs via registers is a delicate operation. We’ve refined our approach:

* **From Bit-cast to Memcpy**: In our aggregate packing logic (`pack_agg_to_int`), we’ve moved from direct bit-casting to using `build_memcpy`. This is a much safer approach that respects memory alignment requirements more strictly during FFI calls.
    
* **Vector Type Support**: We’ve improved support for **Homogeneous Floating-point Aggregates (HFAs)** by adding coercion logic between Wave structs and LLVM Vector types. This ensures peak performance when passing mathematical vectors to external libraries.
    

### 4\. Robust Frontend Validation

We’ve strengthened our verification pass to catch errors earlier. The compiler now detects the usage of **undeclared identifiers** in expressions and validates that all enum variants are correctly registered before use. This means fewer surprises at the codegen stage and more helpful error messages for you.

### Summary of Key Changes

* **Syntax**: Added `enum` and `type` keywords.
    
* **Compile-time**: Enhanced constant evaluation with iterative dependency resolution and aggregate support.
    
* **Backend**: Refactored aggregate packing using `memcpy` for better ABI safety.
    
* **Milestone**: Bumped package version to **v0.1.7-pre-beta**.
    
* **Infrastructure**: Automatic `target/` directory creation during build.
    

This release bridges the gap between high-level code organization and low-level performance. Whether you’re organizing state with enums or defining complex compile-time arrays, Wave v0.1.7-pre-beta provides the foundation you need.

### Link

* [Pull request](https://github.com/wavefnd/Wave/pull/285)
    
* [GitHub](https://github.com/wavefnd/Wave)
    
* [Community](https://discord.gg/3nev5nHqq9)