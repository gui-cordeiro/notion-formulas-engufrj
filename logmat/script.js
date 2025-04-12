let T1 = "T_1:"
let T2 = "T_2:"
let T3 = "T_3:"
let P1 = "P_1:"
let P2 = "P_2:"
let P3 = "P_3:"
let formulaBase = "M_F = \\frac{T_i + T_j + 2P_i + 2P_j}{6} = 0.00"

function arredondar(num) {
   return Math.ceil(num * 10) / 10
}

function apagar() {                      
   document.getElementById("P1").value = NaN
   document.getElementById("P2").value = NaN
   document.getElementById("P3").value = NaN
   document.getElementById("T1").value = NaN
   document.getElementById("T2").value = NaN
   document.getElementById("T3").value = NaN

   document.getElementById('formuladesc1').innerText = '-'
   document.getElementById('formuladesc2').innerText = '-'

   renderizar("label1", P1)
   renderizar("label2", P2)
   renderizar("label3", P3)
   renderizar("label4", T1)
   renderizar("label5", T2)
   renderizar("label6", T3)
   
   renderizar("formula1", formulaBase)
}

function obterNota (num) {
   if (num < 0) {
      return 0
   } else if (num > 10) {
      return 10
   } else {
      return parseFloat(num) || 0
   }
}

function descartarNota (n1, n2, n3) {
	const notas = [n1, n2, n3].sort((a, b) => b - a)
	return {
		maiores: [notas[0], notas[1]],
		descartada: notas[2]
	}
}

function calcular() {
   let P1 = obterNota(document.getElementById("P1").value)
   let P2 = obterNota(document.getElementById("P2").value)
   let P3 = obterNota(document.getElementById("P3").value)
   let T1 = obterNota(document.getElementById("T1").value)
   let T2 = obterNota(document.getElementById("T2").value)
   let T3 = obterNota(document.getElementById("T3").value)
   
   let P = descartarNota(P1, P2, P3)
   let T = descartarNota(T1, T2, T3)
   
   let PI = P.maiores[0]
   let PJ = P.maiores[1]
   let TI = T.maiores[0]
   let TJ = T.maiores[1]

   if ((P1 == NaN || P1 == 0) && (P2 == NaN || P2 == 0) && (P3 == NaN || P3 == 0)) {
      document.getElementById('formuladesc1').innerText = '-'
   } else {
      let desc1 = "P_"
      if (P.descartada == P1) desc1 += "1"
      else if (P.descartada == P2) desc1 += "2"
      else if (P.descartada == P3) desc1 += "3"
      desc1 += " = " + P.descartada.toFixed(1)
      renderizar("formuladesc1", desc1)
   }

   if ((T1 == NaN || T1 == 0) && (T2 == NaN || T2 == 0) && (T3 == NaN || T3 == 0)) {
      document.getElementById('formuladesc2').innerText = '-'
   } else {
      let desc2 = "T_"
      if (T.descartada == T1) desc2 += "1"
      else if (T.descartada == T2) desc2 += "2"
      else if (T.descartada == T3) desc2 += "3"
      desc2 += " = " + T.descartada.toFixed(1)
      renderizar("formuladesc2", desc2)
   }

   let resultado = (TI + TJ + 2*PI + 2*PJ) / 6

   let f1 = "M_F = \\frac{"
   f1 += ((TI != 0) ? "[" + TI.toFixed(1) + "]" : "T_i") + " + "
   f1 += ((TJ != 0) ? "[" + TJ.toFixed(1) + "]" : "T_j") + " + "
   f1 += "2." + ((PI != 0) ? "[" + PI.toFixed(1) + "]" : "P_i") + " + "
   f1 += "2." + ((PJ != 0) ? "[" + PJ.toFixed(1) + "]" : "P_j")
   f1 += "}{6} = " + resultado.toFixed(2)
   
   renderizar("formula1", f1)
}
