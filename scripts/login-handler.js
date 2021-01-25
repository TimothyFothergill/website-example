//const userLoginJson = require("./users.json");

var GetUserDetails = (userInputName, userInputPassword) => {
    var userLoginYo = "wazzup";
    var userPasswordYo = "sushi";

    if ((userInputName == userLoginYo) && (userInputPassword == userPasswordYo)) {
        alert("Congratulations!!");
        localStorage.setItem("username", userLoginYo);
        }
    else {
        alert("Nice try, but no cigar, hackerman!");
        }
    }