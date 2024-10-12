const myArray = [1,2,3,4,5,6,7,8]
const marvels = ["Ironman","Hulk","Banner","Thor"]

const newOnes = new Array("Dr. Strange", "Black Panther", "Wanda","Ironman2","Hulk","Banner","Thor")

//console.log(myArray[0]);
//console.log(myArray[0]);
//console.log(marvels[2]);

//for (let i=0; i < newOnes.length;i++) {
//    console.log("Hero number " + (i+1) + " Name: " + newOnes[i]);
//}

newOnes.push("Loki");

console.log("A :" , newOnes);
newAvg = newOnes.slice(2,5);
console.log("B :" , newOnes);
console.log("newAvg :" , newAvg);

console.log(newOnes.splice(2,5));
console.log("C :" , newOnes);