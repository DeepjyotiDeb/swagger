// import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

function App() {
  const [swaggerJson, setSwaggerJson] = useState(null);

  useEffect(() => {
    // fetch(apiUrl[import.meta.env.VITE_STAGE])
    fetch('https://petstore.swagger.io/v2/swagger.json')
      .then((response) => response.json())
      .then((data) => setSwaggerJson(data))
      .catch((error) => console.error('Error loading swagger json:', error));
  }, []);

  console.log('swaggerJson', swaggerJson);
  return (
    <>
      <SwaggerUI spec={swaggerJson} />
    </>
  );
}

export default App;
