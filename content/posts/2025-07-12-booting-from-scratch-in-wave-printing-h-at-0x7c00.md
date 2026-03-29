---
title: "Booting from Scratch in Wave: Printing ‘H’ at 0x7C00"
date: "2025-07-12 04:38:54"
description: "Wave is a language that supports inline assembly. In its current pre-beta stage, it compiles through LLVM.
So here's a thought — what if we could write a boot sector in Wave and run it using QEMU?
If this works, we might just be writing the very firs..."
tags: []
cover: "https://cdn.hashnode.com/res/hashnode/image/upload/v1754271463009/7b0a28e6-831a-459d-85d2-447b7f86e781.webp"
---

# Booting from Scratch in Wave: Printing ‘H’ at 0x7C00

Wave is a language that supports inline assembly. In its current pre-beta stage, it compiles through LLVM.
So here's a thought — what if we could write a boot sector in Wave and run it using QEMU?

If this works, we might just be writing the very first line in Wave’s low-level programming history.

Today, we’re going to attempt exactly that:
**creating a boot sector using only Wave**.

---

At the moment, Wave uses LLVM as a temporary backend.
LLVM is a general-purpose compiler toolchain used by languages like C/C++, Rust, and Zig.
However, Wave aims to eventually move away from LLVM and build its own dedicated compiler toolchain,
called **Whale** — optimized specifically for Wave and free from the limitations of LLVM.

Of course, before that can happen, Wave’s frontend needs to be fully developed.

---

In a previous post, I showed how to print “Hello World” using only Wave.
This time, we’ll take it one step further and write a boot sector, which runs below the OS level.

---

Typically, boot sectors and bootloaders are written in raw assembly.
But Wave allows inline assembly using the `asm {}` block, making it possible to implement a boot sector directly in Wave.

The basics of Wave’s inline assembly syntax are explained in my earlier post:
[Printing Hello World from Scratch in Wave](https://dev.to/lunastev/printing-hello-world-from-scratch-in-wave-4oh)

---

Here’s the Wave code we’ll be using:

```
fun main() {
    asm {
        "mov ah, 0x0e"
        "mov al, 0x48"
        "int 0x10"
    }
}
```

Before we proceed, let’s break it down a bit.

## Code Breakdown
### 1. `mov ah, 0x0e`

- Stores `0x0E` in the AH register.
- In x86 real mode, the `int 0x10` BIOS interrupt is used for video services.
- When AH = `0x0E`, it selects the "TTY character output" function.

### 2. `mov al, 0x48`

- Stores `0x48` (ASCII for `'H'`) in the AL register.
- This sets the character to be printed.

### 3. `int 0x10`

- Triggers the BIOS video interrupt.
- AH = `0x0E` → TTY mode
- AL = character to print
- BL = page number (defaults to 0)
- As a result, it prints a single `'H'` on the screen.

---

Now that the code is ready, it’s time to compile.

Currently, Wave only compiles to Linux binaries — formats like `.img` or `.exe` aren’t directly supported.
However, Wave generates a `temp.ll` file (LLVM IR) when running `wavec run main.wave`, and we can use that to produce a bootable `.img` file.

To simplify the process, I’ve written a shell script called `build.sh`:

```bash
#!/bin/bash

set -e

LL_FILE=target/temp.ll
OBJ_FILE=boot.o
BIN_FILE=boot.bin
IMG_FILE=os.img

wavec run main.wave

llc -march=x86 -mattr=+16bit-mode -filetype=obj $LL_FILE -o $OBJ_FILE

ld -m elf_i386 -Ttext 0x7c00 --oformat binary $OBJ_FILE -o $BIN_FILE

echo -ne '\x55\xAA' | dd of=$BIN_FILE bs=1 seek=510 count=2 conv=notrunc

dd if=$BIN_FILE of=$IMG_FILE bs=512 count=1 conv=notrunc

echo "[+] Image created: $IMG_FILE"
```

> Note: You’ll need the LLVM toolchain installed. I recommend using `clang 14` for compatibility with Wave.

When you run `./build.sh`, you’ll get output like this:

![command](https://cdn.hashnode.com/res/hashnode/image/upload/v1754271461390/619a3331-39af-40bb-be75-28381828b9a6.png)

The `os.img` file is now ready.

Let’s boot it using QEMU:

```bash
qemu-system-i386 -drive format=raw,file=os.img
```

You should see the character `'H'` printed to the screen like this:

![qemu](https://cdn.hashnode.com/res/hashnode/image/upload/v1754271462332/5847bd36-c88a-4f5a-b455-e7710c929d52.png)

---

Wave is still a work in progress, but this experiment shows that it's already capable of writing boot sectors through inline assembly.
As the language evolves with more features and syntax improvements, we might one day build entire OS kernels in Wave.