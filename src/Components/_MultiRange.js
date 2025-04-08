import { useEffect, useState } from "react";

const _MultiRange = ({ title, min, max, left, right, callback }) => {
  const [multiRangeMin, setMultiRangeMin] = useState("0");
  const [multiRangeMax, setMultiRangeMax] = useState("0");
  const [multiRangeLeft, setMultiRangeLeft] = useState("0");
  const [multiRangeRight, setMultiRangeRight] = useState("0");

  useEffect(() => {
    setMultiRangeMin(min);
    setMultiRangeMax(max);
    setMultiRangeLeft(left);
    setMultiRangeRight(right);
  }, [min, max, left, right]);

  useEffect(() => {
    callback({
      multiRangeLeft,
      multiRangeRight,
    });
  }, [multiRangeLeft, multiRangeRight, callback]);

  const getHanglePositionPercentage = (value) => {
    return (
      (100 / (parseInt(multiRangeMax) - parseInt(multiRangeMin))) *
        parseInt(value) -
      (100 / (parseInt(multiRangeMax) - parseInt(multiRangeMin))) *
        parseInt(multiRangeMin)
    );
  };

  const onInputLeftMultiRange = (e) => {
    try {
      setMultiRangeLeft(
        Math.min(
          e.target.value,
          e.target.parentNode.childNodes[2].value - 1
        ).toString()
      );

      const value = getHanglePositionPercentage(multiRangeLeft);

      const children = e.target.parentNode.childNodes[0].childNodes;

      children[0].style.left = value + "%";
      children[1].style.left = value + "%";
    } catch (error) {
      console.log(error);
    }
  };

  const onInputRightMultiRange = (e) => {
    try {
      setMultiRangeRight(
        Math.max(
          e.target.value,
          e.target.parentNode.childNodes[1].value - -1
        ).toString()
      );

      const value = getHanglePositionPercentage(multiRangeRight);

      const children = e.target.parentNode.childNodes[0].childNodes;

      children[0].style.right = 100 - value + "%";
      children[2].style.left = value + "%";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="filter-multirange">
      <div className="d-flex gap-3 align-items-center justify-content-between mb-4">
        <h6 className="mb-0">{title}</h6>
        <div className="d-flex align-items-center gap-2">
          <input
            className="form-control"
            type="text"
            value={multiRangeLeft}
            disabled
          />
          <span>-</span>
          <input
            className="form-control"
            type="text"
            value={multiRangeRight}
            disabled
          />
        </div>
      </div>

      <div className="slider" id="slider-distance">
        <div className="track">
          <div
            className="range"
            style={{
              left: `${getHanglePositionPercentage(multiRangeLeft)}%`,
              right: `${100 - getHanglePositionPercentage(multiRangeRight)}%`,
            }}
          ></div>
          <span
            className="thumb"
            style={{
              left: `${getHanglePositionPercentage(multiRangeLeft)}%`,
            }}
          ></span>
          <span
            className="thumb"
            style={{
              left: `${getHanglePositionPercentage(multiRangeRight)}%`,
            }}
          ></span>
        </div>
        <input
          type="range"
          step="1"
          tabIndex="0"
          min={multiRangeMin}
          max={multiRangeMax}
          value={multiRangeLeft}
          onChange={onInputLeftMultiRange}
        />

        <input
          type="range"
          step="1"
          tabIndex="0"
          min={multiRangeMin}
          max={multiRangeMax}
          value={multiRangeRight}
          onChange={onInputRightMultiRange}
        />
      </div>

      <div className="d-flex gap-3 align-items-center justify-content-between mt-3">
        <h6 className="mb-0">{multiRangeMin}</h6>
        <h6 className="mb-0">{multiRangeMax}</h6>
      </div>
    </div>
  );
};

export default _MultiRange;
