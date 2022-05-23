input.onButtonPressed(Button.A, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 25)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 25)
})
input.onButtonPressed(Button.B, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 70)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 70)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 70)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 70)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 70)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 70)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 70)
})
basic.forever(function () {
	
})
