
'use strict';

// babel command
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// JSX - Javascript XML - Provided by react
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hand of a computer',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    console.log(option);
    app.options.push(option);
    e.target.elements.option.value = '';
    renderReact();
  }
};
var clearAppOptions = function clearAppOptions() {
  app.options.splice(0, app.options.length);
  renderReact();
};
var appRoot = document.getElementById('app');
var number = [55, 101, 1001];
var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  console.log(option);
};
var renderReact = function renderReact() {

  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle ? React.createElement(
      'p',
      null,
      app.subtitle
    ) : null,
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      'What should I do?'
    ),
    app.options.length > 0 ? React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Here are your options'
      ),
      React.createElement(
        'button',
        { onClick: clearAppOptions },
        'remove all'
      )
    ) : React.createElement(
      'p',
      null,
      'No Options'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option, i) {
        return React.createElement(
          'li',
          { key: i },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};
renderReact();
