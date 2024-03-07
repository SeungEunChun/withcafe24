import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function Prodetail(props) {
    const [sale, forSale] = useState(1);
    if (sale === 0) {
        alert("최소수량입니다!");
        forSale(1);
    }

    const { id } = useParams();
    console.log(props.datasrc)
    return (
        <>
            {props.datasrc && props.datasrc.filter(detail => detail.id == id).map((e, i) => {
                return (
                    <div>
                        <div className="prodetail container d-lg-flex justify-content-between ">
                            <div className="imgarea px-lg-2">
                                <div className='detailimg'>
                                    <img src={e.img} alt={`product${i}`} className='img-fluid' />
                                </div>
                            </div>
                            <div className="infoarea px-lg-2">
                                <h2>{e.title}</h2>
                                <div>
                                    <table>
                                        <caption className='visually-hidden'>상품 정보</caption>
                                        <tbody>
                                            <tr>
                                                <th scope='row'><span>상품요약정보</span></th>&nbsp;&nbsp;&nbsp;
                                                <td><span>{e.descpro}</span></td>
                                            </tr>
                                            <tr>
                                                <th scope='row'><span>판매가</span></th>&nbsp;&nbsp;&nbsp;
                                                <td><span>{e.price} 원</span></td>
                                            </tr>


                                        </tbody>
                                    </table>
                                    <div className='mt-5'>
                                        <div className="quantity">
                                            <button onClick={() => forSale(sale - 1)}>-</button>
                                            <input type="text" value={sale} />
                                            <button onClick={() => forSale(sale + 1)}>+</button>
                                        </div>

                                        <div>
                                            <ul className='order'>
                                                <li>총 수량 :{sale}개</li>
                                                <li>총 금액 :{e.price * sale}원</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className='detailpart d-flex justify-content-center mt-3 mx-3 border-top mb-5'>
                            <img className='detailpop' src="https://cdn.011st.com/ui_img/beauty/scinic/REBRANDING/thesimple/2023_dailylotion260ml/cont_01.jpg" alt="" />
                        </div>
                        <div className='d-flex justify-content-center mb-5'>

                            <button className='btn-4'>다른제품 보러가기!</button>
                        </div>
                    </div>
                )
            })

            }
        </>
    )
}

export default Prodetail;
