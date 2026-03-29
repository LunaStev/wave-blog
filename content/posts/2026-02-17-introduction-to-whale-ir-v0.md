---
title: "Introduction to Whale IR v0"
date: "2026-02-17 13:18:46"
description: "Whale IR (WIR) is the intermediate representation used by the Whale toolchain, which powers the Wave programming language.It is designed to be:

SSA-based

Fully defined (no undefined behavior)

Faithful to the original AST at -O0

Optimization-frien..."
tags: ["toolchain", "compiler", "LLVM ", "Programming Blogs", "programming languages", "wave-lang"]
cover: "https://cdn.hashnode.com/res/hashnode/image/upload/v1771334277505/94be1859-5e2b-4f86-9aad-4edcdc7b9d48.png"
---

# Introduction to Whale IR v0

Whale IR (WIR) is the intermediate representation used by the **Whale toolchain**, which powers the Wave programming language.  
It is designed to be:

* SSA-based
    
* Fully defined (no undefined behavior)
    
* Faithful to the original AST at `-O0`
    
* Optimization-friendly starting from `-O1`
    
* Explicit in control flow, memory, and trap semantics
    

Unlike LLVM IR, Whale IR is built with **predictability and language-level correctness guarantees** as primary goals.

---

## From Wave Source to Whale IR

Consider a simple Wave function:

`add.wave`

```kotlin
fun add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

This is lowered into Whale IR:

`out.wir`

```kotlin
module {
  target "x86_64-whale-linux"
  datalayout { ptr=64, endian=little }

  fn @add(a: i32, b: i32) -> i32 {
  entry:
    %v2: ptr<i32> = alloca i32, align 4
    %v3: ptr<i32> = alloca i32, align 4
    store i32 %v0, ptr<i32> %v2, align 4
    store i32 %v1, ptr<i32> %v3, align 4
    %v4: i32 = load i32, ptr<i32> %v2, align 4
    %v5: i32 = load i32, ptr<i32> %v3, align 4
    %v6: i32 = add i32 %v4, %v5
    ret i32 %v6
  }
}
```

For comparison, the equivalent LLVM IR looks like this:

```kotlin
define i32 @add(i32 %0, i32 %1) {
entry:
  %a = alloca i32, align 4
  store i32 %0, ptr %a, align 4
  %b = alloca i32, align 4
  store i32 %1, ptr %b, align 4
  %load_a = load i32, ptr %a, align 4
  %load_b = load i32, ptr %b, align 4
  %addtmp = add i32 %load_a, %load_b
  ret i32 %addtmp
}
```

Structurally similar — but philosophically different.

---

# Core Design Principles

## 1\. SSA-Based

All values are in Static Single Assignment form.

```kotlin
%t0: i32 = add i32 %a, %b
```

Each SSA value is typed and explicitly declared.

---

## 2\. No Undefined Behavior

Whale IR eliminates undefined behavior by construction.

Examples:

* Division by zero → defined `trap`
    
* Signed overflow → defined wrap-around
    
* Shift overflow → shift amount is masked
    
* Null dereference → defined `trap`
    
* Misaligned access → defined `trap`
    

There is **no silent UB**.

This makes IR behavior predictable across targets.

---

## 3\. Explicit Trap Semantics

Whale IR does not hide exceptional behavior.

### Unconditional trap

```kotlin
trap reason="div_by_zero"
```

Terminates the block.

### Conditional trap

```kotlin
trap_if i1 %cond, reason="overflow"
```

This allows frontends to insert checks while still enabling optimizers to remove them when provably unnecessary.

---

## 4\. Checked Arithmetic as First-Class IR

Instead of encoding overflow through flags or implicit rules, Whale IR provides checked arithmetic explicitly.

```kotlin
%t: tuple<i32, i1> = sadd_chk i32 %a, %b
%res: i32 = extract tuple<i32, i1> %t, 0
%ov:  i1  = extract tuple<i32, i1> %t, 1
trap_if i1 %ov, reason="overflow"
```

This design:

* Keeps default arithmetic fast (wrap semantics)
    
* Allows safe-mode semantics at language level
    
* Enables optimizers to remove overflow checks via range analysis
    

---

## 5\. AST-Faithful at -O0

At `-O0`, Whale IR preserves:

* Unreachable blocks
    
* Dead code
    
* Structural layout
    

Example:

```kotlin
dead:
  %u0: i32 = mul i32 %x, 999
  br label %exit
```

Dead blocks may remain in the IR if they originate from the AST.

Cleanup happens at `-O1` and above.

---

## 6\. Clean and Explicit Type System

Whale IR includes:

### Scalars

* `i1 i8 i16 i32 i64 i128`
    
* `u8 u16 u32 u64 u128`
    
* `f16 f32 f64`
    

### Aggregates

* `array<T, N>`
    
* `struct{T1, T2, ...}`
    
* `tuple<T1, T2, ...}`
    

### Pointers

* `ptr<T>`
    

All instructions explicitly declare result types:

```kotlin
%v: i32 = load i32, ptr<i32> %p, align 4
```

No implicit typing.

---

## 7\. Memory Model

Memory operations are explicit:

* `alloca`
    
* `load`
    
* `store`
    
* `gep`
    
* `memcpy`
    
* `memset`
    

Whale IR defines behavior for:

* Null dereference → trap
    
* Misaligned access → trap
    

This avoids platform-dependent UB behavior.

---

# What Makes Whale IR Different?

Whale IR is not trying to be a clone of LLVM IR.

Its design emphasizes:

* Defined behavior over permissive semantics
    
* Predictability over historical compatibility
    
* Explicit trap representation
    
* Frontend-driven correctness
    
* Optimization that removes checks rather than relying on UB
    

LLVM IR treats many situations as undefined behavior to enable aggressive optimization.  
Whale IR instead encodes behavior explicitly and lets analysis remove unnecessary checks safely.

This makes Whale IR particularly suitable for:

* System-level languages with strong correctness guarantees
    
* Deterministic compilation pipelines
    
* Fully controlled toolchains (assembler, object format, linker)
    
* Future self-hosted compiler development
    

---

# Conclusion

Whale IR (WIR) is the foundation of the Whale toolchain.

It is:

* SSA-based
    
* Fully defined
    
* Trap-explicit
    
* Optimization-friendly
    
* Designed for long-term toolchain independence
    

While inspired by modern IR design principles, it intentionally avoids undefined behavior and hidden semantics.

Whale IR is not just a lowering format —  
it is the semantic backbone of the Wave ecosystem.