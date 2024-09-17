import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const createCurrentPageSetArray = ({
  currentPage,
}: {
  currentPage: number
}) => {
  let pageArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  if (currentPage % 10 === 0) {
    pageArray.map((item) => {
      item + 10
    })
  }

  return pageArray
}

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const currentPageArray = createCurrentPageSetArray({ currentPage })
  const pageBack = currentPage != 1 ? currentPage - 1 : currentPage
  const pageForward = currentPage != totalPages ? currentPage + 1 : currentPage
  return (
    <div className="w-full h-12 flex flex-row justify-between items-center">
      <ArrowLeftIcon
        className="w-8 h-8"
        onClick={() => setCurrentPage(pageBack)}
      />
      <div className="w-full flex flex-row gap-6 mx-auto justify-center">
        {currentPageArray.map((pageNum) => (
          <div
            key={pageNum}
            className={
              pageNum == currentPage
                ? `font-semibold text-gray-600 bg-blue-200 w-6 h-6 rounded-full text-center cursor-pointer`
                : `font-semibold text-gray-400 w-6 h-6 text-center cursor-pointer`
            }
            onClick={() => setCurrentPage(pageNum)}
          >
            {pageNum}
          </div>
        ))}
      </div>
      <ArrowRightIcon
        className="w-8 h-8"
        onClick={() => setCurrentPage(pageForward)}
      />
    </div>
  )
}

export default Pagination
