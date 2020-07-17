import Registers from '../services/Registers';
import { Pagination } from 'react-bootstrap';

export const getRegisters = () => async dispatch => {
  const registers = await Registers.getRegisters();
  dispatch({
    type: 'GET_REGISTERS',
    payload: registers.results,
    pagination: registers.pagination
  })
}