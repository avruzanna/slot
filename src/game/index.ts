import lines from "../config/lines"
import reels from "../config/reels"
import Payouts from "../payouts/index"
import View from './view'
import SpinResult from "./spinResult/index";
export class Game {
    readonly reels: string[][]
    readonly lines: number[][]
    constructor () {
        this.reels = reels
        this.lines = lines
    }
    private checkIsWin (view: View): SpinResult {
        let winAmount: number = 0
        let winLines: number = 0
        for (let i = 0; i < this.lines.length; i++) {
            const line = this.lines[i]
            const founded: Object = {}
            for (let j = 0; j < line.length; j++) {
                const itm: number = line[j]
                const symbol: string = view.views[j][itm]
                if (!founded[symbol]) {
                    founded[symbol] = 0
                }
                founded[symbol]++
            }
            const { lines, win } = Payouts.check(founded)
            winAmount += win
            winLines += lines
        }
        return new SpinResult(view, winAmount, winLines)
    }
    private generateView (): View {
        return new View(this.reels)
    }
    public run (): SpinResult {
        const view:View = this.generateView()
        return this.checkIsWin(view)
    }
}
