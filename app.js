let elements = document.querySelectorAll("span");

const [width, setWidth] = useState({});

let KeyTxt;

function setSize() {
  for (const key of elements) {
    const unRoundWidthSize = key.parentElement.getBoundingClientRect().width;
    KeyTxt = Math.round(unRoundWidthSize * 100) / 100 + " px";
    setWidth({ ...width(), [key.id]: KeyTxt });
    key.innerHTML = width()[key.id];
  }
}
setSize();
addEventListener("resize", resizeWidthValue);

function resizeWidthValue() {
  setSize();
}

function useState(defaultValue) {
  let value = defaultValue;

  function getValue() {
    return value;
  }
  function setValue(newValue) {
    value = newValue;
    // render();
  }
  return [getValue, setValue];
}

