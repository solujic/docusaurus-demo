const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function HelloAcquaint(props) {
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <h1>Hello Acquaint!</h1>
        <p>This is my first page!</p>
        <p>I can write JSX here!</p>

      </Container>
    </div>
  );
}

module.exports = HelloAcquaint;