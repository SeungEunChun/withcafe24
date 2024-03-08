import { useState } from 'react'
import dsearchicon from '../img/icon/icon_dsearch.svg'
import dcloseicon from '../img/icon/icon_dclose.svg'
import { Link } from 'react-router-dom'
function SearchForm(props) {


    const [result, searchResult] = useState("")





    // console.log(props.datasrc) //props로 전해준 데이터가 잘 왔는지?

    const handleClick = () => {
        document.body.classList.remove("dim")
    }
    return (
        <div className="showsearch">
            <div className='field'>
                <fieldset>
                    <legend>검색</legend>
                    <div className="searchForm " title="검색어 입력">
                        <input type="text" placeholder="검색어 입력
        " value={result} onChange={(e) => { searchResult(e.target.value) }} />
                        <div className="activesearch">
                            <Link to={`/result/s/${result}`}>
                                <img src={dsearchicon} alt="검색버튼" />
                            </Link>

                        </div>
                    </div>
                </fieldset>
                <div className="closesearch" onClick={handleClick}>
                    <img src={dcloseicon} alt="닫기버튼" />

                </div>
            </div>

        </div>
    )
}

export default SearchForm;