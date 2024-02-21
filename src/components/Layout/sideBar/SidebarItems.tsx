import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ItemsList,
  ItemContainer,
  ItemWrapper,
  ItemName,
} from "./SidebarStyles";

// Define the type for dummyData
type DummyDataItem = {
  id: number;
  path: string; // Corrected to use a string
  icon: JSX.Element;
  name: string;
};

interface SidebarItemsProps {
  displaySidebar: boolean;
  dummyData: DummyDataItem[]; // Add the dummyData prop here
}

const SidebarItems: React.FC<SidebarItemsProps> = ({
  displaySidebar,
  dummyData,
}) => {
  const [activeItem, setActiveItem] = useState<number>(0);

  return (
    <ItemsList>
      {dummyData.map((itemData: DummyDataItem, index: number) => (
        <ItemContainer
          key={index}
          onClick={() => setActiveItem(itemData.id)}
          className={itemData.id === activeItem ? "active" : ""}
        >
          <Link to={itemData.path}>
            <ItemWrapper displaySidebar={displaySidebar}>
              {itemData.icon}
              <ItemName displaySidebar={displaySidebar}>
                {itemData.name}
              </ItemName>
            </ItemWrapper>
          </Link>
        </ItemContainer>
      ))}
    </ItemsList>
  );
};

export default SidebarItems;
