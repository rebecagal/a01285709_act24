input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # #
            # . . # .
            # . . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # #
            # . . # .
            `)
    }
    basic.clearScreen()
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        let y = 0
        led.plot(x, y)
        basic.pause(200)
    }
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    for (let counter = 0; counter <= 15; counter++) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            . # # # .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . # # # .
            `)
    }
    basic.clearScreen()
})
for (let index = 0; index < 1; index++) {
    basic.showArrow(ArrowNames.North)
    basic.pause(100)
    basic.showArrow(ArrowNames.East)
    basic.pause(100)
    basic.showArrow(ArrowNames.South)
    basic.pause(100)
    basic.showArrow(ArrowNames.West)
    basic.pause(100)
}
basic.clearScreen()
basic.forever(function () {
	
})
