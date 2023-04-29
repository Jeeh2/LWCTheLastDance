import { LightningElement, track } from 'lwc';

export default class calculadora extends LightningElement {
    mostra = false;
    
    //track ele rasteia o valor
    @track firstNumber;
    @track secondNumber;
    resultValue;
    handleNumberOeChange(event) {
        this.firstNumber = parseInt(event.target.value);
    }
    handleNumberTwoChange(event) {
        this.secondNumber = parseInt(event.target.value);
    }
    adi() {
        this.resultValue = parseInt(this.firstNumber) + parseInt(this.secondNumber);
    }
    mult() {
        this.resultValue = this.firstNumber * this.secondNumber;
    }
    sub() {
        this.resultValue = this.firstNumber - this.secondNumber;
    }
    div() {
        
            if (this.firstNumber == 0 || this.secondNumber == 0) {
                alert("Não é pussivi")
            }
        this.resultValue = this.firstNumber / this.secondNumber;

    }



    handleOnClick() {

        this.mostra = !this.mostra;
    }

    handleClickClear() {
        this.resultValue = "";
        this.firstNumber = "";
        this.secondNumber = "";
    }

    
}
