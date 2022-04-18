import React from "react";

const Card = ({ photo }) => {
    const { user, urls, created_at, likes } = photo;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={urls.full} className="card-img-top img-fluid card-img " alt="..." />
        <div className="card-body d-flex justify-content-between">
          <h5 className="card-title">{user.name}</h5>
          <div className="card-text d-flex">
          <img className="alert alert-danger p-0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZFJREFUSEu1leExBEEQhb+LgAwQASIgA0SACBAJIkAEyIAIEAEyIALqU9NXvXN7M+fHTtX+2Jne9/q97umdMfGaTYzPKgQnwB6wUx5zei3PA/DYSrJFcAhcApsdlR/ABSDZwlpGcAWclehPwPenkrXbqtkHzoGNEmeMRIM1RpDB/cD31pJEpa7rQjqPrwm05b6c7qaMe72gopcSdJTtqgn0U8l15uvAV8VS74USMbYiNhPYLTeAnkdhBXFPZRKclg/d88zCuhfkkeBcRSa4BY6r7AU46PhjjICuUHEHmPDgHtjb20B4r4r3nvnlXEvMPmohljgDgp8SnFUpfa1D8l3sirABTgYbI4i6tDisgfZ2CWqL4oMWSQ0eFr3FWOkVuUVSg3eLHJds0MdJelYyBm5os01zwLIR8dd6leeRQ7RovkcL43ryUWE2ediZlQOstf417AIok+ir78/VuPYnJHiMlYVJWl+0OkvtEjjm/TIVei7Rv344GUwiH3vcUeKyz703go4CB8Aq/+ROCdrHkxP8AnOFZBmsb3b4AAAAAElFTkSuQmCC"/>
          <span className="ms-2">{likes}</span>
          </div>
        </div>
        <div className="card-footer">
          <small className="text-muted">Publicado {created_at}</small>
        </div>
      </div>
    </div>
  );
};

export default Card;
