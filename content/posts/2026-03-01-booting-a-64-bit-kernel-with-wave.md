---
title: "Booting a 64-bit Kernel with Wave"
date: "2026-03-01 10:22:44"
description: "Multiboot2 + Long Mode + LLVM-Based Kernel Execution
Recently, code written in the Wave language successfully operated as a kernel that boots in actual 64-bit Long Mode.

Overall Structure
GRUB → Mult"
tags: ["Kernel", "operating system", "os", "wave-lang"]
cover: "https://cdn.hashnode.com/uploads/covers/688f564f07f13939f0c67146/356fc610-eb2e-4d09-ae97-68668cb9c027.png"
---

# Booting a 64-bit Kernel with Wave

### Multiboot2 + Long Mode + LLVM-Based Kernel Execution

Recently, code written in the Wave language successfully operated as a kernel that boots in actual 64-bit Long Mode.

* * *

## Overall Structure

```plaintext
GRUB → Multiboot2 → 32-bit entry
      ↓
   Page table setup
      ↓
   Enable Long Mode
      ↓
   Load 64-bit GDT
      ↓
   far jump
      ↓
   Execute k_main() written in Wave
```

* * *

## 1\. kernel.asm – Long Mode Entry Code

The core idea is transitioning directly from 32-bit state into 64-bit Long Mode.

### Multiboot2 Header

```plaintext
multiboot2_header:
    dd 0xe85250d6
    dd 0
    dd header_end - multiboot2_header
    dd -(0xe85250d6 + 0 + (header_end - multiboot2_header))
```

This is absolutely required for GRUB to recognize the kernel.

* * *

### Identity 2MB Paging

Minimal page table configuration:

```plaintext
; PML4 → PDP → PD
; 2MB identity mapping
mov dword [pd_table], 0x00000083
```

*   Present
    
*   Writable
    
*   Page Size (PS)
    

* * *

### Enabling Long Mode

```plaintext
mov ecx, 0xC0000080   ; IA32_EFER
rdmsr
or eax, 1 << 8        ; LME
wrmsr
```

After that:

```plaintext
mov eax, cr0
or eax, 1 << 31
mov cr0, eax
```

Enabling Paging = Long Mode entry condition satisfied.

* * *

### 64-bit GDT + Far Jump

```plaintext
lgdt [gdt64_ptr]
jmp 0x08:long_mode_entry
```

Without this far jump, a Triple Fault occurs.

* * *

## 2\. kernel.wave – The Actual Kernel Code

From this point forward, it is Wave code.

* * *

### Writing to VGA MMIO

```kotlin
fun mmio_write8(addr: ptr<u8>, value: u8) {
    addr[0] = value;

    asm {
        clobber("memory")
    }
}
```

### Why is `clobber("memory")` Necessary?

LLVM performs dead-store optimizations.

From the kernel’s perspective:

```c
vidmem[i] = ...
```

is I/O to a memory-mapped hardware device.

But the compiler treats it as ordinary memory.

Result:

*   Nothing appears on screen
    
*   The actual code is removed by optimization
    

Solution:

> Inform the compiler of side effects via a memory clobber.

* * *

### Screen Initialization

```kotlin
fun k_clear_screen() {
    var vidmem: ptr<u8> = 0xb8000 as ptr<u8>;
    var i: i32 = 0;

    while (i < 80 * 25 * 2) {
        mmio_write8(vidmem + i, ' ' as u8);
        i = i + 1;

        mmio_write8(vidmem + i, WHITE_TXT);
        i = i + 1;
    }
}
```

* * *

### String Output

```kotlin
fun k_printf(message: ptr<u8>, line: i32) -> i32 {
    var current_line: i32 = line;
    var msg: ptr<u8> = message;
    var vidmem: ptr<u8> = 0xb8000 as ptr<u8>;
    var i: i32 = current_line * 80 * 2;

    while (msg[0] != 0) {
        ...
    }

    return 1;
}
```

* * *

### Kernel Entry

```kotlin
fun k_main() {
    k_clear_screen();
    k_printf("Hello, world! Welcome to my kernel.", 0);

    while (true) { }
}
```

* * *

## 3\. Linker Script

```plaintext
OUTPUT_FORMAT(elf64-x86-64)
ENTRY(_start)

SECTIONS
{
    . = 1M;

    .text : {
        *(.multiboot2)
        *(.text*)
    }

    .rodata : { *(.rodata*) }
    .data   : { *(.data*) }
    .bss    : { *(.bss*) }
}
```

The 1MB offset is the traditional kernel loading location.

* * *

## 4\. Makefile Build Flow

```plaintext
Wave → kernel_wave.o
ASM  → kernel_asm.o
LD   → kernel
GRUB → ISO generation
QEMU → execution
```

```plaintext
make run
```

* * *

## Actual Result

Successfully printed output in QEMU. The Triple Fault loop has disappeared.

![screen](https://cdn.hashnode.com/uploads/covers/688f564f07f13939f0c67146/d7e99309-dd15-4d6c-a1a1-35015662115f.png align="middle")

* * *

## Meaning

The significance of this experiment is not merely that "Hello, world" was printed successfully.

What this means is that Wave has reached a position where it can develop an operating system without borrowing C.

Most languages depend on one of the following at the OS development stage:

*   A C compiler
    
*   C runtime (crt0)
    
*   libc
    
*   An existing OS environment
    

This kernel:

*   Entered 64-bit Long Mode directly
    
*   Executed in a freestanding environment
    
*   Linked without libc
    
*   Used not a single line of C code
    

Wave directly generated LLVM IR, produced object files, linked them into a kernel binary, was loaded via GRUB, and executed `k_main()` in a real 64-bit environment.

This demonstrates that Wave is not a language "built on top of C," but a system programming language capable of operating at the same layer as C.

In particular, Wave does not aim to support 32-bit environments.

It was designed with 64-bit as the assumption, and the code executed directly in that environment.

Therefore, this is not merely a demo — it means the following:

> Wave has secured the language-level foundation required to implement an operating system on a 64-bit target without C.

Of course, the kernel does not yet implement a memory manager, interrupt system, or scheduler.

But the most important gateway — executability at the hardware level — has already been passed.

This is only the beginning.

* * *

# Full Source Code

### \- kernel.asm

```asm
; =========================================
; Multiboot2 + Minimal 64bit Long Mode
; =========================================

bits 32

section .text
align 8

; -----------------------------------------
; Multiboot2 Header (must be in first 32KB)
; -----------------------------------------
multiboot2_header:
    dd 0xe85250d6
    dd 0
    dd header_end - multiboot2_header
    dd -(0xe85250d6 + 0 + (header_end - multiboot2_header))
    dw 0
    dw 0
    dd 8
header_end:

global _start
extern k_main

_start:
    cli

    ; -------------------------------------
    ; Temporary 32bit stack
    ; -------------------------------------
    mov esp, stack_top

    ; -------------------------------------
    ; Setup page tables (identity 2MB)
    ; -------------------------------------

    ; PML4[0] = pdp_table | present | writable
    mov eax, pdp_table
    or eax, 0x3
    mov [pml4_table], eax
    mov dword [pml4_table + 4], 0

    ; PDP[0] = pd_table | present | writable
    mov eax, pd_table
    or eax, 0x3
    mov [pdp_table], eax
    mov dword [pdp_table + 4], 0

    ; PD[0] = 2MB page, present | writable | PS
    mov dword [pd_table], 0x00000083
    mov dword [pd_table + 4], 0

    ; -------------------------------------
    ; Enable PAE
    ; -------------------------------------
    mov eax, cr4
    or eax, 1 << 5        ; PAE
    mov cr4, eax

    ; -------------------------------------
    ; Load CR3 with PML4
    ; -------------------------------------
    mov eax, pml4_table
    mov cr3, eax

    ; -------------------------------------
    ; Enable Long Mode (EFER.LME)
    ; -------------------------------------
    mov ecx, 0xC0000080   ; IA32_EFER
    rdmsr
    or eax, 1 << 8        ; LME
    wrmsr

    ; -------------------------------------
    ; Enable Paging
    ; -------------------------------------
    mov eax, cr0
    or eax, 1 << 31       ; PG
    mov cr0, eax

    ; -------------------------------------
    ; Load 64bit GDT
    ; -------------------------------------
    lgdt [gdt64_ptr]

    ; -------------------------------------
    ; Far jump to 64bit
    ; -------------------------------------
    jmp 0x08:long_mode_entry

; =========================================
; 64bit mode begins here
; =========================================

bits 64
long_mode_entry:

    mov rsp, stack_top
    mov rbp, 0

    call k_main

.hang:
    hlt
    jmp .hang


; =========================================
; Page Tables (4KB aligned)
; =========================================

section .bss
align 4096

pml4_table:
    resq 512

pdp_table:
    resq 512

pd_table:
    resq 512

; =========================================
; 64bit GDT
; =========================================

section .data
align 8

gdt64:
    dq 0x0000000000000000       ; null
    dq 0x00af9a000000ffff       ; 64bit code
    dq 0x00af92000000ffff       ; 64bit data
gdt64_end:

gdt64_ptr:
    dw gdt64_end - gdt64 - 1
    dq gdt64


; =========================================
; Stack
; =========================================

section .bss
align 16

stack_bottom:
    resb 16384
stack_top:
```

### \- kernel.wave

```kotlin
const WHITE_TXT: u8 = 0x07;

fun mmio_write8(addr: ptr<u8>, value: u8) {
    addr[0] = value;

    asm {
        clobber("memory")
    }
}

fun k_clear_screen() {
    var vidmem: ptr<u8> = 0xb8000 as ptr<u8>;
    var i: i32 = 0;

    while (i < 80 * 25 * 2) {
        mmio_write8(vidmem + i, ' ' as u8);
        i = i + 1;

        mmio_write8(vidmem + i, WHITE_TXT);
        i = i + 1;
    }
}

fun k_printf(message: ptr<u8>, line: i32) -> i32 {
    var current_line: i32 = line;
    var msg: ptr<u8> = message;
    var vidmem: ptr<u8> = 0xb8000 as ptr<u8>;
    var i: i32 = current_line * 80 * 2;

    while (msg[0] != 0) {

        if (msg[0] == '\n' as u8) {
            current_line = current_line + 1;
            i = current_line * 80 * 2;
            msg = msg + 1;
        } else {
            mmio_write8(vidmem + i, msg[0]);
            msg = msg + 1;
            i = i + 1;

            mmio_write8(vidmem + i, WHITE_TXT);
            i = i + 1;
        }
    }

    return 1;
}

fun k_main() {
    k_clear_screen();
    k_printf("Hello, world! Welcome to my kernel.", 0);

    while (true) { }
}
```

### \- link.ld

```ld
OUTPUT_FORMAT(elf64-x86-64)
ENTRY(_start)

SECTIONS
{
    . = 1M;

    .text : {
        *(.multiboot2)
        *(.text*)
    }

    .rodata : { *(.rodata*) }
    .data   : { *(.data*) }
    .bss    : { *(.bss*) }
}
```

### \- Makefile

```Makefile
# ===== Configuration =====

WAVEC      := wavec
NASM       := nasm
LD         := ld.lld
GRUB_MKISO := grub2-mkrescue

ARCH       := x86_64
BUILD_DIR  := build
ISO_DIR    := iso
KERNEL     := kernel
ISO_IMAGE  := waveos.iso

# ===== Files =====

ASM_SRC    := kernel.asm
WAVE_SRC   := kernel.wave
LINKER     := link.ld

ASM_OBJ    := $(BUILD_DIR)/kernel_asm.o
WAVE_OBJ   := $(BUILD_DIR)/kernel_wave.o
KERNEL_BIN := $(BUILD_DIR)/kernel

# ===== Targets =====

all: iso

# --- Wave → object (.o)
$(WAVE_OBJ): $(WAVE_SRC)
	@mkdir -p $(BUILD_DIR)
	@mkdir -p target
	$(WAVEC) build -o $(WAVE_SRC)
	@mv target/kernel.o $(WAVE_OBJ)

# --- ASM → object (.o)
$(ASM_OBJ): $(ASM_SRC)
	@mkdir -p $(BUILD_DIR)
	$(NASM) -f elf64 $(ASM_SRC) -o $(ASM_OBJ)

# --- Link kernel
$(KERNEL_BIN): $(ASM_OBJ) $(WAVE_OBJ) $(LINKER)
	$(LD) -m elf_x86_64 -T $(LINKER) -o $(KERNEL_BIN) $(ASM_OBJ) $(WAVE_OBJ)

# --- Build GRUB ISO
iso: $(KERNEL_BIN)
	@rm -rf $(ISO_DIR)
	@mkdir -p $(ISO_DIR)/boot/grub
	cp $(KERNEL_BIN) $(ISO_DIR)/boot/kernel
	printf 'set timeout=0\nset default=0\n\nmenuentry "WaveOS" {\n  multiboot2 /boot/kernel\n  boot\n}\n' > $(ISO_DIR)/boot/grub/grub.cfg
	$(GRUB_MKISO) -o $(ISO_IMAGE) $(ISO_DIR)

# --- Run in QEMU
run: iso
	qemu-system-x86_64 -cdrom $(ISO_IMAGE)

# --- Clean
clean:
	rm -rf $(BUILD_DIR) $(ISO_DIR) $(ISO_IMAGE) target

.PHONY: all iso run clean
```