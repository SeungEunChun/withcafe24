import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import axios from 'axios';

function Store(props) {

    // const [totalpro, settotal] = useState([]);
    const { Category_no } = useParams(); // Category_no가 주소창에서 나왔으니 string문자열인줄 알았으나 typeof로 출력해보니 Number로 인식함

    // const catenum = Object.keys(props.catesrc["Cate_title"])

    // const setCategory = Category_no === "all" ? "all" : Category_no;

    const { datasrc, catesrc } = props;

    useEffect(() => {
        console.log(typeof Category_no, Category_no)
        console.log(props.catesrc, typeof props.catesrc)
    }, [Category_no, props]);

    return (
        <section className='storesec'>


            <div className='row container mx-auto text-center mt-5'>

                <div className='mb-5 border-bottom'>
                    <h2>{Category_no !== "all" ? catesrc.filter((el) => el.id == Category_no)[0].Cate_title : "전체상품"}</h2>
                </div>
                <ul className='d-lg-flex justify-content-start storeul mb-5'>
                    <li className='mx-2 mb-3'><Link to="/store/all">전체상품</Link></li>
                    <li className='mx-2 mb-3'><Link to="/store/0">토너</Link></li>
                    <li className='mx-2 mb-3'><Link to="/store/1">에센스</Link></li>
                    <li className='mx-2 mb-3'><Link to="/store/2">로션</Link></li>
                    <li className='mx-2 mb-3'><Link to="/store/3">맨즈케어</Link></li>
                    <li className='mx-2 mb-3'><Link to="/store/4">클렌징</Link></li>
                </ul>
                {datasrc && Category_no !== "all" ? datasrc.filter((element) => element.Category_no == Category_no).map((e, i) => (
                    <div className='col-lg-3 col-md-6 mb-5 pb-4 text-center' key={i}>
                        <Link to={`/detail/${e.id}`}>
                            <img src={e.img} className='img-fluid' alt={`product${i}`} />
                        </Link>

                        <strong>{e.title}</strong>
                        <br />
                        <p>{e.descpro}</p>
                        <span>{e.price}원</span>


                    </div>
                ))
                    :
                    datasrc && datasrc.map((e, i) => (
                        <div className='col-lg-3 col-md-6 mb-5 pb-4 text-center' key={i}>
                            <Link to={`/detail/${e.id}`}>
                                <img src={e.img} className='img-fluid' alt={`product${i}`} />
                            </Link>
                            <strong>{e.title}</strong>
                            <br />
                            <p>{e.descpro}</p>
                            <span>{e.price}원</span>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Store;
