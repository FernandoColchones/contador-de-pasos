input.onButtonPressed(Button.A, function () {
    pasos = 0
})
input.onGesture(Gesture.Shake, function () {
    pasos += 1
    basic.showNumber(pasos)
})
let pasos = 0
pasos = 0
