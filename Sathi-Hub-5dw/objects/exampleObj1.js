function Car(brand, model)
{
    this.brand = brand 
    this. model = model  
}
const myCar = new Car('Ford', 'Fiesta');
myCar.brand; // Ford
myCar.model; // Fiesta

console.log(myCar.brand);
console.log(myCar.model);