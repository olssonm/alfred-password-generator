# Alfred password generator

[![NPM version](https://img.shields.io/npm/v/alfred-pwgen?style=flat-square)](https://www.npmjs.com/package/alfred-pwgen)
[![License](https://img.shields.io/github/license/olssonm/alfred-password-generator?style=flat-square)](license)

Simple password generator to quickly get a randomly generated secure password to your clipboard.

<img width="670" alt="Alfred password generator" src="https://user-images.githubusercontent.com/907114/162584393-65357099-d787-4170-978f-c719fd945fbb.png">

## Prerequisites

Requires Node.js 14+ and the [Alfred Powerpack](https://www.alfredapp.com/powerpack/).

## Installation

Via NPM:

`npm i --global alfred-pwgen`

*Installing via [NPM](https://www.npmjs.com/package/alfred-pwgen) is the preferred method, you can however also download the `alfred-password-generator.alfredworkflow` found under [releases](https://github.com/olssonm/alfred-password-generator/releases) and add the workflow manually.*

## Usage

Type `pw` to quickly generate a selection of passwords, if needed you may also supply the password length, for example `pw 8`. 

Select the password you want (with the arrow keys + enter, or cmd+1, cmd+2 etc.) and it will be copied to your clipboard.

4 types of passwords are always presented; `letters+numbers+symbols`, `letters+numbers`, only `letters` and `words` [(xkcd-style](https://xkcd.com/936/)).

>Note, the first time you run `pw` in Alfred it may take a few seconds before a password shows up, this is due to the word-list is built and then cached for future use. 

## Settings

There are two workflow settings that you can adjust, `defaultLength` (default: 20) and `words` (default 4). `defaultLength` sets the password length by simply typing `pw`, and `words` how many words are used to build word-based passwords.

You can change these defaults by selecting the workflow in Alfred and selecting "Configure workflow and variables".

<img width="497" alt="Screenshot 2022-04-10 at 10 01 41" src="https://user-images.githubusercontent.com/907114/162608652-08574a4c-18cd-4970-9ea8-71d182041438.png">


## Entropy

In the output next by the generated password symbols are displayed for the estimated password entropy (in bits), they are:

`◻◻◻◻` less than 26  
`◼◻◻◻` 26-35  
`◼◼◻◻` 36-59  
`◼◼◼◻` 60-127  
`◼◼◼◼` 128 or more

The default length of 20 should always output a password of an entropy of 128 or more (in the `letters+numbers+symbols` variant).

## Password technique and security

Random numbers to generate the password uses the [node crypto library](https://nodejs.org/api/crypto.html), which in turn relies on the [Javascript Crypto-APIs](https://developer.mozilla.org/en-US/docs/Web/API/Crypto). This is much preferred over the traditional `Math.random()`-methods which are **not** cryptographically secure (i.e. do not use password generators that use `Math.random()`).

The words are selected from the word-list available on UNIX-systems at `/usr/share/dict/words`, where all words between 3 and 6 characters in length are selected (~34000 words.)

## Inspiration and credits

This workflow is inspired by the great [pwgen-workflow](https://github.com/deanishe/alfred-pwgen) of which I have been a heavy user of for years, but sadly hasn't survived the port to macOS Monterey. This workflow focuses on the most common tasks however.

Uses [alfy](https://github.com/sindresorhus/alfy) by Sindre Sorhus.

&copy; 2022 – [Marcus Olsson](https://marcusolsson.me)
