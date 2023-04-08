import { useEffect, useState
 } from 'react';

function useScroll () {
    const [scrollY, setScrollY] = useState(null)

    const getScrollY = () => {
        setScrollY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', getScrollY)

        return () => window.removeEventListener('scroll', getScrollY)
    }, [scrollY])


    return scrollY
}

export default useScroll
