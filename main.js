"use strict"

var user = {
    id: 777,
    name: "Vasa",
    age: 77,
    email: "vasa007@gmail.com",
    city: "Kiev",

}

user.dataCard = function () {

    var userInfo = document.querySelector("#user-block");

    var info = "";

    for (var data in this) {
        if (data!= "dataCard")
            info+=`${data}: ${this[data]}<br> `;
    }

 
    userInfo.innerHTML = info;

};

user.dataCard();