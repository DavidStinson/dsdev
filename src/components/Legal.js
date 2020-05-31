import React, { Component } from "react";
import ReactModal from "react-modal";

import "./legal.css";

export default class Legal extends Component {
  state = { showModal: false };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <>
        <button className="legal-button" onClick={this.handleOpenModal}>
          Legal disclaimers
        </button>
        <ReactModal
          isOpen={this.state.showModal}
          closeTimeoutMS={400}
          contentLabel="Legal Modal"
          className="modal"
          overlayClassName="modal-overlay"
          bodyOpenClassName="modal-body"
          htmlOpenClassName="modal-html"
        >
          <h2 className="legal-head">Legal stuff</h2>
          <h3 className="legal-subhead">
            While the below disclaimers are technically required by their
            license-holders I would like to also sincerely thank all the
            creators whose work makes this site look great. Thank you!
          </h3>
          <p className="legal-text">
            Font Awesome Sun Solid Icon and Moon Solid Icon are included in Font
            Awesome Free, available{" "}
            <a className="legal-link"
              href="https://fontawesome.com/icons?d=gallery&m=free"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            . The icons are licensed by Fonticons, Inc. under the CC BY 4.0
            license avaliable{" "}
            <a className="legal-link"
              href="https://fontawesome.com/license/free"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            . These icons are presented here unmodified. Fonticons, Inc. is not associated with me in any way and does not endorse me, or this site.
          </p>
          <p className="legal-text">
            All technology icons are included in vscode-icons available{" "}
            <a className="legal-link"
              href="https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            . The icons are licensed by the VSCode Icons Team. under the CC BY-SA 4.0
            license avaliable{" "}
            <a className="legal-link"
              href="https://creativecommons.org/licenses/by-sa/4.0/legalcode"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            . These icons are presented here unmodified. The VSCode Icons Team is not associated with me in any way and does not endorse me, or this site. Branded icons contained in this set are trademarks of their respective owners. These trademark holders do not endorse me or my site, nor do I endorse them.
          </p>
          <button
            className="close-legal-button"
            onClick={this.handleCloseModal}
          >
            Close
          </button>
        </ReactModal>
      </>
    );
  }
}
