# Overview

Group by line the `text` returning a list of strings that each string can't pass `blockSize` characters

# Usecase

- Telegram's `sendMessage` to avoid 401 errors when sending too big messages
- Anything that can't send a big chunk of text at once