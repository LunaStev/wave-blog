---
title: "Patch #314: Portability Unleashed: Standalone Toolchains and Automated LLVM Bundling"
date: "2026-05-15 21:35:00"
description: "One of the biggest hurdles in adopting a new systems language is setting up the environment—especially when it involves complex dependencies like LLVM."
tags: ["wave-lang", "compiler", "Programming Blogs", "programming languages"]
pinned: false
cover: "patch-314.png"
---

# Patch #314: Portability Unleashed: Standalone Toolchains and Automated LLVM Bundling

One of the biggest hurdles in adopting a new systems language is setting up the environment—especially when it involves complex dependencies like LLVM. Today, we are taking a massive step toward making Wave "zero-config" by introducing a comprehensive **LLVM bundling and cross-platform packaging system**.

With this update, Wave moves from being a compiler that *uses* LLVM to a complete, self-contained toolchain that *carries* its own power.

### 1. The Standalone Compiler: Extract and Run
We have overhauled our packaging process (`x.py package`). When you download a Wave release in the future, it will include not just the `wavec` binary, but a full suite of essential LLVM tools:
*   **Core Tools**: `llc` (compiler), `llvm-as` (assembler), `llvm-mc` (machine code).
*   **Linkers**: `ld.lld` (Linux/RISC-V), `ld64.lld` (macOS), and `lld-link` (Windows).
*   **Runtime Libraries**: All necessary dynamic libraries (e.g., `libLLVM.dylib`, `liblld.so`).

This means the compiler is now truly portable. You can extract it to any directory, and it will work immediately without searching for system-wide LLVM installations.

### 2. Intelligent Rpath Patching: Precision Portability
To make bundled libraries work regardless of where the compiler is located, we’ve implemented automated binary patching:
*   **On macOS**: We use `install_name_tool` and `otool` to rewrite library paths to `@executable_path/llvm/lib`. We also apply ad-hoc **codesigning** to ensure the patched binaries remain executable on modern macOS security policies.
*   **On Linux**: We use `patchelf` to set the RPATH to `$ORIGIN/llvm/lib`.
*   **On Windows**: The system automatically bundles the correct set of MinGW and LLVM DLLs to ensure a seamless experience on x64 systems.

### 3. A Modernized Compilation Pipeline
`wavec` has been updated to act as a true driver for its internal components. Instead of relying on a system-wide `clang` command, the internal pipeline now dispatches tasks directly to the bundled LLVM tools.

*   **Dynamic Linker Selection**: The compiler now intelligently selects the correct linker based on your target OS (e.g., `ld64.lld` for macOS).
*   **Flexible Resolution**: While it prefers bundled tools, it can still resolve LLVM from environment variables like `WAVE_LLVM_BIN` or `LLVM_SYS_211_PREFIX` for power users and developers.
*   **Expanded Formats**: Generating Bitcode, Assembly, or Object files is now handled natively through this new internal execution flow.

### 4. Smart Build Validation
To prevent "it works on my machine" bugs, our build script (`x.py`) now performs **Architecture Verification**. Before starting a build, it uses tools like `lipo` to verify that your host's LLVM dynamic libraries actually support the requested target architecture (e.g., ensuring an x86_64 host has the libraries to build an ARM64 binary).

### 5. UI and Scripting Enhancements
*   **Adaptive Terminal Colors**: Our `colorex` utility is now smarter. It respects the standard `NO_COLOR` and `CLICOLOR=0` environment variables. For Windows users, we’ve added support for legacy ANSI modes like ConEmu and Ansicon.
*   **Leaner Build Script**: `x.py` is now more robust. It no longer requires the `toml` Python package (using the built-in `tomllib` in Python 3.11+) and provides helpful advice if `tkinter` is missing for the GUI build tool.

### Conclusion
By bundling the entire toolchain and automating the complex world of RPATHs and library dependencies, we are making Wave accessible to everyone, on every platform. This update transforms Wave from a project you build into a product you use.

Download the latest version, unzip it, and start coding—the machine is now entirely in your hands!


### Link

*   [Pull request](https://github.com/wavefnd/Wave/pull/314)
    
*   [GitHub](https://github.com/wavefnd/Wave)
    
*   [Community](https://discord.gg/3nev5nHqq9)
