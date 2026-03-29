---
title: "Wave Language Performance Benchmark: Comparison with C and Rust"
date: "2025-07-10 07:23:49"
description: "Wave is not aiming to be a "C replacement" like Zig, but it is an independent low-level language distinct from C. It has been under active development for about six months now.
Currently in its pre-beta phase, Wave still has several bugs and limitati..."
tags: []
cover: "https://cdn.hashnode.com/res/hashnode/image/upload/v1754271443053/c5b61455-f485-4500-95ab-902e888f6c5a.webp"
---

# Wave Language Performance Benchmark: Comparison with C and Rust

Wave is not aiming to be a "C replacement" like Zig, but it is an independent low-level language distinct from C. It has been under active development for about six months now.

Currently in its pre-beta phase, Wave still has several bugs and limitations—but that also means there's significant room for improvement. The potential is definitely there.

According to the roadmap, the frontend of Wave will be completed during the pre-beta stage. In the next phase, alpha, development will begin on Wave’s custom compiler toolchain called Whale, with the goal of moving away from LLVM. The current plan is for Whale to fully replace LLVM and become a highly optimized and independent compiler toolchain tailored specifically for Wave.

However, Wave also faces some clear challenges:

* **Lack of ecosystem**: While the concept of Wave has been around for over a year, actual development only began six months ago. As a result, there is no standard library, and there are practically no real-world programs built with it. While algorithmic code is possible, practical application-level development is not. As of version `v0.1.2-pre-beta`, even basic input functions like `input()` are not yet implemented.
    
* **Lack of contributors**: This is a common issue with all new programming languages. In the very early stages, it's normal to have zero contributors. Often, a single developer drives the entire project based on their own philosophy. That’s just how it is. Compared to existing utility tools, new programming languages attract attention much more slowly.
    

Wave is a compiled, low-level language and shouldn’t be compared to Python or JavaScript. It’s not in the same category, and Wave isn’t trying to compete with them either. If we had to choose competitors, **C and Rust** would be the most appropriate comparisons.

As mentioned earlier, Wave is still in its early stages, so it’s only natural that it’s significantly slower than both C and Rust. However, running benchmarks and comparing results is a meaningful exercise—it provides motivation and insight into potential optimizations.

---

![benchmark](https://cdn.hashnode.com/res/hashnode/image/upload/v1754271441312/030dd3ae-2e77-4c3d-8659-e87026711759.png align="left")

The graph above shows a performance comparison between Wave, C, and Rust. The benchmark measures how long it takes to run a simple string length function **100 million times**.

All three languages were tested using **AOT (ahead-of-time) compilation**. Note that **Wave does not and will not support JIT**; it will be AOT-only by design.

Here are the source codes used for each language:

```plaintext
fun len(s: str) -> i32 {
    var count: i32 = 0;
    while (s[count] != 0) {
        count = count + 1;
    }
    return count;
}

fun main() {
    var message: str = "hello, world!";
    var result: i32 = 0;
    var i: i32 = 0;
    while (i < 100000000) {
        result = result + len(message);
        i = i + 1;
    }
    println("Wave Result: {}", result);
}
```

Wave does not yet have a time-related library, so execution time was measured using the Linux `time` command. Please keep that in mind when interpreting the results.

---

```c
#include <stdio.h>
#include <time.h>

int len(const char* s) {
    int count = 0;
    while (s[count] != 0) {
        count++;
    }
    return count;
}

int main() {
    const char* message = "hello, world!";
    int result = 0;

    clock_t start = clock();
    for (int i = 0; i < 100000000; ++i) {
        result += len(message);
    }
    clock_t end = clock();

    double elapsed = (double)(end - start) / CLOCKS_PER_SEC;
    printf("C Result: %d\n", result);
    printf("C Time: %.3f seconds\n", elapsed);
    return 0;
}
```

C is a time-tested language that has been the foundation of many systems and is deeply optimized. It is, without question, one of the most respected and traditional languages in software development.

---

```rust
use std::time::Instant;
use std::hint::black_box;

fn len(s: &str) -> i32 {
    let bytes = s.as_bytes();
    let mut count: i32 = 0;
    while count < bytes.len() as i32 && bytes[count as usize] != 0 {
        count += 1;
    }
    count
}

fn main() {
    let message = black_box("hello, world!");
    let mut result = 0;

    let start = Instant::now();
    for _ in 0..100_000_000 {
        result += len(message);
    }
    let duration = start.elapsed();

    println!("Rust Result: {}", result);
    println!("Rust Time: {:.3?}", duration);
}
```

Rust is the language used to implement Wave itself, so of course it's included in the benchmark. Although Rust has only been around for about a decade, it has grown rapidly and now has a thriving ecosystem. While it hasn’t reached the level of C yet, it is without a doubt one of the most promising modern systems languages.

---

Some might look at this benchmark and say, "Wow, Wave is incredibly slow!"—and yes, it is slow right now. But don’t forget: Wave is only **six months into development**. Rust reached its first stable release **after 10 years** of development.

**Wave is about 5× slower than C, and about 4.2× slower than Rust.** However, considering that Wave is still a very young AOT-compiled language, this level of performance is already quite impressive. Reaching Rust-level performance won't happen overnight, but the **potential is clearly there**.

---

Site: https://wave-lang.dev/

GitHub: https://github.com/LunaStev/Wave

Discord: https://discord.com/invite/[3nev5nHqq9](https://discord.gg/3nev5nHqq9)