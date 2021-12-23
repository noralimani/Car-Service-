import { createContext } from "react";

const orders = { selectedServices: [] };

const OrderContext = createContext(orders);

export default OrderContext;
