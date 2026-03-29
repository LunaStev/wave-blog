---
title: "99 Bottles of Beer in Wave"
date: "2025-10-01 06:29:13"
description: "One of the most classic programming exercises in the world is the “99 Bottles of Beer“ song.
It’s a silly repetitive tune, but in programming, it has become something more: a traditional way to demonstrate loops, conditions, and string formatting acr..."
tags: ["99-bottle-of-beer", "wave", "Programming Blogs", "programming", "compiler", "languages", "wave-lang"]
cover: "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/UErWoQEoMrc/upload/dde8a8b45f6a5c7af97b4ca3ec99e9a3.jpeg"
---

# 99 Bottles of Beer in Wave

One of the most classic programming exercises in the world is the *“99 Bottles of Beer“* song.

It’s a silly repetitive tune, but in programming, it has become something more: a traditional way to demonstrate loops, conditions, and string formatting across different languages.

If you’ve ever visited [99-bottles-of-beer.net](http://99-bottles-of-beer.net), you’ll see this exercise implemented in over **1,500 programming languages** — from C, Java, and Python to more obscure esolangs.

Now, it’s Wave’s turn. 🚀

---

## The Wave Implementation

Here’s how the “99 Bottles of Beer“ program looks in Wave:

```kotlin
fun main() {
    var i: i32 = 99;
    
    while (i > 1) {
        println("{} bottles of beer on the wall, {} bottles of beer\nTake one down and pass it around, {} bottles of beer on the wall", i, i, i - 1);
        i = i - 1;
    }
    println("1 bottle of beer on the wall, 1 bottle of beer\nTake one down and pass it around, no more bottles of beer on the wall");
}
```

---

## Why This Matters

At first glance, this might look like just another small code snippet. But for a new programming language, it’s a symbolic milestone:

* **Loops** (`while`) are working correctly
    
* **Conditionals** and final case handling are functional
    
* **String formatting** with `{}` placeholders is supported
    
* **Type system** enforces explicit declaration (`i: i32`)
    

In other words: Wave is no longer just parsing tokens. It’s *running real logic*.

---

## What’s Next for Wave

Currently, my main focus is on **struct support** and IR (Intermediate Representation) generation.  
The parser and AST are already complete, and now it’s about lowering everything into working IR.

This “99 Bottles of Beer” example is a fun checkpoint — but the real challenge ahead is making Wave handle complex features like user-defined data structures, memory handling, and eventually moving away from LLVM into our own Whale toolchain.

---

## Final Thoughts

Every programming language has its “Hello, World!” moment.  
For Wave, this *99 Bottles of Beer* program feels like the next milestone — proof that the language can already express something playful, repetitive, and dynamic.

It may be just a silly song, but for me, it’s also a sign that Wave is steadily growing into a real language. 🌊

Stay tuned for the next updates — structs are coming soon.