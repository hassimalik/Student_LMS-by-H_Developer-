import confetti from "canvas-confetti";

export function runCelebration(duration = 10000, setShowMessage, audioRef) {
    const end = Date.now() + duration;

    // Show congratulation message
    setShowMessage(true);

    // Play audio
    if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
    }

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();

    // stop after duration
    setTimeout(() => {
        setShowMessage(false);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    }, duration);
}
