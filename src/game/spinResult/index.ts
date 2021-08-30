import View from "../view";

class SpinResult{
    public view: View
    public winAmount: number
    public winLines: number
    constructor(view: View, winAmount: number, winLines: number) {
        this.view = view
        this.winAmount = winAmount
        this.winLines = winLines
    }
}
export default SpinResult

