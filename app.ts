import { Game } from "./src/game/index"
import SpinResult from "./src/game/spinResult/index";
const runCount:number = Math.pow(10, 9)
let totalWin:number = 0
let winLines:number = 0
const start = Date.now()
const game:Game = new Game()

for (let i = 0; i < runCount; i++) {
    const spinResult: SpinResult = game.run()
    totalWin += spinResult.winAmount
    winLines += spinResult.winLines
}
const finish = Date.now()
console.log('loop for ', runCount, 'takes ', (finish - start) / 1000, 'seconds ', 'win amount is:', totalWin, 'winLines is:', winLines)

