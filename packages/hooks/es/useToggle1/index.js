import { __read } from "tslib";
import { useState } from 'react';
function useToogle1(defaultValue) {
  if (defaultValue === void 0) {
    defaultValue = false;
  }
  var _a = __read(useState(defaultValue), 2),
    value = _a[0],
    setValue = _a[1];
  var actions = {
    toggle: function () {
      return setValue(function (v) {
        return !v;
      });
    },
    setTrue: function () {
      return setValue(!defaultValue);
    },
    setFalse: function () {
      return setValue(defaultValue);
    },
    setValue: function (value) {
      return setValue(value);
    }
  };
  return [value, actions];
}
export default useToogle1;