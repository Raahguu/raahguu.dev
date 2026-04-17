---
title: Bytemancy 3
tags:
  - Misc
  - Net
excerpt: Can you conjure the right bytes?
---
## Description

Can you conjure the right bytes?

This challenge also gave a compiled binary which they refer to as a `spellbook`. This challenge is by `LT 'syreal' Jones`.

## Solution

When `nc`ing in you get:

```bash
$ nc green-hill.picoctf.net 60040
⊹──────[ BYTEMANCY-3 ]──────⊹
☍⟐☉⟊☽☈⟁⧋⟡☍⟐☉⟊☽☈⟁⧋⟡☍⟐☉⟊☽☈⟁⧋⟡☍⟐

I will name four procedures hidden inside spellbook.
Each round, send me their *raw* 4-byte addresses in little-endian form. 3 correct answers unlock the flag.

☍⟐☉⟊☽☈⟁⧋⟡☍⟐☉⟊☽☈⟁⧋⟡☍⟐☉⟊☽☈⟁⧋⟡☍⟐
⊹─────────────⟡─────────────⊹
[1/3] Send the 4-byte little-endian address for procedure 'glyph_conflux'.
==>
```


