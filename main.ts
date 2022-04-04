basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 34) {
        soundExpression.soaring.play()
        basic.showString("T.alta")
        basic.showIcon(IconNames.Sad)
    } else if (input.temperature() < 26) {
        soundExpression.slide.play()
        basic.showString("T.baja")
        basic.showIcon(IconNames.Sad)
    } else if (input.temperature() == 30) {
        basic.showString("T.NORMAL")
        basic.showIcon(IconNames.Happy)
    }
})
