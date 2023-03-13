import { Table } from 'reactstrap'
import axios from 'axios'

const RepDropdowntable = () => {
    const [stats, setStats] = useState([])
  
    useEffect(() => {
      axios.get('http://127.0.0.1:5000/projects/stats')
        .then(response => {
          setStats(response.data.stats)
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
              </tr>
            </thead>
            <tbody>
              {stats.map((stat, index) => (
                <tr key={index}>
                  <td className='text-nowrap'>{index + 1}</td>
                  <td className='text-nowrap'>{stat.name}</td>
                  <td className='text-nowrap'>{stat.value}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
  
  export default RepDropdowntable
  