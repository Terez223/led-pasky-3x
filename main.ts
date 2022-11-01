input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip.show()
        basic.pause(100)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    strip.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.rotate(1)
    strip.show()
})
