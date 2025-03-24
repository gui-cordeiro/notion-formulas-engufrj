let formulaBonus1 = "\\[ P_1' = P_1 + \\frac{L_1}{10} = 0.00 \\]"
let formulaBonus2 = "\\[ P_2' = P_2 + \\frac{L_2}{10} = 0.00 \\]"
let formulaBonus3 = "\\[ P_3' = P_3 + \\frac{L_3}{10} = 0.00 \\]"
let formulaBase1 = "\\[ GF_1 = \\frac{3.P_1' + 4.P_2' + 5P_3'}{12} = 0.00 \\]"
let formulaBase2 = "\\[ GF_2 = \\frac{3.P_1' + 4.P_2' + 7P_3'}{14} = 0.00 \\]"

document.addEventListener("DOMContentLoaded", apagar);

document.getElementById("apagar").addEventListener("click", apagar)
   
for (let c = 0; c < 6; c ++) {
   document.getElementsByClassName("caixa-texto")[c].addEventListener("input", calcular)
}

function arredondar(num) {
   return Math.ceil(num * 10) / 10
}

function apagar() {                      
   document.getElementById("P1").value = NaN
   document.getElementById("P2").value = NaN
   document.getElementById("P3").value = NaN
   document.getElementById("L1").value = NaN
   document.getElementById("L2").value = NaN
   document.getElementById("L3").value = NaN
   
   document.getElementById("bonus1").innerHTML = formulaBonus1
   document.getElementById("bonus2").innerHTML = formulaBonus2
   document.getElementById("bonus3").innerHTML = formulaBonus3
   document.getElementById("formula1").innerHTML = formulaBase1
   document.getElementById("formula2").innerHTML = formulaBase2

   MathJax.typeset()
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
   let L1 = obterNota(document.getElementById("L1").value)
   let L2 = obterNota(document.getElementById("L2").value)
   let L3 = obterNota(document.getElementById("L3").value)

   let P1B = P1 + L1/10
   let P2B = P2 + L2/10
   let P3B = P3 + L3/10

   let resultado1 = (3*P1B + 4*P2B + 5*P3B) / 12
   let resultado2 = (3*P1B + 4*P2B + 7*P3B) / 14

   // Prova 1 + Bônus
   let b1 = "\\[ P_1' = "
   b1 += ((P1 != 0) ? "[" + P1.toFixed(1) + "]" : "P_1") + " + "
   b1 += "\\frac{" + ((L1 != 0) ? "[" + L1.toFixed(1) + "]" : "L_1")
   b1 += "}{10} = " + P1B.toFixed(2)
   b1 += " \\hspace{0.2cm} [" + arredondar(P1B).toFixed(1) + "] \\]"

   // Prova 2 + Bônus
   let b2 = "\\[ P_2' = "
   b2 += ((P2 != 0) ? "[" + P2.toFixed(1) + "]" : "P_2") + " + "
   b2 += "\\frac{" + ((L2 != 0) ? "[" + L2.toFixed(1) + "]" : "L_2")
   b2 += "}{10} = " + P2B.toFixed(2)
   b2 += " \\hspace{0.2cm} [" + arredondar(P2B).toFixed(1) + "] \\]"

   // Prova 3 + Bônus
   let b3 = "\\[ P_3' = "
   b3 += ((P3 != 0) ? "[" + P3.toFixed(1) + "]" : "P_3") + " + "
   b3 += "\\frac{" + ((L3 != 0) ? "[" + L3.toFixed(1) + "]" : "L_3")
   b3 += "}{10} = " + P3B.toFixed(2)
   b3 += " \\hspace{0.2cm} [" + arredondar(P3B).toFixed(1) + "] \\]"

   // Grau Final 1
   let f1 = "\\[ GF_1 = \\frac{"
   f1 += "3." + ((P1B != 0) ? "[" + arredondar(P1B).toFixed(1) + "]" : "P_1'") + " + "
   f1 += "4." + ((P2B != 0) ? "[" + arredondar(P2B).toFixed(1) + "]" : "P_2'") + " + "
   f1 += "5." + ((P3B != 0) ? "[" + arredondar(P3B).toFixed(1) + "]" : "P_3'")
   f1 += "}{12} = " + resultado1.toFixed(2)
   f1 += " \\hspace{0.2cm} [" + arredondar(resultado1).toFixed(1) + "] \\]"
   
   // Grau Final 2
   let f2 = "\\[ GF_2 = \\frac{"
   f2 += "3." + ((P1B != 0) ? "[" + arredondar(P1B).toFixed(1) + "]" : "P_1'") + " + "
   f2 += "4." + ((P2B != 0) ? "[" + arredondar(P2B).toFixed(1) + "]" : "P_2'") + " + "
   f2 += "7." + ((P3B != 0) ? "[" + arredondar(P3B).toFixed(1) + "]" : "P_3'")
   f2 += "}{14} = " + resultado2.toFixed(2)
   f2 += " \\hspace{0.2cm} [" + arredondar(resultado2).toFixed(1) + "] \\]"

   document.getElementById("bonus1").innerHTML = b1
   document.getElementById("bonus2").innerHTML = b2
   document.getElementById("bonus3").innerHTML = b3
   document.getElementById("formula1").innerHTML = f1
   document.getElementById("formula2").innerHTML = f2


   MathJax.typeset()
   
}