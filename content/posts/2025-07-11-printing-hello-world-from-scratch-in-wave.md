---
title: "Printing Hello World from Scratch in Wave"
date: "2025-07-11 09:57:43"
description: "Wave fundamentally provides no standard functions out of the box. While println() and print() do currently exist, they are temporary functions intended for testing during development and are not official. The only officially supported built-in functi..."
tags: []
cover: "https://cdn.hashnode.com/res/hashnode/image/upload/v1754271453970/3a4f35fd-8652-4f46-a6ae-d416b2e64c38.webp"
---

# Printing Hello World from Scratch in Wave

Wave fundamentally provides **no standard functions** out of the box. While `println()` and `print()` do currently exist, they are temporary functions intended for testing during development and are **not official**. The only officially supported built-in function in Wave is `import()`.

But let’s be honest—if you had to build everything from scratch with no foundation, you probably wouldn't want to use the language. Fortunately, Wave supports a **standard library**, which allows you to use pre-written library functions. However, in **bare-metal environments** where standard libraries can't be used, you must implement everything yourself, step by step.

---

## Overview

Today, we'll try printing "Hello World" in **Wave with nothing but the bare essentials**.

The Wave compiler only provides **syntactic support**—meaning it doesn't include any functional utilities like `syscall()`. Aside from `import()`, no functions are provided by default.

Wave supports **inline assembly**, written using the `asm {}` block.

Let's quickly go over the basic syntax of inline assembly in Wave.

---

## Inline Assembly Syntax

```plaintext
asm {
    "assembly instruction"     // actual assembly code line by line
    ...
    in("register") value       // input register mapping
    out("register") variable   // output register mapping
}
```

### 1\. `"..."`: Assembly Instructions

* These are raw CPU assembly instructions.
    
* One instruction per line, multiple lines allowed.
    
* Example: `"mov rax, 1"`, `"syscall"`
    

### 2\. `in("rdi") s`: Passing Input

* This means the Wave variable `s` will be loaded into the `rdi` register.
    
* On x86-64, `rdi` is the standard register for the first syscall argument.
    

> `in("register") expression` -&gt; Loads the given expression into the specified register.

### 3\. `out("rax") ret`: Receiving Output

* Syscall return values are typically stored in the `rax` register.
    
* `out("rax") ret` means: assign the value in `rax` to the Wave variable `ret`.
    

> `out("register") variable` -&gt; Reads the register's value into the specified Wave variable.

---

Now let’s implement **Hello World** from scratch.

This is only supported in Wave version `v0.1.3-pre-beta-nightly-2025-07-11` and later. The stable release is `v0.1.3-pre-beta`. Although major syntax changes are unlikely beyond this version, there may still be some minor differences. For best compatibility, it's recommended to use the `v0.1.3-pre-beta` family.

The first thing we need is a way to measure the **length of a string**.

Most programming languages use a `len()` function to calculate string length. As mentioned earlier, Wave provides **no built-in functions** other than `import()`, so we’ll implement our own `len()` function manually.

```plaintext
fun len(s: str) -> i32 {
    var count: i32 = 0;
    while (s[count] != 0) {
        count = count + 1;
    }
    return count;
}
```

This function would typically belong in the standard library and is used to measure the length of a null-terminated string.

---

```plaintext
fun println_s(s: ptr<i8>) {
    var l: i32 = len(s);
    var ret: ptr<i8>;
    asm {
        "mov rax, 1"
        "syscall"
        in("rdi") 1
        in("rsi") s
        in("rdx") l
        out("rax") ret
    }

    var nl: ptr<i8> = "\n";
    var one: i32 = 1;
    asm {
        "mov rax, 1"
        "syscall"
        in("rdi") 1
        in("rsi") nl
        in("rdx") one
        out("rax") ret
    }
}
```

Wave currently includes a temporary testing function called `println()`, but to avoid confusion, we’ll define our own version called `println_s()` here.

---

```plaintext
import("println");

fun main() {
    println_s("Hello World");
}
```

We use the `import()` function to load the `println.wave` file. If your `main.wave` file already contains the `len()` and `println_s()` functions, you won’t need to use `import()`.

---

Running this will result in:

![hello](https://cdn.hashnode.com/res/hashnode/image/upload/v1754271453141/155998f3-fa81-4f1d-bdf7-8cccc4d6fbe5.png align="left")

You’ll see the `Hello World` output printed like this.

---

Wave doesn’t have a complete standard library yet, but the potential is definitely there. By taking full advantage of the compiler’s low-level capabilities, you can already build impressive programs—even today.

---

Site: https://wave-lang.dev/

GitHub: https://github.com/LunaStev/Wave

Discord: https://discord.com/invite/[3nev5nHqq9](https://discord.gg/3nev5nHqq9)