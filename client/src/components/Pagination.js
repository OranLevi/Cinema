
import React, { useState } from 'react';

const Pagination = (props) => {

    const [page, setPage] = useState(1);

    const goToPage = (pageNum) => {
        setPage(pageNum);
        props.setPage(pageNum);
    }

    return (

        <nav className="d-flex justify-content-center">
            <ul className="pagination">
                <li className={`page-item  ${page === 1 && 'disabled'}`}>
                    <a className="page-link" href="/#" onClick={(e) => {
                        e.preventDefault();
                        goToPage(page - 1);
                    }} tabIndex="-1">Previous</a>
                </li>
                <li className="page-item active">
                    <a className="page-link" href="/#" onClick={(e) => {
                        e.preventDefault();
                    }}>{page}</a>
                </li>
                {page < props.untilPage && (
                    <li className={`page-item`}>
                        <a className="page-link" href="/#b" onClick={(e) => {
                            e.preventDefault();
                            goToPage(page + 1);
                        }}>{page + 1}</a>
                    </li>
                )}
                {page < props.untilPage - 2 && (
                    <li className={`page-item`}>
                        <a className="page-link" href="/#a" onClick={(e) => {
                            e.preventDefault();
                            goToPage(page + 2);
                        }}>{page + 2}</a>
                    </li>
                )}
                <li className={`page-item ${page === props.untilPage && 'disabled'}`}>
                    <a className="page-link" href="/#" onClick={(e) => {
                        e.preventDefault();
                        goToPage(page + 1);
                    }}>Next</a>
                </li>
            </ul>
        </nav>

    );
}

export default Pagination;