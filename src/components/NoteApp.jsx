import React from "react";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";
import NoteArchived from "./NoteArchived";
import { getInitialData } from "../utils/data";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      keyword: "",
      isSearchFocused: false,
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onMoveHandler = this.onMoveHandler.bind(this);
    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
    this.listActiveNotes = this.listActiveNotes.bind(this);
    this.listArchivedNotes = this.listArchivedNotes.bind(this);
    this.onSearchFocusHandler = this.onSearchFocusHandler.bind(this);
    this.onSearchBlurHandler = this.onSearchBlurHandler.bind(this);
  }

  onSearchChangeHandler(event) {
    this.setState({
      keyword: event.target.value,
    });
  }

  onSearchFocusHandler() {
    this.setState({ isSearchFocused: true });
  }

  onSearchBlurHandler() {
    this.setState({ isSearchFocused: false });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  // memindahkan catatan ke arsip
  onMoveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.archived === false) {
        return note.id === id ? { ...note, archived: true } : note;
      } else {
        return note.id === id ? { ...note, archived: false } : note;
      }
    });
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  listActiveNotes() {
    return this.state.notes.filter(
      (note) =>
        !note.archived &&
        note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
    );
  }

  listArchivedNotes() {
    return this.state.notes.filter(
      (note) =>
        note.archived &&
        note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
    );
  }

  render() {
    return (
      <div className="note-app">
        <div className="wrap-head-title">
          <h1 className="head-app">Simple Notes App</h1>
          <div className="wrap-searchnotes">
            <label htmlFor="search" className="form-label">
              Pencarian
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="Cari Judul Catatanmu..."
              value={this.state.keyword}
              onChange={this.onSearchChangeHandler}
              onFocus={this.onSearchFocusHandler}
              onBlur={this.onSearchBlurHandler}
            />
          </div>
        </div>
        {!this.state.isSearchFocused && (
          <div className="wrap-inputapp">
            <h3 className="sub-title">Buat Catatan</h3>
            <NoteInput addNote={this.onAddNoteHandler} />
          </div>
        )}
        <div className="wrap-activenotes">
          <h3 className="sub-title">Catatan Aktif</h3>
          <NoteList
            notes={this.listActiveNotes()}
            onDelete={this.onDeleteHandler}
            onMove={this.onMoveHandler}
          />
        </div>
        <div className="wrap-archivednotes">
          <h3 className="sub-title">Arsip Catatan</h3>
          <NoteArchived
            notes={this.listArchivedNotes()}
            onDelete={this.onDeleteHandler}
            onMove={this.onMoveHandler}
          />
        </div>
      </div>
    );
  }
}

export default NoteApp;
