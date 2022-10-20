import React from 'react';
import './Loading.css';

export default function Loading() {
  return (
    <div className="body">
      <div className="loading-container">
        <div className="loadingText">
          <div className="loading_letter">L</div>
          <div className="loading_letter">o</div>
          <div className="loading_letter">a</div>
          <div className="loading_letter">d</div>
          <div className="loading_letter">i</div>
          <div className="loading_letter">n</div>
          <div className="loading_letter">g</div>
          <div className="loading_letter">.</div>
          <div className="loading_letter">.</div>
          <div className="loading_letter">.</div>
        </div>
      </div>
    </div>
  );
}
