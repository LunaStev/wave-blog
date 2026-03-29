---
title: "Patch #271: Bridging High-Level Syntax and System Power: Unary Negation, let/const, and Syscalls"
date: "2026-01-15 07:29:03"
description: "The evolution of a programming language is a journey of balancing developer-friendly syntax with raw system capabilities. Our latest update to the Wave language does exactly that—introducing essential unary operators and variable declarations while s..."
tags: ["wave-lang", "Programming Blogs", "programming languages", "compiler"]
cover: "https://cdn.hashnode.com/res/hashnode/image/upload/v1768461955414/9f214323-846c-42d6-99db-f0f6e46e6b0c.png"
---

# Patch #271: Bridging High-Level Syntax and System Power: Unary Negation, let/const, and Syscalls

The evolution of a programming language is a journey of balancing developer-friendly syntax with raw system capabilities. Our latest update to the Wave language does exactly that—introducing essential unary operators and variable declarations while simultaneously expanding the standard library into the realm of Linux syscalls and networking.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1768462000020/82bf9b15-c0ec-4b37-9835-4c774ccaea89.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1768462008025/36f4a7cd-4d12-4291-b554-770f6c344e33.png align="center")

### 1\. First-Class Unary Negation

Previously, negative values were often handled as parts of numeric literals. With this update, we have implemented **Unary Negation (**`-`) as a first-class operator in the Abstract Syntax Tree (AST).

* **Generalized Expressions**: The `-` operator can now be applied to any general expression, not just literals.
    
* **Type Awareness**: The compiler's type inference system now ensures that negation is only applied to numeric types, while the logical NOT (`!`) operator correctly results in a boolean.
    
* **LLVM Implementation**: Under the hood, we generate IR using `build_int_sub` and `build_float_sub` by subtracting the value from zero, ensuring efficient and standard-compliant arithmetic.
    

### 2\. Modern Variable Declarations: `let` and `const`

To provide developers with better control over scope and mutability, we have officially registered the `let` and `const` keywords in our statement parser. This paves the way for structured local variable declarations and constant definitions, making Wave code more readable and consistent with modern programming paradigms.

### 3\. Standard Library Expansion: Networking and Syscalls

Perhaps the most exciting part of this update is the expansion of the `std` library. We are moving beyond basic I/O and diving into system-level operations.

* **Linux Syscalls via Inline ASM**: We’ve added `std/sys/linux/syscall.wave`, which implements the `socket` syscall. By utilizing our recently improved inline assembly support, Wave can now communicate directly with the Linux kernel.
    
* **UDP Networking**: Building on top of the syscall layer, we introduced `std/net/udp.wave`. This module provides a high-level interface for creating UDP sockets, marking the beginning of Wave’s networking capabilities.
    
* **C ABI Compatibility**: A new `std/libc/c.wave` module has been added as a foundation for FFI (Foreign Function Interface), allowing for future compatibility with C-standard libraries.
    

### 4\. Manifest Updates

All these new modules (`sys`, `net`, `libc`) are now officially tracked in the `std/manifest.json`. If you have the standard library management system set up, a simple `wavec update std` will bring these new capabilities to your local environment.

### Bridging the Gap

These updates represent a significant milestone. By enabling both high-level syntax like `let/const` and low-level power like `socket` syscalls, Wave is uniquely positioned as a tool that can handle everything from application logic to systems programming.

We are one step closer to a complete, self-hosting-capable language ecosystem. Stay tuned for more updates as we continue to expand the standard library!

### Link

* [Pull request](https://github.com/wavefnd/Wave/pull/271)
    
* [GitHub](https://github.com/wavefnd/Wave)
    
* [Community](https://discord.gg/3nev5nHqq9)