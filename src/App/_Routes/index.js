import React, {Suspense} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import Main from '../../containers/Main'

export default function Routes() {
  return (
    <Switch>
        <Suspense fallback={
          <div className="justify-content text-center">
            <Spinner
              className="spinner-loading"
              as="span"
              animation="border"
              role="status"
              aria-hidden="true"
            />
          </div>
        }>
          <Route exact path="/" component={Main} />
          <Redirect from="*" to="/" />
        </Suspense>
    </Switch>
  );
}

