import { useEffect, useState } from 'react';

const useWindowWidth = (screenSize) => {
    const [smallScreenSize, setScreensize] = useState(false);

    useEffect(() => {
        const checkWindowSize = () => {
            setScreensize(window.innerWidth < screenSize);
        };
        checkWindowSize();
        window.addEventListener('resize', checkWindowSize);
        return window.removeEventListener('resize', checkWindowSize);
    }, [screenSize]);

    return smallScreenSize;
};
export default useWindowWidth;
