---
title: "Patch #294: Control Flow and Confidence: Full 'for' Loops and Strict Type Safety"
date: "2026-02-23 07:04:00"
description: "As Wave continues to mature, we are focusing on two main pillars: developer productivity and compile-time reliability. Our latest patch delivers on both by introducing C-style for loops and enforcing "
tags: ["wave-lang", "Programming Blogs", "programming languages", "compiler"]
cover: "https://cloudmate-test.s3.us-east-1.amazonaws.com/uploads/covers/688f564f07f13939f0c67146/a4fbe862-bd96-49a4-9ba3-227e07ced138.png"
---

# Patch #294: Control Flow and Confidence: Full 'for' Loops and Strict Type Safety

As Wave continues to mature, we are focusing on two main pillars: developer productivity and compile-time reliability. Our latest patch delivers on both by introducing C-style `for` loops and enforcing strict rules against implicit type narrowing—ensuring that your code is both expressive and safe.

### 1\. The Arrival of Full 'for' Loops

While `while` loops are powerful, the `for` loop is often the preferred choice for iteration due to its concise syntax. Wave now supports full C-style `for` loops, including local variable initialization.

*   **Scoped Initialization**: You can now declare loop-local variables directly in the loop header (e.g., `for (var i: i32 = 0; i < 10; i += 1)`). These variables are automatically cleaned up once the loop finishes, preventing "namespace pollution."
    
*   **Robust Codegen**: Our LLVM backend now handles complex loop scopes, ensuring that the initialization, condition, and increment blocks are generated with optimal performance.
    

### 2\. Strict Type Safety: No More Hidden Narrowing

One of the most common sources of bugs in systems programming is "narrowing"—accidentally squeezing a large value (like an `i64`) into a small variable (like an `i32`).

*   **Forbidding Implicit Narrowing**: Wave now explicitly forbids implicit narrowing in assignments, binary operations, and function arguments. If there's a risk of data loss, the compiler will require an explicit cast, forcing you to acknowledge the conversion.
    
*   **Context-Dependent Literal Inference**: To make this strictness less tedious, we’ve made the compiler smarter. Numeric literals (like `42`) now use context clues. If you pass a literal to a function expecting an `i8`, the compiler will infer the literal as an `i8` automatically, provided the value fits.
    

### 3\. Smarter Diagnostics: From `Option` to `Result`

We have overhauled the internal logic of the parser. Previously, the parser returned an `Option`, meaning it either succeeded or failed silently.

*   **Structured Error Reporting**: The parser now returns a `Result<Vec<ASTNode>, ParseError>`. This allows us to propagate detailed error messages, source labels, and helpful hints directly to your terminal.
    
*   **Improved Imports**: Structured errors now extend to the import system. If an imported file has a syntax error, Wave will point you exactly to the line and column in that file, making it much easier to debug multi-file projects.
    

### 4\. Modular Standard Library & Optimized Backend

We’ve performed a cleanup of the standard library and our optimization pipeline:

*   **Role-Based Modules**: We’ve moved away from "umbrella" files. You can now import specific modules based on their role, such as `std::time::clock`. This keeps your namespace clean and reduces compile times.
    
*   **Backend Alignment**: We have normalized our optimization flags. `-Ofast` is now mapped to `-O3` within our LLVM pass pipeline, ensuring aggressive but stable optimizations across all targets.
    
*   **Strict Dependency Policy**: The `std/README.md` has been updated with a clear policy on `extern(c)` usage, guiding contributors on how to build a safe and portable standard library.
    

### Why This Matters

With these changes, Wave is moving toward a "safety-first" philosophy. By catching type mismatches early and providing clearer feedback, we enable you to build complex systems with confidence. The addition of the `for` loop simply makes that process feel more natural and familiar.

Check out the updated tests and standard library to see these new features in action!