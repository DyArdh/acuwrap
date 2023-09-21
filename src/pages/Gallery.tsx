/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageData from '../data/gallery_path.json';

const Gallery: React.FC = () => {
    interface colsType {
        name: string;
        url: string;
    }

    const [col1, setCol1] = useState<colsType[]>([]);
    const [col2, setCol2] = useState<colsType[]>([]);
    const [col3, setCol3] = useState<colsType[]>([]);
    const [col4, setCol4] = useState<colsType[]>([]);

    const generateCols = () => {
        const col1: colsType[] = [];
        const col2: colsType[] = [];
        const col3: colsType[] = [];
        const col4: colsType[] = [];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < ImageData.length / 4; j++) {
                if (i === 0) {
                    col1.push(ImageData[j]);
                } else if (i === 1) {
                    col2.push(ImageData[j + ImageData.length / 4]);
                } else if (i === 2) {
                    col3.push(ImageData[j + (2 * ImageData.length) / 4]);
                } else if (i === 3) {
                    col4.push(ImageData[j + (3 * ImageData.length) / 4]);
                }
            }
        }

        setCol1(col1);
        setCol2(col2);
        setCol3(col3);
        setCol4(col4);
    };

    useEffect(() => {
        generateCols();
    }, []);

    return (
        <>
            <Navbar bgColor={'white'} txtColor={'black'} />

            <section className="container relative justify-center mx-auto mt-2 px-4 mb-16 md:mt-20 md:mb-24 lg:mt-24 lg:mb-40 lg:px-[125px]">
                <div className="">
                    <h1 className="text-[45px] font-bold">Galeri Ocuwrap</h1>
                    <p className="text-lg mr-6">Foto produk, testimoni, dan kegiatan dari ocuwrap</p>
                </div>

                <div className="grid grid-cols-2 mt-8 md:mt-9 lg:mt-10 md:grid-cols-4 gap-4">
                    <div className="grid gap-4">
                        {col1.map((image, index) => (
                            <div key={index}>
                                <img className="h-auto max-w-full rounded-lg" src={image.url} alt="" />
                            </div>
                        ))}
                    </div>

                    <div className="grid gap-4">
                        {col2.map((image, index) => (
                            <div key={index}>
                                <img className="h-auto max-w-full rounded-lg" src={image.url} alt="" />
                            </div>
                        ))}
                    </div>

                    <div className="grid gap-4">
                        {col3.map((image, index) => (
                            <div key={index}>
                                <img className="h-auto max-w-full rounded-lg" src={image.url} alt="" />
                            </div>
                        ))}
                    </div>

                    <div className="grid gap-4">
                        {col4.map((image, index) => (
                            <div key={index}>
                                <img className="h-auto max-w-full rounded-lg" src={image.url} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Gallery;
