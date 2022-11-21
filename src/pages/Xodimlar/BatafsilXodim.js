import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

function BatafsilXodim() {
  return (
    <div>
      <Button variant='contained' color="primary"><Link to={`/xodimlar`}>Back</Link></Button>
      <h1>Batafsil ma'lumot</h1>
    </div>
  );
}

export default BatafsilXodim;