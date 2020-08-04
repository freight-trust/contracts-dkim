# Solidity DKIM

A Solidity library to verify [DKIM signatures](https://tools.ietf.org/html/rfc6376):

- Support `rsa-sha1` and `rsa-sha256` signature algorithms
- Implement both canonicalization algorithms (`simple`, `relaxed`)
- Support the signature schemes by Gmail, Yahoo, ProtonMail, Outlook
- Gas cost under 3 million gas

The contract receive raw email as input and return number of success verifications along with the last success domain or the last fail status (if there's no success).

## Getting Started

Clone and install dependencies

```
$ git clone https://github.com/bakaoh/solidity-dkim
$ cd solidity-dkim
$ npm install
```

