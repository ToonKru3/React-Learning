import Item from './Item'
import { v4 as uuidv4} from 'uuid'
import './Transcation.css'

const Transaction = () =>
{
  const data = [
    {title:"healty expense", amount:2000},
    {title:"gas cost", amount:5000},
    {title:"rent hotel", amount:8000},
    {title:"salary", amount:70000},
    {title:"insurance", amount:300},
    {title:"travel expense", amount:300},
  ]


  return(
    <ul className='item-list'>
        {data.map((element) =>
        {
          return <Item {...element} key={uuidv4()}/>
        })}
    </ul>
  )
}

export default Transaction