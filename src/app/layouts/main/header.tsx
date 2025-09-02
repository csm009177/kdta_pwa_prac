import React from 'react';

const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
];

const Header: React.FC = () => (
    <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        background: '#222',
        color: '#fff'
    }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>MyApp</div>
        <nav>
            <ul style={{
                display: 'flex',
                listStyle: 'none',
                margin: 0,
                padding: 0,
                gap: '1.5rem'
            }}>
                {menuItems.map(item => (
                    <li key={item.href}>
                        <a href={item.href} style={{ color: '#fff', textDecoration: 'none' }}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
);

export default Header;