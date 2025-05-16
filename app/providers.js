'use client';

import { SessionProvider } from 'next-auth/react';
import ErrorBoundary from './components/layouts/ErrorBoundary';

export function Providers({ children }) {
  return (
    <SessionProvider>
      <ErrorBoundary>
        {children}
      </ErrorBoundary>
    </SessionProvider>
  );
} 