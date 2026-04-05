import '../App.css';

type cardProps = {
    topicName: string;
    level: string;
};

function FlipCard(props: cardProps) {
    const getDifficultyStyles = () => {
        if (props.level === 'Hard') {
            return {
                bg: 'linear-gradient(135deg, rgba(239,68,68,0.2), rgba(185,28,28,0.1))',
                border: 'rgba(239,68,68,0.5)',
                color: '#f87171',
                glow: '0 0 20px rgba(239,68,68,0.3)'
            };
        } else if (props.level === 'Medium') {
            return {
                bg: 'linear-gradient(135deg, rgba(245,158,11,0.2), rgba(217,119,6,0.1))',
                border: 'rgba(245,158,11,0.5)',
                color: '#fbbf24',
                glow: '0 0 20px rgba(245,158,11,0.3)'
            };
        } else {
            return {
                bg: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(5,150,105,0.1))',
                border: 'rgba(16,185,129,0.5)',
                color: '#34d399',
                glow: '0 0 20px rgba(16,185,129,0.3)'
            };
        }
    };

    const styles = getDifficultyStyles();

    return <>
        <div className='card-wrapper'>
            <div className='flip-card-style' style={{ 
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '30px 24px', 
                width: '360px', 
                minWidth: '280px',
                maxWidth: '90vw',
                borderRadius: '28px', 
                background: 'linear-gradient(145deg, rgba(20,24,45,0.9), rgba(12,14,35,0.95))',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 25px 45px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(139,92,246,0.2) inset',
                color: 'white', 
                textAlign: 'center'
            }}>

                <div style={{
                    marginBottom: '20px',
                    display: 'inline-flex',
                    padding: '14px',
                    // background: 'rgba(139,92,246,0.15)',
                    background: styles.bg,
                    borderRadius: '70px',
                    border: `1px solid ${styles.border}`,
                    // border: '1px solid rgba(139,92,246,0.3)',
                    backdropFilter: 'blur(4px)',
                    boxShadow: styles.glow
                }}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke={styles.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 17L12 22L22 17" stroke={styles.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12L12 17L22 12" stroke={styles.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
                    </svg>
                </div>

                <h2 style={{ 
                    fontSize: 'clamp(22px, 6vw, 28px)', 
                    margin: '0 0 20px 0', 
                    letterSpacing: '-0.3px', 
                    fontWeight: 800, 
                    background: 'linear-gradient(135deg, #ffffff 0%, #c084fc 80%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                    lineHeight: '1.3'
                }}>{props.topicName}</h2>
                
                <p style={{ margin: 0, fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>
                    Difficulty Level
                </p>
                <div style={{
                    background: styles.bg,
                    border: `1px solid ${styles.border}`,
                    borderRadius: '50px',
                    padding: '6px 20px',
                    marginTop: '12px',
                    display: 'inline-block',
                    boxShadow: styles.glow
                }}>
                    <span style={{ 
                        color: styles.color, 
                        fontWeight: 700, 
                        fontSize: '15px',
                        letterSpacing: '0.5px'
                    }}>{props.level}</span>
                </div>

                {/* Decorative line */}
                <div style={{
                    marginTop: '28px',
                    width: '50px',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #8b5cf6, #c084fc, transparent)',
                    marginInline: 'auto',
                    borderRadius: '2px'
                }}></div>
            </div>
        </div>
    </>
}

export default FlipCard;