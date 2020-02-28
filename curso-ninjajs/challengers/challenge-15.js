(function(){
    function Person(name, lastName, age){
        this.name = name;
        this.lastName = lastName;
        this.age = age;

        this.getFullName = function getFullName(){
            return this.name + ' ' + this.lastName
        }

        this.getAge = function getAge(){
            return this.age
        }

        this.addAge = function addAge(){
            this.age+=arguments[0];
            return this;
        }
    }

    var joao = new Person('Joao', 'Paulo', 19);
    var maria = new Person('Maria', 'Bah', 55);
    var ana = new Person('Ana', 'Bueno', 199);

    console.log(joao);
    console.log(maria);
    console.log(ana);

    console.log(joao.getFullName());
    console.log(joao.getAge());
    console.log(joao.addAge(9999));

    console.log('nome: ' + joao.getFullName() + ' tem: ' + joao.getAge() + ' anos!');

})();