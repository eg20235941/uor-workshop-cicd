import { formatVersion } from './utils.js';

// Lab 6: change these three values, commit, push, and watch your site update.
const team = 'Team 12';
const version = '1.0.1';
const message = 'This message must wait for the tests to pass';

document.querySelector('#team').textContent = team;
document.querySelector('#version').textContent = formatVersion(version);
document.querySelector('#message').textContent = message;
