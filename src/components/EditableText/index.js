import {Component} from 'react'
import './index.css'

class EditableText extends Component {
  state = {text: '', isEditable: true}

  onChangeText = event => {
    this.setState({text: event.target.value})
  }

  onChangeBtn = () => {
    this.setState(prevState => ({
      isEditable: !prevState.isEditable,
    }))
  }

  render() {
    const {text, isEditable} = this.state
    return (
      <div className="main-container">
        <div className="container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="input-element">
            {isEditable ? (
              <input
                type="text"
                value={text}
                className="input-ele"
                placeholder="Enter Text"
                onChange={this.onChangeText}
              />
            ) : (
              <p className="text">{text}</p>
            )}
            {isEditable ? (
              <button
                className="button"
                type="button"
                onClick={this.onChangeBtn}
              >
                Save
              </button>
            ) : (
              <button
                className="button"
                type="button"
                onClick={this.onChangeBtn}
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EditableText
