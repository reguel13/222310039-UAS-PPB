import React, { createContext, useState } from 'react';

export const TicketContext = createContext();

const TicketProvider = ({ children }) => {
    const [ticketHistory, setTicketHistory] = useState([]);

    const addTicket = (ticket) => {
        setTicketHistory([...ticketHistory, ticket]);
    };

    return (
        <TicketContext.Provider value={{ ticketHistory, addTicket,}}>
            {children}
        </TicketContext.Provider>
    );
};

export default TicketProvider;
