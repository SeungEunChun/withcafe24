import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
function Result() {




    const { keyword } = useParams();
    const [remsearch, setRem] = useState([])
    // console.log(keyword, typeof keyword)



    useEffect(() => {
        document.body.classList.remove("dim");


    }, [])

    useEffect(() => {
        const searchdb = async () => {
            try {
                const result = await axios.post(`/result/s/${keyword}`)
                setRem(result.data)
                // console.log(result.data)

            } catch (error) {
                console.log(error)
            }
        }

        searchdb();
        document.body.classList.remove("dim");
    }, [keyword])

    useEffect(() => {
        console.log(remsearch)
    }, [])
    return (

        <section className='storesec'>
            <div className='row container mx-auto text-center mt-5'>
                <h1>검색결과 : 총 {remsearch.length}</h1>

                {remsearch.map((e, i) => {
                    return (
                        <div className='col-lg-3 col-md-6 mb-5 pb-4 text-center' key={i}>
                            <Link to={`/detail/${e.id}`}>
                                <img src={e.img} className='img-fluid' alt={`product${i}`} />
                            </Link>

                            <strong>{e.title}</strong>
                            <br />
                            <p>{e.descpro}</p>
                            <span>{e.price}원</span>


                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default Result
