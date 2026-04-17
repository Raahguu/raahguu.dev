---
title: Bytemancy 2
tags:
  - Misc
  - Net
excerpt: Can you conjure the right bytes?
---
## Description
Can you conjure the right bytes?

This is a sequel to [bytemancy1](../bytemancy1), it is another challenge where it is a very simple nc, by  `LT 'syreal' Jones`


## Solution

just `nc`ing this challenge describes exactly what is required:

```bash
$ nc lonely-island.picoctf.net 64945
⊹──────[ BYTEMANCY-2 ]──────⊹
☍⟐☉⟊☽☈⟁⧋⟡☍⟐☉⟊☽☈⟁⧋⟡☍⟐☉⟊☽☈⟁⧋⟡☍⟐

Send me the HEX BYTE 0xFF 3 times, side-by-side, no space.

☍⟐☉⟊☽☈⟁⧋⟡☍⟐☉⟊☽☈⟁⧋⟡☍⟐☉⟊☽☈⟁⧋⟡☍⟐
⊹─────────────⟡─────────────⊹
==>
```

So a simple script using `pwntools` in python which enters the character `0xff` 3 times, would work.

```python
import pwn

conn = pwn.connect("lonely-island.picoctf.net", 64945)

conn.recvline()
conn.send(b"\xff" * 3 + b"\n")

conn.interactive()
```

Running this results in:
```bash
$ python3 solve.py 
[+] Opening connection to lonely-island.picoctf.net on port 64945: Done
[*] Switching to interactive mode
☍⟐☉⟊☽☈⟁⧋⟡☍⟐☉⟊☽☈⟁⧋⟡☍⟐☉⟊☽☈⟁⧋⟡☍⟐

Send me the HEX BYTE 0xFF 3 times, side-by-side, no space.

☍⟐☉⟊☽☈⟁⧋⟡☍⟐☉⟊☽☈⟁⧋⟡☍⟐☉⟊☽☈⟁⧋⟡☍⟐
⊹─────────────⟡─────────────⊹
==> picoCTF{3ff5_4_d4yz_40517c29}
[*] Got EOF while reading in interactive
$ 
[*] Interrupted
[*] Closed connection to lonely-island.picoctf.net port 64945
```

So we have the flag `picoCTF{3ff5_4_d4yz_40517c29}`.

There is a sequel to this challenge called [bytemancy3](../bytemancy3)