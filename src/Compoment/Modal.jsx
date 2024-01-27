import React, { Component } from "react";

export default class Modal extends Component {

    render() {
    const {title , content,open,onClose,onOk}=this.props
    if(!open) return null; 
    return (
      // <!-- Button trigger modal -->
      // <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      //   Launch demo modal
      // </button>

      // <!-- Modal -->
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{opacity:1,display:'block'}}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              />
            </div>
            <div className="modal-body">{content}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
               onClick={onClose}
              >
                Close
              </button>
              <button type="button" onClick={onOk} className="btn btn-primary">
              Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
