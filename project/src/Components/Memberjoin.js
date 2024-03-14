import React, { useState } from 'react';
import axios from 'axios';

function Memberjoin() {

    const joinApi = async (myName, data = null) => {

        try {
            if (data) {


                const response = await axios.post(`${myName}`, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    body: data
                });

                if (response.status !== 200) {
                    throw new Error('컨텐츠 오류!');
                }

                console.log(response);

                return response;
            }
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    const [memberData, setMemberData] = useState({
        u_id: 'ㅊㅅㅇ',
        u_pw: '123qwe',
        u_name: 'ㅊㅅㅇ',
        u_phone: '01000000000',
        u_gender: 'M',

        marketing: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setMemberData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const buttonClick = async (e) => {
        e.preventDefault();
        console.log("회원정보전송");
        try {
            console.log("리액트 회원가입", memberData);
            const response = await joinApi('/signup/member', memberData);
            console.log("서버", response.data);

        } catch (error) {
            console.error("요청오류", error);
        }
    };



    return (
        <div style={{ marginTop: "500px" }}>
            <form onSubmit={(e) => { buttonClick(e) }}>
                <div className='u_idform'>
                    <label htmlFor="u_id">아이디</label><br />
                    <input type="text" name='u_id' id='u_id' placeholder='아이디' value={memberData.u_id}
                        onChange={handleChange} required />
                </div>
                <div className="u_pwform">
                    <label htmlFor="u_pw">비밀번호</label><br />
                    <input type="password" name='u_pw' id='u_pw' placeholder='대소문자특수문자' value={memberData.u_pw} onChange={handleChange} required />
                </div>
                <div className="u_nameform">
                    <label htmlFor="u_name">이름</label><br />
                    <input type="text" name='u_name' id='u_name' placeholder='홍길동' value={memberData.u_name} onChange={handleChange} required />
                </div>
                <div className='u_phoneform'>
                    <label htmlFor="u_phone">전화번호</label><br />
                    <input type="number" name='u_phone' id='u_phone' placeholder='전화번호' value={memberData.u_phone} onChange={handleChange} required />
                </div>
                <div className="u_gender">
                    <label htmlFor="gender_m">남</label>
                    <input type="radio" name='u_gender' id='gender_m' value="M" required onChange={handleChange} checked={memberData.u_gender === "M"} />
                    <label htmlFor="gender_f">여</label>
                    <input type="radio" name='u_gender' id='gender_f' value="F" required onChange={handleChange} checked={memberData.u_gender === "F"} />
                </div>
                <div className='terms'>
                    <label htmlFor="terms">이용약관동의</label>
                    <input type="checkbox" id='terms' required checked />
                </div>
                <div className="marketing">
                    <label htmlFor="marketing">sns수신동의</label>
                    <input type="checkbox" name='marketing' id='marketing' value={memberData.marketing} onChange={handleChange} />
                </div>
                <button type='submit'>
                    <span>신청하기</span>
                </button>
            </form>
        </div>
    )
}

export default Memberjoin;