class ParticleNetwork {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: null, y: null };

        // Configuration for "High-End AI" feel
        this.config = {
            // Mobile optimization: significantly fewer particles
            particleCount: window.innerWidth < 768 ? 15 : 100,
            connectionDistance: window.innerWidth < 768 ? 100 : 150,
            mouseDistance: window.innerWidth < 768 ? 150 : 250,
            particleColor: 'rgba(34, 211, 238, 0.7)', // Cyan-400
            lineColor: 'rgba(34, 211, 238, 0.2)',     // Cyan-400 low opacity
            speed: window.innerWidth < 768 ? 0.3 : 0.6,
            growSize: 3
        };

        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());

        // Track mouse relative to canvas
        window.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            // Only track if mouse is near/on the canvas to avoid stealing focus from other sections
            if (e.clientY <= rect.bottom + 50 && e.clientY >= rect.top - 50) {
                this.mouse.x = e.clientX - rect.left;
                this.mouse.y = e.clientY - rect.top;
            } else {
                this.mouse.x = null;
                this.mouse.y = null;
            }
        });

        window.addEventListener('mouseleave', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });

        this.createParticles();
        this.animate();
    }

    resize() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
        this.config.particleCount = window.innerWidth < 768 ? 25 : 100;
        this.createParticles();
    }

    createParticles() {
        this.particles = [];
        const count = this.config.particleCount;

        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * this.config.speed,
                vy: (Math.random() - 0.5) * this.config.speed,
                size: Math.random() * 2 + 1.5,
                baseSize: Math.random() * 2 + 1.5
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < this.particles.length; i++) {
            let p = this.particles[i];

            // Update position
            p.x += p.vx;
            p.y += p.vy;

            // Bounce off edges
            if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

            // Mouse Interaction (Magnetic + Growth)
            if (this.mouse.x != null) {
                let dx = this.mouse.x - p.x;
                let dy = this.mouse.y - p.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.config.mouseDistance) {
                    // Grow particle
                    if (p.size < p.baseSize + this.config.growSize) {
                        p.size += 0.2;
                    }

                    // Gentle attraction (Gravity) instead of repulsion for "Network" feel
                    // or Repulsion? User said "follows the mouse cursor".
                    // Let's do a subtle attraction to make it feel like the mouse is the "node".
                    const force = (this.config.mouseDistance - distance) / this.config.mouseDistance;
                    const attractionStrength = 0.03;
                    p.vx += (dx / distance) * force * attractionStrength;
                    p.vy += (dy / distance) * force * attractionStrength;
                } else {
                    if (p.size > p.baseSize) {
                        p.size -= 0.1;
                    }
                }
            } else {
                if (p.size > p.baseSize) {
                    p.size -= 0.1;
                }
            }

            // Limit speed
            const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
            const maxSpeed = this.config.speed * 2;
            if (speed > maxSpeed) {
                p.vx = (p.vx / speed) * maxSpeed;
                p.vy = (p.vy / speed) * maxSpeed;
            }

            // Draw Particle
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = this.config.particleColor;
            this.ctx.fill();

            // Draw Connections
            for (let j = i + 1; j < this.particles.length; j++) {
                let p2 = this.particles[j];
                let dx = p.x - p2.x;
                let dy = p.y - p2.y;
                let dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < this.config.connectionDistance) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = this.config.lineColor;
                    this.ctx.lineWidth = 1 - (dist / this.config.connectionDistance);
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                }
            }
        }

        requestAnimationFrame(() => this.animate());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ParticleNetwork('hero-canvas');
});
