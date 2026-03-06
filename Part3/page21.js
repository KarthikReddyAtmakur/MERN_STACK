const employee = {
    name : "Joy",
    basic : 3500,
    bonus:100,
    salary: function () {
        console.log(this.basic + this.bonus)
    }
}
employee.salary()