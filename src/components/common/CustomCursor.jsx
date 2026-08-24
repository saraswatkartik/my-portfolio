import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
    const cursorRef = useRef(null);

    const mouse = useRef({
        x: 0,
        y: 0,
    });

    const position = useRef({
        x: 0,
        y: 0,
    });

    const animationFrame = useRef(null);

    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;

            const target = e.target.closest(
                "button, a, img, input, textarea, select"
            );

            setHidden(!!target);
        };

        const animate = () => {
            position.current.x +=
                (mouse.current.x - position.current.x) * 0.18;

            position.current.y +=
                (mouse.current.y - position.current.y) * 0.18;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `
                    translate3d(
                        ${position.current.x}px,
                        ${position.current.y}px,
                        0
                    )
                    translate(-50%, -50%)
                `;
            }

            animationFrame.current =
                requestAnimationFrame(animate);
        };

        window.addEventListener(
            "mousemove",
            handleMouseMove
        );

        animationFrame.current =
            requestAnimationFrame(animate);

        return () => {
            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            cancelAnimationFrame(
                animationFrame.current
            );
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className={`
                fixed
                top-0
                left-0
                pointer-events-none
                z-[99999]

                w-8
                h-8

                rounded-full

                border
                border-indigo-400/70

                bg-indigo-500/5

                shadow-[0_0_20px_rgba(99,102,241,0.45)]

                transition-opacity
                duration-200

                ${hidden
                    ? "opacity-0"
                    : "opacity-100"
                }

                hidden md:block
            `}
        >

            {/* Inner Dot */}

            <span
                className="
                    absolute
                    top-1/2
                    left-1/2

                    -translate-x-1/2
                    -translate-y-1/2

                    w-2.5
                    h-2.5

                    rounded-full

                    bg-indigo-400

                    shadow-[0_0_10px_rgba(129,140,248,1)]
                "
            />

        </div>
    );
};

export default CustomCursor;