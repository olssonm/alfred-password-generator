# Alfred password generator

Simple password generator to quickly get a randomly generated password to your clipboard.

<img width="670" alt="Screenshot 2022-04-09 at 19 13 15" src="https://user-images.githubusercontent.com/907114/162584393-65357099-d787-4170-978f-c719fd945fbb.png">

## Installation

Use NPM:

`npm install --global alfred-pw`

*Installing via NPM is the prefered method, you can however also download the alfred-pw.alfredworkflow found under releases.*

## Usage

Type `pw` to quickly generate a selection of passwords, if needed you may also supply the password length, i.e. `pw 8`. 

Select the password you want (with the arrow keys + enter, or cmd+1, cmd+2 etc.).

4 types of passwords are always presented, letters+numbers+symbols, letters+numbers, only letters and words.

## Settings

There are two workflow settings that you can adjust, `defaultLength` (default: 20) and `words` (default 4). `defaultLength` sets the password length by simply typing `pw`, and `words` how many words are used to build word-based passwords.

You can change these defaults by selecting the workflos in Alfred and selecting "Configure workflow and variables".

## Entropy

In the output next by the generated password symbols are displayed for the estimated password entropy (in bits), they are:

`◻◻◻◻` less than 26  
`◼◻◻◻` 26-35  
`◼◼◻◻` 36-59  
`◼◼◼◻` 60-127  
`◼◼◼◼` 128 or more

The defult length of 20 should always output a password of an entropy of 128 or more.

## Password technique and security

Random numbers to generate the password uses the [node crypto library](https://nodejs.org/api/crypto.html), which in turn builds on the [Javascript Crypto-APIs](https://developer.mozilla.org/en-US/docs/Web/API/Crypto). This is much prefered over the traditional `Math.random()`-methods which are **not** cryptographically secure.

The words are selected from the Word-list available on UNIX-systems at `/usr/share/dict/words`, where all words between 3 and 6 characters in length are selected (~34000 words.)

## Inspiration and credits

This workflow is inspired by the [pwgen-workflow](https://github.com/deanishe/alfred-pwgen) of which I have been a heavy user of for years, but sadly hasn't survived the port to macOS Monterey.

Uses [alfy](https://github.com/sindresorhus/alfy) by Sindre Sorhus.

## License

The MIT License (MIT). Please see License File for more information.

&copy; 2022 – [Marcus Olsson](https://marcusolsson.me)
