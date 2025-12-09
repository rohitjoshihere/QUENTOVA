'use client';

import React from 'react';

const ArrowIcon = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 11.5L11.5 0.5M11.5 0.5V9M11.5 0.5H2.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Button = ({
    children,
    variant = 'default', // 'small', 'default', 'large'
    showIcon = true,
    className = '',
    onClick,
    href,
    ...props
}) => {
    const sizeClass = variant !== 'default' ? `btn-${variant}` : '';
    const buttonClasses = `btn-primary ${sizeClass} ${className}`.trim();

    const buttonContent = (
        <>
            {children}
            {showIcon && <ArrowIcon />}
        </>
    );

    if (href) {
        return (
            <a href={href} className={buttonClasses} onClick={onClick} {...props}>
                {buttonContent}
            </a>
        );
    }

    return (
        <button className={buttonClasses} onClick={onClick} {...props}>
            {buttonContent}
        </button>
    );
};

export default Button;
