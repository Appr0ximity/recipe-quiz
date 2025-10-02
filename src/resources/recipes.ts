interface Ingredient {
    item: string,
    measure: string
}

interface Drink {
    id: number,
    name: string,
    numberOfIngredients: number,
    ingredients: Ingredient[],
    garnish?: string,
    glass: string,
    method: string,
    ice: String
}

export const cocktails: Drink[] = [
  {
    id: 1,
    name: "Gin and Tonic",
    numberOfIngredients: 2,
    ingredients: [
      { item: "Gin", measure: "40 ml" },
      { item: "Tonic", measure: "Fill" }
    ],
    garnish: "Lime Wedge",
    glass: "Highball",
    method: "Build",
    ice: "Cubed"
  },
  {
    id: 2,
    name: "Screwdriver",
    numberOfIngredients: 2,
    ingredients: [
      { item: "Vodka", measure: "40 ml" },
      { item: "Orange Juice", measure: "Fill" }
    ],
    garnish: "Lemon|Lime wedge|None",
    glass: "Highball",
    method: "Build",
    ice: "Cubed"
  },
  {
    id: 3,
    name: "Cuba Libre",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Light Rum", measure: "40 ml" },
      { item: "Fresh Lime Juice", measure: "10 ml" },
      { item: "Coca Cola", measure: "Fill" }
    ],
    garnish: "Lime wedge",
    glass: "Highball",
    method: "Build",
    ice: "Cubed"
  },
  {
    id: 4,
    name: "Tequila Sunrise",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Tequila", measure: "40 ml" },
      { item: "Orange Juice", measure: "Fill" },
      { item: "Grenadine|Pomogranate Syrup", measure: "10 ml" }
    ],
    garnish: "None",
    glass: "Highball",
    method: "Build and Sink",
    ice: "Cubed"
  },
  {
    id: 5,
    name: "Rusty Nail",
    numberOfIngredients: 2,
    ingredients: [
      { item: "Scotch Whisky", measure: "30 ml" },
      { item: "Drambuie|Herbal Liqueur", measure: "30 ml" }
    ],
    garnish: "Lemon Zest",
    glass: "Rocks",
    method: "Build",
    ice: "Cubed"
  },
  {
    id: 6,
    name: "Godfather",
    numberOfIngredients: 2,
    ingredients: [
      { item: "Scotch Whisky", measure: "30 ml" },
      { item: "Amaretto|Almond Liqueur", measure: "30 ml" }
    ],
    garnish: "None",
    glass: "Rocks",
    method: "Build",
    ice: "Cubed"
  },
  {
    id: 7,
    name: "Black Russian",
    numberOfIngredients: 2,
    ingredients: [
      { item: "Vodka", measure: "40 ml" },
      { item: "Coffee Liqueur", measure: "20 ml" }
    ],
    garnish: "None",
    glass: "Rocks",
    method: "Build",
    ice: "Cubed"
  },
  {
    id: 8,
    name: "White Russian",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Vodka", measure: "40 ml" },
      { item: "Coffee Liqueur", measure: "20 ml" },
      { item: "Milk", measure: "Fill" }
    ],
    garnish: "None",
    glass: "Rocks",
    method: "Build",
    ice: "Cubed"
  },
  {
    id: 9,
    name: "Moscow Mule",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Vodka", measure: "40 ml" },
      { item: "Fresh Lime Juice", measure: "20 ml" },
      { item: "Ginger Beer", measure: "Fill" }
    ],
    garnish: "Lime wedge",
    glass: "Highball|Copper Mug",
    method: "Build",
    ice: "Cubed"
  },
  {
    id: 10,
    name: "Woo Woo",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Vodka", measure: "20 ml" },
      { item: "Peach Liqueur", measure: "20 ml" },
      { item: "Cranberry Juice", measure: "Fill" }
    ],
    garnish: "Lime Wedge",
    glass: "Highball",
    method: "Build",
    ice: "Cubed"
  },
  {
    id: 11,
    name: "Americano",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Sweet Vermouth", measure: "30 ml" },
      { item: "Campari", measure: "30 ml" },
      { item: "Soda Water", measure: "30 ml" }
    ],
    garnish: "Orange zest|Orange slice",
    glass: "Rocks",
    method: "Build and Stir",
    ice: "Cubed"
  },
  {
    id: 12,
    name: "Screaming Orgasm",
    numberOfIngredients: 5,
    ingredients: [
      { item: "Vodka", measure: "10 ml" },
      { item: "Coffee Liqueur", measure: "10 ml" },
      { item: "Amaretto", measure: "10 ml" },
      { item: "Baileys", measure: "10 ml" },
      { item: "Milk", measure: "40 ml" }
    ],
    garnish: "None",
    glass: "Rocks",
    method: "Shake and Strain",
    ice: "Cubed"
  },
  {
    id: 13,
    name: "El Diablo",
    numberOfIngredients: 4,
    ingredients: [
      { item: "Tequila", measure: "30 ml" },
      { item: "Creme de Cassis", measure: "10 ml" },
      { item: "Fresh Lime Juice", measure: "10 ml" },
      { item: "Ginger Ale", measure: "Fill" }
    ],
    garnish: "Lime Wedge",
    glass: "Highball",
    method: "Build",
    ice: "Cubed"
  },
  {
    id: 14,
    name: "Sex on the Beach",
    numberOfIngredients: 4,
    ingredients: [
      { item: "Vodka", measure: "20 ml" },
      { item: "Peach Liqueur", measure: "20 ml" },
      { item: "Cranberry Juice", measure: "Fill equal parts" },
      { item: "Orange Juice", measure: "Fill equal parts" }
    ],
    garnish: "None",
    glass: "Highball",
    method: "Build",
    ice: "Cubed"
  },
  {
    id: 15,
    name: "Cosmopolitan",
    numberOfIngredients: 4,
    ingredients: [
      { item: "Citron Vodka", measure: "40 ml" },
      { item: "Triple Sec", measure: "20 ml" },
      { item: "Fresh Lime Juice", measure: "10 ml" },
      { item: "Cranberry Juice", measure: "30 ml" }
    ],
    garnish: "Orange Zest",
    glass: "Chilled Martini|Coupe",
    method: "Shake and Fine Strain",
    ice: "None"
  },
  {
    id: 16,
    name: "Daiquiri",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Light Rum", measure: "60 ml" },
      { item: "Fresh Lime Juice", measure: "30 ml" },
      { item: "Sugar Syrup", measure: "15 ml" }
    ],
    garnish: "None",
    glass: "Chilled Martini|Coupe",
    method: "Shake and Fine Strain",
    ice: "None"
  },
  {
    id: 17,
    name: "French Martini",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Vodka", measure: "40 ml" },
      { item: "Chambord|Raspberry Liqueur", measure: "20 ml" },
      { item: "Pineapple Juice", measure: "40 ml" }
    ],
    garnish: "1 Raspberry",
    glass: "Chilled Martini|Coupe",
    method: "Shake and Fine Strain",
    ice: "None"
  },
  {
    id: 18,
    name: "Lynchburg Lemonade",
    numberOfIngredients: 5,
    ingredients: [
      { item: "Jack Daniels", measure: "40 ml" },
      { item: "Triple Sec", measure: "20 ml" },
      { item: "Fresh Lemon Juice", measure: "20 ml" },
      { item: "Sugar Syrup", measure: "10 ml" },
      { item: "Lemonade", measure: "Top" }
    ],
    garnish: "Lemon Wedge",
    glass: "Highball",
    method: "Shake and Strain",
    ice: "Cubed"
  },
  {
    id: 19,
    name: "Horse's Neck",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Aromatic Bitters", measure: "2 Dashes" },
      { item: "Bourbon", measure: "40 ml" },
      { item: "Ginger Ale", measure: "Fill" }
    ],
    garnish: "Lemon Spiral",
    glass: "Highball",
    method: "Build",
    ice: "Cubed"
  },
  {
    id: 20,
    name: "Tom Collins",
    numberOfIngredients: 4,
    ingredients: [
      { item: "Gin", measure: "60 ml" },
      { item: "Fresh Lemon Juice", measure: "30 ml" },
      { item: "Sugar Syrup", measure: "15 ml" },
      { item: "Soda Water", measure: "Top" }
    ],
    garnish: "Lemon Wedge",
    glass: "Highball",
    method: "Shake and Strain",
    ice: "Cubed"
  },
  {
    id: 21,
    name: "Long Island Iced Tea",
    numberOfIngredients: 8,
    ingredients: [
      { item: "Vodka", measure: "20 ml" },
      { item: "Light Rum", measure: "20 ml" },
      { item: "Gin", measure: "20 ml" },
      { item: "Tequila", measure: "20 ml" },
      { item: "Triple Sec", measure: "20 ml" },
      { item: "Fresh Lemon Juice", measure: "20 ml" },
      { item: "Sugar Syrup", measure: "10 ml" },
      { item: "Coca Cola", measure: "Top" }
    ],
    garnish: "Lemon Wedge",
    glass: "Highball",
    method: "Shake and Strain",
    ice: "Cubed"
  },
  {
    id: 22,
    name: "Dry Martini",
    numberOfIngredients: 2,
    ingredients: [
      { item: "Dry Vermouth", measure: "1 Barspoon" },
      { item: "Gin or Vodka", measure: "60 ml" }
    ],
    garnish: "Olives|Lemon Zest",
    glass: "Chilled Martini|Coupe",
    method: "Stir and Julep Strain",
    ice: "None"
  },
  {
    id: 23,
    name: "Manhattan (Sweet)",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Aromatic Bitters", measure: "2 Dashes" },
      { item: "Sweet Vermouth", measure: "20 ml" },
      { item: "Bourbon", measure: "60 ml" }
    ],
    garnish: "1 Cherry",
    glass: "Chilled Martini|Coupe",
    method: "Stir and Julep Strain",
    ice: "None"
  },
  {
    id: 24,
    name: "Rob Roy",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Aromatic Bitters", measure: "2 Dashes" },
      { item: "Sweet Vermouth", measure: "20 ml" },
      { item: "Scotch Whisky", measure: "60 ml" }
    ],
    garnish: "1 Cherry",
    glass: "Chilled Martini|Coupe",
    method: "Stir and Julep Strain",
    ice: "None"
  },
  {
    id: 25,
    name: "Paloma",
    numberOfIngredients: 5,
    ingredients: [
      { item: "Tequila", measure: "60 ml" },
      { item: "Pink Grapefruit Juice", measure: "60 ml" },
      { item: "Fresh Lime Juice", measure: "10 ml" },
      { item: "Sugar Syrup", measure: "10 ml" },
      { item: "Soda Water", measure: "Top" }
    ],
    garnish: "Salt Rim and Grapefruit Slice",
    glass: "Highball",
    method: "Shake and Strain",
    ice: "Cubed"
  },
  {
    id: 26,
    name: "Margarita",
    numberOfIngredients: 4,
    ingredients: [
      { item: "Tequila", measure: "40 ml" },
      { item: "Triple Sec", measure: "20 ml" },
      { item: "Fresh Lime Juice", measure: "30 ml" },
      { item: "Sugar Syrup", measure: "10 ml" }
    ],
    garnish: "Salt Rim",
    glass: "Chilled Martini|Coupe",
    method: "Shake and Fine Strain",
    ice: "None"
  },
  {
    id: 27,
    name: "Sidecar",
    numberOfIngredients: 4,
    ingredients: [
      { item: "Cognac", measure: "40 ml" },
      { item: "Triple Sec", measure: "20 ml" },
      { item: "Fresh Lemon Juice", measure: "30 ml" },
      { item: "Sugar Syrup", measure: "10 ml" }
    ],
    garnish: "Sugar Rim",
    glass: "Chilled Martini|Coupe",
    method: "Shake and Fine Strain",
    ice: "None"
  },
  {
    id: 28,
    name: "Amaretto Sour",
    numberOfIngredients: 4,
    ingredients: [
      { item: "Aromatic Bitters", measure: "2 Dashes" },
      { item: "Amaretto", measure: "60 ml" },
      { item: "Fresh Lemon Juice", measure: "30 ml" },
      { item: "Sugar Syrup", measure: "10 ml" }
    ],
    garnish: "Lemon Wedge and Cherry",
    glass: "Rocks",
    method: "Dry Shake, Shake and Strain",
    ice: "Cubed"
  },
  {
    id: 29,
    name: "Whiskey Sour",
    numberOfIngredients: 4,
    ingredients: [
      { item: "Aromatic Bitters", measure: "2 Dashes" },
      { item: "Bourbon", measure: "60 ml" },
      { item: "Fresh Lemon Juice", measure: "30 ml" },
      { item: "Sugar Syrup", measure: "15 ml" }
    ],
    garnish: "Orange Zest and Cherry",
    glass: "Sour Glass|Rocks",
    method: "Dry Shake, Shake and Strain",
    ice: "None|Cubed"
  },
  {
    id: 30,
    name: "Clover Club",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Raspberry Puree", measure: "15 ml" },
      { item: "Gin", measure: "60 ml" },
      { item: "Fresh Lemon Juice", measure: "30 ml" }
    ],
    garnish: "1 Raspberry",
    glass: "Chilled Martini|Coupe",
    method: "Dry Shake, Shake and Fine Strain",
    ice: "None"
  },
  {
    id: 31,
    name: "Bramble",
    numberOfIngredients: 4,
    ingredients: [
      { item: "Gin", measure: "40 ml" },
      { item: "Fresh Lemon Juice", measure: "20 ml" },
      { item: "Sugar Syrup", measure: "10 ml" },
      { item: "Creme de Mure", measure: "20 ml (Float)" }
    ],
    garnish: "Lemon Wedge and 2 Blackberries",
    glass: "Rocks",
    method: "Shake, Strain and Float",
    ice: "Crushed"
  },
  {
    id: 32,
    name: "Mojito",
    numberOfIngredients: 5,
    ingredients: [
      { item: "Lime Wedges", measure: "4 Wedges" },
      { item: "Sugar Syrup", measure: "20 ml" },
      { item: "Mint Leaves", measure: "8-12" },
      { item: "Light Rum", measure: "40 ml" },
      { item: "Soda", measure: "Fill" }
    ],
    garnish: "Mint Sprig",
    glass: "Highball",
    method: "Muddle, Bash, Build and Churn",
    ice: "Crushed"
  },
  {
    id: 33,
    name: "Caipirinha",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Lime Wedges", measure: "6 Wedges" },
      { item: "Sugar Syrup", measure: "20 ml" },
      { item: "Cachaca", measure: "60 ml" }
    ],
    garnish: "Lime Wedge",
    glass: "Rocks",
    method: "Muddle, Build and Churn",
    ice: "Crushed"
  },
  {
    id: 34,
    name: "Mint Julep",
    numberOfIngredients: 4,
    ingredients: [
      { item: "Bittered Sugar Cube", measure: "1 Cube" },
      { item: "Soda Water", measure: "1 Barspoon" },
      { item: "Mint Leaves", measure: "8-12 Leaves" },
      { item: "Bourbon", measure: "60 ml" }
    ],
    garnish: "Mint Sprig",
    glass: "Rocks|Julep",
    method: "Soak, Muddle, Bash, Build and Churn",
    ice: "Crushed"
  },
  {
    id: 35,
    name: "Gin Basil Smash",
    numberOfIngredients: 4,
    ingredients: [
      { item: "Basil Leaves", measure: "8-12 Leaves" },
      { item: "Gin", measure: "60 ml" },
      { item: "Fresh Lemon Juice", measure: "30 ml" },
      { item: "Sugar Syrup", measure: "15 ml" }
    ],
    garnish: "Basil Leaf",
    glass: "Rocks",
    method: "Shake and Fine Strain",
    ice: "Cubed"
  },
  {
    id: 36,
    name: "Southside",
    numberOfIngredients: 4,
    ingredients: [
      { item: "Mint Leaves", measure: "8-12 Leaves" },
      { item: "Gin", measure: "60 ml" },
      { item: "Fresh Lime Juice", measure: "30 ml" },
      { item: "Sugar Syrup", measure: "15 ml" }
    ],
    garnish: "Single Mint Leaf",
    glass: "Chilled Martini|Coupe",
    method: "Shake and Fine Strain",
    ice: "None"
  },
  {
    id: 37,
    name: "B52",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Coffee Liqueur", measure: "20 ml" },
      { item: "Baileys", measure: "20 ml" },
      { item: "Triple Sec", measure: "20 ml" }
    ],
    garnish: "None",
    glass: "Shooter",
    method: "Layer in Order",
    ice: "None"
  },
  {
    id: 38,
    name: "Pornstar Martini",
    numberOfIngredients: 5,
    ingredients: [
      { item: "Vodka", measure: "40 ml" },
      { item: "Passionfruit Liqueur", measure: "20 ml" },
      { item: "Passionfruit Puree", measure: "20 ml" },
      { item: "Fresh Lime Juice", measure: "20 ml" },
      { item: "Vanilla Syrup", measure: "10 ml" }
    ],
    garnish: "Dehydrated lime wheel",
    glass: "Chilled Martini|Coupe",
    method: "Shake and Fine Strain",
    ice: "None"
  },
  {
    id: 39,
    name: "Bellini",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Peach Puree", measure: "10 ml" },
      { item: "Peach Liqueur", measure: "10 ml" },
      { item: "Prosecco", measure: "Fill" }
    ],
    garnish: "None",
    glass: "Champagne Flute",
    method: "Build",
    ice: "None"
  },
  {
    id: 40,
    name: "French 75",
    numberOfIngredients: 4,
    ingredients: [
      { item: "Gin", measure: "40 ml" },
      { item: "Fresh Lemon Juice", measure: "20 ml" },
      { item: "Sugar Syrup", measure: "10 ml" },
      { item: "Champagne", measure: "Top" }
    ],
    garnish: "Lemon Zest",
    glass: "Champagne Flute",
    method: "Shake and Fine Strain",
    ice: "None"
  },
  {
    id: 41,
    name: "Last Word",
    numberOfIngredients: 4,
    ingredients: [
      { item: "Gin", measure: "20 ml" },
      { item: "Maraschino", measure: "20 ml" },
      { item: "Fresh Lime Juice", measure: "20 ml" },
      { item: "Green Chartreuse", measure: "20 ml" }
    ],
    garnish: "Cherry",
    glass: "Chilled Martini|Coupe",
    method: "Shake and Fine Strain",
    ice: "None"
  },
  {
    id: 42,
    name: "Naked and Famous",
    numberOfIngredients: 4,
    ingredients: [
      { item: "Mezcal", measure: "20 ml" },
      { item: "Aperol", measure: "20 ml" },
      { item: "Yellow Chartreuse", measure: "20 ml" },
      { item: "Fresh Lime juice", measure: "20 ml" }
    ],
    garnish: "None",
    glass: "Chilled Martini|Coupe",
    method: "Shake and Fine Strain",
    ice: "None"
  },
  {
    id: 43,
    name: "Old Fashioned",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Aromatic Bitters", measure: "2 Dashes" },
      { item: "Bourbon", measure: "60 ml" },
      { item: "Sugar Syrup", measure: "10 ml" }
    ],
    garnish: "Orange Zest",
    glass: "Rocks",
    method: "Stir and Julep Strain",
    ice: "Cubed"
  },
  {
    id: 44,
    name: "Dark and Stormy",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Fresh Lime Juice", measure: "20 ml" },
      { item: "Ginger Beer", measure: "Fill" },
      { item: "Dark Rum", measure: "40 ml (Float)" }
    ],
    garnish: "Lime Wedge",
    glass: "Highball",
    method: "Build and Float",
    ice: "Cubed"
  },
  {
    id: 45,
    name: "Hemingway Daiquiri",
    numberOfIngredients: 4,
    ingredients: [
      { item: "Light Rum", measure: "50 ml" },
      { item: "Maraschino", measure: "10 ml" },
      { item: "Fresh Lime Juice", measure: "20 ml" },
      { item: "Grapefruit Juice", measure: "20 ml" }
    ],
    garnish: "1 Cherry",
    glass: "Chilled Martini|Coupe",
    method: "Shake and Fine Strain",
    ice: "None"
  },
  {
    id: 46,
    name: "White Lady",
    numberOfIngredients: 4,
    ingredients: [
      { item: "Gin", measure: "40 ml" },
      { item: "Triple Sec", measure: "20 ml" },
      { item: "Fresh Lemon Juice", measure: "30 ml" },
      { item: "Sugar Syrup", measure: "10 ml" }
    ],
    garnish: "Lemon Zest",
    glass: "Chilled Martini|Coupe",
    method: "Shake and Fine Strain",
    ice: "None"
  },
  {
    id: 47,
    name: "Bloody Mary",
    numberOfIngredients: 5,
    ingredients: [
      { item: "Vodka", measure: "40 ml" },
      { item: "Fresh Lemon Juice", measure: "10 ml" },
      { item: "Bloody Mary Pre-Batch", measure: "120 ml" },
      { item: "Worcestershire Sauce", measure: "30 ml" },
      { item: "Tabasco", measure: "10 ml" }
    ],
    garnish: "Celery Stick",
    glass: "Highball",
    method: "Roll",
    ice: "Cubed|None"
  },
  {
    id: 48,
    name: "Negroni",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Sweet Vermouth", measure: "20 ml" },
      { item: "Campari", measure: "20 ml" },
      { item: "Gin", measure: "20 ml" }
    ],
    garnish: "Orange zest or Orange slice",
    glass: "Rocks",
    method: "Stir and Julep Strain",
    ice: "Cubed"
  },
  {
    id: 49,
    name: "Continental Sour",
    numberOfIngredients: 4,
    ingredients: [
      { item: "Bourbon", measure: "60 ml" },
      { item: "Fresh Lemon Juice", measure: "30 ml" },
      { item: "Sugar Syrup", measure: "15 ml" },
      { item: "Ruby Port", measure: "10 ml (Float)" }
    ],
    garnish: "Orange Zest",
    glass: "Rocks",
    method: "Dry Shake, Shake, Strain and Float",
    ice: "Cubed"
  },
  {
    id: 50,
    name: "Aperol Spritz",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Prosecco", measure: "60 ml" },
      { item: "Aperol", measure: "40 ml" },
      { item: "Soda Water", measure: "20 ml" }
    ],
    garnish: "Orange Slice",
    glass: "Rocks|Wine Glass",
    method: "Build in Order",
    ice: "Cubed"
  },
  {
    id: 51,
    name: "Mimosa",
    numberOfIngredients: 2,
    ingredients: [
      { item: "Orange Juice", measure: "1 Part" },
      { item: "Champagne", measure: "1 Part" }
    ],
    garnish: "None",
    glass: "Champagne Flute",
    method: "Build",
    ice: "None"
  },
  {
    id: 52,
    name: "Espresso Martini",
    numberOfIngredients: 4,
    ingredients: [
      { item: "Vodka", measure: "40 ml" },
      { item: "Coffee Liqueur", measure: "20 ml" },
      { item: "Espresso", measure: "1 Shot" },
      { item: "Sugar Syrup", measure: "10 ml" }
    ],
    garnish: "3 Coffee Beans",
    glass: "Chilled Martini|Coupe",
    method: "Shake and Fine Strain",
    ice: "None"
  },
  {
    id: 53,
    name: "Brandy Alexander",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Brandy", measure: "40 ml" },
      { item: "Dark Cacao Liqueur", measure: "20 ml" },
      { item: "Milk", measure: "40 ml" }
    ],
    garnish: "Grated Nutmeg",
    glass: "Chilled Martini|Coupe",
    method: "Shake and Fine Strain",
    ice: "None"
  },
  {
    id: 54,
    name: "Mai Tai",
    numberOfIngredients: 5,
    ingredients: [
      { item: "Dark Rum", measure: "40 ml" },
      { item: "Triple Sec", measure: "10 ml" },
      { item: "Fresh Lime Juice", measure: "20 ml" },
      { item: "Orgeat Syrup", measure: "10 ml" },
      { item: "Overproof Rum", measure: "10 ml (Float)" }
    ],
    garnish: "Mint Sprig",
    glass: "Rocks|Tiki Mug",
    method: "Shake, Strain and Float",
    ice: "Crushed"
  },
  {
    id: 55,
    name: "Kir Royal",
    numberOfIngredients: 2,
    ingredients: [
      { item: "Creme de Cassis", measure: "20 ml" },
      { item: "Champagne", measure: "Fill" }
    ],
    garnish: "None",
    glass: "Champagne Flute",
    method: "Build",
    ice: "None"
  },
  {
    id: 56,
    name: "Classic Champagne Cocktail",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Bittered Sugar Cube", measure: "1 Cube" },
      { item: "Cognac", measure: "20 ml" },
      { item: "Champagne", measure: "Fill" }
    ],
    garnish: "None",
    glass: "Champagne Flute",
    method: "Soak and Build",
    ice: "None"
  },
  {
    id: 57,
    name: "Blood and Sand",
    numberOfIngredients: 4,
    ingredients: [
      { item: "Scotch Whisky", measure: "20 ml" },
      { item: "Sweet Vermouth", measure: "20 ml" },
      { item: "Cherry Brandy", measure: "20 ml" },
      { item: "Orange Juice", measure: "20 ml" }
    ],
    garnish: "Orange Zest",
    glass: "Chilled Martini|Coupe",
    method: "Shake and Fine Strain",
    ice: "None"
  },
  {
    id: 58,
    name: "Apple Martini",
    numberOfIngredients: 4,
    ingredients: [
      { item: "Vodka", measure: "40 ml" },
      { item: "Apple Liqueur", measure: "20 ml" },
      { item: "Fresh Lemon Juice", measure: "30 ml" },
      { item: "Sugar Syrup", measure: "10 ml" }
    ],
    garnish: "Lemon Zest",
    glass: "Chilled Martini|Coupe",
    method: "Shake and Fine Strain",
    ice: "None"
  },
  {
    id: 59,
    name: "Kamikaze",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Vodka", measure: "20 ml" },
      { item: "Triple Sec", measure: "10 ml" },
      { item: "Fresh Lime Juice", measure: "10 ml" }
    ],
    garnish: "None",
    glass: "Shooter",
    method: "Shake and Fine Strain",
    ice: "None"
  },
  {
    id: 60,
    name: "Singapore Sling",
    numberOfIngredients: 8,
    ingredients: [
      { item: "Aromatic Bitters", measure: "1 Dash" },
      { item: "Grenadine", measure: "1 Dash" },
      { item: "Benedictine D.O.M", measure: "5 ml" },
      { item: "Triple Sec", measure: "5 ml" },
      { item: "Cherry Brandy", measure: "10 ml" },
      { item: "Fresh Lime Juice", measure: "10 ml" },
      { item: "Gin", measure: "20 ml" },
      { item: "Pineapple Juice", measure: "80 ml" }
    ],
    garnish: "Pineapple Wedge and Cherry",
    glass: "Highball|Sling",
    method: "Shake and Strain",
    ice: "Cubed"
  },
  {
    id: 61,
    name: "Gimlet",
    numberOfIngredients: 2,
    ingredients: [
      { item: "Gin", measure: "60 ml" },
      { item: "Lime Cordial", measure: "10 ml" }
    ],
    garnish: "Lime Zest",
    glass: "Chilled Martini|Coupe",
    method: "Stir and Julep Strain",
    ice: "None"
  },
  {
    id: 62,
    name: "Martinez",
    numberOfIngredients: 4,
    ingredients: [
      { item: "Orange Bitters", measure: "2 Dashes" },
      { item: "Maraschino", measure: "1 Barspoon" },
      { item: "Sweet Vermouth", measure: "20 ml" },
      { item: "Gin", measure: "60 ml" }
    ],
    garnish: "Lemon Zest",
    glass: "Chilled Martini|Coupe",
    method: "Stir and Julep Strain",
    ice: "None"
  },
  {
    id: 63,
    name: "Sazerac",
    numberOfIngredients: 4,
    ingredients: [
      { item: "Absinthe", measure: "Rinse" },
      { item: "Peychaud's Bitters", measure: "3 Dashes" },
      { item: "Cognac or Rye", measure: "60 ml" },
      { item: "Sugar Syrup", measure: "10 ml" }
    ],
    garnish: "Lemon Zest",
    glass: "Rocks",
    method: "Rinse, Stir and Julep Strain",
    ice: "None"
  },
  {
    id: 64,
    name: "Zombie",
    numberOfIngredients: 9,
    ingredients: [
      { item: "Aromatic Bitters", measure: "4 Dashes" },
      { item: "Absinthe", measure: "2 Dashes" },
      { item: "Overproof Rum", measure: "10 ml" },
      { item: "Grenadine", measure: "10 ml" },
      { item: "Dark Rum", measure: "20 ml" },
      { item: "Light Rum", measure: "20 ml" },
      { item: "Fresh lime Juice", measure: "20 ml" },
      { item: "Cinnamon Syrup", measure: "20 ml" },
      { item: "Grapefruit Juice", measure: "20 ml" }
    ],
    garnish: "Mint Sprig",
    glass: "Highball|Tiki Mug",
    method: "Shake and Strain",
    ice: "Crushed"
  },
  {
    id: 65,
    name: "Piña Colada",
    numberOfIngredients: 5,
    ingredients: [
      { item: "Light Rum", measure: "40 ml" },
      { item: "Coconut Liqueur", measure: "20 ml" },
      { item: "Fresh Lime Juice", measure: "10 ml" },
      { item: "Pineapple Juice", measure: "60 ml" },
      { item: "Coco Re'al Coconut Cream", measure: "40 ml" }
    ],
    garnish: "Pineapple Wedge and Cherry",
    glass: "Highball|Hurricane",
    method: "Shake and Strain",
    ice: "Cubed"
  },
  {
    id: 66,
    name: "Lemon Drop",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Vodka", measure: "20 ml" },
      { item: "Fresh Lemon Juice", measure: "10 ml" },
      { item: "Sugar Syrup", measure: "10 ml" }
    ],
    garnish: "Sugar coated lemon wedge",
    glass: "Shooter",
    method: "Shake and Fine Strain",
    ice: "None"
  },
  {
    id: 67,
    name: "Bloody Mary Pre-Batch",
    numberOfIngredients: 5,
    ingredients: [
        { item: "Worcestershire Sauce", measure: "30 ml"},
        { item: "Tabasco", measure: "10 ml"},
        { item: "Black Pepper", measure: "2 gms"},
        { item: "Celery Salt", measure: "4 gms"},
        { item: "Tomato Juice", measure: "Fill"}
    ],
    glass: "Pre-Batch Bottle",
    ice: "None",
    method: "None"
  },
  {
    id: 68,
    name: "Missouri Mule",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Southern Comfort", measure: "40 ml" },
      { item: "Fresh Lime Juice", measure: "20 ml" },
      { item: "Ginger Beer", measure: "Fill" }
    ],
    garnish: "Lime wedge",
    glass: "Highball|Copper Mug",
    method: "Build",
    ice: "Cubed"
  },
  {
    id: 69,
    name: "Jamaican Mule",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Spiced rum", measure: "40 ml" },
      { item: "Fresh Lime Juice", measure: "20 ml" },
      { item: "Ginger Beer", measure: "Fill" }
    ],
    garnish: "Lime wedge",
    glass: "Highball|Copper Mug",
    method: "Build",
    ice: "Cubed"
  },
  {
    id: 70,
    name: "Long Beach Iced Tea",
    numberOfIngredients: 8,
    ingredients: [
      { item: "Vodka", measure: "20 ml" },
      { item: "Light Rum", measure: "20 ml" },
      { item: "Gin", measure: "20 ml" },
      { item: "Tequila", measure: "20 ml" },
      { item: "Triple Sec", measure: "20 ml" },
      { item: "Fresh Lemon Juice", measure: "20 ml" },
      { item: "Sugar Syrup", measure: "10 ml" },
      { item: "Cranberry Juice", measure: "Top" }
    ],
    garnish: "Lemon Wedge",
    glass: "Highball",
    method: "Shake and Strain",
    ice: "Cubed"
  },
  {
    id: 71,
    name: "Beverly Hills Iced Tea",
    numberOfIngredients: 8,
    ingredients: [
      { item: "Vodka", measure: "20 ml" },
      { item: "Light Rum", measure: "20 ml" },
      { item: "Gin", measure: "20 ml" },
      { item: "Tequila", measure: "20 ml" },
      { item: "Triple Sec", measure: "20 ml" },
      { item: "Fresh Lemon Juice", measure: "20 ml" },
      { item: "Sugar Syrup", measure: "10 ml" },
      { item: "Champagne", measure: "Top" }
    ],
    garnish: "Lemon Wedge",
    glass: "Highball",
    method: "Shake and Strain",
    ice: "Cubed"
  },
  {
    id: 72,
    name: "Tommy's Margarita",
    numberOfIngredients: 4,
    ingredients: [
      { item: "Tequila", measure: "40 ml" },
      { item: "Sugar and Agave Syrup", measure: "20 ml" },
      { item: "Fresh Lime Juice", measure: "30 ml" },
      { item: "Sugar Syrup", measure: "10 ml" }
    ],
    garnish: "Salt Rim",
    glass: "Chilled Martini|Coupe",
    method: "Shake and Fine Strain",
    ice: "None"
  },
  {
    id: 73,
    name: "Midori Sour",
    numberOfIngredients: 4,
    ingredients: [
      { item: "Aromatic Bitters", measure: "2 Dashes" },
      { item: "Midori", measure: "60 ml" },
      { item: "Fresh Lemon Juice", measure: "30 ml" },
      { item: "Sugar Syrup", measure: "10 ml" }
    ],
    garnish: "Lemon Wedge and Cherry",
    glass: "Rocks",
    method: "Dry Shake, Shake and Strain",
    ice: "Cubed"
  },
  {
    id: 74,
    name: "New York Sour",
    numberOfIngredients: 4,
    ingredients: [
      { item: "Aromatic Bitters", measure: "2 Dashes" },
      { item: "Bourbon", measure: "60 ml" },
      { item: "Fresh Lemon Juice", measure: "30 ml" },
      { item: "Sugar Syrup", measure: "15 ml" },
      { item: "Red Wind", measure: "Top it off"}
    ],
    garnish: "Orange Zest and Cherry",
    glass: "Sour Glass|Rocks",
    method: "Dry Shake, Shake and Strain",
    ice: "None|Cubed"
  },
  {
    id: 75,
    name: "Fruit Caipirinha",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Lime Wedges", measure: "6 Wedges" },
      { item: "Sugar Syrup", measure: "20 ml" },
      { item: "Cachaca", measure: "60 ml" },
      { item: "Fruit", measure: "XD"},
      { item: "Fruit Liqueur", measure: "XD"}
    ],
    garnish: "Lime Wedge",
    glass: "Rocks",
    method: "Muddle, Build and Churn",
    ice: "Crushed"
  },
  {
    id: 76,
    name: "Rossini",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Strawberry Puree", measure: "10 ml" },
      { item: "Strawberry Liqueur", measure: "10 ml" },
      { item: "Prosecco", measure: "Fill" }
    ],
    garnish: "None",
    glass: "Champagne Flute",
    method: "Build",
    ice: "None"
  },
  {
    id: 77,
    name: "Fidel Castro",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Fresh Lime Juice", measure: "20 ml" },
      { item: "Ginger Ale", measure: "Fill" },
      { item: "Dark Rum", measure: "40 ml (Float)" }
    ],
    garnish: "Lime Wedge",
    glass: "Highball",
    method: "Build and Float",
    ice: "Cubed"
  },
  {
    id: 78,
    name: "Pink Lady",
    numberOfIngredients: 5,
    ingredients: [
      { item: "Gin", measure: "40 ml" },
      { item: "Triple Sec", measure: "20 ml" },
      { item: "Fresh Lemon Juice", measure: "30 ml" },
      { item: "Sugar Syrup", measure: "10 ml" },
      { item: "Grenadine", measure: "1 dash"}
    ],
    garnish: "Lemon Zest",
    glass: "Chilled Martini|Coupe",
    method: "Shake and Fine Strain",
    ice: "None"
  },
  {
    id: 79,
    name: "Negroni Sbagliato",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Sweet Vermouth", measure: "20 ml" },
      { item: "Campari", measure: "20 ml" },
      { item: "Prosecco", measure: "20 ml" }
    ],
    garnish: "Orange zest or Orange slice",
    glass: "Rocks",
    method: "Stir and Julep Strain",
    ice: "Cubed"
  },
  {
    id: 80,
    name: "Boulevardier",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Sweet Vermouth", measure: "20 ml" },
      { item: "Campari", measure: "20 ml" },
      { item: "Bourbon", measure: "20 ml" }
    ],
    garnish: "Orange zest or Orange slice",
    glass: "Rocks",
    method: "Stir and Julep Strain",
    ice: "Cubed"
  },
  {
    id: 81,
    name: "Alexander",
    numberOfIngredients: 3,
    ingredients: [
      { item: "Gin", measure: "40 ml" },
      { item: "Dark Cacao Liqueur", measure: "20 ml" },
      { item: "Half and Half", measure: "40 ml" }
    ],
    garnish: "Grated Nutmeg",
    glass: "Chilled Martini|Coupe",
    method: "Shake and Fine Strain",
    ice: "None"
  },
  {
    id: 82,
    name: "Kir",
    numberOfIngredients: 2,
    ingredients: [
      { item: "Creme de Cassis", measure: "20 ml" },
      { item: "White Wine", measure: "Fill" }
    ],
    garnish: "None",
    glass: "Champagne Flute",
    method: "Build",
    ice: "None"
  },
  {
    id: 83,
    name: "Pink Gin",
    numberOfIngredients: 2,
    ingredients: [
      { item: "Gin", measure: "60 ml" },
      { item: "Aromatic Bitters", measure: "few dashes" }
    ],
    garnish: "Lemon Zest",
    glass: "Chilled Martini|Coupe",
    method: "Stir and Julep Strain",
    ice: "None"
  },
];