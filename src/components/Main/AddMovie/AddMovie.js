import React, { useState } from "react";
import "./AddMovie.css";

import Modal from "react-modal";

import "./AddMovie.css";

Modal.setAppElement("#root");

const AddMovie = ({ AddNewMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [newMovie, setNewMovie] = useState({
    name: "",
    date: "",
    description: "",
    image: "",
    rating: "",
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  // const [name, setName] = useState("");
  // const [date, setDate] = useState("");
  // const [description, setDescription] = useState("");
  // const [rating, setRating] = useState("");
  // const [image, setImage] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="Add-btn-container">
      <button className="Add-btn" onClick={openModal}>
        +
      </button>
      <Modal
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1 className="addMovie-h1">Add A Movie</h1>
        <form>
          <label>Movie Name</label>
          <input
            type="text"
            name="name"
            required
            // onChange={(e) => setName(e.target.value)}
            // onChange={(e)=>setNewMovie({...newMovie, name:e.target.value})}
            onChange={handleChange}
          />
          <label>Movie Rate</label>
          <input
            type="text"
            name="rating"
            required
            // onChange={(e) => setRating(e.target.value)}
            // onChange={(e) =>
            //   setNewMovie({ ...newMovie, rating: e.target.value })
            // }
            onChange={handleChange}
          />
          <label>Movie Release Date</label>
          <input
            type="text"
            name="date"
            required
            // onChange={(e) => setDate(e.target.value)}
            // onChange={(e)=>setNewMovie({...newMovie, date:e.target.value})}
            onChange={handleChange}
          />
          <label>Movie Image</label>
          <input
            type="url"
            name="image"
            required
            // onChange={(e) => setImage(e.target.value)}
            // onChange={(e)=>setNewMovie({...newMovie, image:e.target.value})}
            onChange={handleChange}
          />
          <label>Movie Summary</label>
          <textarea
            type="text"
            name="description"
            required
            // onChange={(e) => setDescription(e.target.value)}
            // onChange={(e)=>setNewMovie({...newMovie, description:e.target.value})}
            onChange={handleChange}
          />
        </form>
        <button
          className="Modal-btn"
          onClick={() => {
            // AddNewMovie({
            //   name: name,
            //   rating: rating,
            //   date: date,
            //   image: image,
            //   description: description,
            // });
            AddNewMovie(newMovie);
            closeModal();
          }}
        >
          Submit
        </button>
        <button className="Modal-btn" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
};

export default AddMovie;
