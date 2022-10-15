import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AdminMembers from '../src/Components/AdminSpecific/AdminMembers';
import AdminOrganisations from '../src/Components/AdminSpecific/AdminOrganisations';
import AdminStats from '../src/Components/AdminSpecific/AdminStats';
import AdminVenues from '../src/Components/AdminSpecific/AdminVenues';
import RegisterSteps from '../src/Components/CommericalRegistration/RegisterSteps';
import EventCard from '../src/Components/EventCards/EventCard';
import EventBanner from '../src/Components/EventSpecific/EventBanner';
import EventMain from '../src/Components/EventSpecific/EventMain';
import GroupBanner from '../src/Components/GroupOverviewSpecific/GroupBanner';
import Header from '../src/Components/Header/Header';
import GroupMembersCard from '../src/Components/MemberCards/GroupMembersCard';
import MemberCardAdmin from '../src/Components/MemberCards/MemberCardAdmin';
import MemberCardSmall from '../src/Components/MemberCards/MemberCardSmall';
import OrgAdminCard from '../src/Components/OrganisationCards/OrgAdminCard';
import CommunityPost from '../src/Components/Posts/CommunityPost';
import PollPost from '../src/Components/Posts/PollPost';
import EventTablet from '../src/Components/Tablets/EventTablet';
import GroupDetailsTablet from '../src/Components/Tablets/GroupDetailsTablet';


// 1. Renders the specified component
// 2. Tries to find the text "string" on the screen
// 3. Uses expect() to see if link element specified is in the document

// AdminSpecific Folder

it("renders AdminMembers", () => {
    render(<AdminMembers />);
    const linkElement = screen.getByText(/Active Members/i)
    
    expect(linkElement).toBeInTheDocument();
});

it("renders AdminOrganisation", () => {
    render(<AdminOrganisations />);
    const linkElement = screen.getByText(/Active Organisations/i)
    
    expect(linkElement).toBeInTheDocument();
});

it("renders AdminStats", () => {
    render(<AdminStats />);
    const linkElement = screen.getByText(/Members/i)
    
    expect(linkElement).toBeInTheDocument();
});

it("renders AdminVenues", () => {
    render(<AdminVenues />);
    const linkElement = screen.getByText(/Active Venues/i)
    
    expect(linkElement).toBeInTheDocument();
});

// CommericalRegistration Folder

it("renders RegisterSteps", () => {
    render(<RegisterSteps />);
    const linkElement = screen.getByText(/Entity/i)
    
    expect(linkElement).toBeInTheDocument();
});

// EventCards Folder

it("renders EventCard", () => {
    render(<EventCard />);
    const linkElement = screen.getByText(/Five Star Bowling/i)
    // This will eventually use the prop testing method below
    
    expect(linkElement).toBeInTheDocument();
});

// EventSpecific Folder

it("renders EventBanner", () => {
    render(<EventBanner />);
    const linkElement = screen.getByText(/26th Sep Bowling/i);
    // This will eventually use the prop testing method below
    
    expect(linkElement).toBeInTheDocument();
});

it("renders EventMain", () => {
    render(<EventMain />);
    const linkElement = screen.getByText(/hello world/i)
    // This will eventually use the prop testing method below
    
    expect(linkElement).toBeInTheDocument();
});

// Footer Folder

// Forms Folder
// Both contain APIs which is currently a problem

// GroupOverviewSpecific Folder

it("renders GroupBanner", () => {
    render(<GroupBanner />);
    const linkElement = screen.getByText(/Next event:/i);
    
    expect(linkElement).toBeInTheDocument();
});

// it("renders GroupMain", () => {
//     render(<EventMain />);
//     const linkElement = 
    
//     expect(linkElement).toBeInTheDocument();
// });

// it("renders GroupCommunity", () => {
//     render(<GroupCommunity />);
//     const linkElement = screen.getByText(/Next event:/i);
    
//     expect(linkElement).toBeInTheDocument();
// });

// GroupOverviewSpecific > Tabs Folder

// All just contain components (higher order functions)

// Header Folder

it("renders Header", () => {
    render(<Header />);
    const linkElement = screen.getByText(/FUN@5/i)
    // This will eventually use the prop testing method below
    
    expect(linkElement).toBeInTheDocument();
});

// MemberCards

it("renders GroupMembersCard", () => {
    render(<GroupMembersCard />);
    const linkElement = screen.getByText(/Group Members/i)
    // This will eventually use the prop testing method below
    
    expect(linkElement).toBeInTheDocument();
});

it("renders MemberCardAdmin", () => {
    render(<MemberCardAdmin />);
    const linkElement = screen.getByText(/Member actions/i)
    // This will eventually use the prop testing method below
    
    expect(linkElement).toBeInTheDocument();
});

it("renders MemberCardSmall", () => {
    render(<MemberCardSmall />);
    const linkElement = screen.getByText(/lewis1broadhurst@gmail.com/i)
    // This will eventually use the prop testing method below
    
    expect(linkElement).toBeInTheDocument();
});


// OrganisationCards Folder

it("renders OrgAdminCard", () => {
    render(<OrgAdminCard />);
    const linkElement = screen.getByText(/Active since:/i)
    // This will eventually use the prop testing method below
    
    expect(linkElement).toBeInTheDocument();
});

// Posts Folder

it("renders CommunityPost", () => {
    render(<CommunityPost />);
    const linkElement = screen.getByText(/Remember to cast/i)
    // This will eventually use the prop testing method below
    
    expect(linkElement).toBeInTheDocument();
});

it("renders PollPost", () => {
    render(<PollPost />);
    const linkElement = screen.getByText(/Cheeky Nandos/i)
    // This will eventually use the prop testing method below
    
    expect(linkElement).toBeInTheDocument();
});


// Tablets Folder

it("renders EventTablet", () => {
    render(<EventTablet />);
    const linkElement = screen.getByText(/Upcoming Events/i)
    // This will eventually use the prop testing method below
    
    expect(linkElement).toBeInTheDocument();
});

it("renders GroupDetailsTablet", () => {
    render(<GroupDetailsTablet />);
    const linkElement = screen.getByText(/Welcome to the BNTA socials group!/i)
    // This will eventually use the prop testing method below
    
    expect(linkElement).toBeInTheDocument();
});

it("renders PollPost", () => {
    render(<PollPost />);
    const linkElement = screen.getByText(/Cheeky Nandos/i)
    // This will eventually use the prop testing method below
    
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

// it("Header renders", () => {
//     render(<Header />);
//     const linkElement = screen.getByText(/Five/i)
    
//     expect(linkElement).toBeInTheDocument();
// });

// it("EventTablet renders", () => {
//     render(<EventTablet />);
//     const linkElement = screen.getByText(/Upcoming/i)
    
//     expect(linkElement).toBeInTheDocument();
// });