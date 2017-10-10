class Student extends Person {
    
    constructor(firstName, lastName, id, scores){
    super(firstName, lastName, id);
    this.grade = this.calculate(scores);
    }
    
    printPerson() {
    super.printPerson();
    console.log(`Grade: ${this.grade}`);
    }
  
    calculate(scores) {
    var sum = 0;
    for( var i = 0; i < scores.length; i++ ){
        sum += parseInt(scores[i], 10 ); //base 10 number.
    }
    var avg = sum/scores.length;
        if(avg>=40 &&  avg<55) return 'D';
    else if(avg>=55 &&  avg<70) return 'P';
    else if(avg>=70 &&  avg<80) return 'A';
    else if(avg>=80 &&  avg<90) return 'E';
    else if(avg>=90 &&  avg<=100) return 'O';
    else return 'T';
     
    }
}