import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

function Hero() {

  const { token } = useContext(AppContext);

  
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    let particles = [];
    const count = 80;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        r: Math.random() * 2 + 1,
      });
    }

    let mouse = { x: -1000, y: -1000 };

    const handleMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    canvas.addEventListener("mousemove", handleMove);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(139, 155, 255, 0.7)";
        ctx.fill();
      });

      // draw lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${1 - dist / 130})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
        // line to mouse
        const dxm = particles[i].x - mouse.x;
        const dym = particles[i].y - mouse.y;
        const distM = Math.sqrt(dxm * dxm + dym * dym);
        if (distM < 180) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(168, 85, 247, ${1 - distM / 180})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a23]">

      {/* CANVAS PARTICLES */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      ></canvas>

      {/* overlay + glows */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a23]/30 via-transparent to-[#0a0a23]/80"></div>
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-3xl"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-sm font-medium text-indigo-200">
            AI-Powered Reputation Platform
          </span>
        </div>

        <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
          Build Your Business
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            With AI Intelligence
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 leading-relaxed">
          Improve your business reputation with AI generated reviews,
          smart analytics, competitor tracking, and SEO optimized
          customer engagement.
        </p>
<div className="mt-10 flex flex-wrap items-center justify-center gap-4">

  {!token && (
    <Link
      to="/register"
      className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-gray-900 hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-200 shadow-xl"
    >
      Start Free Trial

      <svg
        className="h-4 w-4 group-hover:translate-x-1 transition-transform"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </Link>
  )}

  <button className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-md hover:bg-white/10 transition-all duration-200">
    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
      <svg
        className="h-3.5 w-3.5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>

    Watch Demo
  </button>

</div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { num: "245%", label: "Increase in review volume", grad: "from-blue-400 to-indigo-400" },
            { num: "86%", label: "Increase in customer engagement", grad: "from-purple-400 to-fuchsia-400" },
            { num: "137%", label: "More reviews generated", grad: "from-pink-400 to-rose-400" },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h2 className={`text-4xl font-extrabold bg-gradient-to-r ${s.grad} bg-clip-text text-transparent`}>
                {s.num}
              </h2>
              <p className="mt-2 text-sm text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Hero;