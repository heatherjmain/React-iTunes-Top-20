import React from 'react';
import ReactDOM from 'react-dom';
import ITunesContainer from "./containers/ITunesContainer"

window.addEventListener('load', function () {
  ReactDOM.render(
    <ITunesContainer />,
    document.getElementById('app')
  );
});
