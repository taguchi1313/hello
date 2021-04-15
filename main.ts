basic.forever(function () {
    basic.showIcon(IconNames.Asleep)
    basic.pause(100)
    basic.showIcon(IconNames.Surprised)
    basic.pause(100)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # # # # #
        . # # # .
        `)
    basic.pause(100)
})
