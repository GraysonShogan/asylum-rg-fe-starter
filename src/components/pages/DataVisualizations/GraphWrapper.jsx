import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { resetVisualizationQuery } from '../../../state/actionCreators';
import CitizenshipMapAll from './Graphs/CitizenshipMapAll';
import CitizenshipMapSingleOffice from './Graphs/CitizenshipMapSingleOffice';
import TimeSeriesAll from './Graphs/TimeSeriesAll';
import OfficeHeatMap from './Graphs/OfficeHeatMap';
import TimeSeriesSingleOffice from './Graphs/TimeSeriesSingleOffice';
import YearLimitsSelect from './YearLimitsSelect';
import ViewSelect from './ViewSelect';
import ScrollToTopOnMount from '../../../utils/scrollToTopOnMount';
import { colors } from '../../../styles/data_vis_colors';

const GraphWrapper = ({ set_view, dispatch }) => {
  const { office, view = 'time-series' } = useParams();
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetchApiData();
  }, [view, office]);

  const fetchApiData = async () => {
    const fetchData = async endpoint =>
      axios.get(`https://hrf-asylum-be-b.herokuapp.com/cases/${endpoint}`);
    try {
      const [fiscalData, citizenshipData] = await Promise.all([
        fetchData('fiscalSummary'),
        fetchData('citizenshipSummary'),
      ]);
      setApiData({
        fiscalData: fiscalData.data,
        citizenshipData: citizenshipData.data,
      });
    } catch (error) {
      console.error('Failed to fetch data:', error);
      setApiData(null);
    }
  };

  const MapComponent =
    {
      'time-series': office ? TimeSeriesSingleOffice : TimeSeriesAll,
      'office-heat-map': OfficeHeatMap,
      citizenship: office ? CitizenshipMapSingleOffice : CitizenshipMapAll,
    }[view] || TimeSeriesAll;

  return (
    <div
      className="map-wrapper-container"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        minHeight: '50px',
        backgroundColor: colors.background_color,
      }}
    >
      <ScrollToTopOnMount />
      <MapComponent data={apiData} office={office} />
      <div
        className="user-input-sidebar-container"
        style={{
          width: '300px',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <ViewSelect set_view={set_view} />
        <YearLimitsSelect
          view={view}
          office={office}
          clearQuery={() => dispatch(resetVisualizationQuery(view, office))}
          updateStateWithNewData={fetchApiData}
        />
      </div>
    </div>
  );
};

export default connect()(GraphWrapper);
