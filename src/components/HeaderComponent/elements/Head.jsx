import "./Head.css";
export function Head() {
  return (
    <div>
      <div className="header-container">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-md-3 col-xs-12">
              <div className="logo">
                <a title="e-commerce" href="#">
                  <img alt="e-commerce" src="../src/assets/images/logo.png" />
                </a>{" "}
              </div>
            </div>
            <div className="col-xs-9 col-sm-6 col-md-7">
              <div className="top-search">
                <div id="search">
                  <form>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar"
                        name="search"
                      />
                      <button className="btn-search" type="button">
                        <box-icon name="search"></box-icon>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-xs-3 top-cart">
              <div className="top-cart-contain">
                <div className="mini-cart">
                  <div className="cart">
                    <box-icon name="cart"></box-icon>
                    <span className="item__total"> </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
