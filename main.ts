let tocar = false
let P_I = 0
let P_II = 0
input.onPinPressed(TouchPin.P0, function () {
    tocar = false
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    basic.pause(randint(2000, 5000))
})
input.onPinPressed(TouchPin.P2, function () {
    if (tocar == false) {
        tocar = true
        P_I += 1
        basic.showLeds(`
            . . # # #
            . . # # #
            . . # # #
            . . . # #
            . . . # #
            `)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (tocar == false) {
        tocar = true
        P_II += 1
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # . . .
            # # . . .
            `)
    }
})
basic.forever(function () {
	
})
