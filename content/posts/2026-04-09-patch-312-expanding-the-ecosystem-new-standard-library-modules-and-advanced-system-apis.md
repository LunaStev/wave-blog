---
title: "Patch #312: Expanding the Ecosystem: New Standard Library Modules and Advanced System APIs"
date: "2026-04-09 21:10:00"
description: "A programming language is only as powerful as its standard library."
tags: ["wave-lang", "compiler", "Programming Blogs", "programming languages"]
pinned: false
cover: "patch-312.png"
---

# Patch #312: Expanding the Ecosystem: New Standard Library Modules and Advanced System APIs

A programming language is only as powerful as its standard library. As Wave targets professional systems programming, having a rich, low-level set of tools is essential. Today’s patch marks a major expansion of the Wave standard library (`std`), introducing four new core modules, advanced memory management features, high-performance 64-bit bitwise operations, and a massive modernization of our syntax.

### 1. Welcome Four New Core Modules
We have officially added four missing system-level modules to our `std::manifest.json` and documented them in our project README:
*   **`std::io`**: Core input and output operations.
*   **`std::fs`**: Advanced file system interactions.
*   **`std::bytes`**: Utilities for raw byte buffer manipulation.
*   **`std::process`**: Process creation, management, and control.

These modules provide the foundational building blocks required to write complex CLI tools, servers, and system utilities entirely in Wave.

### 2. Advanced Memory Management (`std::mem`)
Systems programming requires total control over memory alignment and page sizes. We have significantly upgraded the `std::mem` module to support these operations safely:
*   **Aligned Allocations**: Added `mem_is_aligned`, `mem_alloc_aligned`, and `mem_free_aligned` for hardware-optimized memory layouts.
*   **Page-Level Management**: Added `mem_page_size`, `mem_alloc_pages`, and `mem_free_pages` to allocate memory at the OS page level directly.
*   **Bounds-Checked Operations**: To prevent buffer overflows, we’ve introduced safe alternatives for memory manipulation: `mem_copy_checked`, `mem_move_checked`, and `mem_set_checked`.
*   **Error Constants**: New constants like `MEM_ERR_INVALID` and `MEM_ERR_NO_SPACE` make error handling in manual memory management much more predictable.

### 3. High-Performance 64-Bit Bitwise Operations
For cryptography, networking protocols, and high-performance calculations, bit manipulation is key. The `std::math::bits` module now supports a complete set of 64-bit operations:
*   **Inspection**: `is_pow2_i64`, `popcount64` (count set bits), and `ctz64` (count trailing zeros).
*   **Logarithmic Math**: `ilog2_floor64` and `ilog2_ceil64`.
*   **Alignment**: `align_down_i64` and `align_up_i64`.
*   **Byte Swapping**: `bswap32` and `bswap64` for handling Big-Endian and Little-Endian data conversions (critical for networking).

### 4. Linux & macOS Syscall Expansion
To support advanced terminal behaviors and network behaviors, we have expanded our raw OS bindings:
*   **File System Controls**: Added standard constants like `FS_O_RDONLY` and `FS_SEEK_SET`. We also added core POSIX syscalls including `dup`, `dup2`, `pipe` (inter-process communication), and `fcntl`.
*   **Sockets & Polling**: Added support for advanced polling with `POLLIN`/`POLLOUT` and socket configurations via `getsockopt` and `SO_REUSEPORT`.
*   **Non-blocking Network**: `std::net` now supports non-blocking I/O out of the box with functions like `tcp_stream_set_nonblock` and `udp_set_nonblock`.

### 5. Modernizing Syntax: `var` to `let mut`
To align with the latest rules and best practices of the Wave language, we have performed a massive refactoring across the standard library. In previous versions, mutable variables were declared with `var`. They have now been updated to `let mut` across `std::mem`, `std::buffer`, `std::env`, `std::path`, `std::string`, and `std::time`. This ensures the standard library acts as a perfect example of idiomatic, modern Wave code.

### Conclusion
By filling out the standard library with `io`, `fs`, `bytes`, and `process` and providing the tools for page-aligned memory and non-blocking sockets, Wave is now a much more capable systems language.

Run `wavec update std` to pull these new modules into your local environment and explore the new APIs today!


### Link

*   [Pull request](https://github.com/wavefnd/Wave/pull/312)
    
*   [GitHub](https://github.com/wavefnd/Wave)
    
*   [Community](https://discord.gg/3nev5nHqq9)
