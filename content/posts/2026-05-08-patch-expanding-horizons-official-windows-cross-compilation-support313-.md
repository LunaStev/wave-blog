---
title: "Patch #313: Expanding Horizons: Official Windows Cross-Compilation Support"
date: "2026-05-08 18:45:00"
description: "Following our recent expansion into RISC-V and freestanding environments, we are taking another major leap in platform support."
tags: ["wave-lang", "compiler", "Programming Blogs", "programming languages"]
pinned: false
cover: "patch-313.png"
---

# Patch #313: Expanding Horizons: Official Windows Cross-Compilation Support

Following our recent expansion into RISC-V and freestanding environments, we are taking another major leap in platform support. We are excited to announce that Wave now officially supports cross-compilation for **Windows (`x86_64-pc-windows-gnu`)** from Linux hosts.

By integrating MinGW, Wine, and native Windows LLVM into our build pipeline, we’ve made it possible to develop and package high-performance Windows applications using the Wave toolchain.

### 1. Seamless Windows Build Pipeline (`x.py`)
Our universal build script, `x.py`, has been heavily upgraded to handle the complexities of the Windows ecosystem.
*   **MinGW Integration**: The toolchain now automatically configures itself for `x86_64-w64-mingw32-gcc` and `g++`.
*   **Standalone Binaries**: Windows executables often depend on specific runtime libraries. Our new packaging step automatically resolves and bundles essential MinGW DLLs (like `libgcc_s_seh-1.dll`, `libstdc++-6.dll`, and `libwinpthread-1.dll`) alongside your executable. This ensures your Wave programs are truly portable and "just work" on any Windows machine.
*   **Triple Targeting**: You can now build for Windows with a simple command: `x.py build x86_64-pc-windows-gnu`.

### 2. Optimized LLVM Backend for Windows
Building a compiler for Windows requires careful handling of backend dependencies and ABI (Application Binary Interface) rules:
*   **Target Scoping**: To speed up compilation and reduce binary bloat, we’ve introduced Cargo feature flags for LLVM. When building for Windows, the compiler now focuses exclusively on `llvm-target-x86`, avoiding the overhead of irrelevant architectures.
*   **Custom Windows ABI**: We implemented specialized classification rules for the **Windows x64 Calling Convention**. This ensures that complex structs (SRet/ByVal) and integer extensions are handled exactly as Windows expects, providing 100% compatibility with Windows C libraries.
*   **Linking Logic**: The backend now intelligently skips Linux-specific library injections (like `-lc` and `-lm`) when targeting Windows, preventing common linking errors.

### 3. Native Portability: `#[target]` Attributes
Our conditional compilation system is now Windows-aware. You can use the `#[target(os="windows")]` attribute to write code that only runs on Windows systems. This allows you to handle platform-specific tasks—like interacting with the Win32 API—without affecting your Linux or macOS builds.

### 4. Moving Up the Tiers
As a result of this robust implementation, we have officially promoted **Windows (MinGW/GNU)** from Tier 4 (Unofficial) to **Tier 3 (Experimental)** in our platform support policy. While it is still in the experimental stage, it is now a guaranteed part of our build and packaging pipeline.

### Conclusion
With Windows support, Wave is becoming a truly universal systems language. Whether you are building high-performance Linux servers, macOS utilities, RISC-V embedded firmware, or now native Windows applications, Wave provides a consistent and powerful experience across all major platforms.

Try building your first `.exe` with Wave today!


### Link

*   [Pull request](https://github.com/wavefnd/Wave/pull/313)
    
*   [GitHub](https://github.com/wavefnd/Wave)
    
*   [Community](https://discord.gg/3nev5nHqq9)
