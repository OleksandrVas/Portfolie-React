import React, {useState} from "react";
import classes from "./paginator.module.css";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 6}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize
    return (
        <>
            <div className={classes.paginationInRow}>
                <div>
                    {portionNumber > 1 &&
                    <button onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }}>Prev</button>}
                </div>
                <div className={classes.paginationNumber}>
                    {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                        .map((p) => {
                            return (
                                <span className={currentPage === p && classes.selecetedPage}
                                      onClick={(e) => {
                                          onPageChanged(p)
                                      }}>{p}</span>
                            )
                        })}
                </div>

                <div>
                    {portionCount > portionNumber &&
                    <button onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }}>Next</button>}
                </div>
            </div>
        </>
    )

}

export default Paginator