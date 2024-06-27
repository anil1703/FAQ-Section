// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: true}

  clicking = () => {
    this.setState(prevState => {
      return {isActive: !prevState.isActive}
    })
  }
  render() {
    const {isActive} = this.state
    const {data} = this.props
    const {questionText, answerText, id} = data
    const checkicon = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    const checkAlt = isActive ? 'plus' : 'minus'
    return (
      <li className="style">
        <div className="inside">
          <h1>{questionText}</h1>
          <button type="button" onClick={this.clicking} className="btn-style">
            <img src={checkicon} alt={checkAlt} className="btn-img" />
          </button>
        </div>
        {!isActive && (
          <div className="bottom">
            <p>{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
