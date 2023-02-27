import React from 'react'
import { List } from 'reactstrap'
import csv from "./top_average.csv"

export const MaxTransactions = () => {
    function create_arrays(csv)
  { 
    console.log(csv)
    let label = [];
    let v1 = [];
    let v2 = [];
    csv.map(element=>{
      label.push(element["\ufeffRelease"])
      v1.push(element["transaction_name"])
      v2.push(element["response_time"])
    })
    let obj={
    //   label:label,
      v1:v1,
      v2:v2
    }
    console.log(obj);
    return obj;
  }
  
  let series = [
    {
        name:"transaction_name",
        data: create_arrays(csv).v1
    },
    {
        name:"response_time",
        data: create_arrays(csv).v2
    }
  ]
  console.log(series)
  return (
    <>
    <h4>
        Max Transactions (Top Average)
        </h4>
        { series ?
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
                <li>
                    {res}
                </li>
            </List>
            )}
        </div>
        
    </div>
: <></>
}
    </>
  )
}
