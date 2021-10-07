import React, {useState} from 'react';
import styles from './Pagination.module.css';

let Pagintaion = (props) => {
    let setCurrentPage = (event)=>{
        props.setCurrentPage(event.target.dataset.id);
    };
    let prevPageBlock = () => {
        if(pageBlockNumber > 1){
            setPageBlockNumber(pageBlockNumber-1);
        }
    };
    let nextPageBlock = () => {
        if(pageBlockNumber < pagesBlocks){
            setPageBlockNumber(pageBlockNumber+1);
        }
    };
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagesBlocks = Math.ceil(pagesCount / props.pageBlockSize);
    const [pageBlockNumber, setPageBlockNumber] = useState(Math.ceil(props.currentPage / props.pageBlockSize));
    let x2 = pageBlockNumber * props.pageBlockSize;
    let x1 = (pageBlockNumber-1) * props.pageBlockSize + 1;
    let pages = [];
    for (let i = x1; i <= pagesCount; i++) {
        if(i <= x2){
            let isSelected = false;
            +props.currentPage === i ? isSelected = true : isSelected = false;
            let cls = (isSelected ? styles.selected + ' ' : '') + styles.item; 
            let element = (<span key={i} onClick={setCurrentPage} data-id={i} className={cls}>{i}</span>);
            pages.push(element);
        }
    }
    return (
        <div className={styles.pagination}>
            {pageBlockNumber > 1 && <div className={styles.prev} onClick={prevPageBlock}>Prev</div>}
            {pages}            
            {props.pageBlockNumber === props.pagesBlocks && <div className={styles.next} onClick={nextPageBlock}>Next</div>}
        </div>
    );

};


export default Pagintaion;