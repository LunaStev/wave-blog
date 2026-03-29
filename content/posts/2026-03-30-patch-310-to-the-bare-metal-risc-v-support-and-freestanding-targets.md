---
title: "Patch #310: To the Bare Metal: RISC-V Support and Freestanding Targets"
date: "2026-03-30 01:36:00"
description: "As we continue to build Wave into a versatile systems language, our goal is to support not just high-level applications, but also the "bare metal"—the layer where software meets hardware directly."
tags: ["wave-lang", "compiler", "Programming Blogs", "programming languages"]
pinned: false
cover: "patch-310.png"
---

# Patch #310: To the Bare Metal: RISC-V Support and Freestanding Targets

As we continue to build Wave into a versatile systems language, our goal is to support not just high-level applications, but also the "bare metal"—the layer where software meets hardware directly. Today’s update marks a major step in this direction with the introduction of **Freestanding RISC-V support** and a much smarter, architecture-aware testing infrastructure.

### 1. Welcome RISC-V: The Open Hardware Frontier
We are excited to announce initial support for the **RISC-V 64-bit (rv64)** architecture. RISC-V is rapidly becoming the standard for open hardware, and Wave is now equipped to target it.

*   **New Targets**: We’ve added `FreestandingRISCV64` (`riscv64-unknown-none-elf`) along with freestanding configurations for x86_64 and ARM64.
*   **RISC-V C-ABI**: We implemented specialized ABI lowering rules (including `ByVal` and `SRet` handling) to ensure that Wave can correctly interface with C libraries on RISC-V hardware.
*   **Native Inline ASM**: You can now use RISC-V specific registers (from `x0`-`x31`, `a0`-`a7`, etc.) directly in your assembly blocks. The compiler handles the register mapping, width calculations, and clobber logic specific to the RISC-V ISA.
*   **Toolchain Introspection**: Use the `print` command in the CLI to see supported RISC-V CPUs and target features.

### 2. Modernizing the Backend: Opaque Pointers
LLVM has moved away from "Typed Pointers" to a more flexible **Opaque Pointer** model. To keep Wave aligned with modern industry standards and prevent API deprecation issues, we have completed the migration to opaque pointers.

By using `context.ptr_type()` instead of specific element pointers, we’ve made our code generation for I/O functions (`printf`, `scanf`) and FFI much more robust. This change is largely invisible to the user but ensures that the Wave compiler remains compatible with the latest LLVM versions.

### 3. Smarter Testing: Architecture-Aware Test Runner
As we support more architectures (x86_64, ARM64, RISC-V) and operating systems (Linux, macOS), testing becomes more complex. You can't run a Linux-specific syscall test on macOS, and you can't run ARM-specific assembly on an Intel chip.

To solve this, we’ve overhauled our **Python test runner** with metadata support:
*   **Metadata Filtering**: You can now add `// wave-test: host-os=<os>, host-arch=<arch>` at the top of any test file.
*   **Automatic Skipping**: The runner now intelligently skips tests that aren't compatible with your current host machine, leading to cleaner and more relevant test reports.
*   **Resilient Execution**: The runner now automatically falls back to a `debug` build if the `release` binary is missing, ensuring that development workflows are never interrupted.

### 4. Code Hygiene and Cleanup
We’ve also taken the time to perform some internal housekeeping:
*   Fixed OS-specific warnings in our version-fetching logic.
*   Removed redundant functions (like `is_zero_decimal`) and legacy code paths.
*   Enhanced the verification pass for Enum resolution to catch errors earlier.

### Conclusion
With the addition of RISC-V and freestanding target support, Wave is now a viable tool for developers looking to write code for embedded systems, custom kernels, or new hardware architectures. Combined with our modernized backend and improved testing suite, the foundation of Wave is stronger than ever.

Whether you're targeting a server or a micro-controller, Wave is ready to help you wave hello to the machine!

### Link

*   [Pull request](https://github.com/wavefnd/Wave/pull/310)
    
*   [GitHub](https://github.com/wavefnd/Wave)
    
*   [Community](https://discord.gg/3nev5nHqq9)
