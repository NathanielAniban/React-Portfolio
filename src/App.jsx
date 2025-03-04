import { Routes, Route } from "react-router-dom";
import Directory from './homepage/jsons/json.paths';
import ScrollToTop from "./homepage/components/component.scrolltotop";
function App() {

  return (
    <>
      <ScrollToTop/>
      <Routes>
      {Directory.paths.map((directory, index) => (
        <Route
          key={index}
          path={directory.link}
          element={
            Array.isArray(directory.filePath) ? (
              <>
                {directory.filePath.map((Component, idx) => (
                  Boolean(directory.cssStyleBackground) ?
                  <div className={directory.cssStyleBackground} key={idx}>
                    <Component key={idx} />
                  </div>
                  :
                  <Component key={idx} />
                ))}
              </>
            ) : (
              <directory.filePath />
            )
          }
        />
      ))}
    </Routes>
    </>
  );
}

export default App;
