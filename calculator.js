class Calculator {

    firstOperand = 0;
    secondOperand = 0;
    calculationEnded = false;

    constructor(previousOperand, currentOperand) {
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand;
       
    }
 
    //Clears the calculator screen
    clear() {
        this.currentOperand.innerHTML = "";
        this.previousOperand.innerHTML = "";
        this.firstOperand = 0;
    }

    //Concants numbers until operator or equals button is clicked
    concantNumber(number) {
        //Clears screen when a new calculation is started
        if(this.calculationEnded == true) {
            this.calculationEnded = false;
            this.clear();
        }
        //Makes sure only one decimal point can be used 
        if(number == "." && this.currentOperand.innerHTML.includes(".")) {
            return;
        }
        this.currentOperand.innerHTML += number;
                
    }

    //Concants operator to first operand then moves it to top of calculator screen
    operator(operator) {
        //Checks to see if there is an operand first
        if(this.currentOperand.innerHTML == "" && this.previousOperand == "") {

            return;
        }else{
            //Visually changes operator
            if(this.currentOperand.innerHTML == "") {

                this.previousOperand.innerHTML = "";
                this.previousOperand.innerHTML = this.firstOperand + " " + operator;
            }else{

                this.firstOperand = this.currentOperand.innerHTML;
                this.currentOperand.innerHTML += " " + operator;
                this.previousOperand.innerHTML = this.currentOperand.innerHTML;
                this.currentOperand.innerHTML = "";
                this.calculationEnded = false;
            }
            
        }
    }

    //Performs calculations on operands after = button is clicked
    calculate(operator) {

        let result = 0;
        //Returns if there is not a second operand for calculation
        if(this.currentOperand.innerHTML == "") {
           
            return;
        }else{
        
            switch (operator) {
                
                case "+":
                    result = parseFloat(this.firstOperand) + parseFloat(this.currentOperand.innerHTML);
                    break;
                case "-":
                    result = parseFloat(this.firstOperand) - parseFloat(this.currentOperand.innerHTML);
                    break;
                case "X":
                    result = parseFloat(this.firstOperand) * parseFloat(this.currentOperand.innerHTML);
                    break;
                case "/":
                    result = parseFloat(this.firstOperand) / parseFloat(this.currentOperand.innerHTML);
                    break;
            }

            historyArray.push(previousOperand.innerHTML +  " " + currentOperand.innerHTML + " = " + result);
            this.calculationEnded = true;
            this.currentOperand.innerHTML = result;
            this.previousOperand.innerHTML = "";
            this.firstOperand = 0;
            document.getElementById("history-button").click();        
            document.getElementById("history-button").click();        

        }

    }

   
}




// Adds listeners for all calculator buttons

    const currentOperand = document.getElementById("current-operand");
    const previousOperand = document.getElementById("previous-operand");
    let operator = "";
    let historyArray = [];

    const calc = new Calculator(previousOperand, currentOperand);

    //Numbered buttons
    let numberButtons = document.querySelectorAll('.numeralBtn');
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            calc.concantNumber(button.innerHTML);
        })
    })

    //Operator buttons
    let operatorButtons = document.querySelectorAll('.operatorBtn');
    operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            operator = button.value;
            calc.operator(button.innerHTML);
        })
    })

    //Clear button
    let clearButtons = document.querySelectorAll('.clearBtn');
    clearButtons.forEach(button => {
        button.addEventListener('click', () => {
            calc.clear();
        })
    })

    //Decimal button
    let decimalButtons = document.querySelectorAll('.decimalBtn');
    decimalButtons.forEach(button => {
        button.addEventListener('click', () => {
            calc.concantNumber(button.innerHTML);
        })
    })

    //Equals button
    let equalsButtons = document.querySelectorAll('.equalsBtn');
    equalsButtons.forEach(button => {
        button.addEventListener('click', () => {
            calc.calculate(operator);
        })
    })


//Adds listener for collapsable menus Theme, Font and History
let collButton = document.getElementsByClassName("collapsible");
let historyBtn = document.getElementById("history-button");

for (let i = 0; i < collButton.length; i++) {

  collButton[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    
        if(content.previousElementSibling == historyBtn){
            content.innerHTML = "";
        }

    } else {
      content.style.display = "block";
      for(let j = 0; j < historyArray.length; j++) {
          let historyBtnTxt = document.getElementById("history-button").nextElementSibling;
          historyBtnTxt.innerHTML += historyArray[j] + "<br/>";
      }
    }
  });
}

//Adds event listener to change CSS variables to change font and theme
const themeButton = document.getElementsByClassName("style-button");
const root = document.querySelector(":root");
for (let i = 0; i < themeButton.length; i++) {
    themeButton[i].addEventListener("click", function () {

        switch (themeButton[i].innerHTML) {
            case "Default Theme":
                root.style.setProperty("--body-bg-color", "rgb(58, 6, 106)");
                root.style.setProperty("--nav-bg-color", "rgb(80, 9, 147)");
                root.style.setProperty("--number-color", "rgb(208, 191, 171)");
                root.style.setProperty("--operator-bg-color", "rgb(218, 165, 32)");
                root.style.setProperty("--operator-color", "rgb(80, 9, 147)");
                root.style.setProperty("--border", "2px solid grey");
                break;
            case "Patriotic":
                root.style.setProperty("--body-bg-color", "rgb(255, 255, 255)");
                root.style.setProperty("--nav-bg-color", "rgb(228, 24, 24)");
                root.style.setProperty("--number-color", "rgb(14, 14, 14)");
                root.style.setProperty("--operator-bg-color", "rgb(48, 32, 218)");
                root.style.setProperty("--operator-color", "rgb(246, 246, 5)");
                root.style.setProperty("--border", "2px solid black");
                break;
            case "Dark":
                root.style.setProperty("--body-bg-color", "rgb(0, 0, 0)");
                root.style.setProperty("--nav-bg-color", "rgb(87, 87, 87)");
                root.style.setProperty("--number-color", "rgb(255, 255, 255)");
                root.style.setProperty("--operator-bg-color", "rgb(87, 87, 87)");
                root.style.setProperty("--operator-color", "rgb(0, 0, 0)");
                root.style.setProperty("--border", "2px solid rgb(255, 255, 255)");
                break;
            case "Firefly":
                root.style.setProperty("--body-bg-color", "rgb(17, 113, 0)");
                root.style.setProperty("--nav-bg-color", "rgb(0, 221, 11)");
                root.style.setProperty("--number-color", "rgb(0, 0, 0)");
                root.style.setProperty("--operator-bg-color", "rgb(239, 252, 0)");
                root.style.setProperty("--operator-color", "rgb(17, 113, 0)");
                root.style.setProperty("--border", "2px solid rgb(255, 255, 255)");
                break;
            case "Default Font":
                root.style.setProperty("--main-font", "sans-serif");
                break;
            case "Times New Roman":
                root.style.setProperty("--main-font", "Times New Roman");
                break;
            case "Franklin Gothic":
                root.style.setProperty("--main-font", "Franklin Gothic Medium");
                break;
            case "Impact":
                root.style.setProperty("--main-font", "Impact");
                break;
        }
       
    })
}







