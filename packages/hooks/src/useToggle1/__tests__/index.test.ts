import useToggle1 from "../index"
import { renderHook, act } from '@testing-library/react';

const callToggle = (hook) => act(() => {  // act API 1.any state updates will be executed; 2.any enqueued effects will be executed
    hook.result.current[1].toggle()
})

describe('useToggle1', () => {
    it('toggle', () => {
        const hook = renderHook(() => useToggle1())
        expect(hook.result.current[0]).toBeFalsy()
        callToggle(hook)
        expect(hook.result.current[0]).toBeTruthy()
        callToggle(hook)
        expect(hook.result.current[0]).toBeFalsy()
    })

    it('setTrue', () => {
        const hook = renderHook(() => useToggle1())
        act(() => {
            hook.result.current[1].setTrue()
        })
        expect(hook.result.current[0]).toBeTruthy()
    })

    it('setFalse', () => {
        const hook = renderHook(() => useToggle1())
        act(() => {
            hook.result.current[1].setFalse()
        })
        expect(hook.result.current[0]).toBeFalsy()
    })

    it('setValue', () => {
        const hook = renderHook(() => useToggle1())
        const str = "Hello World"
        act(() => {
            hook.result.current[1].setValue(str)
        })
        expect(hook.result.current[0]).toEqual(str)
    })
})