import { LinkEl, Header } from 'components/HeaderEl/HeaderEl.style.js';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loading } from 'components/loading.style';


export const HeaderEl = () => {
  return (
    <>
    <Header>
      <nav>
        <LinkEl to="/" end>
          Домівка
        </LinkEl>
        <LinkEl to="/movies">Чат (поки не працює)</LinkEl>
      </nav>
    </Header>
          <Suspense fallback={<Loading>Завантаження...</Loading>}>
        <Outlet />
      </Suspense>
    </>
  );
};
