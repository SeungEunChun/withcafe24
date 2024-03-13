import React from 'react'

function Reviews(props) {
    return (
        <section id='main_review' className='container'>
            <div className='sec_title'>
                <h2>BEST REVIEWS</h2>
                <p>싸이닉을 경험해 보신 고객님들의 리얼 후기들 입니다. <br />
                    베스트 후기에 선정되시면 포인트를 적립해드립니다.</p>
            </div>

            <div>
                <ul className='d-flex flex-lg-row flex-column row align-items-center p-0 justify-content-lg-between justify-content-center'>
                    {
                        props.datasrc.map((e, i) => {
                            return <li className='d-block border mli mb-3 mb-lg-0'>
                                <img src={`/assets/review/${e.reviewimg}`} alt={`review${i}`} className='img-fluid' />
                                <div className='re_info'>
                                    <strong className='d-block mb-3'>{e.ptitle}</strong>
                                    <p>{e.ptext}</p>
                                    <div className='d-flex'>
                                        <p>{e.wr_id}</p>
                                        <span className='ms-3'>{e.star}</span>
                                    </div>

                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default Reviews



