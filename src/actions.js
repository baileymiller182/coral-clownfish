// Action types in game.
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_GAME_INDEX = 'GAME_INDEX';
export const RESET_GAME = 'RESET_GAME';
export const CHANGE_BOT = 'CHANGE_BOT';
export const BOT_RUNNING = 'BOT_RUNNING';

// Simple action creators for game.
export function clickCell(row, column) {
    return {
        type: CLICK_CELL,
        row,
        column,
    };
}

export function changeIndex(index) {
    return {
        type: CHANGE_GAME_INDEX,
        index,
    };
}

export function resetGame(index) {
    return {
        type: RESET_GAME,
        index,
    };
}

export function changeBot(bot) {
    return {
        type: CHANGE_BOT,
        bot,
    };
}

export function botRunning(running) {
    return {
        type: BOT_RUNNING,
        running,
    };
}


