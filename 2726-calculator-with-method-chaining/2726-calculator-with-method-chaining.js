class Calculator {
  
  /** 
   * @param {number} value
   */
  constructor(value) {
    this.state = {
      num:value
    }
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  add(value){
    //  console.log(this.state.num);
    this.state.num = this.state.num + value;
    return this;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value){
    //  console.log(this.state.num);
this.state.num = this.state.num - value;
    return this;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */  
  multiply(value) {
    //  console.log(this.state.num);
    this.state.num = this.state.num * value;
    return this;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    //  console.log(this.state.num);
    if(value == 0){
      throw "Division by zero is not allowed";
      // return this;
    }
    this.state.num = this.state.num / value;
    return this;
  }
  
  /** 
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    //  console.log(this.state.num);
    this.state.num = this.state.num ** value;
    return this;
  }
    
  /** 
   * @return {number}
   */
  getResult() {
    // console.log(this.state.num);
   return this.state.num;
  }
}