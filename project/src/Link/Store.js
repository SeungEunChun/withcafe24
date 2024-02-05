import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Store() {
    const [totalpro, settotal] = useState([]);
    const { Category_no } = useParams();
    const setCategory = Category_no === "all" ? "" : Category_no;

    useEffect(() => {
        const dbstore = async () => {
            try {
                const result = await axios.post(`/store/Scinic_Product/${setCategory}`, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    params: {
                        param: ""
                    }
                });
                settotal([...result.data]);
            } catch (error) {
                console.log(error);
            }
        };

        dbstore();
        console.log(Category_no);
    }, [Category_no]);

    return (
        <section className='mt-10'>
            <div className='row container mx-auto text-center mt-5'>
                <div className='mb-5 border-bottom'>
                    <h2>Product</h2>
                </div>
                {totalpro.map((e, i) => (
                    <div className='col-lg-3 col-md-6 mb-5 pb-4 text-center' key={i}>
                        <img src={e.img} className='img-fluid' alt={`product${i}`} />
                        <strong>{e.title}</strong>
                        <br />
                        <p>{e.descpro}</p>
                        <span>{e.price}원</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Store;
