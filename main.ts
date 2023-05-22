input.onButtonPressed(Button.A, function () {
    basic.showNumber(pasos)
})
input.onButtonPressed(Button.AB, function () {
    pasos = 49 * pasos
})
input.onButtonPressed(Button.B, function () {
    pasos = 0
})
let pasos = 0
pasos = 0
basic.showNumber(0)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1500) {
        pasos += 1
    }
})
