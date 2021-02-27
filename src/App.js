
import Count from './components/Count';
import Mirror from './components/Mirror';

import CountProvider from './context/Count';
import TextContextProvider from './context/TextContext';

function App() {
  return (
    <CountProvider>
      <TextContextProvider>

        <div>
          <Count />
          <hr />
          <Mirror />
        </div>

      </TextContextProvider>
    </CountProvider>
  );
}

export default App;
