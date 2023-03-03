import { Table } from 'reactstrap'

const OpsDropdowntable3 = () => {
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
                <tr>
                <td className='text-nowrap'>1</td>
                <td className='text-nowrap'>Avg_Hits/s</td>
                <td className='text-nowrap'>2.0</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Avg_Pages/s</td>
                <td>1.3</td>
                </tr>
                <tr>
                <td>3</td>
                <td>Avg_Response_time</td>
                <td>0.87</td>
                </tr>
                <tr>
                <td>4</td>
                <td>Avg_Throughput</td>
                <td>0.37</td>
                </tr>
                <tr>
                <td>5</td>
                <td>Total_users_launched</td>
                <td>0.37</td>
                </tr>
            </tbody>
            </Table>
        </div>
    </div>
  )
}

export default OpsDropdowntable3