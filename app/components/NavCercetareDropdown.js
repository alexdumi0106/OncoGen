'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const items = [
    { href: '/cercetare', label: 'Domenii de cercetare' },
    { href: '/cercetare/imunoterapii', label: 'Cercetarea in domeniul imunoterapiilor' },
    { href: '/cercetare/laboratoare', label: 'Laboratoare si departamente' },
    { href: '/cercetare/publicatii', label: 'Publicatii' },
    { href: '/cercetare/schimburi', label: 'Schimburi de experienta' }
];

export default function NavCercetareDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleOutsideClick(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        function handleEscape(event) {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    return (
        <li className={`nav-dropdown-parent${isOpen ? ' nav-dropdown-open' : ''}`} ref={wrapperRef}>
            <div className="nav-cercetare-trigger">
                <button
                    type="button"
                    className="nav-cercetare-label"
                    aria-expanded={isOpen}
                    aria-label="Deschide meniul Cercetare"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    Cercetare
                </button>
                <button
                    type="button"
                    className="nav-dropdown-arrow"
                    aria-label="Deschide submeniul Cercetare"
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    ▾
                </button>
            </div>
            <ul className="nav-dropdown">
                {items.map((item) => (
                    <li key={item.href}>
                        <Link href={item.href} onClick={() => setIsOpen(false)}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    );
}
