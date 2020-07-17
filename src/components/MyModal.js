import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';

import './scss/MyModal.scss';

function MyModal (props) {
  const {
    show,
    onHide,
    selectedIndex
  } = props;

  if ( selectedIndex !== null ) {
    const registry = props.registersReducer.registers[selectedIndex];
    const willBeRaining = (parseInt(registry.probabilityofprecip) > 60 || parseInt(registry.relativehumidity > 50)) ? 'SI' : 'NO';
    const date = new Date(Date(registry.lastreporttime));
    return (
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{ registry.name }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mymodal-container'>
            <div className='mymodal-container__row'>
              City ID: {registry.cityid}
            </div>
            <div className='mymodal-container__row'>
              Name: {registry.name}
            </div>
            <div className='mymodal-container__row'>
              State: {registry.state}
            </div>
            <div className='mymodal-container__row'>
              Porbability of precipitation: {registry.probabilityofprecip}
            </div>
            <div className='mymodal-container__row'>
              Relative Humidity: {registry.relativehumidity}
            </div>
            <div className='mymodal-container__row'>
             Date: {`${date.getFullYear()}/${('0' + date.getMonth()).slice(-2)}/${('0' + date.getDate()).slice(-2)}`}
            </div>
            <div className='mymodal-container__row'>
              Will be raining: {willBeRaining}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  } else {
    return <></>;
  }
};

const mapStateToProps = ({ registersReducer }) => {
  return {
    registersReducer
  };
};

export default connect(mapStateToProps, null)(MyModal);
