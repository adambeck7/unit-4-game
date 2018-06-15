$(document).ready(function () {
    var totalOfClicked = 0;
    var newScore = 0;
    var randomNumber = getNumber();
    var randomNumberForButton1 = Math.floor((Math.random() * 12) + 1);
    var randomNumberForButton2 = Math.floor((Math.random() * 12) + 1);
    var randomNumberForButton3 = Math.floor((Math.random() * 12) + 1);
    var randomNumberForButton4 = Math.floor((Math.random() * 12) + 1);
    var wins = 0;
    var losses = 0;
    var totalScore = $("#score-total").text();
    var otherScore = $("#score-to-match").text();
    // function getRandomInteger() {
    //     $("#score-to-match").attr('value', randomNumber);
    //     var testVal = $("#score-to-match").attr('value');
    //     $("#score-to-match").text(testVal);
    //     console.log("testval =", testVal);
    // }
    // newGame();

    function getNumber() {
        return Math.floor((Math.random() * 120) + 19);

    }

    function getRandomInteger() {
        return Math.floor((Math.random() * 12) + 1);
    }

    function newGame() {
        console.log("get number value = ", getNumber());
        console.log(getNumber()); // Generates a random number between 0 and 4
        $("#score-to-match").text(getNumber());
        totalOfClicked = 0;
        $("#score-total").text(0);


    };


    $(".container").click(function () {
        var totalScore = parseInt($("#score-total").text());
        var otherScore = parseInt($("#score-to-match").text());

        $('#losses').bind("DOMSubtreeModified", function () {
            getNumber();
        });
        $('#wins').bind("DOMSubtreeModified", function () {
            getNumber();
        });

        if (totalScore == otherScore) {
            // alert("You Win!");
            wins++;
            $("#wins").html(wins);
            console.log("wins total score =", totalScore);
            console.log("wins other score =", otherScore);
            newGame();
            $("#btn1").attr('value', getRandomInteger());
            $("#btn2").attr('value', getRandomInteger());
            $("#btn3").attr('value', getRandomInteger());
            $("#btn4").attr('value', getRandomInteger());
        }

        if (totalScore > otherScore) {
            // alert("you lose!");
            losses++;
            $("#losses").html(losses);
            $("#score-to-match").text(getNumber());
            console.log("losses total score =", totalScore);
            console.log("losses other score =", otherScore);
            newGame();
            $("#btn1").attr('value', getRandomInteger());
            $("#btn2").attr('value', getRandomInteger());
            $("#btn3").attr('value', getRandomInteger());
            $("#btn4").attr('value', getRandomInteger());
        }

    });

    // $("#score-to-match").attr('value', randomNumber);
    // var randomNumber = $("#score-to-match").attr('value');
    $("#score-to-match").text(randomNumber);
    // console.log("testval", testVal);
    $("#btn1").attr('value', getRandomInteger());
    $("#btn2").attr('value', getRandomInteger());
    $("#btn3").attr('value', getRandomInteger());
    $("#btn4").attr('value', getRandomInteger());
    $("#wins").html(wins);
    $("#losses").html(losses);

    $("#btn1").click(function () {
        var btn1Val = $(this).attr('value');
        totalOfClicked = Number(totalOfClicked) + Number(btn1Val);
        $("#score-total").text(totalOfClicked);
        console.log(btn1Val);
    });
    $("#btn2").click(function () {
        var btn2Val = $(this).attr('value');
        totalOfClicked = Number(totalOfClicked) + Number(btn2Val);
        $("#score-total").text(totalOfClicked);
        console.log(btn2Val);
    });
    $("#btn3").click(function () {
        var btn3Val = $(this).attr('value');
        totalOfClicked = Number(totalOfClicked) + Number(btn3Val);
        $("#score-total").text(totalOfClicked);
        console.log(btn3Val);
    });
    $("#btn4").click(function () {
        var btn4Val = $(this).attr('value');
        totalOfClicked = Number(totalOfClicked) + Number(btn4Val);
        $("#score-total").text(totalOfClicked);
        console.log(btn4Val);
    });
});