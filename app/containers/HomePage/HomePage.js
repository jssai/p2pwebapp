/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Images from 'images';
import Accordion from 'components/Accordion';
import Tile from 'components/Tile';
import VideoBackground from 'components/VideoBackground';
import messages from './messages';
import './style.scss';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article className="home-page clearfix">
        <Helmet>
          <title>Car Shearing</title>
          <meta name="description" content="Car Shearing website homepage" />
        </Helmet>
        <section className="banner">
          <VideoBackground />
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="banner-content">
                  <div className="banner-header">
                    <FormattedMessage {...messages.rentRide} />
                    <br />
                    <FormattedMessage {...messages.forLess} />
                    <br />
                    <FormattedMessage {...messages.withLess} />
                    <img src={Images.world} alt="world" />
                  </div>
                  <br />
                  <div className="application-link">
                    <FormattedMessage {...messages.comingSoon} />
                    <img src={Images.android} alt="android" />
                    <img src={Images.ios} alt="ios" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="content about-content shadow-lg rounded">
                  <h3 className="content-header">
                    <FormattedMessage {...messages.about} />
                  </h3>

                  <h5 className="content-description about-description">
                    <FormattedMessage {...messages.abloutLineOne} />
                    <br />
                    <FormattedMessage {...messages.abloutLineTwo} />
                    <img className="pl-1" src={Images.smiley} alt="laughing smiley" />
                    <img className="pl-1" src={Images.redCar} alt="red car" />
                    <br />
                    <br />
                    <FormattedMessage {...messages.abloutLineThree} />
                    <br />
                    <FormattedMessage
                      {...messages.abloutLineFour}
                      values={{
                        sun: <img src={Images.sun} alt="sun" />,
                        umbrella: <img src={Images.umbrella} alt="umbrella" />,
                        plane: <img src={Images.plane} alt="plane" />,
                        laptop: <img src={Images.laptop} alt="laptop" />
                      }}
                    />
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="renter">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="content">
                  <h3 className="content-header">
                    <FormattedMessage {...messages.asrenter.title} />
                  </h3>
                  <div className="content-description">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <Tile messages={messages.asrenter.tileOne} image={Images.renter.i} />
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <Tile messages={messages.asrenter.tileTwo} image={Images.renter.ii} />
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <Tile messages={messages.asrenter.tileThree} image={Images.renter.iii} />
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <Tile messages={messages.asrenter.tileFour} image={Images.renter.iv} />
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <Tile messages={messages.asrenter.tileFive} image={Images.renter.v} />
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <Tile messages={messages.asrenter.tileSix} image={Images.renter.vi} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="owner bg-white">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="content">
                  <h3 className="content-header">
                    <FormattedMessage {...messages.asowner.title} />
                  </h3>
                  <div className="content-description">
                    <div className="row">
                      <div className="col-lg-4 col-md-12">
                        <Tile messages={messages.asowner.tileOne} image={Images.owner.i} />
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <Tile messages={messages.asowner.tileTwo} image={Images.owner.ii} />
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <Tile messages={messages.asowner.tileThree} image={Images.owner.iii} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="howto">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="content">
                  <h3 className="content-header">
                    <FormattedMessage {...messages.howto.title} />
                  </h3>
                  <div className="content-description">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <Tile messages={messages.howto.tileOne} image={Images.howto.i} />
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <Tile messages={messages.howto.tileTwo} image={Images.howto.ii} />
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <Tile messages={messages.howto.tileThree} image={Images.howto.iii} />
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <Tile messages={messages.howto.tileFour} image={Images.howto.iv} />
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <Tile messages={messages.howto.tileFive} image={Images.howto.v} />
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <Tile messages={messages.howto.tileSix} image={Images.howto.vi} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="blog bg-white">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="content">
                  <h3 className="content-header">
                    <FormattedMessage {...messages.blog.title} />
                  </h3>
                  <div className="content-description">
                    <div className="row">
                      <div className="col-lg-4 col-md-12">
                        <div className="card text-center shadow-sm">
                          <div className="card-body">
                            <h5 className="card-title">Lorem Ipsum</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a href="#" className="btn">Read Article</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <div className="card text-center shadow-sm">
                          <div className="card-body">
                            <h5 className="card-title">Lorem Ipsum</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a href="#" className="btn">Read Article</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <div className="card text-center shadow-sm">
                          <div className="card-body">
                            <h5 className="card-title">Lorem Ipsum</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a href="#" className="btn">Read Article</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="faq" id="#faq">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="content">
                  <h3 className="content-header">
                    <FormattedMessage {...messages.faq.title} />
                  </h3>
                  <div className="content-description">
                    <div className="row justify-content-center">
                      <div className="col-12 col-md-10 col-lg-8">
                        <Accordion messages={messages.faq.question} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    );
  }
}
export default HomePage;
