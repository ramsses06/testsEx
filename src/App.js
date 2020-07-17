import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Registers from './pages/Registers';

function App () {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={Registers} />
          <Route render={() => <div>no encontrada</div>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
