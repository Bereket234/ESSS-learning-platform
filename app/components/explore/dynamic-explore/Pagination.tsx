import { MdNavigateNext, MdNavigateBefore, MdFirstPage, MdLastPage } from "react-icons/md";
import { useState } from "react";

interface PaginationProps {
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  const circles: JSX.Element[] = [];
  for (let i: number = 1; i <= totalPages; i++) {
    circles.push(
      <button
        key={i}
        onClick={() => handlePageChange(i)}
        className={`h-[37px] w-[37px] flex items-center justify-center font-SofiaProSemiBold text-3xl rounded-full shadow-xl mx-1 cursor-pointer ${
          currentPage === i ? "bg-Primary text-Secondary" : "bg-[#F8F7F4] text-Primary" 
        }`}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="flex">
      <div className="mr-5">
        <button onClick={handleFirstPage} disabled={currentPage === 1}>
          <MdFirstPage size={48} />
        </button>
      </div>
      <div className="mr-20">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          <MdNavigateBefore size={48} />
        </button>
      </div>

      <div className="flex items-center gap-4">{circles}</div>

      <div className="ml-20">
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          <MdNavigateNext size={48} />
        </button>
      </div>

      <div className="ml-5">
        <button onClick={handleLastPage} disabled={currentPage === totalPages}>
          <MdLastPage size={48} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
