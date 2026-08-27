/*
const day = 'saturday';

switch(day)
{
    case 'monday':
        console.log("Plan course structure");
        console.log("Go to javascript meeting");
        break;
    case 'tuesday':
        console.log('Prepare theory');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Practise javascript code');
        break;
    case 'friday':
        console.log("Prepare for a short getaway");
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy the weekend !");
        break;

}
*/
// Grade calculator for a student using switch case

let marks = 70;

switch(true)
{
    case marks >= 90:
        console.log("Grade A- Excellent performance");
        break;
    case marks >= 80:
        console.log("Grade B - Very Good performance");
        break;
    case marks >= 70:
        console.log("Grade C - Good Performance");
        break;
    case marks >= 60:
        console.log("Grade C+ - Needs improvement");
        break;
    case marks <= 60:
        console.log("Grade D - Failed");
        break;    

}