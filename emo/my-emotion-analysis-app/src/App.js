// src/App.js

import React, { useState } from 'react';
import { analyzeSentiment } from './api/watsonAnalysis';
import { saveAs } from 'file-saver';

function App() {
    const [text, setText] = useState('');
    const [sentiment, setSentiment] = useState(null);
    const [error, setError] = useState(null);

    const handleAnalyze = async () => {
        try {
            const result = await analyzeSentiment(text);
            const sentimentData = result.sentiment.document;
            setSentiment(sentimentData);
            setError(null);
            // 분석이 완료되면 자동으로 JSON 파일로 저장
            const blob = new Blob([JSON.stringify(sentimentData, null, 2)], { type: 'application/json' });
            saveAs(blob, 'sentiment-result.json');
        } catch (err) {
            setError('감성 분석 중 오류가 발생했습니다.');
            setSentiment(null);
        }
    };

    return (
        <div className="App">
            <h1>IBM Watson 감성 분석</h1>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows="4"
                cols="50"
                placeholder="분석할 텍스트를 입력하세요"
            />
            <button onClick={handleAnalyze}>분석하기</button>
            {sentiment && (
                <div>
                    <h2>감성 분석 결과</h2>
                    <p>라벨: {sentiment.label}</p>
                    <p>점수: {sentiment.score}</p>
                </div>
            )}
            {error && <p>{error}</p>}
        </div>
    );
}

export default App;
