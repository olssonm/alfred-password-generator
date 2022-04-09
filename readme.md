# Alfred password generator

Simple password generator to quickly get a randomly generated secure password to your clipboard.

<img width="670" alt="Aflred password generator" src="https://user-images.githubusercontent.com/907114/162584393-65357099-d787-4170-978f-c719fd945fbb.png">

## Installation

Use NPM:

`npm install --global alfred-pwgen`

*Installing via NPM is the preferred method, you can however also download the `alfred-password-generator.alfredworkflow`found under [releases](https://github.com/olssonm/alfred-password-generator/releases).*

## Usage

Type `pw` to quickly generate a selection of passwords, if needed you may also supply the password length, for example `pw 8`. 

Select the password you want (with the arrow keys + enter, or cmd+1, cmd+2 etc.) and it will be copied to your clipboard.

4 types of passwords are always presented, letters+numbers+symbols, letters+numbers, only letters and words.

## Settings

There are two workflow settings that you can adjust, `defaultLength` (default: 20) and `words` (default 4). `defaultLength` sets the password length by simply typing `pw`, and `words` how many words are used to build word-based passwords.

You can change these defaults by selecting the workflow in Alfred and selecting "Configure workflow and variables".

## Entropy

In the output next by the generated password symbols are displayed for the estimated password entropy (in bits), they are:

`◻◻◻◻` less than 26  
`◼◻◻◻` 26-35  
`◼◼◻◻` 36-59  
`◼◼◼◻` 60-127  
`◼◼◼◼` 128 or more

The default length of 20 should always output a password of an entropy of 128 or more.

## Password technique and security

Random numbers to generate the password uses the [node crypto library](https://nodejs.org/api/crypto.html), which in turn relies on the [Javascript Crypto-APIs](https://developer.mozilla.org/en-US/docs/Web/API/Crypto). This is much preferred over the traditional `Math.random()`-methods which are **not** cryptographically secure (i.e. do not use password generators that us `Math.random()`).

The words are selected from the Word-list available on UNIX-systems at `/usr/share/dict/words`, where all words between 3 and 6 characters in length are selected (~34000 words.)

## Inspiration and credits

This workflow is inspired by the great [pwgen-workflow](https://github.com/deanishe/alfred-pwgen) of which I have been a heavy user of for years, but sadly hasn't survived the port to macOS Monterey. This workflow focuses on the most common tasks however.

Uses [alfy](https://github.com/sindresorhus/alfy) by Sindre Sorhus.

&copy; 2022 – [Marcus Olsson](https://marcusolsson.me)
