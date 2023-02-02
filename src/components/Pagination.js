import { Fragment } from "react";
import "../style/Pagination.css";

function Pagination({ infos, nb, setNb }) {
  function previousPage() {
    if (nb >= 9) {
      setNb(nb - 9);
    }
  }

  function nextPage() {
    setNb(nb + 9);
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
