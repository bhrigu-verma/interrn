import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import logo from '@/assets/img/logoheader.png';

const LogoCursor: React.FC = () => {
	const ref = useRef<HTMLDivElement | null>(null);
	const pos = useRef({ x: 0, y: 0 });
	const mouse = useRef({ x: 0, y: 0 });

	useEffect(() => {
		const el = ref.current;
		if (!el || typeof window === 'undefined') return;

		// Keep the custom cursor non-interactive so it doesn't block clicks
		el.style.pointerEvents = 'none';

		const onMove = (e: MouseEvent) => {
			mouse.current.x = e.clientX;
			mouse.current.y = e.clientY;
		};

		window.addEventListener('mousemove', onMove);

		let raf = 0;
		const render = () => {
			// simple lerp for smooth trailing
			pos.current.x += (mouse.current.x - pos.current.x) * 0.18;
			pos.current.y += (mouse.current.y - pos.current.y) * 0.18;
			if (el) {
				el.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%) scale(1.1)`; // 10% larger
			}
			raf = requestAnimationFrame(render);
		};
		raf = requestAnimationFrame(render);

		return () => {
			window.removeEventListener('mousemove', onMove);
			cancelAnimationFrame(raf);
		};
	}, []);

	return (
		<div
			ref={ref}
			aria-hidden
			style={{
				position: 'fixed',
				left: 0,
				top: 0,
				width: 28,
				height: 28,
				transform: 'translate(-50%, -50%) scale(1.1)',
				pointerEvents: 'none',
				zIndex: 9999,
				transition: 'width 120ms ease, height 120ms ease',
			}}
		>
			<Image src={logo} alt="logo-cursor" width={28} height={28} priority />
		</div>
	);
};

export default LogoCursor;