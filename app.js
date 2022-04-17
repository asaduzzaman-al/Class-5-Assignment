
/**
 * get AgePeople cal
 */

// AgePeople('Asad', 22);

/**
 * Area Calculations
 */

// AreaCal ('t', 20, 30);

/**
 * get Result Calculations
 */

let name = prompt ('Student Name');
let classname = prompt ('Class');
let roll = prompt (' Student Roll');
let bn = Number(prompt ('Bangla'));
let en = Number(prompt ('English'));
let math = Number(prompt ('Math'));
let phy = Number(prompt ('Physics'));
let chem = Number(prompt ('Chemestry'));
let bio = Number(prompt ('Biology'));
let ict = Number(prompt ('Ict'));



console.log(`
        Name   : ${name}
        Class  : ${classname}
        Roll   : ${roll}
     
       Subjects      Marks        GPA               Grade 
       Bangla          ${bn}       ${getGpa(bn)}         ${getGrade(bn)}
       English         ${en}       ${getGpa(en)}        ${getGrade(en)}
       Math            ${math}       ${getGpa(math)}        ${getGrade(math)}
       Physics         ${phy}       ${getGpa(phy)}         ${getGrade(phy)}
       Chemestry       ${chem}       ${getGpa(chem)}       ${getGrade(chem)}
       Biology         ${bio}       ${getGpa(bio)}        ${getGrade(bio)}
       Ict             ${ict}       ${getGpa(ict)}        ${getGrade(ict)}
       =================================================================================
                                    cgpa = ${ cgpa(getGpa(bn), getGpa(en), getGpa(math), getGpa(phy), getGpa(chem), getGpa(bio), getGpa(ict)) }
`); 



/**
 * get Age Calculations
 */

// AgeCal ('Asad', 2000);

/**
 * get BMI Calculations
 */

// BMICal ('Asad', 50, 1.63);


/**
 * get Currency Convert
*/

// CurrencyConvert (200, 'USD');