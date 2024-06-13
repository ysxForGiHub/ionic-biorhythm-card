import { useState } from "react";

export default function useStoredState(storedKey, defaultState) {
    function getInitialValue() {
        const value = localStorage.getItem(storedKey)
        return value ?? defaultState
    }

    const [state, setState] = useState(getInitialValue);

    function setStoredState(value) {
        setState(value);
        localStorage.setItem(storedKey, value);
    }

    return [state, setStoredState];
}