// Game Configuration
const ARML_API_KEY = 'arMK1P8340cda7cc1a12cf4664-arml-FP';
const ARML_API_URL = 'https://arml.trymagic.xyz/';
const WORD_LENGTH = 5;
const MAX_GUESSES = 6;

// Comprehensive 5-letter English word list
const WORD_LIST = ['about', 'above', 'above', 'abuse', 'actor', 'acute', 'admit', 'adopt', 'adult', 'after', 'again', 'agent', 'agree', 'ahead', 'alarm', 'album', 'alert', 'align', 'alike', 'alive', 'allow', 'alone', 'along', 'alter', 'among', 'anger', 'angle', 'angry', 'apart', 'apple', 'apply', 'arena', 'argue', 'arise', 'array', 'aside', 'asset', 'audio', 'audit', 'avoid', 'awake', 'award', 'aware', 'badly', 'baker', 'bases', 'basic', 'basis', 'beach', 'began', 'begin', 'being', 'below', 'bench', 'billy', 'birth', 'black', 'blade', 'blame', 'blank', 'blast', 'bleed', 'bless', 'blind', 'block', 'blood', 'bloom', 'blues', 'board', 'boost', 'booth', 'bound', 'brain', 'brand', 'brass', 'brave', 'bread', 'break', 'breed', 'brief', 'bring', 'broad', 'broke', 'brown', 'build', 'built', 'buyer', 'cable', 'calif', 'carry', 'catch', 'cause', 'chain', 'chair', 'chaos', 'chart', 'chase', 'cheap', 'check', 'chest', 'chief', 'child', 'china', 'chose', 'civil', 'claim', 'class', 'clean', 'clear', 'click', 'cliff', 'climb', 'clock', 'clone', 'close', 'cloth', 'cloud', 'coach', 'coast', 'couch', 'could', 'count', 'court', 'cover', 'crack', 'craft', 'crash', 'crazy', 'cream', 'crime', 'cross', 'crowd', 'crown', 'crude', 'curve', 'cycle', 'daily', 'dance', 'dated', 'dealt', 'death', 'debut', 'delay', 'delta', 'dense', 'depth', 'doing', 'doubt', 'dozen', 'draft', 'drama', 'drank', 'drawn', 'dream', 'dress', 'dried', 'drill', 'drink', 'drive', 'drone', 'drove', 'dying', 'eager', 'early', 'earth', 'eight', 'elite', 'empty', 'enemy', 'enjoy', 'enter', 'entry', 'equal', 'error', 'event', 'every', 'exact', 'exist', 'extra', 'faith', 'false', 'fault', 'fiber', 'field', 'fifth', 'fifty', 'fight', 'final', 'first', 'fixed', 'flash', 'fleet', 'floor', 'fluid', 'focus', 'force', 'forth', 'forty', 'forum', 'found', 'frame', 'frank', 'fraud', 'fresh', 'front', 'fruit', 'fully', 'funny', 'giant', 'given', 'glass', 'globe', 'going', 'grace', 'grade', 'grand', 'grant', 'grass', 'great', 'green', 'gross', 'group', 'grown', 'guard', 'guess', 'guest', 'guide', 'happy', 'harry', 'heart', 'heavy', 'hence', 'henry', 'horse', 'hotel', 'house', 'human', 'ideal', 'image', 'imply', 'index', 'inner', 'input', 'issue', 'japan', 'jimmy', 'joint', 'jones', 'judge', 'known', 'label', 'large', 'laser', 'later', 'laugh', 'layer', 'learn', 'lease', 'least', 'leave', 'legal', 'lemon', 'level', 'lewis', 'light', 'limit', 'links', 'lives', 'local', 'logic', 'loose', 'lower', 'lucky', 'lunch', 'lying', 'magic', 'major', 'maker', 'march', 'maria', 'match', 'maybe', 'mayor', 'meant', 'media', 'metal', 'might', 'minor', 'minus', 'mixed', 'model', 'money', 'month', 'moral', 'motor', 'mount', 'mouse', 'mouth', 'movie', 'music', 'needs', 'never', 'newly', 'night', 'noise', 'north', 'noted', 'novel', 'nurse', 'occur', 'ocean', 'offer', 'often', 'order', 'other', 'ought', 'paint', 'panel', 'paper', 'party', 'peace', 'peter', 'phase', 'phone', 'photo', 'piano', 'piece', 'pilot', 'pitch', 'place', 'plain', 'plane', 'plant', 'plate', 'point', 'pound', 'power', 'press', 'price', 'pride', 'prime', 'print', 'prior', 'prize', 'proof', 'proud', 'prove', 'queen', 'quick', 'quiet', 'quite', 'radio', 'raise', 'range', 'rapid', 'ratio', 'reach', 'ready', 'refer', 'right', 'rival', 'river', 'robin', 'rocky', 'roman', 'rough', 'round', 'route', 'royal', 'rural', 'scale', 'scene', 'scope', 'score', 'sense', 'serve', 'seven', 'shall', 'shape', 'share', 'sharp', 'sheet', 'shelf', 'shell', 'shift', 'shine', 'shirt', 'shock', 'shoot', 'short', 'shown', 'sight', 'since', 'sixth', 'sixty', 'sized', 'skill', 'sleep', 'slide', 'small', 'smart', 'smile', 'smith', 'smoke', 'solid', 'solve', 'sorry', 'sound', 'south', 'space', 'spare', 'speak', 'speed', 'spend', 'spent', 'split', 'spoke', 'sport', 'staff', 'stage', 'stake', 'stand', 'start', 'state', 'steam', 'steel', 'stick', 'still', 'stock', 'stone', 'stood', 'store', 'storm', 'story', 'strip', 'stuck', 'study', 'stuff', 'style', 'sugar', 'suite', 'super', 'sweet', 'table', 'taken', 'taste', 'taxes', 'teach', 'terry', 'texas', 'thank', 'theft', 'their', 'theme', 'there', 'these', 'thick', 'thing', 'think', 'third', 'those', 'three', 'threw', 'throw', 'tight', 'times', 'title', 'today', 'topic', 'total', 'touch', 'tough', 'tower', 'track', 'trade', 'train', 'trait', 'treat', 'trend', 'trial', 'tribe', 'tried', 'tries', 'troop', 'truck', 'truly', 'trust', 'truth', 'twelve', 'twenty', 'twice', 'under', 'undue', 'union', 'unity', 'until', 'upper', 'upset', 'urban', 'usage', 'usual', 'valid', 'value', 'video', 'virus', 'visit', 'vital', 'vocal', 'voice', 'waste', 'watch', 'water', 'wheel', 'where', 'which', 'while', 'white', 'whole', 'whose', 'woman', 'women', 'world', 'worry', 'worse', 'worst', 'worth', 'would', 'wound', 'write', 'wrong', 'wrote', 'yield', 'young', 'youth'];

// Game State
let state = {
    targetWord: '',
    currentRow: 0,
    currentTile: 0,
    gameOver: false,
    guesses: [],
    stats: JSON.parse(localStorage.getItem('wordleStats')) || {
        played: 0,
        won: 0,
        currentStreak: 0,
        maxStreak: 0
    }
};

// Translation Cache
const translationCache = {};

// DOM Elements
const gameboard = document.querySelector('.game-board');
const keyboard = document.querySelector('.keyboard');
const modal = document.getElementById('gameModal');
const translationPanel = document.getElementById('translationPanel');
const translationContent = document.getElementById('translationContent');
const newGameBtn = document.getElementById('newGameBtn');

// Initialize Game
function init() {
    state.targetWord = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)].toUpperCase();
    console.log('Target word:', state.targetWord); // Debug

    // Event Listeners
    document.addEventListener('keydown', handleKeyPress);
    keyboard.addEventListener('click', handleKeyboardClick);
    newGameBtn.addEventListener('click', resetGame);

    updateStats();
}

// Handle Physical Keyboard
function handleKeyPress(e) {
    if (state.gameOver) return;

    const key = e.key.toUpperCase();

    if (key === 'ENTER') {
        submitGuess();
    } else if (key === 'BACKSPACE') {
        deleteLetter();
    } else if (/^[A-Z]$/.test(key)) {
        addLetter(key);
    }
}

// Handle On-Screen Keyboard
function handleKeyboardClick(e) {
    if (state.gameOver) return;

    const key = e.target.closest('.key');
    if (!key) return;

    const letter = key.dataset.key;

    if (letter === 'Enter') {
        submitGuess();
    } else if (letter === 'Backspace') {
        deleteLetter();
    } else {
        addLetter(letter);
    }
}

// Add Letter
function addLetter(letter) {
    if (state.currentTile < WORD_LENGTH) {
        const tile = getTile(state.currentRow, state.currentTile);
        tile.textContent = letter;
        tile.classList.add('filled');
        state.currentTile++;

        // Check for translation
        checkForTranslation();
    }
}

// Delete Letter
function deleteLetter() {
    if (state.currentTile > 0) {
        state.currentTile--;
        const tile = getTile(state.currentRow, state.currentTile);
        tile.textContent = '';
        tile.classList.remove('filled');

        checkForTranslation();
    }
}

// Submit Guess
async function submitGuess() {
    if (state.currentTile !== WORD_LENGTH) {
        showError('Nicht genug Buchstaben');
        return;
    }

    const guess = getCurrentGuess();

    if (!WORD_LIST.includes(guess.toLowerCase())) {
        showError('Wort nicht in der Liste');
        return;
    }

    state.guesses.push(guess);
    await revealTiles();
    updateKeyboard(guess);

    if (guess === state.targetWord) {
        endGame(true);
    } else if (state.currentRow === MAX_GUESSES - 1) {
        endGame(false);
    } else {
        state.currentRow++;
        state.currentTile = 0;
    }
}

// Get Current Guess
function getCurrentGuess() {
    let guess = '';
    for (let i = 0; i < WORD_LENGTH; i++) {
        const tile = getTile(state.currentRow, i);
        guess += tile.textContent;
    }
    return guess;
}

// Reveal Tiles with Animation
function revealTiles() {
    return new Promise((resolve) => {
        const guess = getCurrentGuess();
        const letterCount = {};

        // Count letters in target word
        for (let letter of state.targetWord) {
            letterCount[letter] = (letterCount[letter] || 0) + 1;
        }

        // Mark correct letters first
        const results = Array(WORD_LENGTH).fill('absent');
        for (let i = 0; i < WORD_LENGTH; i++) {
            if (guess[i] === state.targetWord[i]) {
                results[i] = 'correct';
                letterCount[guess[i]]--;
            }
        }

        // Mark present letters
        for (let i = 0; i < WORD_LENGTH; i++) {
            if (results[i] === 'absent' && letterCount[guess[i]] > 0) {
                results[i] = 'present';
                letterCount[guess[i]]--;
            }
        }

        // Animate tiles
        for (let i = 0; i < WORD_LENGTH; i++) {
            setTimeout(() => {
                const tile = getTile(state.currentRow, i);
                tile.classList.add('flip');
                setTimeout(() => {
                    tile.classList.add(results[i]);
                }, 250);

                if (i === WORD_LENGTH - 1) {
                    setTimeout(resolve, 400);
                }
            }, i * 200);
        }
    });
}

// Update Keyboard
function updateKeyboard(guess) {
    const letterCount = {};
    for (let letter of state.targetWord) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    }

    for (let i = 0; i < guess.length; i++) {
        const letter = guess[i];
        const key = document.querySelector(`[data-key="${letter}"]`);

        if (guess[i] === state.targetWord[i]) {
            key.classList.remove('present', 'absent');
            key.classList.add('correct');
        } else if (state.targetWord.includes(letter) && letterCount[letter] > 0) {
            if (!key.classList.contains('correct')) {
                key.classList.add('present');
            }
        } else {
            if (!key.classList.contains('correct') && !key.classList.contains('present')) {
                key.classList.add('absent');
            }
        }
    }
}

// Get Tile
function getTile(row, col) {
    return gameboard.children[row].children[col];
}

// Show Error
function showError(message) {
    const row = gameboard.children[state.currentRow];
    row.classList.add('shake');
    setTimeout(() => row.classList.remove('shake'), 500);

    translationContent.innerHTML = `<p style="color: #ff6b6b;">${message}</p>`;
    setTimeout(() => checkForTranslation(), 2000);
}

// Check for Translation
async function checkForTranslation() {
    const currentGuess = getCurrentGuess().toLowerCase();

    if (currentGuess.length < 3) {
        translationContent.innerHTML = '<p class="placeholder">Gib ein englisches Wort ein...</p>';
        translationPanel.classList.remove('active');
        return;
    }

    // Check if it's a valid word or close to one
    const isValidWord = WORD_LIST.includes(currentGuess);
    const similarWords = WORD_LIST.filter(w => w.startsWith(currentGuess.substring(0, 3)));

    if (isValidWord || similarWords.length > 0) {
        const wordToTranslate = isValidWord ? currentGuess : similarWords[0];
        await fetchTranslation(wordToTranslate);
    } else {
        translationContent.innerHTML = '<p class="placeholder">Kein englisches Wort erkannt...</p>';
        translationPanel.classList.remove('active');
    }
}

// Fetch Translation from arml API
async function fetchTranslation(word) {
    if (translationCache[word]) {
        displayTranslation(word, translationCache[word]);
        return;
    }

    translationContent.innerHTML = '<p class="loading">Übersetze...</p>';
    translationPanel.classList.add('active');

    try {
        // Try arml API first
        const response = await fetch(`https://arml.trymagic.xyz/api/translate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': ARML_API_KEY
            },
            body: JSON.stringify({
                text: word,
                from: 'en',
                to: 'de'
            })
        });

        if (!response.ok) {
            throw new Error('API request failed');
        }

        const data = await response.json();
        const translation = data.translation || data.translated_text || data.result || 'Übersetzung nicht verfügbar';

        translationCache[word] = translation;
        displayTranslation(word, translation);
    } catch (error) {
        console.error('Translation error:', error);
        // Fallback to MyMemory API as backup
        try {
            const fallbackResponse = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=en|de`);
            const fallbackData = await fallbackResponse.json();
            const translation = fallbackData.responseData.translatedText;

            translationCache[word] = translation;
            displayTranslation(word, translation);
        } catch (fallbackError) {
            console.error('Fallback translation error:', fallbackError);
            translationContent.innerHTML = '<p style="color: #ff6b6b;">Übersetzung nicht verfügbar</p>';
        }
    }
}

// Display Translation
function displayTranslation(word, translation) {
    translationContent.innerHTML = `
        <span class="word">${word.toUpperCase()}</span>
        <span class="meaning">${translation}</span>
    `;
    translationPanel.classList.add('active');
}

// End Game
function endGame(won) {
    state.gameOver = true;

    state.stats.played++;
    if (won) {
        state.stats.won++;
        state.stats.currentStreak++;
        state.stats.maxStreak = Math.max(state.stats.maxStreak, state.stats.currentStreak);
    } else {
        state.stats.currentStreak = 0;
    }

    localStorage.setItem('wordleStats', JSON.stringify(state.stats));

    setTimeout(() => {
        document.getElementById('modalTitle').textContent = won ? 'Glückwunsch! 🎉' : 'Schade! 😔';
        document.getElementById('modalMessage').textContent = won
            ? `Du hast das Wort in ${state.currentRow + 1} Versuchen erraten!`
            : `Das Wort war: ${state.targetWord}`;

        updateStats();
        modal.classList.add('active');

        // Show final translation
        fetchTranslation(state.targetWord.toLowerCase());
    }, 2000);
}

// Update Stats
function updateStats() {
    document.getElementById('gamesPlayed').textContent = state.stats.played;
    document.getElementById('winPercentage').textContent =
        state.stats.played > 0 ? Math.round((state.stats.won / state.stats.played) * 100) + '%' : '0%';
    document.getElementById('currentStreak').textContent = state.stats.currentStreak;
}

// Reset Game
function resetGame() {
    // Reset state
    state = {
        targetWord: WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)].toUpperCase(),
        currentRow: 0,
        currentTile: 0,
        gameOver: false,
        guesses: [],
        stats: state.stats
    };

    console.log('New target word:', state.targetWord); // Debug

    // Reset board
    document.querySelectorAll('.tile').forEach(tile => {
        tile.textContent = '';
        tile.className = 'tile';
    });

    // Reset keyboard
    document.querySelectorAll('.key').forEach(key => {
        key.classList.remove('correct', 'present', 'absent');
    });

    // Reset translation
    translationContent.innerHTML = '<p class="placeholder">Gib ein englisches Wort ein...</p>';
    translationPanel.classList.remove('active');

    // Close modal
    modal.classList.remove('active');
}

// Start Game
init();
