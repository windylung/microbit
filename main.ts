OLED.init(128, 64)
let 미세먼지 = 10
basic.forever(function () {
    OLED.clear()
    미세먼지 = Environment.ReadDust(DigitalPin.P13, AnalogPin.P1)
    OLED.writeString("Dust is :")
    OLED.writeNum(미세먼지)
    if (미세먼지 > 30) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    basic.pause(2000)
})
