---
title: Bytemancy 1
tags:
  - Misc
  - Net
excerpt: Can you conjure the right bytes?
---
## Description
Can you conjure the right bytes?

A very simple `pwntools` challenge by `LT 'syreal' Jones`

## Solution

When you nc into this challenge it explains what you need to do:

```bash
$ nc foggy-cliff.picoctf.net 61031
⊹──────[ BYTEMANCY-1 ]──────⊹
☍⟐☉⟊☽☈⟁⧋⟡☍⟐☉⟊☽☈⟁⧋⟡☍⟐☉⟊☽☈⟁⧋⟡☍⟐

Send me ASCII DECIMAL 101 1751 times, side-by-side, no space.

☍⟐☉⟊☽☈⟁⧋⟡☍⟐☉⟊☽☈⟁⧋⟡☍⟐☉⟊☽☈⟁⧋⟡☍⟐
⊹─────────────⟡─────────────⊹
==>
```

This is very self explanatory, the ASCII character at code `101` is lowercase `e`, so we just need to write a small program which sends the letter `e` exactly 1751 times, this is easiest with `pwntools`.

```python
import pwn

conn = pwn.remote("foggy-cliff.picoctf.net", 61031)

conn.recvline()
conn.send("e" * 1751 + "\n")

conn.interactive()
```

This program will connect, to the server, input the character `e` 1751 times, then the new line character to enter the answer, before handing over control to the user

```bash
$ python3 solve.py
[+] Opening connection to foggy-cliff.picoctf.net on port 61031: Done
/home/raahguu/Desktop/Pico/bytemancy1/solve.py:7: BytesWarning: Text is not bytes; assuming ASCII, no guarantees. See https://docs.pwntools.com/#bytes
  conn.send("e" * 1751 + "\n")
[*] Switching to interactive mode
☍⟐☉⟊☽☈⟁⧋⟡☍⟐☉⟊☽☈⟁⧋⟡☍⟐☉⟊☽☈⟁⧋⟡☍⟐

Send me ASCII DECIMAL 101 1751 times, side-by-side, no space.

☍⟐☉⟊☽☈⟁⧋⟡☍⟐☉⟊☽☈⟁⧋⟡☍⟐☉⟊☽☈⟁⧋⟡☍⟐
⊹─────────────⟡─────────────⊹
==> picoCTF{h0w_m4ny_e's???_e0d51f4b}
[*] Got EOF while reading in interactive
$ 
[*] Interrupted
[*] Closed connection to foggy-cliff.picoctf.net port 61031
```

And there is the flag returned to us `picoCTF{h0w_m4ny_e's???_e0d51f4b}`

There is a sequel to this challenge, [bytemancy2](../bytemancy2)