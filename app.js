// https://www.omnicalculator.com/chemistry/ph#how-to-find-ph-ph-formula

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const pHRadio = document.getElementById('pHRadio');
const concentrationRadio = document.getElementById('concentrationRadio');

let pH;
let concentration = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

pHRadio.addEventListener('click', function() {
  variable1.textContent = 'Concentration';
  concentration = v1;
  result.textContent = '';
});

concentrationRadio.addEventListener('click', function() {
  variable1.textContent = 'pH';
  pH = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(pHRadio.checked)
    result.textContent = `pH = ${computepH().toFixed(5)}`;

  else if(concentrationRadio.checked)
    result.textContent = `Concentration = ${computeConcentration().toFixed(5)}`;
})

// calculation

function computepH() {
  return -Math.log10(Number(concentration.value));
}

function computeConcentration() {
  return Number(perimeterofHexagon.value) / 6;
}