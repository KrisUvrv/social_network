import React from 'react';
import styles from './Paginator.module.css';
import {Pagination} from "antd";

type PropsType = {
    totalItemsCount: number
    pageSize: number
    onPageChanged?: (pageNumber: number) => void
}
let Paginator: React.FC<PropsType> = ({
                                          totalItemsCount,
                                          pageSize,
                                          onPageChanged = () => {},
                                      }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);


    return <div className={styles.paginator}>

        <Pagination defaultCurrent={1} total={pagesCount} onChange={onPageChanged} />
    </div>
}

export default Paginator;