---
title: "Patch #272: Elevating System Programming: Methods, Recursive Structs, and Advanced Pointers"
date: "2026-01-17 14:21:00"
description: "As we strive to make Wave both expressive and powerful, we realize that syntax should not only be low-level but also intuitive. Our latest release introduces several "quality-of-life" features and backend overhauls that allow for more complex data st..."
tags: ["wave-lang", "Programming Blogs", "TCP", "http", "backend", "programming languages"]
cover: "https://cdn.hashnode.com/res/hashnode/image/upload/v1768659509633/5e0a23b1-50df-4576-97cf-c1dd229980c6.png"
---

# Patch #272: Elevating System Programming: Methods, Recursive Structs, and Advanced Pointers

As we strive to make Wave both expressive and powerful, we realize that syntax should not only be low-level but also intuitive. Our latest release introduces several "quality-of-life" features and backend overhauls that allow for more complex data structures and cleaner code patterns.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1768659556723/9329926d-3a6f-42ab-88f2-fe836d3ef01e.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1768659548437/8c9e6cda-0419-493f-beb2-b348d073f77d.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1768659536543/0a97d471-0f48-4c44-a49c-f1a174ebcfe0.png align="center")

### 1\. Method-Style Calls: `obj.method()`

We’ve introduced a more ergonomic way to call functions related to structs. Instead of manually passing a struct to a function, you can now use the dot notation.

* **How it works**: When the parser encounters `obj.method()`, it resolves it to a function named `struct_name_method_name` and automatically passes a pointer to `obj` as the first argument (`self`).
    
* **Benefits**: This provides a cleaner, object-oriented feel to your code without the overhead of a complex class system, keeping the language lean and performant.
    

### 2\. Recursive Structs via Opaque Types

One of the most requested features was the ability to define recursive data structures, such as linked lists or trees.

* **Opaque Structs**: We have refactored our LLVM backend to use opaque struct definitions. This allows a struct to contain a pointer to itself (e.g., a `Node` struct containing a `ptr<Node>`).
    
* **Address Generation**: By centralizing our `FieldAccess` logic, we’ve ensured that nested and recursive memory addresses are resolved safely and efficiently.
    

### 3\. Robust Pointer Logic & Type Coercion

Low-level programming often requires comparing memory addresses. We’ve expanded our binary operator support to handle:

* **Pointer vs. Pointer**: Direct comparison between two pointer types (`ptr == ptr`).
    
* **Null Checks**: Comparing a pointer with an integer literal (e.g., `ptr == 0`), which is essential for null-pointer validation.
    
* **Automatic Coercion**: The compiler now performs implicit type coercion for assignments, return statements, and even integer promotion (z-extend) for small types in I/O functions, reducing the need for manual casts.
    

### 4\. Advanced Formatting Engine

Debugging and logging are now much more flexible. Our formatting engine now supports specifiers within placeholders:

* `{x}`: Hexadecimal output.
    
* `{c}`: Character output.
    
* `{p}`: Pointer address output.
    
* **Smart Strings**: If you pass a pointer to an `i8`, the engine automatically maps it to a C-style string (`%s`).
    

### 5\. String Literal Safety & Lexer Tweaks

To prevent subtle bugs, we’ve added a safety check in the Lexer to disallow unescaped newlines within string literals. Additionally, the type parser now skips newlines, allowing for more flexible and readable formatting when dealing with complex or generic types.

### 6\. Real-World Proof: A Full TCP Socket Server

To put all these features to the test, we’ve updated our test suite (`test56.wave`) with a **robust TCP socket server implementation**. This example demonstrates the synergy between:

* Our new **struct methods** for socket management.
    
* **Recursive structs** for state handling.
    
* **Linux syscalls** for network communication.
    
* **Pointer comparisons** for error checking.
    

We've even included a Python-based test helper to verify real-world server responses, ensuring that Wave is ready for network-level tasks.

### Conclusion

With method calls, recursive types, and refined pointer arithmetic, Wave is evolving into a formidable tool for systems-level development. These features bridge the gap between high-level readability and the precision required for low-level engineering.

Update your standard library and compiler today to experience the next level of Wave programming!

### Link

* [Pull request](https://github.com/wavefnd/Wave/pull/272)
    
* [GitHub](https://github.com/wavefnd/Wave)
    
* [Community](https://discord.gg/3nev5nHqq9)