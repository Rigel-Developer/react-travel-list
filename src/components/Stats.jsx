import React from "react";

export const Stats = ({ items }) => {
  if (items.length === 0) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀🚀🚀</em>
      </p>
    );
  }

  const totalItems = items.length;
  const totalPackedItems = items.filter((item) => item.packed).length;
  const percentage = (totalPackedItems / totalItems) * 100;
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! 🎉✈️✈️✈️"
          : `💼 You have ${totalItems} items on your list, and you already packed
          ${totalPackedItems} (${percentage.toFixed(2) || 0}%)`}
      </em>
    </footer>
  );
};
