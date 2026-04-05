import { useState } from "react";
import FlipCard from "./components/FlipCard";
import './App.css';

const dsaTopic = [
  {id: 1, topic: "Array & String", difficulty: "Easy"},
  {id: 2, topic: "Linked List", difficulty: "Medium"},
  {id: 3, topic: "Dynamic Programming", difficulty: "Hard"},
  {id: 4, topic: "Trees & Graphs", difficulty: "Medium"},
  {id: 5, topic: "Recursion", difficulty: "Easy"},
  {id: 6, topic: "Sorting & Searching", difficulty: "Medium"},
  {id: 7, topic: "Queue & Stack", difficulty: "Easy"},
  {id: 8, topic: "Hashing", difficulty: "Medium"},
  {id: 9, topic: "Math", difficulty: "Medium"},
  {id: 10, topic: "Bit Manipulation", difficulty: "Hard"},
  {id: 11, topic: "Sliding Window", difficulty: "Easy"},
  {id: 12, topic: "Two Pointers", difficulty: "Easy"},
  {id: 13, topic: "Greedy Algorithms", difficulty: "Medium"},
  {id: 14, topic: "Backtracking", difficulty: "Hard"},
  {id: 15, topic: "Divide & Conquer", difficulty: "Medium"},
  {id: 16, topic: "Matrix", difficulty: "Medium"}
];

function App() {
  const [currentTopic, setCurrentTopic] = useState(dsaTopic[0]);

  const generateRandom = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * dsaTopic.length);
    } while (dsaTopic[randomIndex].id === currentTopic.id);
    setCurrentTopic(dsaTopic[randomIndex]);
  };

  const easyCount = dsaTopic.filter(t => t.difficulty === "Easy").length;
  const mediumCount = dsaTopic.filter(t => t.difficulty === "Medium").length;
  const hardCount = dsaTopic.filter(t => t.difficulty === "Hard").length;

  return <>
    <div style={{ 
      minHeight: '100vh', 
      background: 'radial-gradient(ellipse at 20% 30%, #0f0c29, #0a0a1a, #03010f)',
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", 
      gap: '32px',
      padding: '40px 20px',
      position: 'relative'
    }}>

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 3px)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none'
      }}></div>
      
      <div style={{ zIndex: 2, textAlign: 'center', padding: '0 16px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          background: 'rgba(139,92,246,0.15)',
          backdropFilter: 'blur(12px)',
          padding: '6px 20px',
          borderRadius: '100px',
          border: '1px solid rgba(139,92,246,0.3)',
          marginBottom: '20px'
        }}>
          <span style={{ fontSize: '18px' }}>⚡</span>
          <span style={{ fontSize: '12px', fontWeight: 600, color: '#c084fc', letterSpacing: '1px' }}>DSA MASTERY</span>
        </div>

        {/* Naya Logo + Text ka Wrapper */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '4px' }}>
          
          {/* Tera SVG Logo */}
          <img 
            src="/algoFlip-logo.svg" 
            alt="Logo" 
            style={{ 
              width: '36px', 
              height: '36px',
            }} 
          />
          
          <h1 style={{ 
            fontSize: '24px',
            fontWeight: 700, 
            margin: 0, 
            letterSpacing: '1px',
            background: 'linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #c084fc 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 0 40px rgba(167,139,250,0.3)'
          }}>AlgoFlip</h1>
          
        </div>
        
        <p style={{ color: '#94a3b8', marginTop: '12px', fontSize: 'clamp(14px, 4vw, 16px)', fontWeight: 500 }}>
          Master Data Structures • One Topic at a Time
        </p>
      </div>

      <FlipCard key={currentTopic.id} topicName={currentTopic.topic} level={currentTopic.difficulty} />

      <button 
        onClick={generateRandom} 
        style={{ 
          padding: '14px 32px', 
          fontSize: 'clamp(14px, 4vw, 16px)', 
          fontWeight: 700, 
          cursor: 'pointer', 
          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
          color: 'white', 
          borderRadius: '60px', 
          border: 'none', 
          boxShadow: '0 8px 24px rgba(99,102,241,0.4), 0 0 0 1px rgba(255,255,255,0.1) inset',
          transition: 'all 0.25s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
          letterSpacing: '0.5px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          zIndex: 2,
          whiteSpace: 'nowrap'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 15px 35px rgba(99,102,241,0.6), 0 0 0 1px rgba(255,255,255,0.2) inset';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0px)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(99,102,241,0.4), 0 0 0 1px rgba(255,255,255,0.1) inset';
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3"/>
          <path d="M18 6L12 12M18 6H15M18 6V9"/>
        </svg>
        Generate Random Topic
      </button>
      
      <div style={{
        display: 'flex',
        gap: '16px',
        background: 'rgba(15,23,42,0.6)',
        backdropFilter: 'blur(12px)',
        padding: '8px 20px',
        borderRadius: '60px',
        border: '1px solid rgba(139,92,246,0.2)',
        zIndex: 2,
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '10px', background: '#34d399', boxShadow: '0 0 8px #34d399' }}></div>
          <span style={{ fontSize: '12px', fontWeight: 500, color: '#94a3b8' }}>Easy ({easyCount})</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '10px', background: '#fbbf24', boxShadow: '0 0 8px #fbbf24' }}></div>
          <span style={{ fontSize: '12px', fontWeight: 500, color: '#94a3b8' }}>Medium ({mediumCount})</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '10px', background: '#f87171', boxShadow: '0 0 8px #f87171' }}></div>
          <span style={{ fontSize: '12px', fontWeight: 500, color: '#94a3b8' }}>Hard ({hardCount})</span>
        </div>
      </div>
    </div>
  </>
}

export default App;