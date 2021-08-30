class View {
    public views: string[][] = []
    constructor (reels:string[][]) {
        for (let i = 0; i < 5; i++) {
            const view: string[] = [];
            const reel: string[] = reels[i]
            let randomIdx: number = Math.floor(Math.random() * reel.length)
            view.push(reel[randomIdx])

            if (randomIdx + 1 >= reel.length) {
                randomIdx = randomIdx - reel.length
            }
            view.push(reel[randomIdx + 1])
            if (randomIdx + 2 >= reel.length) {
                randomIdx = randomIdx - reel.length
            }
            view.push(reel[randomIdx + 2])
            this.views.push(view)
        }
    }
}
export default View
