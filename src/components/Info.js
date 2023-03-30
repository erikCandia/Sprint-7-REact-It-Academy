import React from "react";

//REcibimos datos con props desde el caomponente Panel
const Info = ({open, close, info}) => {
  if (!open) {
    <></>
  }
  else {
    return (
      <div className="w-75 m-3">
        <div className="d-inline alert alert-primary alert-dismissible fade show">
          {info}
          <button className="btn-close d-inline" onClick={close}></button>
        </div>
      </div>
    )
  }
}

export default Info;