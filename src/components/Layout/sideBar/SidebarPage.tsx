import React, { useState } from "react";
import {
  Children,
  SidebarContainer,
  SidebarWrapper,
  SidebarLogoWrapper,
  SidebarLogo,
  SidebarBrand,
  SidebarToggler,
} from "./SidebarStyles";
import SidebarItems from "./SidebarItems";



// Define the type for the dummy data
type DummyDataItem = {
  id: number;
  name: string;
  path: string;
  icon: JSX.Element;
};

// Define the props interface for the Sidebar component
interface SidebarProps {
  children: React.ReactNode;
  dummyData: DummyDataItem[]; // Add the dummyData prop here
}

const MOBILE_VIEW = window.innerWidth < 468;

const Sidebar: React.FC<SidebarProps> = ({ children, dummyData }) => {
  const [displaySidebar, setDisplaySidebar] = useState(!MOBILE_VIEW);

  const handleSidebarDisplay = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (window.innerWidth > 468) {
      setDisplaySidebar(!displaySidebar);
    } else {
      setDisplaySidebar(false);
    }
  };

  return (
    <>
     <style>
        {`
          * {
            margin: 0;
            padding: 0;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            outline: none;
            border: none;
            text-decoration: none;
            font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
              "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
              sans-serif;
          }

          #main {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
          }

          .btn {
            margin: 1rem 1rem 0 0;
            padding: 0.25rem 0.5rem;
            display: flex;
            gap: 0.25rem;
            align-items: center;
            justify-content: center;
            background: transparent;
            outline: none;
            border: 1px solid #808080;
            border-radius: 3px;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
          }

          .btn:hover {
            background-color: #e4e3e34d;
          }

          #page {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            text-transform: capitalize;
            font-size: 1rem;
            overflow: hidden;
          }

          @media screen and (min-width: 468px) {
            #page {
              font-size: 3rem;
            }

            .btn {
              padding: 0.5rem 0.75rem;
              gap: 0.5rem;
            }
          }

          .app__brand__text {
            font-size: 2rem;
            font-weight: 700;
            color: #5a8dee;
            margin-left: 0.5rem;
          }

          /* Sidebar toggle button starts */
          .outer__circle {
            position: relative;
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
            background-color: #5f97ef;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .outer__circle::after {
            position: absolute;
            top: 0.225rem;
            left: 0.215rem;
            content: "";
            width: 1.1rem;
            height: 1.1rem;
            border-radius: 50%;
            background-color: #fff;
          }

          .inner__circle {
            position: relative;
            width: 0.75rem;
            height: 0.75rem;
            border-radius: 50%;
            background-color: #5f97ef;
            z-index: 100;
          }

          .inner__circle::after {
            position: absolute;
            top: 0.125rem;
            left: 0.15rem;
            content: "";
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            background-color: #fff;
          }
        `}
      </style>
    <React.Fragment>
      <SidebarContainer displaySidebar={displaySidebar}>
        <SidebarWrapper>
          <SidebarLogoWrapper displaySidebar={displaySidebar}>
            <SidebarLogo href="#">
              <span className="app-brand-logo demo">
                <img src="" alt="Brand logo" />
              </span>
              <SidebarBrand
                displaySidebar={displaySidebar}
                className="app__brand__text"
              >
                Frest
              </SidebarBrand>
            </SidebarLogo>
            {/* Logo wrapper ends */}
            {/* Toggle button */}
            <SidebarToggler
              displaySidebar={displaySidebar}
              onClick={handleSidebarDisplay}
            >
              <div className="outer__circle">
                <div className="inner__circle" />
              </div>
            </SidebarToggler>
          </SidebarLogoWrapper>
          {/* Render the SidebarItems component */}
          <SidebarItems displaySidebar={displaySidebar} dummyData={dummyData} />
        </SidebarWrapper>
      </SidebarContainer>
      {/* Render the children */}
      <Children displaySidebar={displaySidebar}>{children}</Children>
    </React.Fragment>
    </>
  );
};

export default Sidebar;
