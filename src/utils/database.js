export const productsDatabase = {
    apple: {
        name: 'Manzana',
        scientific: 'Malus domestica',

        benefits: ['Rica en fibra', 'Alto contenido de antioxidantes', 'Ayuda a la digestión', 'Reduce colesterol'],
        nutrition: { calories: 52, protein: 0.3, carbs: 14, fats: 0.2 }
    },
    banana: {
        name: 'Plátano',
        scientific: 'Musa paradisiaca',

        benefits: ['Alto en potasio', 'Energía rápida', 'Ayuda al sistema nervioso', 'Mejora el estado de ánimo'],
        nutrition: { calories: 89, protein: 1.1, carbs: 23, fats: 0.3 }
    },
    carrot: {
        name: 'Zanahoria',
        scientific: 'Daucus carota',

        benefits: ['Rica en betacaroteno', 'Mejora la visión', 'Antioxidante natural', 'Fortalece el sistema inmune'],
        nutrition: { calories: 41, protein: 0.9, carbs: 10, fats: 0.2 }
    },
    tomato: {
        name: 'Tomate',
        scientific: 'Solanum lycopersicum',

        benefits: ['Rico en licopeno', 'Protege la piel', 'Reduce riesgo cardiovascular', 'Alto en vitamina C'],
        nutrition: { calories: 18, protein: 0.9, carbs: 3.9, fats: 0.2 }
    },
    strawberry: {
        name: 'Fresa',
        scientific: 'Fragaria × ananassa',

        benefits: ['Alta en vitamina C', 'Antioxidantes potentes', 'Mejora la salud cardiovascular', 'Bajo en calorías'],
        nutrition: { calories: 32, protein: 0.7, carbs: 7.7, fats: 0.3 }
    },
    lettuce: {
        name: 'Lechuga',
        scientific: 'Lactuca sativa',

        benefits: ['Baja en calorías', 'Rica en fibra', 'Hidratante natural', 'Ayuda al sueño'],
        nutrition: { calories: 15, protein: 1.4, carbs: 2.9, fats: 0.2 }
    },
    pepper: {
        name: 'Pimiento',
        scientific: 'Capsicum annuum',

        benefits: ['Alto en vitamina C', 'Antioxidante', 'Mejora la vista', 'Bajo en calorías'],
        nutrition: { calories: 31, protein: 1, carbs: 6, fats: 0.3 }
    },
    orange: {
        name: 'Naranja',
        scientific: 'Citrus × sinensis',

        benefits: ['Rica en vitamina C', 'Fortalece inmunidad', 'Hidratante', 'Antioxidante natural'],
        nutrition: { calories: 47, protein: 0.9, carbs: 12, fats: 0.1 }
    },
    grapes: {
        name: 'Uvas',
        scientific: 'Vitis vinifera',

        benefits: ['Ricas en antioxidantes', 'Protegen el corazón', 'Mejoran la memoria', 'Antienvejecimiento'],
        nutrition: { calories: 69, protein: 0.7, carbs: 18, fats: 0.2 }
    },
    broccoli: {
        name: 'Brócoli',
        scientific: 'Brassica oleracea',

        benefits: ['Rico en Sulforafano', 'Alto en Vitamina K', 'Contiene Ácido fólico', 'Propiedades anticancerígenas'],
        nutrition: { calories: 34, protein: 2.8, carbs: 7, fats: 0.4 }
    }
};

export const benefitDescriptions = {
    'Rica en fibra': 'Las manzanas son una buena fuente de nutrientes esenciales, incluyendo fibra, vitamina C y varios antioxidantes. El alto contenido de fibra apoya la salud digestiva, ayuda en el control del peso y regula el azúcar en sangre.',
    'Alto contenido de antioxidantes': 'Las manzanas contienen antioxidantes como flavonoides y polifenoles que ayudan a reducir el estrés oxidativo y la inflamación.',
    'Ayuda a la digestión': 'El consumo regular de manzanas se ha asociado con un riesgo reducido de enfermedades cardíacas debido a su impacto en los niveles de colesterol.',
    'Reduce colesterol': 'Contribuye a un mejor control del azúcar en sangre, haciéndolas adecuadas para personas con diabetes.',
    'Alto en potasio': 'La presencia de fibra y agua promueve una sensación de saciedad, siendo una opción saludable para el control de peso.',
    'Energía rápida': 'Relativamente bajas en calorías, son un snack satisfactorio y nutritivo sin contribuir a una ingesta calórica excesiva.',
    'Ayuda al sistema nervioso': 'La vitamina C juega un papel importante en el apoyo al sistema inmunológico, ayudando al cuerpo a defenderse contra infecciones y enfermedades.',
    'Mejora el estado de ánimo': 'Son convenientes y portátiles, siendo una opción de snack fácil y versátil para niños y adultos.',
    'Rica en betacaroteno': 'Rica en betacaroteno que apoya la salud ocular y la función inmunológica.',
    'Mejora la visión': 'Contiene nutrientes que ayudan a mantener una visión saludable.',
    'Antioxidante natural': 'Los antioxidantes naturales ayudan a proteger las células del daño.',
    'Fortalece el sistema inmune': 'Fortalece el sistema inmunológico para combatir infecciones.',
    'Rico en licopeno': 'Alto en licopeno, un poderoso antioxidante.',
    'Protege la piel': 'Ayuda a proteger la piel del daño solar.',
    'Reduce riesgo cardiovascular': 'Puede reducir el riesgo de enfermedades cardiovasculares.',
    'Alto en vitamina C': 'Alto contenido de vitamina C que refuerza la inmunidad.',
    'Alta en vitamina C': 'Alta en vitamina C para apoyo inmunológico.',
    'Antioxidantes potentes': 'Antioxidantes poderosos que combaten los radicales libres.',
    'Mejora la salud cardiovascular': 'Mejora la salud del corazón y la circulación.',
    'Bajo en calorías': 'Bajas en calorías, excelente para el control de peso.',
    'Baja en calorías': 'Bajo contenido calórico que apoya una dieta saludable.',
    'Rica en fibra': 'Alto contenido de fibra que apoya la digestión saludable.',
    'Hidratante natural': 'Hidratación natural por su alto contenido de agua.',
    'Ayuda al sueño': 'Contiene compuestos que pueden promover un mejor sueño.',
    'Antioxidante': 'Rico en antioxidantes para la protección celular.',
    'Mejora la vista': 'Apoya una visión saludable y la función ocular.',
    'Rica en vitamina C': 'Excelente fuente de vitamina C para la inmunidad.',
    'Fortalece inmunidad': 'Fortalece las defensas inmunológicas del cuerpo.',
    'Hidratante': 'Alto contenido de agua proporciona hidratación natural.',
    'Ricas en antioxidantes': 'Ricas en antioxidantes para la salud general.',
    'Protegen el corazón': 'Ayudan a proteger la salud y función cardíaca.',
    'Mejoran la memoria': 'Pueden mejorar la memoria y la función cognitiva.',
    'Antienvejecimiento': 'Propiedades antienvejecimiento para una piel saludable.',
    'Rico en Sulforafano': 'Alto en sulforafano, un compuesto beneficioso.',
    'Alto en Vitamina K': 'Excelente fuente de vitamina K para la salud ósea.',
    'Contiene Ácido fólico': 'Contiene folato esencial para el crecimiento celular.',
    'Propiedades anticancerígenas': 'Puede tener propiedades que combaten el cáncer.'
};
