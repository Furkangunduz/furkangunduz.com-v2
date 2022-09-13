import { useState } from "react";

export const useScreenSize = (window) => {
    const [width, setWidth] = useState(window.innerWidth);

    //call this in useEffect
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }


    return [width, handleWindowSizeChange]
}