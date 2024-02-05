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
                <div className='re_list row justify-content-between '>
                    {
                        props.datasrc.map((e, i) => {
                            return (
                                <div key={i} className='col-lg-3 col-sm-6'>
                                    <div className='re_box border' >

                                        <a href="#none" className='d-block text-center'><img src={`./assets/review/${e.reviewimg}`} alt={e.alt} className='img-fluid' /></a>

                                        <div className="re_info my-3 ps-3">
                                            <p className='re_title'>
                                                {e.ptitle}
                                            </p>
                                            <div className="re_txt">
                                                {e.ptext}
                                            </div>
                                            <div className="re_star">
                                                <span>
                                                    {e.wr_id}
                                                </span>
                                                <span> </span>
                                                <span>
                                                    {e.star}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="re_prd">
                                            <a href="#none">
                                                <img src="" alt="" />
                                                <span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Reviews



