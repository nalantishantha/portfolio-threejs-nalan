import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { collection, addDoc, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { db } from '../lib/firebase.js';

gsap.registerPlugin(ScrollTrigger);

const VISIBLE = 3;

// ── Star picker (interactive) ──────────────────────────────────────────────

const StarPicker = ({ value, onChange }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((n) => (
      <button
        key={n}
        type="button"
        onClick={() => onChange(n)}
        aria-label={`${n} star${n > 1 ? 's' : ''}`}
        className="text-2xl leading-none transition-transform hover:scale-125 focus:outline-none"
      >
        <span className={n <= value ? 'text-yellow-400' : 'text-white-500 opacity-30'}>★</span>
      </button>
    ))}
  </div>
);

// ── Star display (read-only) ───────────────────────────────────────────────

const StarDisplay = ({ value }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((n) => (
      <span key={n} className={`text-base ${n <= value ? 'text-yellow-400' : 'text-white-500 opacity-20'}`}>
        ★
      </span>
    ))}
  </div>
);

// ── Avatar with graceful fallback to initials ──────────────────────────────

const Avatar = ({ photo, name }) => {
  const [imgErr, setImgErr] = useState(false);
  const initials = (name || '?')
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  if (photo && !imgErr) {
    return (
      <img
        src={photo}
        alt={name}
        onError={() => setImgErr(true)}
        className="w-12 h-12 rounded-full object-cover border-2 border-black-300 flex-shrink-0"
      />
    );
  }
  return (
    <div className="w-12 h-12 rounded-full bg-black-300 border border-white/30 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 select-none">
      {initials}
    </div>
  );
};

// ── Single testimonial card ────────────────────────────────────────────────

const TestimonialCard = ({ item }) => (
  <div className="t-card flex flex-col gap-4 bg-black-200 border border-black-300 rounded-xl p-6 h-full hover:border-white/25 transition-colors duration-300">
    <StarDisplay value={item.rating} />
    <p className="text-white-600 text-sm leading-relaxed flex-1 italic">"{item.message}"</p>
    <div className="flex items-center gap-3 pt-4 border-t border-black-300">
      <Avatar photo={item.photo} name={item.name} />
      <div className="min-w-0">
        <p className="text-white font-semibold text-sm truncate">{item.name}</p>
        {item.role && <p className="text-white-500 text-xs truncate">{item.role}</p>}
      </div>
    </div>
  </div>
);

// ── Main section ───────────────────────────────────────────────────────────

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [current, setCurrent] = useState(0);
  const [form, setForm] = useState({ name: '', role: '', photo: '', rating: 5, message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const carouselRef = useRef(null);
  const formRef = useRef(null);
  const isAnimating = useRef(false);

  // Live Firestore listener
  useEffect(() => {
    const q = query(collection(db, 'testimonials'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(q, (snap) => {
      setTestimonials(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    return unsub;
  }, []);

  // Clamp current if testimonials shrink (edge case)
  useEffect(() => {
    if (testimonials.length > 0 && current >= testimonials.length) setCurrent(0);
  }, [testimonials.length]);

  // Section entrance — scroll triggered
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        },
      );
      gsap.fromTo(
        formRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: formRef.current, start: 'top 85%' },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Animate cards in whenever the visible set changes
  useLayoutEffect(() => {
    if (!carouselRef.current || testimonials.length === 0) return;
    const cards = [...carouselRef.current.querySelectorAll('.t-card')];
    gsap.killTweensOf(cards);
    gsap.fromTo(
      cards,
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: 'power3.out',
        onComplete: () => { isAnimating.current = false; },
      },
    );
  }, [current, testimonials.length]);

  const canNavigate = testimonials.length > VISIBLE;

  const navigate = (dir) => {
    if (isAnimating.current || !canNavigate) return;
    isAnimating.current = true;

    const cards = [...(carouselRef.current?.querySelectorAll('.t-card') ?? [])];
    gsap.to(cards, {
      x: dir * -60,
      opacity: 0,
      duration: 0.2,
      stagger: { each: 0.04, from: dir > 0 ? 'start' : 'end' },
      ease: 'power2.in',
      onComplete: () => setCurrent((c) => (c + dir + testimonials.length) % testimonials.length),
    });
  };

  const getVisible = () => {
    const count = Math.min(VISIBLE, testimonials.length);
    return Array.from({ length: count }, (_, i) => testimonials[(current + i) % testimonials.length]);
  };

  const isActiveDot = (i) =>
    Array.from({ length: Math.min(VISIBLE, testimonials.length) }, (_, j) =>
      (current + j) % testimonials.length,
    ).includes(i);

  // Form validation & submit
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters.';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitting(true);
    try {
      await addDoc(collection(db, 'testimonials'), {
        name: form.name.trim(),
        role: form.role.trim(),
        photo: form.photo.trim(),
        rating: form.rating,
        message: form.message.trim(),
        createdAt: serverTimestamp(),
      });
      setForm({ name: '', role: '', photo: '', rating: 5, message: '' });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error('Firestore error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} className="c-space py-20" id="testimonials">

      {/* ── Header ── */}
      <div ref={titleRef} className="text-center mb-14">
        <h3 className="head-text">What People Say</h3>
        <p className="text-white-500 mt-3 text-base max-w-lg mx-auto">
          Kind words from those I've had the pleasure of working with
        </p>
      </div>

      {/* ── Carousel ── */}
      {testimonials.length === 0 ? (
        <div className="text-center text-white-500 py-16 border border-dashed border-black-300 rounded-xl">
          No testimonials yet — be the first to leave one below!
        </div>
      ) : (
        <>
          <div className="flex items-center gap-3">
            {/* Prev */}
            <button
              onClick={() => navigate(-1)}
              disabled={!canNavigate}
              aria-label="Previous testimonials"
              className="arrow-btn flex-shrink-0 disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <img src="/assets/left-arrow.png" alt="" className="w-4 h-4 invert" />
            </button>

            {/* Cards grid */}
            <div
              ref={carouselRef}
              className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch"
            >
              {getVisible().map((item) => (
                <TestimonialCard key={item.id} item={item} />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={() => navigate(1)}
              disabled={!canNavigate}
              aria-label="Next testimonials"
              className="arrow-btn flex-shrink-0 disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <img src="/assets/right-arrow.png" alt="" className="w-4 h-4 invert" />
            </button>
          </div>

          {/* Dot indicators */}
          {canNavigate && (
            <div className="flex justify-center gap-2 mt-6 flex-wrap">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (!isAnimating.current) { isAnimating.current = true; setCurrent(i); }
                  }}
                  aria-label={`Go to page ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isActiveDot(i) ? 'w-5 bg-white' : 'w-2 bg-black-300 hover:bg-white/30'
                  }`}
                />
              ))}
            </div>
          )}
        </>
      )}

      {/* ── Divider ── */}
      <div className="my-16 border-t border-black-300" />

      {/* ── Submission form ── */}
      <div ref={formRef}>
        <h4 className="text-xl font-semibold text-white font-generalsans">Share Your Experience</h4>
        <p className="text-white-500 text-sm mt-1 mb-8">
          Worked with me? Leave a review — it appears live instantly.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="field-label">
                Your Name <span className="text-red-400">*</span>
              </label>
              <input
                className="field-input"
                placeholder="Jane Smith"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              {errors.name && <p className="text-red-400 text-xs mt-0.5">{errors.name}</p>}
            </div>

            {/* Role */}
            <div className="flex flex-col gap-2">
              <label className="field-label">Role / Company</label>
              <input
                className="field-input"
                placeholder="CEO at Acme Co."
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
              />
            </div>

            {/* Photo URL */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="field-label">
                Profile Photo URL{' '}
                <span className="text-white-500 font-normal text-sm">(optional)</span>
              </label>
              <input
                className="field-input"
                placeholder="https://example.com/your-photo.jpg"
                value={form.photo}
                onChange={(e) => setForm({ ...form, photo: e.target.value })}
              />
            </div>

            {/* Star rating */}
            <div className="flex flex-col gap-3 md:col-span-2">
              <label className="field-label">Rating</label>
              <StarPicker value={form.rating} onChange={(r) => setForm({ ...form, rating: r })} />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="field-label">
                Your Message <span className="text-red-400">*</span>
              </label>
              <textarea
                rows={4}
                className="field-input resize-none"
                placeholder="Share your experience working together..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              {errors.message && <p className="text-red-400 text-xs mt-0.5">{errors.message}</p>}
            </div>

            {/* Submit row */}
            <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="relative sm:w-fit w-full sm:min-w-48 flex items-center justify-center gap-3 bg-black border border-white/70 hover:border-white text-white font-bold py-3 px-8 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_28px_rgba(255,255,255,0.45)] transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Posting…
                  </>
                ) : (
                  <>
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
                    </span>
                    Post Review
                  </>
                )}
              </button>

              {success && (
                <p className="text-white-700 text-sm font-medium">
                  ✓ Your review is live — thank you!
                </p>
              )}
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};

export default Testimonials;
