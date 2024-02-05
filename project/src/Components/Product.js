import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Product(props) {
    const tabname = Object.keys(props.datasrc['Category'][0]);
    const [inter, setInter] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const tabrole = useRef(0);
    const intervalRef = useRef();

    useEffect(() => {
        const updateInterval = () => {
            if (window.innerWidth <= 576) {
                clearInterval(intervalRef.current);
                setIsActive(false);
            } else {
                if (!isActive) {
                    intervalRef.current = setInterval(() => {
                        tabrole.current++;
                        tabrole.current %= tabname.length;
                        setInter(tabrole.current);
                    }, 4000);
                    setIsActive(true);
                }
            }
        };

        window.addEventListener('resize', updateInterval);

        // 초기 인터벌 설정
        intervalRef.current = setInterval(() => {
            tabrole.current++;
            tabrole.current %= tabname.length;
            setInter(tabrole.current);
        }, 4000);

        return () => {
            clearInterval(intervalRef.current);
            window.removeEventListener('resize', updateInterval);
        };
    }, [isActive, tabname.length]);

    // 나머지 컴포넌트 로직...

    return (
        <section>
            <div id='Product' className='row container mx-auto text-center mt-5'>
                <div div className='mb-5 border-bottom' >
                    <h2>Product</h2>
                    <p>싸이닉은 피부에 옳은 것만, 감성에 닿는것만 담아 <br /> 각자가 가진 아름다움을 실현하는 뷰티 브랜드입니다.</p>
                </div>

                <ul className='d-flex justify-content-between px-3 my-5'>
                    {
                        tabname.map((e, i) => {
                            return (
                                <li key={i} onClick={() => { tabrole.current = i; setInter(tabrole.current) }} className={`${tabrole.current === i ? "on" : ""
                                    }`}>{e}</li>
                            )
                        })
                    }
                </ul>

                {
                    props.datasrc['Category'][0][tabname[inter]].map((e, i) => {
                        return (
                            <div className='col-lg-3 col-md-6 mb-5 pb-4 text-center'>
                                <Link className='d-block'>
                                    <img src={`./assets/product/${e.img}`} alt={`상품${i}`} className='img-fluid' />
                                </Link>


                                <strong>{e.title}</strong>
                                <br />
                                <p>{e.prodesc}</p>
                                <span>{e.price} 원</span>
                            </div>
                        )
                    })
                }
            </div >
        </section>

    );
}

export default Product;