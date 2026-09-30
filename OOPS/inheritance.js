class Animal
{
    constructor(name, color)
    {
        this.name = name;
        this.color = color;
    }

    run()
    {
        console.log(this.name + " " + "is running")
    }

    shout()
    {
        console.log(this.name + " " + "is barking")
    }
    hide()
    {
        console.log(`${this.name} is hiding`)
    }
}

class Monkey extends Animal
{
    eatBanana()
    {
        console.log(this.name + " " + "is eating banana")
    }
}
let animalISaw = new Animal("Bruno", "White")
let monkeyInZoo = new Monkey("Chimp", "Orange")

monkeyInZoo.eatBanana()
animalISaw.shout()
monkeyInZoo.hide()