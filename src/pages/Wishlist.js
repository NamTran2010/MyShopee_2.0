import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 p-5">
        <div className="row">
          {/* item 1 */}
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  className="image-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="py-3">
                <h5 className="title">
                  Honor T1 7.0 1GB RAM 8G ROM 7 Inch With WIFI + 3G Tablet
                </h5>
                <h6 className="price">$ 100</h6>
              </div>
            </div>
          </div>
          {/* item 2 */}
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  className="image-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="py-3">
                <h5 className="title">
                  Honor T1 7.0 1GB RAM 8G ROM 7 Inch With WIFI + 3G Tablet
                </h5>
                <h6 className="price">$ 100</h6>
              </div>
            </div>
          </div>
          {/* item 3 */}
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  className="image-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="py-3">
                <h5 className="title">
                  Honor T1 7.0 1GB RAM 8G ROM 7 Inch With WIFI + 3G Tablet
                </h5>
                <h6 className="price">$ 100</h6>
              </div>
            </div>
          </div>
          {/* end item */}
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
