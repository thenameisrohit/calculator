const displayOutput = document.querySelector('.display')
const buttons = document.querySelectorAll('button')
const spcialOperators = ['%','=','+','-','/','*']
let outPut = ''
const calculate = (btnValue)=>{
  if (btnValue === '=' && outPut !== ''){
    outPut = eval(outPut.replace('%', '/100'))
  }else if(btnValue === 'AC'){
    outPut = ''
  }else if (btnValue === 'DEL'){
    outPut = outPut.toString().slice(0,-1)
  }else{
    if(outPut === '' && spcialOperators.includes(btnValue) )return
    outPut+=btnValue
  }
  displayOutput.value = outPut
}
buttons.forEach(button=>{
  button.addEventListener('click' , (e)=> calculate(e.target.dataset.value)
)
})