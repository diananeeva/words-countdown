# Words Countdown Game

## Overview
This is a simple word game built with React. In this game, players are given a set of random letters, and they have 30 seconds to create valid words using those letters. The game checks word validity based on a list of words fetched from a `words.txt` file.

## Features
- **Random Letter Generation**: Generates a mix of vowels and consonants for the player to use.
- **Timer Functionality**: Players have 30 seconds to form as many valid words as possible.
- **Word Validation**: Words are checked against a predefined list from `words.txt`.
- **Real-Time Feedback**: Displays messages for invalid word submissions and shows valid words after time runs out.

## Components
- **Game Component**: Main component handling game logic, state management, and rendering.
- **Timer Component**: Displays and manages the countdown timer.
- **WordInput Component**: Allows players to input and submit words.

## How to Play
1. Start a new game by clicking the "Нова игра" button.
2. Use the displayed letters to create words within the given time limit.
3. Submit words through the input field.
4. Valid words are displayed, and feedback messages guide the player.
5. After time runs out, possible valid words using the given letters are displayed.

## Installation and Running the Game
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the development server with `npm start`.

Enjoy playing and testing your vocabulary skills!

