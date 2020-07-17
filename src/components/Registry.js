import React from 'react';

import './scss/Registry.scss';

function Registry ({
  index,
  _id,
  cityid,
  name,
  state,
  lastreporttime,
  probabilityofprecip,
  relativehumidity,
  handleClick
}) {
  const willBeRaining = (parseInt(probabilityofprecip) > 60 || parseInt(relativehumidity) > 50) ? 'SI' : 'NO';
  const date = new Date(Date(lastreporttime));


  return (
    <tr>
      <td><button className='link' onClick={handleClick}>{_id}</button></td>
      <td>{cityid}</td>
      <td>{name}</td>
      <td>{state}</td>
      <td>{probabilityofprecip}</td>
      <td>{relativehumidity}</td>
      <td>{`${date.getFullYear()}/${('0' + date.getMonth()).slice(-2)}/${('0' + date.getDate()).slice(-2)}`}</td>
      <td>{willBeRaining}</td>
    </tr>
  );
}

export default Registry;
