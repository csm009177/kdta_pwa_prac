import React from 'react';

const menuItems = [
    { label: '홈', path: '/' },
    { label: '프로필', path: '/profile' },
    { label: '설정', path: '/settings' },
];

export default function LeftSideMenu() {
    return (
        <aside style={{
            width: 200,
            height: '100vh',
            background: '#f5f5f5',
            padding: '24px 0',
            boxSizing: 'border-box',
            borderRight: '1px solid #e0e0e0'
        }}>
            <nav>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {menuItems.map(item => (
                        <li key={item.path} style={{ margin: '16px 0' }}>
                            <a href={item.path} style={{
                                textDecoration: 'none',
                                color: '#333',
                                fontWeight: 500,
                                padding: '8px 16px',
                                display: 'block',
                                borderRadius: 4,
                                transition: 'background 0.2s'
                            }}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}