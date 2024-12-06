class OrangeTree {
  constructor(age = 0, isAlive = true, height = 0, fruits = 0) {
    this._age = age
    this._isAlive = isAlive
    this._height = height
    this._fruits = fruits
  }
  //Getter
  get age() {
    return this._age
  }
  
  get height() {
    return this._height
  }

  get fruits() {
    return this._fruits
  }

  get isDead() {
    return !this._isAlive
  }

  //checkIfDead
  checkIfDead(){
    //Conditions de mort : > 50 ans, proba qui augmente chaque année, < 100 ans
    if(this._age > 50){
        let probability = 1
        if(Math.random() < probability * (this._age - 50) / 100){
            this._isAlive = false
        }}
  }

  //heigthOfTree
  heightOfTree(){
    if(this._age <= 10){
        this._height += 1
    }
  }

  //oneYearPasses
  oneYearPasses(){
    this._age += 1
    this.heightOfTree()
    
    //Gérer le nombre de fruits
    if(this._age > 5 && this._age < 10){
        this._fruits = 100
    }else if(this._age >= 10 && this._age < 15){
        this._fruits = 200
    }else{
        this._fruits = 0
    }

    this.checkIfDead()
  }

  //pickAFruit
  pickAFruit(){
    if(this._fruits > 0){
        this._fruits -= 1
    }
  }


  //howManyFruits
  get howManyFruits(){
    return this._fruits
  }
}

/* Création d'un arbre
const arbre = new OrangeTree();

// Simulation du passage de plusieurs années
for (let i = 0; i < 100; i++) {
    arbre.oneYearPasses(); // Passe d'une année
    console.log(`Année ${i + 1} : Hauteur = ${arbre._height}m, Vivant : ${arbre._isAlive}`);
}
*/

module.exports = OrangeTree; // Export the class for testing
