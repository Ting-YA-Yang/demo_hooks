import { useState } from 'react';

/**
 * 基础用法： 
 * set, setTrue, setFalse  -- no param
 * setValue -- param
 */

interface Actions<T> {
    toggle: () => void,
    setTrue: () => void,
    setFalse: () => void,
    setValue: (value: T) => void
}

function useToogle1<T = boolean>(): [T, Actions<T>]

function useToogle1<T>(defaultValue: T = false as unknown as T) {
    const [value, setValue] = useState<T>(defaultValue)

    const actions = {
        toggle: () => setValue((v: T) => !v),
        setTrue: () => setValue(!defaultValue),
        setFalse: () => setValue(defaultValue),
        setValue: (value: T) => setValue(value)
    }

    return [value, actions]
}

export default useToogle1

