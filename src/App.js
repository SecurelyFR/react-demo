import React, { useEffect, useState } from 'react';
import { showPolicy } from '@securely.id/websdk';

const App = () => {
  const [policy, setPolicy] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPolicy = async () => {
      try {
        const chainId = 11155111;
        const dappAddr = '0xddd576a49d827b1e6f2a7fe7969e1cb4e2af7d6f';
        const functionSelector = '0x666c6f23';
        const formatted = true;

        const result = await showPolicy(chainId, dappAddr, functionSelector, formatted);
        setPolicy(result);
      } catch (error) {
        setError(`Error: ${error.message}`);
      }
    };

    fetchPolicy();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Securely ID Show Policy</h1>
        {error ? (
          <p>{error}</p>
        ) : policy ? (
          <div dangerouslySetInnerHTML={{__html: policy.result}} />
        ) : (
          <p>Loading policy...</p>
        )}
      </header>
    </div>
  );
};

export default App;
