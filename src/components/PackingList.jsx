import React, { useState } from "react";

export const PackingList = ({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = [...items].sort((a, b) =>
      a.description.localeCompare(b.description)
    );

  if (sortBy === "packed")
    sortedItems = [...items].sort(
      (a, b) => Number(a.packed) - Number(b.packed)
    );

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input orders</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by status</option>
        </select>
        <button onClick={onClearItems}>Clear list</button>
      </div>
    </div>
  );
};

const Item = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} - {item.quantity}
      </span>

      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};
