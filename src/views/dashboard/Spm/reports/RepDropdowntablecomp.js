import { useEffect, useState } from 'react'

import { Table } from 'reactstrap'

const RepDropdowntablecomp = () => {
    const [stats, setStats] = useState([])
  
    useEffect(() => {
      fetch('http://127.0.0.1:5001/projects/stats',{
    
      })
        .then((response) => (response.json()))
        .then((data)=>{
          console.log(data[5].stats)
          setStats(data[5].stats)
        })
   
        .catch(error => {
          console.log(error)
        })
    }, [])
  
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
                <th scope='col' className='text-nowrap'>
                  Value2
                </th>
              </tr>
            </thead>
            <tbody>
              {stats.map((stat, index) => {
                console.log(stat)
                return(
                <tr key={index}>
                  <td className='text-nowrap'>{index + 1}</td>
                  <td className='text-nowrap'>{stat.name}</td>
                  <td className='text-nowrap'>{stat.value}</td>
                  <td className='text-nowrap'>{stat.value}</td>
                </tr>
                )
                })}
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
  
  export default RepDropdowntablecomp
  