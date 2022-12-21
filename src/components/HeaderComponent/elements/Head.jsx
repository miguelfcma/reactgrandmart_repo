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
                        <i className="fa fa-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-xs-3 top-cart">
              <div className="top-cart-contain">
                <div className="mini-cart">
                  <div
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    className="basket dropdown-toggle"
                  >
                    {""}
                    <a href="#">
                      <div className="cart-icon">
                        <i className="fa fa-shopping-cart"></i>
                      </div>
                      <div className="shoppingcart-inner hidden-xs">
                        <span className="cart-title">Carrito</span>{" "}
                        <span className="cart-total"></span>
                      </div>
                    </a>
                  </div>
                  <div>
                    <div className="top-cart-content">
                      <div className="block-subtitle hidden-xs">
                        Carrito de compras
                      </div>
                      <ul id="cart-sidebar" className="mini-products-list">
                        <li className="item odd">
                          {" "}
                          <a
                            href="#"
                            title="Ipsums Dolors Untra"
                            className="product-image"
                          >
                            <img
                              src="../src/assets/images/products/img07.png"
                              alt="Lorem ipsum dolor"
                              width="65"
                            />
                          </a>
                          <div className="product-details">
                            {" "}
                            <a
                              href="#"
                              title="Remove This Item"
                              className="remove-cart"
                            >
                              <i className="icon-close"></i>
                            </a>
                            <p className="product-name">
                              <a href="#">
                                Lorem ipsum dolor sit amet Consectetur
                              </a>{" "}
                            </p>
                            <strong>1</strong> x{" "}
                            <span className="price">$20.00</span>{" "}
                          </div>
                        </li>
                        <li className="item even">
                          {" "}
                          <a
                            href="#"
                            title="Ipsums Dolors Untra"
                            className="product-image"
                          >
                            <img
                              src="../src/assets/images/products/img11.png"
                              alt="Lorem ipsum dolor"
                              width="65"
                            />
                          </a>
                          <div className="product-details">
                            {" "}
                            <a
                              href="#"
                              title="Remove This Item"
                              className="remove-cart"
                            >
                              <i className="icon-close"></i>
                            </a>
                            <p className="product-name">
                              <a href="#">
                                Consectetur utes anet adipisicing elit
                              </a>{" "}
                            </p>
                            <strong>1</strong> x{" "}
                            <span className="price">$230.00</span>{" "}
                          </div>
                        </li>
                        <li className="item last odd">
                          {" "}
                          <a
                            href="#"
                            title="Ipsums Dolors Untra"
                            className="product-image"
                          >
                            <img
                              src="../src/assets/images/products/img10.png"
                              alt="Lorem ipsum dolor"
                              width="65"
                            />
                          </a>
                          <div className="product-details">
                            {" "}
                            <a
                              href="#"
                              title="Remove This Item"
                              className="remove-cart"
                            >
                              <i className="icon-close"></i>
                            </a>
                            <p className="product-name">
                              <a href="#">Sed do eiusmod tempor incidist</a>{" "}
                            </p>
                            <strong>2</strong> x{" "}
                            <span className="price">$420.00</span>{" "}
                          </div>
                        </li>
                      </ul>
                      <div className="top-subtotal">
                        Subtotal: <span className="price">$520.00</span>
                      </div>
                      <div className="actions">
                        <button className="btn-checkout" type="button">
                          <i className="fa fa-check"></i>
                          <span>Pagar!</span>
                        </button>
                        <button className="view-cart" type="button">
                          <i className="fa fa-shopping-cart"></i>{" "}
                          <span>Ver carrito</span>
                        </button>
                      </div>
                    </div>
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
