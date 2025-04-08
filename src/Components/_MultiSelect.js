import React, { useEffect, useState } from "react";

const MultiSelect = ({ initial, options, callback, disabled }) => {
  const [showSelect, setShowSelect] = useState(false);
  const [selectOptions, setSelectOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    if (disabled) setShowSelect(false);
    setSelectOptions(options);
    setSelectedOptions(initial);
  }, [disabled, options, initial]);

  useEffect(() => {
    if (selectedOptions?.length === 0) setShowSelect(false);

    callback(selectedOptions);
  }, [selectedOptions, callback]);

  const addSelectOption = (opt) => {
    if (disabled) return;

    if (selectedOptions.includes(opt)) return;

    setSelectedOptions((prevState) => {
      return [...prevState, opt];
    });

    return;
  };

  const removeSelectOption = (e, opt) => {
    e.stopPropagation();

    if (disabled) return;

    if (selectedOptions.indexOf(opt) < 0) return;

    setSelectedOptions((prevState) => {
      return [...prevState.filter((i) => i !== opt)];
    });

    return;
  };

  const toggleShowSelect = () => {
    if (disabled) return;

    setShowSelect(!showSelect);

    return;
  };

  return (
    <div className="Custom-multi-select">
      {selectedOptions?.length > 0 && (
        <span
          className="c-accent clear-btn"
          onClick={() => showSelect && setSelectedOptions([])}
        >
          Remove all
        </span>
      )}

      <div
        className="form-select"
        data-disabled={disabled}
        onClick={toggleShowSelect}
      >
        <div className="d-flex gap-2 flex-wrap">
          {selectedOptions?.length > 0 ? (
            <>
              {selectedOptions.map((i, index) => {
                return (
                  <div
                    key={index}
                    className="px-3 py-1 border rounded"
                    onClick={(e) => removeSelectOption(e, i)}
                  >
                    {i} <i className="ms-2 fas fa-times"></i>
                  </div>
                );
              })}
            </>
          ) : (
            <span>Select Some Options</span>
          )}
        </div>
      </div>

      {showSelect && (
        <div className="form-control mt-3 rounded shadow-sm">
          <h6>Options List</h6>
          <div className="d-flex gap-2 flex-wrap">
            {selectOptions.map((i, index) => {
              return (
                <div
                  key={index}
                  className="px-3 py-1 border rounded"
                  onClick={() => addSelectOption(i)}
                >
                  {i} <i className="ms-2 fas fa-plus"></i>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
