// html structure --- Containerazation

// css postioning

// DataTypes {Arrays, Boolean, Integer, Object,Strings}
    // -- methods
    
let Drinks = ["Oleato", "Hot Coffees", "Hot Teas", "Hot Drinks","Frappuccinos Blended Beverages", "Cold Coffees","Iced Teas","Cold Drinks" ]

let Food = ["Hot Breakfast", "Oatmeal & Yogurt", "Bakery" ," Lunch" , "Snacks & Sweets"]

let homeCoffee = ["Whole Bean", "VIA Instant"]

let Merchandise = ["Cold Cups", "Tumblers" , "Mugs", "Water Bottles", "Other"]

let giftCards = ["Happy Birthday", "Thank You" ,"Traditional"]

let drinkPrice = {
    Tall: 4.25,
    Grande: 5.25,
    Venti: 7,
    Trenta: 10,
    noIce: true
}

let foodPrice = {
    Sandwich: 5.50,
    Wrap: 4.75,
    eggBites: 3.15,
    toGO: true

}

let homeCoffeePrice = {
    blondeRoast: 11,
    mediumRoast: 12,
    darkRoast:10,
    wholeBean: true
}

let merchandisePrice = {
    coldCup: 15,
    tumbler: 17,
    mug: 8, 
    waterBottle: 16
}

let giftCardType = {
    type1: "Happy Birthday",
    type2: "Thank You",
    type3:"Traditional"

}




// --------------------------------Functions-------------------------------------------


const getGiftCard = () =>{
     console.log(giftCardType) 
}

const gimmieMerch = () => {
    console.log(Merchandise,merchandisePrice)
}

const getSustenance = (type) =>{
    if(type === "Drinks"){
        console.log(Drinks,drinkPrice)
    }else if(type === "Food"){
        console.log(Food,foodPrice)
    }else{
    console.log(homeCoffee, homeCoffeePrice)
    }
    
}