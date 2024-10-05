import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { Discover } from "../hooks/useDiscover";

interface Props {
  data: FetchResponseDiscover<Discover> | undefined;
  isPreviousData: boolean;
}

interface FetchResponseDiscover<T> {
    page: number;
    results: T[];
    total_results: number;
}

const PostNav = ({ data, isPreviousData }: Props) => {
    const [page, setPage] = useState<number>(2);
    const [totalPosts, setTotalPosts] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(0);
    const pageSize = 20;
    
    
    
    useEffect(() => {
  if (data?.results && data?.results.length > 0) {
    const totalPosts = data.total_results / 2 || 0;
    setTotalPosts(totalPosts);
    const totalPages = Math.ceil(totalPosts / pageSize);
    setTotalPages(totalPages);
  } else {
    // Handle case when data or results is undefined or empty
    setTotalPosts(0);
    setTotalPages(0);
  }
}, [data]);



  const startItem = (page - 1) * pageSize + 1;
  const endItem = Math.min(page * pageSize, totalPosts);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);

    let startPage = Math.max(page - halfMaxPagesToShow, 1);
    let endPage = Math.min(page + halfMaxPagesToShow, totalPages);

    if (page <= halfMaxPagesToShow) {
      endPage = Math.min(maxPagesToShow, totalPages);
    } else if (totalPages - page < halfMaxPagesToShow) {
      startPage = Math.max(totalPages - maxPagesToShow + 1, 1);
    }

    if (startPage > 1) {
      pageNumbers.push(
        <Link to="/page/1" key={1} onClick={() => setPage(1)}>
          <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold hover:bg-[#ff3b30] hover:dark:bg-[#ff9500] hover:text-[#f2f2f7] text-[#333333] dark:text-[#f2f2f7] ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
            1
          </button>
        </Link>
      );
      if (startPage > 2) {
        pageNumbers.push(
          <span
            key="start-ellipsis"
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-[#333333] dark:text-[#f2f2f7] ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
          >
            ...
          </span>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <Link to={`/page/${i}`} key={i} onClick={() => setPage(i)}>
          <button
            className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold hover:text-[#f2f2f7] text-[#333333] dark:text-[#f2f2f7] ring-1 ring-inset ring-gray-300 hover:bg-[#ff3b30] hover:dark:bg-[#ff9500] focus:outline-offset-0 ${
              i === page ? "bg-[#ff3b30] dark:bg-[#ff9500]" : ""
            }`}
          >
            {i}
          </button>
        </Link>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(
          <span
            key="end-ellipsis"
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-[#333333] dark:text-[#f2f2f7] ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
          >
            ...
          </span>
        );
      }
      pageNumbers.push(
        <Link
          to={`/page/${totalPages}`}
          key={totalPages}
          onClick={() => setPage(totalPages)}
        >
          <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold hover:bg-[#ff3b30] hover:dark:bg-[#ff9500] hover:text-[#f2f2f7] text-[#333333] dark:text-[#f2f2f7] ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
            {totalPages}
          </button>
        </Link>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-around text-[#333333] dark:text-[#f2f2f7] bg-white dark:bg-[#2c2c2e] border border-gray-200 rounded-lg shadow  dark:border-gray-700 px-4 py-3 sm:px-6 w-[100%] mt-6">
      <div className="flex flex-1 items-center justify-between">
        <div className="hidden sm:block">
          <p className="text-sm">
            Showing <span className="font-medium">{startItem}</span> to{" "}
            <span className="font-medium">{endItem}</span> of{" "}
            <span className="font-medium">{totalPosts}</span> results
          </p>
        </div>
        <div className="mx-auto">
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          >
            <Link to={`/page/${page - 1}`}>
              <button
                aria-disabled={page === 1}
                onClick={() => setPage(page - 1)}
                disabled={page === 1 || isPreviousData}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <FaChevronLeft aria-hidden="true" className="h-5 w-5" />
              </button>
            </Link>

            {renderPageNumbers()}

            <Link to={`/page/${page + 1}`}>
              <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages || isPreviousData}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <FaChevronRight aria-hidden="true" className="h-5 w-5" />
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PostNav;
