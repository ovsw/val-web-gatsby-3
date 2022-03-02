import React from "react";

import InnerPageHeader from "../../components/inner-page-header";
import Sidebar from "../../components/sidebar";

// import styles from './blog-post.module.css'

function GenericPage({ title, children, path, noBlogLink, headerImage }) {
  return (
    <>
      <InnerPageHeader title={title} headerImage={headerImage} />

      <main className="page-content">
        {/* <!-- Blog Details --> */}
        <div className="blog-details-area section-padding-sm bg-white">
          <div className="kontainer">
            <div className="row">
              <div className="col-lg-8 mb-5">
                <div className="blog-details-wrap">
                  <div className="blog-content">
                    {/* <h1>{title}</h1> */}
                    {children}
                  </div>
                </div>
              </div>

              <Sidebar path={path} noBlogLink={noBlogLink} />
            </div>
          </div>
        </div>
        {/* <!--// Blog Details --> */}
      </main>
      {/* <!--// Page Conttent --> */}
    </>
  );
}

export default GenericPage;
