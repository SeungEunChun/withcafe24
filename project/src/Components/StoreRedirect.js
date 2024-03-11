import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const StoreRedirect = () => {
    let navigate = useNavigate();
    let { Category_no } = useParams();

    React.useEffect(() => {
        // 사용자가 스토어의 특정 카테고리로 바로 접근하려 했다면 해당 카테고리로,
        // 아니라면 스토어의 메인 페이지로 리다이렉션할 수 있습니다.
        if (Category_no) {
            navigate(`/store/${Category_no}`);
        } else {
            navigate('/'); // 혹은 사용자에게 메시지를 표시하고 메인 페이지로 이동
        }
    }, [navigate, Category_no]);


    return null;
};

export default StoreRedirect;
