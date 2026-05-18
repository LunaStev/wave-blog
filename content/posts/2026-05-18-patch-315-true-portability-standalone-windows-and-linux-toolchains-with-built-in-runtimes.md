---
title: "Patch #315: True Portability: Standalone Windows and Linux Toolchains with Built-in Runtimes"
date: "2026-05-18 12:20:00"
description: "Setting up a systems programming environment is notoriously difficult."
tags: ["wave-lang", "compiler", "Programming Blogs", "programming languages"]
pinned: false
cover: "patch-315.png"
---

# Patch #315: True Portability: Standalone Windows and Linux Toolchains with Built-in Runtimes

Setting up a systems programming environment is notoriously difficult. Usually, you need a host compiler (like GCC or Clang), a linker, and a variety of C runtime libraries (`crt1.o`, `libmingw32.a`, etc.) already installed on your system.

Our latest update eliminates these requirements. Wave now bundles everything it needs—runtimes, libraries, and linkers—into a single, standalone package for both Windows and Linux.

### 1. Windows: Direct Linking and DLL Auto-Resolution
Previously, linking Wave programs on Windows often relied on an external MinGW installation. We have completely rewritten this pipeline:

*   **Native Linking with `ld.lld`**: `wavec` now invokes the bundled LLVM linker (`ld.lld`) directly, removing the dependency on `gcc.exe`.
*   **Bundled MinGW Runtimes**: The packaging script now automatically discovers and bundles the essential Windows GNU runtime objects (like `crt2.o`) and import libraries (`libkernel32.a`, `libmsvcrt.a`).
*   **Recursive DLL Discovery**: Using a new `objdump`-based scanner, the toolchain now recursively identifies every non-system DLL required by the compiler and bundles them automatically. If a library depends on another library, Wave finds it and includes it.

### 2. Linux: Built-in C Runtimes (CRT)
On Linux, finding the correct "start files" (like `crt1.o`) can be a headache, especially across different distributions.

*   **Self-Compiled Runtimes**: Wave now compiles its own architecture-specific `crt1.o` using `llvm-mc` during the packaging phase.
*   **Smart Fallbacks**: If the compiler cannot find the necessary runtime files in the standard system paths, it now automatically looks inside its own bundled directory. This allows `wavec` to produce Linux binaries in "clean" environments where no development headers are installed.

### 3. Hardened Backend and RPATH Integrity
We’ve polished the internal execution engine to ensure that performance and stability are consistent across all platforms:

*   **Argument Propagation**: We fixed a bug where global flags (like optimization levels `-O`, code models, and relocation models) were not being passed consistently to the underlying `llc` and `ld.lld` tools.
*   **Linux RPATH Mastery**: To ensure that bundled libraries like `libLLVM.so` can find their own dependencies (like `libffi`), we’ve moved to using legacy `DT_RPATH` or forced RPATH patching via `patchelf`. This guarantees that the toolchain remains functional even inside minimal container environments or isolated directories.

### 4. Zero-Tolerance Architecture Validation
To ensure every release is perfect, our build script (`x.py`) now performs a strict **Architecture Audit**.

During the packaging process, the toolchain uses the `file` utility to inspect every binary, shared library, and object file. If a single file—be it a Windows `.dll` or a Linux `.so`—does not exactly match the target architecture (e.g., mixing x86_64 with ARM64), the build will strictly abort. This prevents "dirty" releases and ensures that what you download is 100% compatible with your machine.

### Conclusion
Wave is now more than just a compiler; it is a complete, portable ecosystem. Whether you are on a locked-down corporate Windows machine or a minimal Linux server, you can now "unzip and code" with the full power of LLVM at your fingertips.

Wave v0.1.9-pre-beta is reaching its final form. Stay tuned for the upcoming stable release!

### Link

*   [Pull request](https://github.com/wavefnd/Wave/pull/315)
    
*   [GitHub](https://github.com/wavefnd/Wave)
    
*   [Community](https://discord.gg/3nev5nHqq9)
