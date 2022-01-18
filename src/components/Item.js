import PropTypes from 'prop-types'
import './Items.css'

const Item = (props) =>
{
  const { title, amount } = props;  // Destructuring 
  const status = amount < 0 ? "expense" : "income"
  return (
    <li className={status}>{title}<span>{amount}</span></li>
  )
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
}

export default Item