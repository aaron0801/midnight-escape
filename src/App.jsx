import React, { useEffect, useRef } from 'react';
import { createGame } from './game/createGame.js';

export default function App() {
  const gameRef = useRef(null);

  useEffect(() => {
    gameRef.current = createGame('game-root');

    return () => {
      gameRef.current?.destroy(true);
      gameRef.current = null;
    };
  }, []);

  return (
    <main className="app-shell">
      <div className="portrait-gate" role="status" aria-live="polite">
        <h1>午夜逃殺場</h1>
        <p>請橫拿手機遊玩</p>
      </div>

      <div className="play-area">
        <header className="app-header">
          <div>
            <p className="eyebrow">mobile local test</p>
            <h1>午夜逃殺場</h1>
          </div>
          <p className="subtitle">單人 Phaser 測試場景，尚未連接 Firebase 或多人房間。</p>
        </header>

        <section className="game-panel" aria-label="Phaser 單人測試場景">
          <div id="game-root" className="game-root" />
        </section>
      </div>
    </main>
  );
}
