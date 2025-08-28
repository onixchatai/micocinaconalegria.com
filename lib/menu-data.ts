
import { MenuCategory } from "./types";

export const menuCategories: MenuCategory[] = [
  {
    name: "Tacos",
    items: [
      {
        id: "tacos-standard",
        name: "Tacos",
        proteins: [
          { name: "Asada", price: 2.50 },
          { name: "Pastor", price: 2.50 },
          { name: "Chorizo", price: 2.50 },
          { name: "Pollo", price: 2.50 }
        ]
      },
      {
        id: "tacos-premium",
        name: "Tacos",
        proteins: [
          { name: "Ranchera", price: 3.00 },
          { name: "Camarón", price: 3.00 },
          { name: "Pescado", price: 3.00 },
          { name: "Cecina", price: 3.00 }
        ]
      }
    ]
  },
  {
    name: "Burritos",
    description: "Incluye Arroz, Frijol, y Pico de Gallo",
    items: [
      {
        id: "burritos-standard",
        name: "Burritos",
        description: "Incluye Arroz, Frijol, y Pico de Gallo",
        proteins: [
          { name: "Asada", price: 10.00 },
          { name: "Pastor", price: 10.00 },
          { name: "Chorizo", price: 10.00 },
          { name: "Pollo", price: 10.00 }
        ]
      },
      {
        id: "burritos-premium",
        name: "Burritos",
        description: "Incluye Arroz, Frijol, y Pico de Gallo",
        proteins: [
          { name: "Ranchera", price: 12.00 },
          { name: "Camarón", price: 12.00 },
          { name: "Pescado", price: 12.00 },
          { name: "Cecina", price: 12.00 }
        ]
      }
    ]
  },
  {
    name: "Burrito Desayuno",
    description: "Servido Con Hash Browns, Queso, y Huevo",
    items: [
      {
        id: "burrito-desayuno-standard",
        name: "Burrito Desayuno",
        description: "Servido Con Hash Browns, Queso, y Huevo",
        proteins: [
          { name: "Jamon", price: 10.00 },
          { name: "Tocino", price: 10.00 },
          { name: "Chorizo", price: 10.00 },
          { name: "Vegetales", price: 10.00 }
        ]
      }
    ]
  },
  {
    name: "Tortas",
    items: [
      {
        id: "tortas-standard",
        name: "Tortas",
        proteins: [
          { name: "Asada", price: 10.00 },
          { name: "Pastor", price: 10.00 },
          { name: "Chorizo", price: 10.00 },
          { name: "Pollo", price: 10.00 }
        ]
      },
      {
        id: "tortas-premium",
        name: "Tortas",
        proteins: [
          { name: "Ranchera", price: 12.00 },
          { name: "Camarón", price: 12.00 },
          { name: "Pescado", price: 12.00 },
          { name: "Cecina", price: 12.00 }
        ]
      }
    ]
  },
  {
    name: "Platos",
    description: "Incluye Arroz, Frijol, y Pico de Gallo",
    items: [
      {
        id: "platos-standard",
        name: "Platos",
        description: "Incluye Arroz, Frijol, y Pico de Gallo",
        proteins: [
          { name: "Asada", price: 12.00 },
          { name: "Pastor", price: 12.00 },
          { name: "Chorizo", price: 12.00 },
          { name: "Pollo", price: 12.00 }
        ]
      },
      {
        id: "platos-premium",
        name: "Platos",
        description: "Incluye Arroz, Frijol, y Pico de Gallo",
        proteins: [
          { name: "Ranchera", price: 15.00 },
          { name: "Camarón", price: 15.00 },
          { name: "Pescado", price: 15.00 },
          { name: "Cecina", price: 15.00 }
        ]
      }
    ]
  },
  {
    name: "Quesadillas",
    description: "Grilled tortillas filled with cheese and your choice of protein",
    items: [
      {
        id: "quesadillas-standard",
        name: "Quesadillas",
        description: "Grilled tortillas filled with cheese and your choice of protein",
        proteins: [
          { name: "Asada", price: 10.00 },
          { name: "Pastor", price: 10.00 },
          { name: "Chorizo", price: 10.00 },
          { name: "Pollo", price: 10.00 }
        ]
      }
    ]
  },
  {
    name: "Desayunos",
    description: "Traditional Mexican breakfast dishes",
    items: [
      {
        id: "desayunos-premium",
        name: "Desayunos",
        description: "Traditional Mexican breakfast dishes",
        proteins: [
          { name: "Huevos con Jamon", price: 12.00 },
          { name: "Huevos con Chorizo", price: 12.00 },
          { name: "Huevos a la Mexicana", price: 12.00 },
          { name: "Huevos Rancheros", price: 12.00 }
        ]
      }
    ]
  },
  {
    name: "Ensaladas",
    description: "Fresh salads with your choice of protein",
    items: [
      {
        id: "ensaladas-premium",
        name: "Ensaladas",
        description: "Fresh salads with your choice of protein",
        proteins: [
          { name: "Ranchera", price: 12.00 },
          { name: "Camarón", price: 12.00 },
          { name: "Pescado", price: 12.00 },
          { name: "Cecina", price: 12.00 }
        ]
      }
    ]
  },
  {
    name: "Bebidas",
    items: [
      {
        id: "bebidas-standard",
        name: "Bebidas",
        proteins: [
          { name: "Lata", price: 2.00 },
          { name: "Botella", price: 3.00 },
          { name: "Monster", price: 3.00 },
          { name: "Cafe", price: 2.00 }
        ]
      }
    ]
  },
  {
    name: "Extras",
    description: "Add-ons to make your meal even better",
    items: [
      {
        id: "extras-guacamole",
        name: "Guacamole",
        proteins: [{ name: "Guacamole", price: 2.00 }]
      },
      {
        id: "extras-cheese",
        name: "Extra Cheese",
        proteins: [{ name: "Extra Cheese", price: 1.00 }]
      },
      {
        id: "extras-sour-cream",
        name: "Sour Cream",
        proteins: [{ name: "Sour Cream", price: 1.00 }]
      }
    ]
  }
];

// Prices are in USD  
// Standard proteins are more common and affordable options
// Premium options include seafood and specialty meats
