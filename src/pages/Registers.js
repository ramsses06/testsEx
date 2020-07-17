import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as registersActions from '../actions/registersActions';
import { Spinner, Table, Pagination } from 'react-bootstrap';

import Registry from '../components/Registry';
import MyModal from '../components/MyModal';

class Registers extends Component {

  constructor () {
    super();
    this.state = {
      page: 1,
      pages: 0,
      detailsModal: true,
      selectedRegistry: 1
    }
    this.limit = 10;
  }

  async componentDidMount () {
    if (!this.props.registersReducer.registers.length) {
      this.props.getRegisters();
    } else {
      const { registers } = this.props.registersReducer;
      const pages = Math.ceil(registers.length / this.limit);
      this.setState({ ...this.state, pages });
    }
  }

  createRegistryList (reg) {
    const { registers } = this.props.registersReducer;
    const list = [];
    const startPage = (this.state.page - 1) * this.limit
    const limitIndex = startPage + this.limit;
    for(let i = startPage; i <= limitIndex - 1; i++) {
      if (registers[i]) {
        list.push(<Registry key={i} {...registers[i]} handleClick={() => this.openModal(i)} />)
      } else {
        break;
      }
    }
    return list;
  }

  openModal (index) {
    this.setState({
      ...this.state,
      detailsModal: true,
      selectedRegistry: index
    })
  }

  closeModal () {
    this.setState({
      ...this.state,
      detailsModal: false
    })
  }


  createPagination () {
    const active = this.state.page;
    const items = [];
    for (let number = 1; number <= this.state.pages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === active}
          onClick={() => this.setState({
            ...this.state,
            page: number
          })}
        >
          {number}
        </Pagination.Item>,
      );
    }
    return items;
  }

  render() {
    const { registers } = this.props.registersReducer;

    if (!registers.length) {
      return <Spinner animation='border'/>;
    } else {
      return (
        <>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>_id</th>
                <th>cityid</th>
                <th>name</th>
                <th>state</th>
                <th>probabilityofprecip</th>
                <th>relativehumidity</th>
                <th>Last report time</th>
                <th>llueve</th>
              </tr>
            </thead>
            <tbody>
              {this.createRegistryList()}
            </tbody>
          </Table>
          <Pagination>{this.createPagination()}</Pagination>
          <MyModal show={this.state.detailsModal} onHide={this.closeModal.bind(this)} selectedIndex={this.state.selectedRegistry} />
        </>
      );
    }
  }
}

const mapStateToProps = ({ registersReducer }) => {
  return {
    registersReducer
  };
};

const mapDispatchToProps = {
  ...registersActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Registers);