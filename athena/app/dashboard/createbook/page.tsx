"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function CreateBookpage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    genre: "",
    coverURL: "",
    bookURL: ""
  });

  const handleSubmit = () => {
    
    // Here, you can simulate a successful form submission
    console.log("Book created:", formData);
    // Reset the form data after submission
    setFormData({
      title: "",
      description: "",
      genre: "",
      coverURL: "",
      bookURL: ""
    });
  };

  const handleInputChange = () => {
   
      };

  return (
    <div>
      <h1 className="mx-[110px]">Create a New Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <Input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <Input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="genre">Genre</label>
          <Input
            type="text"
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="coverURL">Cover URL</label>
          <Input
            type="text"
            id="coverURL"
            name="coverURL"
            value={formData.coverURL}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="bookURL">Book URL</label>
          <Input
            type="text"
            id="bookURL"
            name="bookURL"
            value={formData.bookURL}
            onChange={handleInputChange}
          />
        </div>

        <Button className='my-[12px] gap-x-5'
          variant={"outline"} type="submit">
          Create Book
        </Button>
      </form>
    </div>
  );
}

export default CreateBookpage;