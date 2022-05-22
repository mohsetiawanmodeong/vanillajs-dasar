const Person = {
    firstName: "Uyo",
    lastName: "Paputungan",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    weight: 69,
    height: 173,
    weightIdeal: function () {
        const heightMinus100 = this.height - 100;
        return heightMinus100 - (heightMinus100 * 10) / 100;
    },
    needDiet: function () {
        const weightIdeal = this.weightIdeal();
        if (weightIdeal - 5 > this.weight)
            return "You need more protein, need more " + (weightIdeal - this.weight + " Kg");
        else if (weightIdeal + 5 < this.weight)
            return "You need mayo diet, need reduce weight: " + (this.weight - weightIdeal) + " Kg";
        return "Your are in good shape"
    }
};

console.log(Person.fullName());
console.log(Person.weightIdeal());
console.log(Person.needDiet());

// const countries = {
//     ID: {
//         province: ['jakarta', 'jawa timur', 'jawa barat'],
//         city: ['jakarta', 'surabaya', 'bandung']
//     },
//     MY: {},
//     TH: {
//         province: [],
//     }
// };

// console.log(countries?.TH?.province ?? "Not found");