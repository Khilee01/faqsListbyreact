import './index.css'
import {Component} from 'react'

class FaqItem extends Component {
  state = {
    answerShown: false,
  }

  toggleAnswerShown = () => {
    this.setState(prevState => ({answerShown: !prevState.answerShown}))
  }

  render() {
    const {eachFaq} = this.props
    const {questionText, answerText} = eachFaq
    const {answerShown} = this.state

    return (
      <li className="listElement">
        <div className="rowQuestion">
          <h1 className="question">{questionText}</h1>
          <button type="button" onClick={this.toggleAnswerShown}>
            {answerShown ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
              />
            )}
          </button>
        </div>
        {answerShown ? <p className="answer">{answerText}</p> : null}
      </li>
    )
  }
}

export default FaqItem
