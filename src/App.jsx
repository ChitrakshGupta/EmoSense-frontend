import './App.css';
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from '@clerk/clerk-react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Analyzer from './Analyzer';
import Thanks from './Thanks';

function App() {
  return (
    <Routes>
      {/* ROOT */}
      <Route
        path="/"
        element={
          <>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
            <SignedIn>
              <Navigate to="/analyze" replace />
            </SignedIn>
          </>
        }
      />

      {/* PROTECTED PAGE */}
      <Route
        path="/analyze"
        element={
          <SignedIn>
            <Analyzer />
          </SignedIn>
        }
      />

      {/* LOGOUT PAGE */}
      <Route path="/thanks" element={<Thanks />} />

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
