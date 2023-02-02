import { Fragment } from "react";
import "../style/Pagination.css";

function Pagination({ infos, nb, setNb, nbPage, setNbPage }) {
  function previousPage() {
    if (nb >= 9) {
      setNb(nb - 9);
      setNbPage(nbPage - 1);
    }
  }

  function nextPage() {
    setNb(nb + 9);
    setNbPage(nbPage + 1);
  }


  return (
    <Fragment>
      {infos != null ? (
        <div className="body">
          <div className="pagination">
            {nb >= 9 ? (
              <button className="btn-page" onClick={() => previousPage()}>
                Previous
              </button>
            ) : (
              <button
                className="btn-page disabled"
                disabled
                onClick={() => previousPage()}
              >
                Previous
              </button>
            )}
            <div className="info-page">
              <p className="info">[{nb} ... {nb+infos.length}]</p>
              <p className="info page">Page {nbPage}</p>
            </div>
            {infos.length === 9 ? (
              <button className="btn-page" onClick={() => nextPage()}>
                Next
              </button>
            ) : (
              <button
                className="btn-page disabled"
                disabled
                onClick={() => nextPage()}
              >
                Next
              </button>
            )}
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}

export default Pagination;
