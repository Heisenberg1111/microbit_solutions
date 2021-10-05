basic.showIcon(IconNames.Square)
basic.pause(500)
basic.showIcon(IconNames.SmallSquare)
basic.pause(500)
basic.clearScreen()
let temp_read = 0
music.playMelody("C D E F G A B C5 ", 120)
basic.forever(function () {
    temp_read += input.temperature()
    basic.pause(500)
    basic.showNumber(temp_read)
    if (temp_read > 24 && temp_read < 32) {
        music.playTone(440, music.beat(BeatFraction.Double))
        basic.showIcon(IconNames.Happy)
    } else if (temp_read < 24) {
        music.playTone(165, music.beat(BeatFraction.Double))
        basic.showIcon(IconNames.Confused)
    } else {
        music.playTone(698, music.beat(BeatFraction.Double))
        basic.showIcon(IconNames.Sad)
    }
    temp_read = 0
    for (let index = 0; index < 60; index++) {
        basic.pause(5000)
    }
})
