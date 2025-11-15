export const productsDatabase = {
    apple: {
        name: 'Manzana',
        scientific: 'Malus domestica',

        benefits: [
            { name: 'Rica en fibra', description: 'Las manzanas son una buena fuente de nutrientes esenciales, incluyendo fibra, vitamina C y varios antioxidantes. El alto contenido de fibra apoya la salud digestiva, ayuda en el control del peso y regula el azúcar en sangre.' },
            { name: 'Alto contenido de antioxidantes', description: 'Las manzanas contienen antioxidantes como flavonoides y polifenoles que ayudan a reducir el estrés oxidativo y la inflamación.' },
            { name: 'Ayuda a la digestión', description: 'El consumo regular de manzanas se ha asociado con un riesgo reducido de enfermedades cardíacas debido a su impacto en los niveles de colesterol.' },
            { name: 'Reduce colesterol', description: 'Contribuye a un mejor control del azúcar en sangre, haciéndolas adecuadas para personas con diabetes.' }
        ],
        nutrition: { calories: 52, protein: 0.3, carbs: 14, fats: 0.2 }
    },
    banana: {
        name: 'Plátano',
        scientific: 'Musa paradisiaca',

        benefits: [
            { name: 'Alto en potasio', description: 'La presencia de fibra y agua promueve una sensación de saciedad, siendo una opción saludable para el control de peso.' },
            { name: 'Energía rápida', description: 'Relativamente bajas en calorías, son un snack satisfactorio y nutritivo sin contribuir a una ingesta calórica excesiva.' },
            { name: 'Ayuda al sistema nervioso', description: 'La vitamina C juega un papel importante en el apoyo al sistema inmunológico, ayudando al cuerpo a defenderse contra infecciones y enfermedades.' },
            { name: 'Mejora el estado de ánimo', description: 'Son convenientes y portátiles, siendo una opción de snack fácil y versátil para niños y adultos.' }
        ],
        nutrition: { calories: 89, protein: 1.1, carbs: 23, fats: 0.3 }
    },
    carrot: {
        name: 'Zanahoria',
        scientific: 'Daucus carota',

        benefits: [
            { name: 'Rica en betacaroteno', description: 'Rica en betacaroteno que apoya la salud ocular y la función inmunológica.' },
            { name: 'Mejora la visión', description: 'Contiene nutrientes que ayudan a mantener una visión saludable.' },
            { name: 'Antioxidante natural', description: 'Los antioxidantes naturales ayudan a proteger las células del daño.' },
            { name: 'Fortalece el sistema inmune', description: 'Fortalece el sistema inmunológico para combatir infecciones.' }
        ],
        nutrition: { calories: 41, protein: 0.9, carbs: 10, fats: 0.2 }
    },
    tomato: {
        name: 'Tomate',
        scientific: 'Solanum lycopersicum',

        benefits: [
            { name: 'Rico en licopeno', description: 'Alto en licopeno, un poderoso antioxidante.' },
            { name: 'Protege la piel', description: 'Ayuda a proteger la piel del daño solar.' },
            { name: 'Reduce riesgo cardiovascular', description: 'Puede reducir el riesgo de enfermedades cardiovasculares.' },
            { name: 'Alto en vitamina C', description: 'Alto contenido de vitamina C que refuerza la inmunidad.' }
        ],
        nutrition: { calories: 18, protein: 0.9, carbs: 3.9, fats: 0.2 }
    },
    strawberry: {
        name: 'Fresa',
        scientific: 'Fragaria × ananassa',

        benefits: [
            { name: 'Alta en vitamina C', description: 'Alta en vitamina C para apoyo inmunológico.' },
            { name: 'Antioxidantes potentes', description: 'Antioxidantes poderosos que combaten los radicales libres.' },
            { name: 'Mejora la salud cardiovascular', description: 'Mejora la salud del corazón y la circulación.' },
            { name: 'Bajo en calorías', description: 'Bajas en calorías, excelente para el control de peso.' }
        ],
        nutrition: { calories: 32, protein: 0.7, carbs: 7.7, fats: 0.3 }
    },
    lettuce: {
        name: 'Lechuga',
        scientific: 'Lactuca sativa',

        benefits: [
            { name: 'Baja en calorías', description: 'Bajo contenido calórico que apoya una dieta saludable.' },
            { name: 'Rica en fibra', description: 'Alto contenido de fibra que apoya la digestión saludable.' },
            { name: 'Hidratante natural', description: 'Hidratación natural por su alto contenido de agua.' },
            { name: 'Ayuda al sueño', description: 'Contiene compuestos que pueden promover un mejor sueño.' }
        ],
        nutrition: { calories: 15, protein: 1.4, carbs: 2.9, fats: 0.2 }
    },
    pepper: {
        name: 'Pimiento',
        scientific: 'Capsicum annuum',

        benefits: [
            { name: 'Alto en vitamina C', description: 'Alto contenido de vitamina C que refuerza la inmunidad.' },
            { name: 'Antioxidante', description: 'Rico en antioxidantes para la protección celular.' },
            { name: 'Mejora la vista', description: 'Apoya una visión saludable y la función ocular.' },
            { name: 'Bajo en calorías', description: 'Bajas en calorías, excelente para el control de peso.' }
        ],
        nutrition: { calories: 31, protein: 1, carbs: 6, fats: 0.3 }
    },
    orange: {
        name: 'Naranja',
        scientific: 'Citrus × sinensis',

        benefits: [
            { name: 'Rica en vitamina C', description: 'Excelente fuente de vitamina C para la inmunidad.' },
            { name: 'Fortalece inmunidad', description: 'Fortalece las defensas inmunológicas del cuerpo.' },
            { name: 'Hidratante', description: 'Alto contenido de agua proporciona hidratación natural.' },
            { name: 'Antioxidante natural', description: 'Los antioxidantes naturales ayudan a proteger las células del daño.' }
        ],
        nutrition: { calories: 47, protein: 0.9, carbs: 12, fats: 0.1 }
    },
    grapes: {
        name: 'Uvas',
        scientific: 'Vitis vinifera',

        benefits: [
            { name: 'Ricas en antioxidantes', description: 'Ricas en antioxidantes para la salud general.' },
            { name: 'Protegen el corazón', description: 'Ayudan a proteger la salud y función cardíaca.' },
            { name: 'Mejoran la memoria', description: 'Pueden mejorar la memoria y la función cognitiva.' },
            { name: 'Antienvejecimiento', description: 'Propiedades antienvejecimiento para una piel saludable.' }
        ],
        nutrition: { calories: 69, protein: 0.7, carbs: 18, fats: 0.2 }
    },
    broccoli: {
        name: 'Brócoli',
        scientific: 'Brassica oleracea',

        benefits: [
            { name: 'Rico en Sulforafano', description: 'Alto en sulforafano, un compuesto beneficioso.' },
            { name: 'Alto en Vitamina K', description: 'Excelente fuente de vitamina K para la salud ósea.' },
            { name: 'Contiene Ácido fólico', description: 'Contiene folato esencial para el crecimiento celular.' },
            { name: 'Propiedades anticancerígenas', description: 'Puede tener propiedades que combaten el cáncer.' }
        ],
        nutrition: { calories: 34, protein: 2.8, carbs: 7, fats: 0.4 }
    }
};

