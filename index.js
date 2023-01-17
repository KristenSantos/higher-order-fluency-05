const alumni = [
{name:'Jarrit', job:'TPT',language:'JavaScript', age:23}, 
{name:'Stephanie', job:'JPMorgan',language:'JavaScript', age:24}, 
{name:'Devonte', job:'WW',language:'JavaScript', age:23}, 
{name:'Enmanuel', job:'Asana',language:'JavaScript', age:23},
{name:'Shemar', job:'SquareSpace',language:'JavaScript', age:23},
{name:'Cielo', job:'NYT',language:'JavaScript', age:22},
{name:'Carmen', job:'Marcy Lab School',language:'JavaScript', age:21},
{name:'Itzel', job:'Marcy Lab School',language:'JavaScript', age:22},
{name:'Ray', job:'Square Space',language:'JavaScript', age:21},
{name:'Jan', job:'Square Space',language:'JavaScript', age:22},
{name:'Uzma', job:'Thyme Care',language:'JavaScript', age:22}]

const averageAge = arrOfObj =>{
    const average = arrOfObj.reduce((a,alumn) => a + alumn.age,0 )/arrOfObj.length
    return Math.round(average)
}
console.log(averageAge(alumni));


const orderedAlumni = arrOfObj =>{
    const ordered = arrOfObj.sort((a,b) => b.age - a.age);
    return ordered
}
console.log(orderedAlumni(alumni));

const allUseJavaScript = arrOfObj => {
    return arrOfObj.every(alunm => alunm.language === "JavaScript");
}
console.log(allUseJavaScript(alumni));