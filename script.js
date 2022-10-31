const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;



nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});



function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}



$("#cpf").mask("000.000.000-00")
$("#date").mask("00/00/0000")







function salvar() {
  

  localStorage.setItem('nome', document.querySelector("#username").value)
  localStorage.setItem('cpf', document.querySelector("#cpf").value)
  localStorage.setItem('datanascimento', document.querySelector("#date").value)

}

function secondButton(){
  localStorage.setItem('cep', document.querySelector("#cep").value)
  localStorage.setItem('logradouro', document.querySelector("#logradouro").value)
  localStorage.setItem('bairro', document.querySelector("#bairro").value)
  localStorage.setItem('numero', document.querySelector("#numero").value)
  localStorage.setItem('uf', document.querySelector("#uf").value)

}

  
function pullitem() {
  const nome = localStorage.getItem('nome')
  const cpf = localStorage.getItem('cpf')
  const datanascimento = localStorage.getItem('datanascimento')
  const cep = localStorage.getItem('cep')
  const logradouro = localStorage.getItem('logradouro')
  const bairro = localStorage.getItem('bairro')
  const numero = localStorage.getItem('numero')
  const uf = localStorage.getItem('uf')


  ultimapag.innerHTML = `
   <br><p>Nome: ${nome}<\p><br>
   <p>CPF: ${cpf}<\p><br>
   <p>Data de Nascimento: ${datanascimento}<\p><br>
   <p>Logradouro: ${logradouro},  ${bairro}, ${uf}<\p><br>
   
   
  
   `    ;
}

const cep = document.querySelector("#cep")

const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}




cep.addEventListener("blur",(e)=>{
    let search = cep.value.replace("-","")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response =>{ response.json()
        .then( data => showData(data))
    })
    // alerta quando CEP invalido
    .catch((e) => alert("CEP INFORMADO É INVALIDO",e.message));
    
})


const inputName = document.querySelector("#username");

inputName.addEventListener("keypress", function (e) {

    const keyCode = (e.keyCode ? e.keyCode : e.which);
    if (keyCode > 47 && keyCode < 58)
        e.preventDefault();

})



function toggleButton() {
  const username = document.querySelector('#username').value;
  const cpf = document.querySelector('#cpf').value;
 
  

  if (username && cpf) {
    document.querySelector('#firstButton').disabled = false;
    return
  }
  document.querySelector('#firstButton').disabled = true;
}



const checkDate = document.querySelector('#date').value;
function validDate(){
if (checkDate) {
  document.querySelector('#firstButton').disabled = false;
  return
}
document.querySelector('#firstButton').disabled = true;
}



const checkCep = document.querySelector('#cep').value
const checkButton = document.querySelector('#lastButton')

function validaCep(){
  if(checkCep == ''){
    document.querySelector('#lastButton').disabled = false;
    return
  }
  document.querySelector('#lastButton').disabled = true;
}

   
   
  const isCpf = document.querySelector('#cpf').value
  function validarCPF(cpf) {	
    isCpf = isCpf.replace(/[^\d]+/g,'');	
    if(ifCpf == '') return false;	
    if (cpf.length != 11 || 
      cpf == "00000000000" || 
      cpf == "11111111111" || 
      cpf == "22222222222" || 
      cpf == "33333333333" || 
      cpf == "44444444444" || 
      cpf == "55555555555" || 
      cpf == "66666666666" || 
      cpf == "77777777777" || 
      cpf == "88888888888" || 
      cpf == "99999999999")
        return false;		
    add = 0;	
    for (i=0; i < 9; i ++)		
      add += parseInt(isCpf.charAt(i)) * (10 - i);	
      rev = 11 - (add % 11);	
      if (rev == 10 || rev == 11)		
        rev = 0;	
      if (rev != parseInt(isCpf.charAt(9)))		
        return false;		
    add = 0;	
    for (i = 0; i < 10; i ++)		
      add += parseInt(isCpf.charAt(i)) * (11 - i);	
    rev = 11 - (add % 11);	
    if (rev == 10 || rev == 11)	
      rev = 0;	
    if (rev != parseInt(isCpf.charAt(10)))	
    return true;   
    return
  }


