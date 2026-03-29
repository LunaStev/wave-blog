---
title: "Printing Characters via BIOS Using Inline Assembly in Wave"
date: "2025-07-26 13:14:19"
description: "Wave provides a feature called inline assembly, and today we’re going to use it to directly call the BIOS. The int 0x10 interrupt is one of the most basic video output functions in real mode. By putting 0x0E into the AH register and the character you..."
tags: []
cover: "https://cdn.hashnode.com/res/hashnode/image/upload/v1754270099740/13220347-ff61-49a5-abab-447090de6849.webp"
---

# Printing Characters via BIOS Using Inline Assembly in Wave

Wave provides a feature called inline assembly, and today we’re going to use it to directly call the BIOS. The `int 0x10` interrupt is one of the most basic video output functions in real mode. By putting `0x0E` into the AH register and the character you want to output into the AL register, then calling `int 0x10`, the BIOS will display the character on the screen.

Using this method, we’ll print "Hi!", then perform a line break with CR (0x0D) and LF (0x0A), and finally print "OK".

Currently, the Wave compiler can only be built on Linux, and by default it only generates executable binaries. It does **not** directly create a `.img` disk image like a bootloader would. However, when Wave compiles, it generates a `/target` folder that contains both an LLVM IR file (`.ll`) and a Linux binary. Since we want to create BIOS code, we don’t need the Linux binary; instead, we’ll use the `temp.ll` file containing the LLVM IR code.

Wave is currently in its frontend development phase, and for testing purposes it temporarily uses LLVM. LLVM generates LLVM IR, which can then be compiled into an object file or executable for the desired target architecture using the `clang` command.

```kotlin
fun main() {
    // Print 'H' using BIOS teletype mode
    asm {
        "mov ah, 0x0e"   // AH = 0x0E → BIOS int 0x10 teletype mode
        "mov al, 0x48"   // AL = 0x48 → ASCII 'H'
        "int 0x10"       // BIOS video service call → prints 'H' and moves cursor
    }
    
    // Print 'i'
    asm {
        "mov ah, 0x0e"
        "mov al, 0x69"   // ASCII 'i'
        "int 0x10"
    }
    
    // Print '!'
    asm {
        "mov ah, 0x0e"
        "mov al, 0x21"   // ASCII '!'
        "int 0x10"
    }
    
    // Carriage Return (CR)
    asm {
        "mov ah, 0x0e"
        "mov al, 0x0D"   // CR: move cursor to beginning of line
        "int 0x10"
    }
    
    // Line Feed (LF)
    asm {
        "mov ah, 0x0e"
        "mov al, 0x0A"   // LF: move cursor down one line
        "int 0x10"
    }
    
    // Print 'O'
    asm {
        "mov ah, 0x0e"
        "mov al, 0x4F"   // ASCII 'O'
        "int 0x10"
    }

    // Print 'K'
    asm {
        "mov ah, 0x0e"
        "mov al, 0x4B"   // ASCII 'K'
        "int 0x10"
    }
}
```

Now, to run this code in a BIOS environment, we need to go through a build process. As mentioned earlier, the Wave compiler doesn’t directly create a `.img`, so we need to manually build a boot image using the `temp.ll` file.

The build steps are as follows:

1. **Generate LLVM IR (**`temp.ll`) from Wave code:
    
    ```bash
    wavec run main.wave
    ```
    
2. **Convert LLVM IR to a 16-bit object file:**
    
    ```bash
    llc -march=x86 -mattr+16bit-mode -filetype=obj target/temp.ll -o boot.o
    ```
    
3. **Link the object file into a bootloader binary:**
    
    ```bash
    ld -m elf_i386 -Ttext 0x7c00 --oformat binary boot.o -o boot.bin
    ```
    
4. **Add boot sector signature (0x55AA):**
    
    ```bash
    echo -ne '\x55\xAA' | dd of=boot.bin bs=1 seek=510 count=2 conv=notrunc
    ```
    
5. **Create the final boot image:**
    
    ```bash
    dd if=boot.bin of=os.img bs=512 count=1 conv=notrunc
    ```
    
6. **Run with QEMU:**
    
    ```bash
    qemu-system-i386 -drive format=raw,file=os.img
    ```
    

---

To automate this process, you can create a `build.sh` script:

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

Now, just run `./build.sh`, then execute:

```bash
qemu-system-i386 -drive format=raw,file=os.img
```

You’ll see `Hi!` followed by a line break and `OK` displayed in QEMU.

![qemu](https://cdn.hashnode.com/res/hashnode/image/upload/v1754270098923/ac7146d4-9c64-40a7-9e9d-ab046c875259.png align="left")

---

So far, we’ve seen how to directly call BIOS functions using inline assembly in Wave and print simple strings.

This example only used basic character output functionality, but you can also call other BIOS interrupts like `int 0x16` (keyboard input) in the same way. It’s also possible to directly access VGA memory or expand this into simple bootloader logic.

Although Wave is still in its early development stage, the ability to call BIOS via inline assembly shows that it can be used for low-level development as well. Next, I plan to experiment further with keyboard input, VGA memory output, and more fun low-level features.

---

Github: https://github.com/LunaStev/Wave

Website: https://wave-lang.dev