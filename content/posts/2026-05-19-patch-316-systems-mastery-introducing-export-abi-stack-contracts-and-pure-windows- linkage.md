---
title: "Patch #316: Systems Mastery: Introducing export(abi), Stack Contracts, and Pure Windows Linkage"
date: "2026-05-19 20:40:00"
description: "As Wave evolves into a professional tool for OS kernels and systems programming,"
tags: ["wave-lang", "compiler", "Programming Blogs", "programming languages"]
pinned: false
cover: "patch-316.png"
---

# Patch #316: Systems Mastery: Introducing export(abi), Stack Contracts, and Pure Windows Linkage

As Wave evolves into a professional tool for OS kernels and systems programming, we are focused on the delicate interface where Wave code meets the rest of the world. Our latest patch introduces explicit function exports, a strict safety contract for inline assembly, and a finalized, standalone linker for Windows.

### 1. Speak to the World: `export(abi)` Syntax
Interacting with external systems often requires Wave functions to be callable by C or Assembly code. Previously, this required indirect methods. We are now introducing the `export` keyword to handle this natively.

*   **Explicit ABI**: You can now define the exact calling convention for an exported function (e.g., `export(c) fun hello() {}`).
*   **Symbol Redirection**: Need to define a specific entry point for an OS or UEFI application? Use `export(c, "_start")` or `export(c, "efi_main")` to assign precise global symbol names.
*   **Block Support**: Similar to `extern`, you can group multiple functions under an `export(c) { ... }` block for cleaner organization.

### 2. Finalized Windows Pipeline: No GCC Required
We have officially completed the "unzip and run" experience for Windows developers.
*   **Native LLD Linking**: `wavec` no longer searches for a system-wide GCC or MinGW installation. It now natively uses the bundled `ld.lld` to link Windows GNU targets.
*   **Automated Windows Runtime**: The toolchain now handles the linking of essential libraries (`kernel32`, `user32`, `msvcrt`) and the MinGW C-runtime (`crt2.o`) automatically. Your Windows builds are now faster, more predictable, and completely standalone.

### 3. Safety at the Edge: Inline ASM Stack Contracts
Inline assembly is dangerous because the compiler often doesn't know what happens inside the "black box" of your ASM code. To prevent catastrophic stack corruption, we’ve implemented a world-class **Stack Analysis Engine**.

*   **Static Analysis**: The compiler now inspects your assembly for instructions that modify the stack pointer (`push`, `pop`, `sub rsp`, etc.) or perform jumps (`jmp`, `ret`).
*   **New Clobber Contracts**: We’ve introduced special pseudo-clobbers:
  *   `clobber("stack")`: Explicitly acknowledge that your code modifies the stack.
  *   `clobber("noreturn")`: Inform the compiler that the code will never return (e.g., a kernel panic or context switch), allowing LLVM to optimize for unreachable paths.
*   **Enforcement**: If the compiler detects stack mutation without the proper clobber declaration, it will trigger a compile error immediately. This is a game-changer for kernel stability.

### 4. Hardened Freestanding Targets
When building for freestanding environments (`--freestanding`), safety is paramount.
*   **Safe Interrupts**: All functions now automatically receive the `noredzone` attribute, preventing the stack from being corrupted during asynchronous interrupts.
*   **Lean Code**: Functions are marked `nounwind`, ensuring no hidden exception-handling code is generated, which is critical for minimal kernel environments.

### 5. Parser and Frontend Polishing
*   **Robust Assignment**: We’ve fixed a subtle bug in how `deref` assignments were handled, ensuring that `deref ptr = x` is correctly lowered into an explicit assignment target for LLVM.
*   **Refined FFI Logic**: We’ve unified the logic for `extern` and `export` headers into a generalized `parse_ffi_header`, making the frontend more maintainable and consistent.

### Conclusion
By adding native exports and rigid stack pointer checking, Wave is providing the tools that systems engineers need to build reliable, high-performance software at the lowest levels of the machine. Whether you're writing a Windows driver or a custom microkernel, Wave now offers the precision and safety you require.

Try out the new `export` syntax and see the stack analysis in action today!

### Link

*   [Pull request](https://github.com/wavefnd/Wave/pull/315)
    
*   [GitHub](https://github.com/wavefnd/Wave)
    
*   [Community](https://discord.gg/3nev5nHqq9)
