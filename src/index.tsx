import { root } from '@lynx-js/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter, Routes, Route } from 'react-router';

const queryClient = new QueryClient();

import { App } from './App.js';
import { GameDetailsScreen } from './screens/game-details.tsx';
import { GameEventScreen } from './screens/game-event.tsx';
import { SearchScreen } from './screens/search-screen.tsx';

root.render(
  <QueryClientProvider client={queryClient}>
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/game-details/:id" element={<GameDetailsScreen />} />
        <Route path="/game-event/:id" element={<GameEventScreen />} />
        <Route path="/search" element={<SearchScreen />} />
      </Routes>
    </MemoryRouter>
    ,
  </QueryClientProvider>,
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
