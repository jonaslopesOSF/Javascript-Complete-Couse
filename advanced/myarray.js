class MyArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }
    get(index) {
      return this.data[index];
    }
    push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.data;
    }
    pop() {
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
    }
    deleteAtIndex(index) {
      const item = this.data[index];
      this.shiftItems(index);
      return item;
    }
    shiftItems(index) {
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      console.log(this.data[this.length - 1]);
      delete this.data[this.length - 1];
      this.length--;
    }
  }
  
  const myArray = new MyArray();
  myArray.push('hi');
  console.log(myArray);
  
  myArray.push('you');
  console.log(myArray);
  
  myArray.push('!');
  console.log(myArray);
  
  myArray.pop();
  console.log(myArray);
  
  myArray.deleteAtIndex(0);
  console.log(myArray);
  
  myArray.push('are');
  console.log(myArray);
  
  myArray.push('nice');
  console.log(myArray);
  
  myArray.shiftItems(0);
  console.log(myArray);
  
  myArray.get(0)
  
  