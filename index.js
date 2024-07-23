 var customerName = 'bob'

 //global scope
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase() 
}
console.log(upperCaseCustomerName)


var bestCustomer = undifined

function setBestCustomer(){
    bestCustomer = 'not bob'     
}
setBestCustomer()

 
function overwriteBestCustomer () {
    bestCustomer = 'maybe bob'
   }
overwriteBestCustomer()



function changeLeastFavouriteCustomer () {
    const leastFavoriteCustomer = 'tot'
      leastFavoriteCustomer = 'dan'
}
console.log(leastFavouriteCustomer)
