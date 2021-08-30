 const Index = {
    payoutTables: {
        A: { count: 5, win: 7 },
        B: { count: 5, win: 6 },
        C: { count: 5, win: 5 },
        D: { count: 5, win: 4 },
        E: { count: 5, win: 3 },
        F: { count: 5, win: 2 },
        G: { count: 5, win: 1 }
    },
    check (founded: object) {
        let win: number = 0
        let lines: number = 0
        for (const symbol in founded) {
            if (this.payoutTables[symbol].count === founded[symbol]) {
                lines++
                win += this.payoutTables[symbol].win
            }
        }
        return {
            lines, win
        }
    }
}

 export default Index
