// Object Method Using an Array Property

const student = {
    name: 'Pramit',

    marks: [85, 90, 78, 92, 88],

    calcAverage: function()
    {
        let total = 0

        for(let i = 0; i < this.marks.length; i++)
        {
            total = total + this.marks[i];
        }
        return total / this.marks.length;
    }
};
console.log(student.calcAverage());



