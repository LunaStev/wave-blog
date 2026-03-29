---
title: "Patch: #306: Powering Abstraction: Introducing Generics, Type Casting, and Static Globals"
date: "2026-03-08 10:35:12"
description: "The evolution of a systems language is marked by its ability to balance high-level expressiveness with low-level precision. Today’s update brings three foundational features to Wave that empower devel"
tags: ["wave-lang", "Programming Blogs", "programming languages", "compiler", "patching"]
cover: "https://cdn.hashnode.com/uploads/covers/688f564f07f13939f0c67146/bb75645a-af23-43d3-9b82-32d7a2a9dc6d.png"
---

# Patch: #306: Powering Abstraction: Introducing Generics, Type Casting, and Static Globals

The evolution of a systems language is marked by its ability to balance high-level expressiveness with low-level precision. Today’s update brings three foundational features to Wave that empower developers to write more reusable, readable, and platform-aware code: **Generics**, **Explicit Type Casting**, and **Static Globals**.

### 1\. Write Once, Run for Any Type: Generics

The most anticipated feature of this release is the introduction of **Generics**. You no longer need to write duplicate logic for different data types.

*   **Generic Functions & Structs**: You can now define functions and structures with type parameters (e.g., `struct Stack<T>`).
    
*   **Monomorphization**: Behind the scenes, the Wave compiler utilizes a monomorphization pass. This means it generates optimized, type-specific machine code for every version of a generic component you use, ensuring zero-overhead abstraction.
    
*   **Standard Library Upgrades**: We’ve already begun leveraging generics in the `std`. Look out for new utilities like `TypedBuffer<T>`, `ptr_swap<T>`, and universal math functions such as `num_abs` and `num_min`.
    

### 2\. Explicit Intent: Type Casting with `as`

Safety and clarity go hand-in-hand. We’ve introduced the `as` operator to handle explicit type conversions.

*   **Explicit Control**: Whether you are converting between integer widths or casting pointers to different types, the `as` keyword makes your intent clear to the compiler and other developers.
    
*   **Compile-time Ready**: Type casting is supported not only at runtime but also within our constant evaluation engine, allowing for more powerful compile-time logic.
    
*   **Native** `null`: To complement our pointer logic, we’ve added a native `null` literal, providing a safer and more idiomatic way to represent null pointers than using raw integers.
    

### 3\. Persistent State: Static Globals

For systems programming, managing memory that lasts the lifetime of the program is essential. The new `static` keyword allows you to declare global variables with persistent storage. These are lowered directly to global LLVM symbols, making them efficient and accessible across your entire application.

### 4\. Robust Platform Awareness & ARM64 Support

We continue to improve Wave’s cross-platform story. This update brings significant refinements to our backend and preprocessor:

*   **Enhanced ARM64 ABI**: Our System V ABI implementation now fully supports both x86\_64 and ARM64 (Apple Silicon and Linux ARM), including specialized logic for aggregate splitting on ARM hardware.
    
*   **Smart Preprocessing**: The `#[target(os="...")]` attribute logic is now "syntax-aware." It correctly ignores braces, semicolons, and keywords found inside comments or string literals, preventing the accidental truncation of platform-specific code blocks.
    
*   **Deep Backend Control**: Advanced users can now use new CLI flags to override target triples, CPU features, and ABIs via the `--llvm` subcommand.
    

### 5\. Transparency and Community

*   **Tiered Platform Policy**: We have officially documented our Tiered Platform Policy in the `README.md`. This clearly outlines the level of support and testing guaranteed for various architectures and operating systems.
    
*   **Doom in Wave?**: Check out the project repository for a reference to the exciting `doom.wave` example, demonstrating what's possible with the new language features.
    

### Conclusion

With generics, statics, and explicit casting, Wave has graduated to a new level of expressiveness. These tools allow you to build complex, high-performance abstractions while maintaining the absolute control required for systems-level development.

Update your toolchain, explore the generic standard library, and start building the next generation of Wave applications!

### Link

*   [Pull request](https://github.com/wavefnd/Wave/pull/306)
    
*   [GitHub](https://github.com/wavefnd/Wave)
    
*   [Community](https://discord.gg/3nev5nHqq9)