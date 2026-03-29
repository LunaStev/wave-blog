---
title: "Patch #283: Mastering the C ABI: Robust FFI with Structs and Arrays"
date: "2026-02-06 12:51:22"
description: "When a programming language talks to a C library, it must follow a strict set of rules known as the Calling Convention or ABI. Passing a single integer is simple, but what happens when you pass a 24-byte struct by value? Should it be split into three..."
tags: ["wave-lang", "Programming Blogs", "programming languages", "compiler"]
cover: "https://cdn.hashnode.com/res/hashnode/image/upload/v1770382165650/a9e61eaf-c563-4df7-b11e-2c2f5409cee5.png"
---

# Patch #283: Mastering the C ABI: Robust FFI with Structs and Arrays

When a programming language talks to a C library, it must follow a strict set of rules known as the **Calling Convention** or **ABI**. Passing a single integer is simple, but what happens when you pass a 24-byte struct by value? Should it be split into three registers? Or passed on the stack? Or perhaps via a hidden pointer?

If the compiler gets this wrong, the result is memory corruption or a crash. Today, we are excited to announce that Wave now implements **System V ABI-compliant C FFI lowering**, making our integration with external C libraries more robust than ever.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1770382131705/0739970a-c546-4927-9ddc-2907751815da.png align="center")

### 1\. The Core: ABI Lowering Logic (`abi_c.rs`)

We have introduced a sophisticated lowering engine that classifies how every Wave type should be presented to a C function. This includes:

* **SRet (Structured Return)**: When a function returns a large struct that doesn't fit in registers, the ABI requires passing a "hidden" first parameter where the result will be stored. Wave now handles this automatically.
    
* **ByVal (Pass-by-Value)**: For structs passed by value, we now apply the correct LLVM `byval` attributes and ensure proper memory alignment as dictated by the ABI.
    
* **Split & HFA (Homogeneous Floating-point Aggregates)**: Small structs containing multiple floats or vectors are now "split" across multiple floating-point registers, matching the high-performance path used by C compilers.
    
* **Integer Bit-Packing**: Tiny structs are now packed into single integer registers (`pack_agg_to_int`) to minimize memory access and maximize speed.
    

### 2\. Hardware-Aware Compilation

To calculate sizes and alignments with 100% accuracy, the backend now utilizes LLVM’s `TargetData` and `TargetMachine`. This means the compiler is now fully aware of the specific hardware it is targeting, ensuring that a struct's layout in Wave exactly matches its layout in C on that same machine.

### 3\. Transparent Integration

The best part of this update is that it’s nearly invisible to the user. We’ve refactored `gen_function_call` to automatically apply these transformations. When you call an `extern` C function, the compiler:

1. Checks the ABI requirements for each argument.
    
2. Performs necessary bit-casting or pointer loading.
    
3. Transforms the function call to match the "lowered" signature.
    

This metadata is propagated throughout the entire codegen pipeline via the new `ExternCInfo` structure, ensuring consistency across all expressions and statements.

### 4\. Why This Matters

Until now, FFI in Wave was mostly limited to simple types and pointers. With this update, the doors are wide open. You can now:

* Interface with graphics libraries that pass `Vector` or `Matrix` structs by value.
    
* Call complex system APIs that return large configuration structures.
    
* Use standard C headers without worrying about subtle memory layout mismatches.
    

### Conclusion

By implementing System V ABI lowering, Wave has taken a massive step toward becoming a truly professional systems programming language. We’ve handled the "hidden complexity" of register splitting and stack alignment so you can focus on building your application.

Wave is now more compatible, more stable, and ready to leverage the full power of the C ecosystem!

### Link

* [Pull request](https://github.com/wavefnd/Wave/pull/283)
    
* [GitHub](https://github.com/wavefnd/Wave)
    
* [Community](https://discord.gg/3nev5nHqq9)