import { Box, Flex } from "rebass";
import { getServices } from "src/data/services";
import "./order.css";
import { useState } from "react";

const Order = () => {
  const services = getServices();

  const [values, setValues] = useState([{ order: "" }]);

  const handleChange = (i, e) => {
    let newFormValues = [...values];
    newFormValues[i][e.target.name] = e.target.value;
    setValues(newFormValues);
    setValues([...values, { order: "" }]);
  };

  return (
    <div className="div">
      <Box>
        {values.map((element, index) => {
          return (
            <select
              key={index}
              className="forms"
              name="order"
              value={element.order}
              onChange={(e) => handleChange(index, e)}
            >
              <option className="options" defaultValue="Select Services">
                Select Services
              </option>
              {services &&
                services.map((item, index) => (
                  <option key={item.id} value={item.name} className="options">
                    {item.name}
                  </option>
                ))}
            </select>
          );
        })}
      </Box>
    </div>
  );
};

export default Order;
