function SolArka (hiz: number) {
    if (hiz > 0) {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
}
function sagÖn (hiz: number) {
    if (hiz > 0) {
        pins.digitalWritePin(DigitalPin.P9, 0)
        pins.digitalWritePin(DigitalPin.P10, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P9, 1)
        pins.digitalWritePin(DigitalPin.P10, 0)
    }
}
function solÖn (hiz: number) {
    if (hiz > 0) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 0)
    }
}
input.onButtonPressed(Button.A, function () {
    sagÖn(1)
    SolArka(-1)
})
radio.onReceivedValue(function (name, value) {
    if (name == "SagOn") {
        sagÖn(value)
    } else if (name == "SolOn") {
        solÖn(value)
    } else if (name == "SolArka") {
        SolArka(value)
    } else if (name == "SagArka") {
        sagArka(value)
    } else if (name == "Dur") {
        dur(1)
    } else {
    	
    }
})
function dur (hiz: number) {
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P6, 0)
    pins.digitalWritePin(DigitalPin.P7, 0)
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.digitalWritePin(DigitalPin.P10, 0)
}
function sagArka (hiz: number) {
    if (hiz > 0) {
        pins.digitalWritePin(DigitalPin.P6, 0)
        pins.digitalWritePin(DigitalPin.P7, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P6, 1)
        pins.digitalWritePin(DigitalPin.P7, 0)
    }
}
radio.setGroup(1)
led.enable(false)
pins.analogWritePin(AnalogPin.P8, 1023)
pins.analogWritePin(AnalogPin.P15, 1023)
