input.touchA1.onEvent(ButtonEvent.LongClick, function () {
    keyboard.type("!singlefile")
})
input.touchA2.onEvent(ButtonEvent.LongClick, function () {
    keyboard.type("!doublefile")
})
input.touchA0.onEvent(ButtonEvent.LongClick, function () {
    keyboard.type("!yellow")
})
function Enter () {
    keyboard.type("$")
    keyboard.key("enter", KeyboardKeyEvent.Press)
}
// Generates Driver Number
function DriverNumber () {
    if (input.buttonD1.wasPressed() && input.buttonD5.wasPressed()) {
        keyboard.type("1")
    }
    if (input.buttonD1.wasPressed() && input.buttonD6.wasPressed()) {
        keyboard.type("2")
    }
    if (input.buttonD1.wasPressed() && input.buttonD7.wasPressed()) {
        keyboard.type("3")
    }
    if (input.buttonD2.wasPressed() && input.buttonD5.wasPressed()) {
        keyboard.type("4")
    }
    if (input.buttonD2.wasPressed() && input.buttonD6.wasPressed()) {
        keyboard.type("5")
    }
    if (input.buttonD2.wasPressed() && input.buttonD7.wasPressed()) {
        keyboard.type("6")
    }
    if (input.buttonD3.wasPressed() && input.buttonD5.wasPressed()) {
        keyboard.type("7")
    }
    if (input.buttonD3.wasPressed() && input.buttonD6.wasPressed()) {
        keyboard.type("8")
    }
    if (input.buttonD3.wasPressed() && input.buttonD7.wasPressed()) {
        keyboard.type("9")
    }
    if (input.buttonD4.wasPressed() && input.buttonD6.wasPressed()) {
        keyboard.type("0")
    }
}
// Activates Driver options to be followed by driver Number
function DriverActions () {
    if (input.buttonD1.wasPressed() && input.buttonD8.wasPressed()) {
        keyboard.type("!waveby")
        DriverNumber()
        Enter()
    }
    if (input.buttonD2.wasPressed() && input.buttonD8.wasPressed()) {
        keyboard.type("!eol")
        DriverNumber()
        Enter()
    }
    if (input.buttonD3.wasPressed() && input.buttonD8.wasPressed()) {
        keyboard.type("!black ")
        DriverNumber()
        Enter()
    }
    if (input.buttonD4.wasPressed() && input.buttonD8.wasPressed()) {
        keyboard.type("!dq")
        DriverNumber()
        Enter()
    }
    if (input.buttonD4.wasPressed() && input.buttonD1.wasPressed()) {
        keyboard.type("!clear")
        DriverNumber()
        Enter()
    }
}
forever(function () {
    DriverActions()
})
