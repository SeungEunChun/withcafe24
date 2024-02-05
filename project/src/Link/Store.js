import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Store() {
    const [totalpro, settotal] = useState([]);


    useEffect(() => {
        const dbstore = async () => {
            axios.post('/store?tablenm=Scinic_Product', {
                Headers: {
                    'Content-Type': 'application/json'
                }
            }).then((result) => {
                settotal([...result.data])
            }).catch((error) => {
                console.log(error);
            })

        }
        dbstore();
    }, []);
    return (
        <section className='mt-10'>
            <div className='row container mx-auto text-center mt-5'>

                <div div className='mb-5 border-bottom' >
                    <h2>Product</h2>

                </div>
                {
                    totalpro.map((e, i) => {
                        return (
                            <div className='col-lg-3 col-md-6 mb-5 pb-4 text-center'>
                                <img src={e.img} className='img-fluid' alt={`product${i}`} />
                                <strong>{e.title}</strong>
                                <br />
                                <p>{e.descpro}</p>
                                <span>{e.price}원</span>
                            </div>
                        )
                    })
                }


            </div>
        </section>
    )
}

export default Store
