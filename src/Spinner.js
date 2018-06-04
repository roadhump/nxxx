import React from 'react';

import S from './Spinner.css';

const Spinner = ({color = '#0cd9fc', ...props}) => (
    <div className={S.block} {...props}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 189 209"
            width="189"
            height="209"
            style={{
                width: '100%',
                height: '100%',
            }}
        >
            <path opacity=".922" fill={color} d="M104.5 209C46.8 209 0 162.2 0 104.5S46.8 0 104.5 0h.5c1.7 0 3 1.3 3 3s-1.3 3-3 3C49.7 6.6 5 51.6 5 107c0 55.8 45.2 101 101 101 33.6 0 64.3-16.7 82.9-42h.1c-19 26.1-49.8 43-84.5 43z"/>
        </svg>
    </div>
);

export default Spinner;