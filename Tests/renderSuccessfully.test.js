import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../src/Components/Header/Header';
import EventTablet from '../src/Components/EventTablet/EventTablet';
import AdminMembers from '../src/Components/AdminMembers/AdminMembers';
import AdminVenues from '../src/Components/AdminVenues/AdminVenues';

// 1. Renders the specified component
// 2. Tries to find the text "string" on the screen
// 3. Uses expect() to see if link element specified is in the document

it("Header renders", () => {
    render(<Header />);
    const linkElement = screen.getByText(/Five/i)
    
    expect(linkElement).toBeInTheDocument();
});

it("EventTablet renders", () => {
    render(<EventTablet />);
    const linkElement = screen.getByText(/Upcoming/i)
    
    expect(linkElement).toBeInTheDocument();
});


it("AdminMembers renders", () => {
    render(<AdminMembers />);
    const linkElement = screen.getByText(/Active Members/i)
    
    expect(linkElement).toBeInTheDocument();
});

it("AdminVenues renders", () => {
    render(<AdminVenues />);
    const linkElement = screen.getByText(/Active Venues/i)
    
    expect(linkElement).toBeInTheDocument();
});

// To test a prop

// it('Testing a prop', () => {
//     render<(React.Component prop={prop} />);
//     const propElement = screen.getByText(/Hello World/i);
//     const propHeader = screen.getByRole("heading"/"paragraph"/"img")
//     const propHeader = screen.getByRole("heading", { name: "My Header"})

//     Remember that getBy vs. findAll
//     If async... findBy NOT getBy

//     expect(propElement).toBeInTheDocument();
// })

// it('Testing a prop', () => {
    //     render<(React.Component prop={prop} />);
    //     const propElement = screen.getAllByRole("heading");
    //     expect(propElements.length).toBe(2);
// })