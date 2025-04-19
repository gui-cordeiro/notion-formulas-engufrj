let P1 = "P_1:"
let P2 = "P_2:"
let P3 = "P_3:"
let formulaBase = "M_P = \\frac{P_1 + P_2 + 2P_3}{4} = 0.00"

function arredondar(num) {
   return Math.ceil(num * 10) / 10
}

function apagar() {                      
   document.getElementById("P1").value = NaN
   document.getElementById("P2").value = NaN
   document.getElementById("P3").value = NaN

   renderizar("label1", P1)
   renderizar("label2", P2)
   renderizar("label3", P3)
   
   renderizar("formula1", formulaBase)
}

function obterNota (num) {
   if (num < 0) {
      return 0
   } else if (num < 10) {
      return arredondar(parseFloat(num) || 0)
   } else {
      return 10
   }
   return 0
}

function calcular() {
   // Obtendo valores e os arredondando para cima se necessário
   let P1 = obterNota(document.getElementById("P1").value)
   let P2 = obterNota(document.getElementById("P2").value)
   let P3 = obterNota(document.getElementById("P3").value)

   let resultado = (P1 + P2 + 2*P3) / 4

   // Média Parcial/Final:
   let f1 = "M_P = \\frac{"
   f1 += ((P1 != 0) ? "[" + P1.toFixed(1) + "]" : "P_1") + " + "
   f1 += ((P2 != 0) ? "[" + P2.toFixed(1) + "]" : "P_2") + " + "
   f1 += "2." + ((P3 != 0) ? "[" + P3.toFixed(1) + "]" : "P_3")
   f1 += "}{4} = " + resultado.toFixed(2)

   renderizar("formula1", f1)
}