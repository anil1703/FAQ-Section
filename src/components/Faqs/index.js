// Write your code here.
import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="home">
      <h1 className="head">FAQs</h1>
      <ul className="ulList">
        {faqsList.map(eachItem => (
          <FaqItem key={eachItem.id} data={eachItem} />
        ))}
      </ul>
    </div>
  )
}
export default Faqs
