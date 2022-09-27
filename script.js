const name = document.getElementById('name');
const cardName = document.getElementById('card-name');
const number = document.getElementById('number');
const cardNumber = document.getElementById('card-number');
const month = document.getElementById('month');
const cardMonth = document.getElementById('card-month');
const year = document.getElementById('year');
const cardYear = document.getElementById('card-year');
const cvc = document.getElementById('cvc');
const cardCvc = document.getElementById('card-cvc');

const errorName = document.getElementById('error-name');
const errorNumber = document.getElementById('error-number');
const errorMonthYear = document.getElementById('error-month-year');
const errorCvc = document.getElementById('error-cvc');

const confirmButton = document.getElementById('confirm-button');

    // Preenchimento live dos campos do cartão

$("#card-number").keyup(function() {
    $('#number').html($('#card-number').val());
});

$("#card-name").keyup(function() {
    $("#name").html($("#card-name").val());
});

$("#card-month").keyup(function() {
    $("#month").html($("#card-month").val());
});

$("#card-year").keyup(function() {
    $("#year").html($("#card-year").val());
});

$("#card-cvc").keyup(function() {
    $("#cvc").html($("#card-cvc").val());
})

    // Validação de erros nos campos

confirmButton.addEventListener('click', function(event) {
    event.preventDefault();

    if (cardName.value == "") {
        errorName.style.display = 'block';
        cardName.style.border = '1px solid red';
    }
    if (cardNumber.value == "" || cardNumber.value.length < 16) {
        errorNumber.style.display = 'block';
        cardNumber.style.border = '1px solid red';
    }
    if (cardMonth.value == "") {
        errorMonthYear.style.display = 'block';
        cardMonth.style.border = "1px solid red";
    }
    if (cardYear.value == "") {
        errorMonthYear.style.display = 'block';
        cardYear.style.border = "1px solid red";
    }
    if (cardCvc.value == "") {
        errorCvc.innerHTML = "Please, enter your cvc number!";
        cardCvc.style.border = "1px solid red";
    }

    if ((cardName.value.length != 0) && (cardNumber.value.length != 0) && (cardMonth.value.length != 0) && (cardYear.value.length != 0) && (cardCvc.value.length != 0)) {
        $(".form-box").css("display", "none");
        $(".thank-you-box").css("display", "block");
    }

});