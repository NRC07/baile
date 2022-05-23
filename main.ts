input.onButtonPressed(Button.A, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 25)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 14)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 14)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 25)
})
input.onButtonPressed(Button.B, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 49)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 8)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 49)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 8)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 49)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 8)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 49)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 8)
})
basic.forever(function () {
	
})
