import React from 'react'
import csv from './average_stats.csv'
import { List } from 'reactstrap'

export const AverageStats = () => {
    function create_arrays(csv)
    { 
      console.log(csv)
    //   let label = [];
      let v1 = [];
      let v2 = [];
      csv.map(element=>{
        // label.push(element["\ufeffRelease"])
        v1.push(element["name"])
        v2.push(element["value"])
      })
      let obj={
      //   label:label,
        v1:v1,
        v2:v2
      }
      console.log(obj);
      return obj;
    }
    let obj =  create_arrays(csv)
    console.log(obj.v2)
    let series = [
      {
          name:"name",
          data: obj.v1
      },
      {
          name:"value",
          data: obj.v2
      }
    ]
    console.log(series)

  return (
    <>
    <h4>Average Stats</h4>
    <div style={{ display: 'flex', flexDirection: 'horizontal' }}>
        <div>
            {series[0].name}
            {series[0].data.map((res)=> 
            <List>
                <li>{res}</li>
            </List>
            )}
        </div>
        <div>
            {series[1].name}
            {series[1].data.map((res)=>
            <List>
                <li>{res}</li>
            </List>
            )}
        </div>
    </div>
    </>
  )
}
