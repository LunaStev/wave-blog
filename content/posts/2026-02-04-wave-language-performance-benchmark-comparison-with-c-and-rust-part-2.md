---
title: "Wave Language Performance Benchmark: Comparison with C and Rust (Part 2)"
date: "2026-02-04 14:56:02"
description: "6 months ago, I benchmarked Wave against C and Rust in this post.
Today, 6 months later, I ran the benchmark once again using a significantly more mature version of Wave.
The Wave version used in this"
tags: ["wave-lang", "compiler", "Benchmark", "Programming Blogs", "programming languages"]
cover: "https://cdn.hashnode.com/res/hashnode/image/upload/v1770216830294/afd2fff9-b5bc-4aac-968a-9eebbc027645.png"
---

# Wave Language Performance Benchmark: Comparison with C and Rust (Part 2)

6 months ago, I benchmarked Wave against C and Rust in [this post](https://blog.wave-lang.dev/wave-language-performance-benchmark-comparison-with-c-and-rust).

Today, 6 months later, I ran the benchmark once again using a significantly more mature version of Wave.

The Wave version used in this benchmark is one of the in-development `v0.1.7-pre-beta` builds, and is valid for commits at or after [this commit](https://github.com/wavefnd/Wave/tree/0a5a208e4fc2c68be40617cf300f24de48a4ed9c).

All source code used for this benchmark is publicly available [here](https://github.com/LunaStev/benchmark).

During benchmarking, Wave, Rust, and C were all tested under the assumption that they use an LLVM backend.

Checklist:

* \[x\] `rdtsc` / `rdtscp` used
    
* \[x\] CPU core pinned (`taskset`)
    
* \[x\] Unified compiler toolchain (clang + LLVM)
    
* \[x\] Inline asm to prevent loop elimination
    
* \[x\] Result validation (identical results)
    

---

### Absolute Metric

![relative](https://velog.velcdn.com/images/lunastev/post/edd2909e-46a1-4a16-82c6-c3994b9ee788/image.png align="left")

This graph shows how many CPU cycles were actually consumed.

* Y-axis: CPU Cycles (log scale)
    
* X-axis: Optimization level (O0 ~ O3)
    

#### Key observations

* **O0**
    
    * Rust ≫ Wave &gt; C  
        → As expected: without optimization, Rust is the heaviest, Wave is slower than C but significantly lighter than Rust.
        
* **O1 and above**
    
    * C drops almost to the floor (≈ 1e8)
        
    * Wave is about 6× slower than C
        
    * Rust is over 20× slower than C
        

This graph demonstrates how effectively compiler optimizations are applied.

---

### Relative Metric

![absolute](https://velog.velcdn.com/images/lunastev/post/0aed8f47-7372-43b8-abb2-d4c49c6a7c72/image.png align="left")

The relative metric normalizes C to 1.0 and shows how many times slower the other languages are compared to C.

That is:

```kotlin
Wave / C = Wave_cycles ÷ C_cycles
Rust / C = Rust_cycles ÷ C_cycles
```

---

### Wave / C

* **O0:** ~1.3
    
    * Wave is about 30% slower than C
        
* **O1–O3:** 5 ~ 7
    
    * Even after optimization, Wave is 5–7× slower than C
        

From these numbers, we can see that Wave is quite competitive as a language.

---

### Rust / C

* **O0:** ~4
    
* **O1–O3:** 17 ~ 23
    

This can be interpreted as the cost Rust pays for safety and abstraction.

---

### Conclusion

Summarizing the benchmark results:

* Wave is not faster than C.
    
* However, it consistently uses fewer CPU cycles than Rust.
    
* This difference becomes especially clear after O1-level optimizations.
    

This shows that Wave maintains a C-like execution model while introducing almost no unnecessary abstraction overhead during low-level code generation.

Wave is still a pre-beta language under active development.  
It does not yet have its own optimization pipeline, nor advanced features such as LTO or PGO.  
Despite that, achieving this level of performance is a strong indication that the language design and compiler architecture are heading in the right direction.

---

### What This Result Means

The core point of this benchmark is not simply  
“Which is faster: C, Rust, or Wave?”

Each language has different goals:

* C prioritizes maximum performance and minimal abstraction.
    
* Rust prioritizes memory safety and a powerful type system.
    
* Wave prioritizes predictable low-level control and a simple execution model.
    

These results show that Wave generates very straightforward LLVM IR without additional runtime costs, aligning well with its design goals.

In other words, Wave demonstrates—using real numbers—that it occupies a middle ground:  
it does not oversimplify the language purely for performance,  
nor does it heavily sacrifice performance for safety.

---

### Why Did These Results Occur?

Wave using fewer cycles than Rust in this test does not mean that Rust is a “slow language.”  
Rather, it reflects Wave’s deliberate choice of a simpler execution model.

Rust provides numerous compile-time guarantees and runtime concepts to ensure safety and abstraction.  
These guarantees are highly valuable in real-world applications,  
but in extremely simple low-level loops, they can manifest as overhead.

Wave, on the other hand, is designed around explicit types,  
a simple memory model,  
and minimal implicit behavior.  
As a result, LLVM can optimize the generated IR more aggressively.

This difference becomes especially evident after O1-level optimizations.

---

### Looking Forward

This benchmark does not represent Wave’s “final performance.”  
It is closer to a snapshot of where Wave currently stands.

Future improvements planned for Wave include:

* Custom optimization passes
    
* Introduction of the Whale backend
    
* More advanced inlining and loop optimizations
    
* Stabilization of the standard library
    

As these improvements are introduced,  
Wave’s performance characteristics are likely to move even closer to C.

Going forward, I plan to repeat this benchmark periodically  
and continue documenting how Wave evolves over time.