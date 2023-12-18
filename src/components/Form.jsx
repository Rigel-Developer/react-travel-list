import React, { useState } from "react";
import Modal from "./Modal";

export const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!description) {
      openModal();
      return;
    }

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  };
  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍😍😍 trip ?</h3>
        <select
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="...item"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button>Add</button>
      </form>
      <Modal
        text="Please enter a description"
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};
