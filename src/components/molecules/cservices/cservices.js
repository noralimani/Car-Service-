import React, { useEffect, useState } from "react";
import { Flex, Box } from "rebass";
import { getServices } from "src/data/services";
import TitleSection from "src/components/atoms/title-section/title-section";
import ServiceItem from "src/components/atoms/service/service-item";

const Cservices = (props) => {
  const { title, subtitle } = props;

  const [services, setServices] = useState(getServices());

  const handleClick = (index) => {
    const selectedServices = [...services];
    selectedServices[index].active = !selectedServices[index].active;
    setServices(selectedServices);
  };

  return (
    <Box>
      <TitleSection title={title} subtitle={subtitle} />
      <Flex>{props.children}</Flex>
      <Flex px={4} flexWrap="wrap">
        {services.map((serviceItem, index) => (
          <ServiceItem
            key={index}
            icon={serviceItem.icon}
            text={serviceItem.name}
            active={serviceItem.active}
            onClick={() => handleClick(index)}
            price={`$ ${serviceItem.price}`}
            hour={serviceItem.hour}
            color={serviceItem.color}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Cservices;
