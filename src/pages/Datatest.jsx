import { useState, useRef } from 'react';
import Header from '../components/Header';
// import Footer from '../components/Footer';
import Loader from '../components/Loader';
import Card from '../components/Card';
import { classifyImage } from '../utils/classifier';
// import { saveToHistory } from '../utils/history';
import { productsDatabase, benefitDescriptions } from '../utils/database';
import '../styles/Datatest.css';

const Datatest = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileName, setFileName] = useState('No file selected');
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
            if (!validTypes.includes(file.type)) {
                alert('Por favor selecciona una imagen válida (JPG, PNG, GIF o WebP)');
                return;
            }

            setSelectedFile(file);
            setFileName(file.name);

            const reader = new FileReader();
            reader.onload = (e) => {
                setImageUrl(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert('Por favor selecciona una imagen primero');
            return;
        }

        setIsLoading(true);
        setResult(null);

        try {
            const classificationResult = await classifyImage(selectedFile);
            classificationResult.imageUrl = imageUrl;
            setResult(classificationResult);
            // saveToHistory(classificationResult);
        } catch (error) {
            alert('Error al clasificar la imagen');
        } finally {
            setIsLoading(false);
        }
    };

    const handleReset = () => {
        setSelectedFile(null);
        setFileName('No file selected');
        setResult(null);
        setImageUrl(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const renderResults = () => {
        if (!result) return null;

        const product = productsDatabase[result.product];
        const statusColor = result.status === 'fresh' ? '#5A8C6C' : '#dc3545';
        const statusText = result.status === 'fresh' ? 'Fresco' : 'Podrido';

        return (
            <div className="results-section" style={{ display: 'block' }}>
                <div className="results-header">
                    <h2>Fresh Vegetable and Fruit Detection</h2>
                    <h3>Result</h3>
                    <h1 className="product-title" style={{ color: statusColor }}>
                        {statusText} {product.name}
                    </h1>
                    <p className="scientific-name">{product.scientific}</p>
                </div>
                
                <div className="benefits-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Benefit</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {result.status === 'fresh' ? (
                                product.benefits.map((benefit, index) => (
                                    <tr key={index}>
                                        <td>{benefit}</td>
                                        <td>{benefitDescriptions[benefit] || 'Este nutriente proporciona importantes beneficios para la salud.'}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="2" style={{ textAlign: 'center', color: '#dc3545', padding: '20px' }}>
                                        ⚠️ Este producto no se recomienda para su consumo. El producto muestra signos de deterioro y debe ser descartado.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                
                <button className="btn-upload-another" onClick={handleReset}>Upload Another Image</button>
            </div>
        );
    };

    return (
        <div className="dashboard active">
            <Header />
            <main className="main-content">
                <section className="section active">
                    <div className="datatest-container">
                        <div className="datatest-left">
                            <img src="/fruits.png" alt="Fresh Fruits and Vegetables" className="fruits-image-datatest" />
                        </div>
                        <div className="datatest-right">
                            {!isLoading && !result && (
                                <Card title="Fresh Vegetable and Fruit Detection">
                                    <h4 className="upload-text">Upload an image</h4>
                                    <div className="file-input-wrapper">
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            accept="image/*"
                                            onChange={handleFileSelect}
                                            style={{ display: 'none' }}
                                        />
                                        <div className="file-selection-row">
                                            <button
                                                className="btn-select-file"
                                                onClick={() => fileInputRef.current?.click()}
                                            >
                                                Select Image
                                            </button>
                                            <span className="file-name">{fileName}</span>
                                        </div>
                                    </div>
                                    <button
                                        className="btn-upload"
                                        disabled={!selectedFile}
                                        onClick={handleUpload}
                                    >
                                        Upload
                                    </button>
                                </Card>
                            )}

                            {isLoading && (
                                <Loader />
                            )}

                            {renderResults()}
                        </div>
                    </div>
                </section>
            </main>
            {/* Footer eliminado */}
        </div>
    );
};

export default Datatest;