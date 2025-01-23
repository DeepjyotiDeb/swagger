// import './App.css';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

function App() {
  return (
    <>
      <SwaggerUI url='https://petstore.swagger.io/v2/swagger.json' />
    </>
  );
}

export default App;
