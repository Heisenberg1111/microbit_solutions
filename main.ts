let myImage = images.createImage(`
    . . # . .
    . # . # .
    # # # # #
    . . # . .
    . # # # .
    `)
myImage.showImage(0, 400)
basic.pause(500)
let temp_read = 0
music.playMelody("D C D F G - B C5 ", 300)
datalogger.setColumns(["Temperature"])
basic.forever(function () {
    temp_read += input.temperature()
    basic.pause(500)
    basic.showNumber(temp_read)
    if (temp_read > 24 && temp_read < 32) {
        basic.showIcon(IconNames.Happy)
    } else if (temp_read < 24) {
        basic.showIcon(IconNames.Confused)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    datalogger.logData([datalogger.createCV("Temperature", temp_read)])
    temp_read = 0
    for (let index = 0; index < 120; index++) {
        basic.pause(5000)
    }
})
