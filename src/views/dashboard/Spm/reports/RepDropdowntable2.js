import { useEffect, useState } from 'react'
import { Table } from 'reactstrap'
import axios from 'axios'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const RepDropdowntable2 = () => {
  const [stats, setStats] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)

  useEffect(() => {
    fetch('http://127.0.0.1:5001/projects/stats', {})
      .then((response) => response.json())
      .then((data) => {
        console.log(data[5].stats)
        setStats(data[5].stats)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = stats.slice(indexOfFirstItem, indexOfLastItem)

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(stats.length / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id))
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <PaginationItem key={number} active={currentPage === number}>
        <PaginationLink id={number} onClick={handleClick}>
          {number}
        </PaginationLink>
      </PaginationItem>
    )
  })

  return (
    <div>
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th scope='col' className='text-nowrap'>
                S.no
              </th>
              <th scope='col' className='text-nowrap'>
                Name
              </th>
              <th scope='col' className='text-nowrap'>
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((stat, index) => {
              console.log(stat)
              return (
                <tr key={index}>
                  <td className='text-nowrap'>{index + 1}</td>
                  <td className='text-nowrap'>{stat.name}</td>
                  <td className='text-nowrap'>{stat.value}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>

        <Pagination className='d-flex mt-3'>{renderPageNumbers}</Pagination>
      </div>
    </div>
  )
}

export default RepDropdowntable2