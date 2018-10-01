/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import './style.scss';

export default function NotFound() {
  return (
    <article className="not-found-page">
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section-content">
                <div className="section-header text-center">
                  <h2>404!</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
