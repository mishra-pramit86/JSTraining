//Accessing private properties outside the class will throw an error.
/*
class Person {

    #age = 38;

    displayAge() {
        console.log(this.#age);
    }
}

const p1 = new Person();
console.log(p1.#age); // This will throw error
*/

//Accessing private properties inside the class will work fine.

class Person {

    #age = 38;

    displayAge() {
        console.log(this.#age);
    }
}

const p1 = new Person();
p1.displayAge(); // This will work fine and print 38

//Private Methods

class Login
{
    #validateUserName(userName)
    {
        if(userName.length < 5)
        {
            return false
        }
        return true
    }

    login(userName)
    {
        if(this.#validateUserName(userName))
        {
            console.log('Login successfull')
        }
        else
        {
            console.log('Invalid Username');
        }
    }
}
const user = new Login()
user.login('Ravi')

