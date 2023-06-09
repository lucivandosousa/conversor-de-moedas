let buttonConvert = document.getElementById("buttonConvert")
let textValueToConvert = document.getElementById("info-dados-valueToConvert")
let textValueConverted = document.getElementById("info-dados-valueConverted")
let valueToConvert = document.getElementById("valueToConvert")
let selectOption = document.getElementById("selectOption")
let textCurrency = document.getElementById("textCurrency")
let imgCurrency = document.getElementById("imgCurrency")

const valueDolar = 4.92 //valor em 09/06/2023
const valueEuro = 5.30 //valor em 09/06/2023

function convertValues() {

  textValueToConvert.innerText = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(valueToConvert.value)

  if (selectOption.value === "$ Dólar") {
    convertDolar(valueToConvert.value)
  }

  if (selectOption.value === "€ Euro") {
    convertEuro(valueToConvert.value)
  }

}

function convertDolar(value) {

  textValueConverted.innerText = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(value / valueDolar)

}

function convertEuro(value) {

  textValueConverted.innerText = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR"
  }).format(value / valueEuro)

}

function changeCurrency() {

  if (selectOption.value === "$ Dólar") {
    textCurrency.innerText = "Dólar"
    imgCurrency.src = "./assets/eua.png"
  }

  if (selectOption.value === "€ Euro") {
    textCurrency.innerText = "Euro"
    imgCurrency.src = "./assets/euro.png"
  }

  convertValues()

}

buttonConvert.addEventListener("click", convertValues)
selectOption.addEventListener("change", changeCurrency)

