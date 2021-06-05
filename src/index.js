import "./styles.css";
// let box1 = document.getElementById('box1');
// let box2 = document.getElementById('box2');
// let box3 = document.getElementById('box3');
// box1.onclick = () => {
//   box1.classList.add("active");
// };
// box2.onclick = () => {
//   box2.classList.add('active');
// };
// box3.onclick = () => {
//   box3.classList.add('active');
// };
let boxes = document.getElementsByClassName("box");
console.log(boxes);
let boxesArray = [...boxes];
console.log(boxesArray);
for(var i = 0; i < boxesArray.length; i ++){
  var box = boxesArray[i];
  box.onclick = (e) => {
    for (let j = 0; j < boxesArray.length; j++) {
      let _box = boxesArray[j];
      if (_box.classList.contains("active")) {
        _box.classList.remove("active");
      }
    }
    e.target.classList.add("active");
  }
}