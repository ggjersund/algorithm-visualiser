/*
* Insertion sort algorithm
* Sorts the array supplied in the constructor in increasing order.
*/
class InsertionSort {

  constructor(array) {
    this._array = array;
    this._currentIndex = 0;
    this._comparitorIndex = 0;
  }

  getCurrentIndex() {
    return this._currentIndex;
  }

  getComparitorIndex() {
    return this._comparitorIndex;
  }

  getArray() {
    return this._array;
  }

  iterate(steps=null) {
    // If steps = None run until algorithm finishes
    var i = 0;
    while (i < steps || steps === null) {
      // When comparitorIndex <= 0 increase current index, and continue
      if (this._comparitorIndex < 0) {
        // If currentIndex >= array.length return false meaning sorting is finished, otherwise update the currentIndex
        if (this._currentIndex >= this._array.length) {
          return false;
        } else {
          this._currentIndex++;
          this._comparitorIndex = this._currentIndex - 1;
        }
      }
      // Perform comparison
      if (this._array[this._comparitorIndex+1] < this._array[this._comparitorIndex]) {
        this._array[this._comparitorIndex+1] = this._array[this._comparitorIndex];
        this._array[this._comparitorIndex] = value;
      }
      // Decrement the comparitor index
      this._comparitorIndex--;
      i++;
    }
    // Return true when iteration is completed
    return true;
  }
}

/*
For testing purposes

array = new InsertionSort([2,1,3,1,2]);
array.iterate();
console.log(array.array);

array = new InsertionSort([1,2,3,4,5]);
array.iterate();
console.log(array.array);


array = new InsertionSort([5,4,3,2,1]);
array.iterate();
console.log(array.array);
*/
