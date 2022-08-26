import React from "react";
import ReactPaginate from "react-paginate";
import { setPage } from "../../store/kinopoisk/filterKino.slice";
import { useDispatch } from "react-redux";
import styles from './Pagination.module.scss'

type PagintePropsType = {
  totalPages: number
}

const Pagination: React.FC<PagintePropsType> = ({ totalPages }) => {
  const dispatch = useDispatch();

  return (
    <ReactPaginate
        className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => dispatch(setPage(event.selected + 1))}
      pageRangeDisplayed={2}
      pageCount={totalPages}
      previousLabel="<"
    />
  );
};

export default Pagination;