---
title: "Patch #308: Protecting Integrity and Powering Production: AI Training Ban & New Build Pipeline"
date: "2026-03-27 04:39:11"
description: "As the Wave language ecosystem grows, we are committed to two fundamental principles: protecting the creative work of our contributors and providing developers with a professional-grade toolchain. Our"
tags: []
pinned: true
cover: "https://cdn.hashnode.com/uploads/covers/688f564f07f13939f0c67146/dfdbce25-a541-49a2-ad3a-dabce8b88195.png"
---

# Patch #308: Protecting Integrity and Powering Production: AI Training Ban & New Build Pipeline

As the Wave language ecosystem grows, we are committed to two fundamental principles: protecting the creative work of our contributors and providing developers with a professional-grade toolchain. Our latest update introduces a strict AI/ML training prohibition and a complete redesign of the `wavec` CLI to support complex, real-world compilation workflows.

### 1\. Protecting Our Source: AI/ML Training Prohibition

In an era of ubiquitous data scraping, we believe it is essential to explicitly define how our source code can be used. We have implemented a project-wide policy to disallow the use of Wave’s repository for AI/ML training without prior authorization.

*   `ai.txt`: A new manifest in the repository root clearly prohibits crawling, scraping, pre-training, and fine-tuning. This includes notices in multiple languages to ensure global clarity.
    
*   **Universal Headers**: We have applied an `AI TRAINING NOTICE` header to nearly every file in the project—spanning Rust, Wave, Python, Shell scripts, and even our Dockerfiles.
    

This step ensures that Wave remains a project built by humans, for humans, protecting the intellectual property and intent of our community.

### 2\. A Professional Build Pipeline: `BuildPlan` Architecture

We have replaced the basic "run and build" logic with a sophisticated `BuildRequest` **and** `BuildPlan` **architecture**. This transforms `wavec` into a highly configurable compiler capable of handling everything from quick syntax checks to complex systems engineering.

#### **Granular Control with** `--emit`

You can now stop the compilation process at any stage and inspect the output. The new `--emit` flag supports:

*   `ast`: View the Abstract Syntax Tree.
    
*   `ir` / `bc`: Inspect LLVM Intermediate Representation or Bitcode.
    
*   `asm`: Generate assembly code for specific architectures.
    
*   `obj`: Produce object files.
    
*   `bin`: Create the final executable.
    
*   `check`: Perform rapid syntax and semantic validation (aliased as the `wavec check` command) without the overhead of code generation.
    

#### **Advanced Linking & Systems Support**

Wave is now better equipped for low-level tasks like OS development and library creation. New flags include:

*   `--freestanding`: Compile without standard entry points or libraries.
    
*   `--static` **/** `--shared`: Control how your binaries are linked.
    
*   `--linker-script` **&** `--entry`: Define custom memory layouts and entry points.
    
*   `--no-start-files`: Skip standard OS startup code.
    

### 3\. Multi-Input & Toolchain Interop

`wavec` is no longer limited to `.wave` files. By using the `--input-type` flag, you can now use the Wave toolchain to link and compile external **LLVM IR, Bitcode, or raw Assembly** files. This allows Wave to serve as a central hub for multi-language projects that utilize the LLVM/Clang ecosystem.

### 4\. Preview and Inspect

To help developers debug their build processes, we’ve added powerful introspection tools:

*   `--dry-run`: Preview the exact commands and steps the compiler would take. You can output this in a human-readable format or as **JSON** (`--error-format=json`) for integration into other tools.
    
*   **The** `print` **Command**: Query the toolchain for detailed information, such as `target-list`, `cpu-list`, `sysroot`, and specific `target-features`.
    

### 5\. Backend & CI/CD Enhancements

The LLVM backend has been refined to support specific hardware requirements:

*   **Code & Relocation Models**: Control these via `-C code-model` and `-C relocation-model` (e.g., `pic`, `static`).
    
*   **Exit Codes**: `wavec` now returns specific exit codes based on the error type (e.g., syntax vs. backend failures), making it much easier to integrate into automated CI/CD pipelines.
    

### Conclusion

With these changes, Wave takes a significant step toward becoming a professional, production-ready systems language. We are establishing a space where developers have total control over their build process and where their source code is respected and protected.

Check out the new `wavec --help` to explore the full range of new build options!

### Link

*   [Pull request](https://github.com/wavefnd/Wave/pull/308)
    
*   [GitHub](https://github.com/wavefnd/Wave)
    
*   [Community](https://discord.gg/3nev5nHqq9)
