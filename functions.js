
/**
 * Get Agepeople cal
 */
const AgePeople = (name, age) => {

    let man ='';

    if(age > 0 && age < 5){
        man = 'Baby';
    }else if(age >= 5 && age < 10){
        man = 'Kisor';
    }else if(age >= 10 && age < 18){
        man = 'Teenager';
    }else if(age >= 18 && age < 32){
        man = 'Youngman';
    }else if(age > 32){
        man = 'Oldman';
    }

    console.log(`
    Hi ${name}, you are a ${man}.
 `);

}



/**
 * Area Calculation
 */

const AreaCal = (type, length, width = null) => {

   let shape = '';
   let area  = '';

   switch(type){
       case 'r' :
           shape = 'Rectangle';
           area  = (length * width);
           break;

        case 's' :
            shape = 'Square';
            area  = (length * length);
            break;

        case 't' :
           shape = 'Triangle';
           area  = (.5 * length * width);
           break;

   }

   console.log(`
       The area of a ${shape} is ${area}.
   `);

}

/**
 * get Result Calculations
 */

const getGpa = (marks) => {

    let gpa;

    if(marks >= 0 && marks <= 32){
        gpa = 0;
    }else if(marks >= 33 && marks < 40){
        gpa = 1;
    }else if(marks >= 40 && marks < 50){
        gpa = 2;
    }else if(marks >= 50 && marks < 60){
        gpa = 3;
    }else if(marks >= 60 && marks < 70){
        gpa = 3.5;
    }else if(marks >= 70 && marks < 80){
        gpa = 4;
    }else if(marks >= 80 && marks <= 100){
        gpa = 5;
    }

    return gpa;
}

/**
 * get Resultcal
 */

const getGrade=(marks) => {

    let grade;

    if(marks >= 0 && marks < 33){
        grade = 'F';
    }else if(marks >= 33 && marks < 40){
        grade = 'D';
    }else if(marks >= 40 && marks < 50){
        grade = 'C';
    }else if(marks >= 50 && marks < 60){
        grade = 'B';
    }else if(marks >= 60 && marks < 70){
        grade = 'A-';
    }else if(marks >= 70 && marks < 80){
        grade = 'A';
    }else if(marks >= 80 && marks <= 100){
        grade = 'A+';
    }

    return grade;
}

/**
 * 
 * CGPA calculator
 */

const cgpa = (bn, en, math, phy, chem, bio, ict) =>{

    let total_gpa = (bn+en+math+phy+chem+bio+ict);

    let cgpa = total_gpa/7;

    if(bn == 0 || en == 0 || math == 0 || phy == 0 || chem == 0 || bio ==0|| ict == 0  ){
        return " You are failed ";
    }else {
        return `Your CGPA = ${cgpa} & Grade = ${totalGrade (cgpa)} `;
    }
}

/**
 * TotalGrade Calculator
 */

const totalGrade = (cgpa) =>{

    if(cgpa >= 0 && cgpa < 1){
        return 'F';
    }else if( cgpa >= 1 && cgpa < 2){
        return 'D';
    }else if( cgpa >= 2 && cgpa < 3){
        return 'C';
    }else if( cgpa >= 3 && cgpa < 3.5){
        return 'B';
    }else if( cgpa >= 3.5 && cgpa < 4){
        return 'A-';
    }else if( cgpa >= 4 && cgpa < 5){
        return 'A';
    }else if( cgpa == 5){
        return 'A+';
    }
}


/**
 * get Age calculations
 */
const AgeCal = (name, year) => {

    let age = 2022 - year

    if(age >= 18){

        console.log(`
            Hi ${name}, apnar bier boise apni biea korte paren.
        `);
    }else {
        console.log(`
            Hi ${name}, apnar bier boise hoini apni pore....., aiseen.
        `);
    }
}

/**
 * BMI Calculations
 */

const BMICal = (name, weight, height) => {

    let bmi = weight / ( height * height );

    if(bmi < 18.5){
        console.log(`Hi ${name}, your bmi is ${bmi}, therefore you are underweight`)
    }else if(bmi >= 18.5 && bmi < 24.9){
        console.log(`Hi ${name}, your bmi is ${bmi}, therefore you are normal`)
    }else if(bmi >= 25 && bmi < 29.9){
        console.log(`Hi ${name}, your bmi is ${bmi}, therefore you are overweight`)
    }else if(bmi >= 30){
        console.log(`Hi ${name}, your bmi is ${bmi}, therefore you are very overweight`)
    }

    
}

/**
 * get Currency Convert
 */

const CurrencyConvert = (amount, type) => {

    let rate = 0;

    switch (type){
        case 'USD' :
            rate = 86;
            break;

        case 'CAD' :
            rate = 67;
            break;

        case 'Pound' :
            rate = 114;
            break;
          
        case 'Euro' :
            rate = 93;
            break;    
    }

    console.log(`
         ${amount} ${type} = ${amount * rate} BDT
    `);
}

