import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      charLimit: 50,
      remainingChar: 50,
    };

    // bind event handler
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onFormSubmitEventHandler = this.onFormSubmitEventHandler.bind(this);
  }

  // memberikan limit karakter pada judul catatan menggunakan state
  onTitleChangeEventHandler(event) {
    if (event.target.value.length <= this.state.charLimit) {
      this.setState({
        title: event.target.value,
        remainingChar: this.state.charLimit - event.target.value.length,
      });
    }
    if (
      this.state.remainingChar === 0 ||
      event.target.value.length > this.state.charLimit
    ) {
      this.setState({
        remainingChar: "Limit Karakter Habis",
      });
      document.querySelector(".char-limit").style.color = "red";
    } else {
      document.querySelector(".char-limit").style.color = "#f1eb90";
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState({
      body: event.target.value,
    });
  }

  onFormSubmitEventHandler(event) {
    event.preventDefault();

    this.props.addNote(this.state);

    this.setState({
      title: "",
      body: "",
    });
  }

  render() {
    return (
      <div className="wrap-addnote">
        <form className="note-input" onSubmit={this.onFormSubmitEventHandler}>
          <p className="char-limit">
            Karakter Tersisa: {this.state.remainingChar}
          </p>
          <input
            type="text"
            name="title"
            className="form-input"
            placeholder="Judul catatan..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            name="body"
            className="form-input"
            cols="30"
            rows="10"
            placeholder="Tuliskan catatan kamu di sini..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          ></textarea>
          <div className="form-footer">
            <button type="submit" className="btn-simpan">
              Simpan
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NoteInput;
