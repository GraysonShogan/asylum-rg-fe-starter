import React from 'react';
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

function RenderLandingPage() {
  const history = useHistory();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadData = () => {
    // This function should be implemented to handle the data download.
    // For example, it could trigger the download of a file from a server.
    console.log('Download data action triggered');
  };

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions.
          </h3>
        </div>
      </div>

      <div className="graphs-section">
        {/* Graphs Section */}
        <div>
          <img
            src={GrantRatesByOfficeImg}
            alt="Grant Rates By Office"
            className="graphImg"
          />
          <p className="graphText">Search Grant Rates By Office</p>
        </div>
        <div>
          <img
            src={GrantRatesByNationalityImg}
            alt="Grant Rates By Nationality"
            className="graphImg"
          />
          <p className="graphText">Search Grant Rates By Nationality</p>
        </div>
        <div>
          <img
            src={GrantRatesOverTimeImg}
            alt="Grant Rates Over Time"
            className="graphImg"
          />
          <p className="graphText">Search Grant Rates Over Time</p>
        </div>
      </div>

      <div className="view-more-data-btn-container">
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={() => history.push('/graphs')}
        >
          View the Data
        </Button>
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={handleDownloadData}
        >
          Download the Data
        </Button>
      </div>

      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set.
          </h3>
        </div>
      </div>

      <div className="bottom-section">
        {/* Bottom Section */}
        <div className="bottom-section-text-container">
          <div className="bottom-title">
            <h3>System Disparity Insights</h3>
          </div>
        </div>
        <div className="bottom-section-text-container">
          <div>
            <h3>36%</h3>
            <p className="factText">
              By the end of the Trump administration, the average asylum office
              grant rate had fallen 36 percent from an average of 44 percent in
              the fiscal year of 2016 to 28 percent in the fiscal year 2020.
            </p>
          </div>
          <div>
            <h3>5%</h3>
            <p className="factText">
              The New York asylum office grant rate dropped to 5 percent in
              fiscal year 2020.
            </p>
          </div>
          <div>
            <h3>6x Lower</h3>
            <p className="factText">
              Between fiscal year 2017 and 2020, the New York asylum office's
              average grant rate was six times lower than the San Francisco
              asylum office.
            </p>
          </div>
        </div>
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={() => history.push('/graphs')}
        >
          Read More
        </Button>
        <button onClick={scrollToTop} className="back-to-top">
          Back To Top ^
        </button>
      </div>
    </div>
  );
}

export default RenderLandingPage;
