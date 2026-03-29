---
title: "Patch #278: Bridging Ecosystems: Introducing C FFI and extern Support"
date: "2026-02-03 11:36:11"
description: "A modern systems programming language cannot exist in isolation. To be truly powerful, it must be able to leverage the decades of battle-tested libraries written in C. Today, we are excited to announce that Wave now officially supports C FFI (Foreign..."
tags: ["wave-lang", "Programming Blogs", "programming languages", "compiler"]
cover: "https://cdn.hashnode.com/res/hashnode/image/upload/v1770118384955/b934ae07-ed98-4d85-878d-358dd1033e38.png"
---

# Patch #278: Bridging Ecosystems: Introducing C FFI and extern Support

A modern systems programming language cannot exist in isolation. To be truly powerful, it must be able to leverage the decades of battle-tested libraries written in C. Today, we are excited to announce that Wave now officially supports **C FFI (Foreign Function Interface)** via the new `extern` keyword.

### 1\. The Power of `extern`

The `extern` keyword allows Wave to declare functions that are defined in external libraries. We have designed the syntax to be both flexible and familiar.

* **Single-line Declarations**: Quickly map a single C function.
    
    ```kotlin
    extern(c) fun puts(s: ptr<i8>) -> i32;
    ```
    
* **Block Syntax**: Group multiple external declarations together for better organization.
    
    ```kotlin
    extern(c) {
        fun malloc(size: i64) -> ptr<byte>;
        fun free(p: ptr<byte>);
    }
    ```
    
* **Symbol Redirection**: Sometimes the name you want to use in Wave differs from the actual symbol name in the library. We've got you covered:
    
    ```kotlin
    extern(c, "printf") fun print_formatted(fmt: ptr<i8>) -> i32;
    ```
    
* **Flexible Parameters**: You can use named parameters for clarity or just specify the types for brevity.
    

### 2\. Under the Hood: LLVM & C ABI

To make this work, our LLVM backend now correctly maps Wave signatures to the **Standard C ABI**. When you declare an `extern` function, the compiler generates an external declaration in the LLVM module, allowing the linker (Clang) to resolve these symbols at build time against libraries like `libc`.

### 3\. A Massive Expansion of `std/libc`

Along with the feature itself, we are shipping a comprehensive set of pre-written bindings. You don't have to write these yourself; they are ready to use in the standard library:

* `stdio`: `puts`, `getchar`, `putchar`.
    
* `stdlib`: `malloc`, `free`, `exit`, `atoi`.
    
* `string`: `strlen`, `strcmp`, `memcpy`.
    
* `unistd`: `read`, `write`, `fork`, `execve`.
    
* **Networking**: A full suite of `socket`, `netinet`, `arpa`, and `poll` functions.
    
* **System**: `time`, `errno`, and more.
    

This means you can now write a Wave program that allocates memory via `malloc`, performs complex string manipulation via `string.h`, and creates high-performance network services using standard POSIX functions.

### 4\. Verified and Tested

We’ve added new verification tests (`test/test77.wave`) that demonstrate calling `puts` from the C standard library to print directly to the console. This confirms that the integration between Wave's string pointers and C's `char*` is seamless and stable.

### Why This Matters

By supporting C FFI, Wave is no longer limited by its own standard library. If a library exists in C—whether it's OpenSSL, SQLite, or a graphics library—you can now use it in Wave. This opens the door to building production-grade applications, database drivers, and complex system tools.

Wave is growing fast, and with FFI, the entire C world is now your playground.

### Link

* [Pull request](https://github.com/wavefnd/Wave/pull/278)
    
* [GitHub](https://github.com/wavefnd/Wave)
    
* [Community](https://discord.gg/3nev5nHqq9)