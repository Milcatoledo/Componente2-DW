import { productsDatabase } from './database';

export const classifyImage = (file) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = simulateClassification(file.name);
            resolve(result);
        }, 1500 + Math.random() * 1000);
    });
};

export const simulateClassification = (filename) => {
    const lowerName = filename.toLowerCase();
    let detectedProduct = null;
    
    for (let key in productsDatabase) {
        if (lowerName.includes(key) || lowerName.includes(productsDatabase[key].name.toLowerCase())) {
            detectedProduct = key;
            break;
        }
    }
    
    if (!detectedProduct) {
        const keys = Object.keys(productsDatabase);
        detectedProduct = keys[Math.floor(Math.random() * keys.length)];
    }

    const rottenKeywords = ['podrida', 'podrido', 'rotten', 'bad', 'spoiled', 'rot', 'malo', 'mala', 'dañada', 'dañado'];
    const freshKeywords = ['fresca', 'fresco', 'fresh', 'good', 'buena', 'bueno'];
    
    let isFresh;
    
    if (rottenKeywords.some(keyword => lowerName.includes(keyword))) {
        isFresh = false;
    }
    else if (freshKeywords.some(keyword => lowerName.includes(keyword))) {
        isFresh = true;
    }
    else {
        isFresh = true;
    }
    
    const confidence = (95 + Math.random() * 4).toFixed(1);
    const product = productsDatabase[detectedProduct];

    return {
        product: detectedProduct,
        productName: product.name,
        productScientific: product.scientific,
        status: isFresh ? 'fresh' : 'rotten',
        statusText: isFresh ? 'FRESCO' : 'PODRIDO',
        confidence: confidence,
        timestamp: new Date().toISOString()
    };
};
