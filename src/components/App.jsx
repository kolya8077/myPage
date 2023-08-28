import { Route, Routes } from 'react-router-dom';
import { HeaderEl } from './HeaderEl/HeaderEl';
import { News } from './News/News';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderEl />}>
          <Route index element={<News />} />
        </Route>
      </Routes>
    </>
  );
};
