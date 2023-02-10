let ditance = 0
basic.showIcon(IconNames.Butterfly)
Tinybit.RGB_Car_Big(Tinybit.enColor.Blue)
basic.forever(function () {
    ditance = Tinybit.Ultrasonic_Car()
    basic.showString("" + (ditance))
})
basic.forever(function () {
    ditance = Tinybit.Ultrasonic_Car()
    if (ditance < 15) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 100)
    } else if (ditance > 50) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 100)
    } else if (ditance >= 15 && ditance < 50) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 100)
    }
})
basic.forever(function () {
    ditance = Tinybit.Ultrasonic_Car()
    if (ditance >= 15 && ditance < 50) {
        music.stopAllSounds()
    } else {
        music.playMelody("C D E D D E D C ", 500)
    }
})
