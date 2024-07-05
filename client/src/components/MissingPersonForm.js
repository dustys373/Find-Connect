import React, { useState } from 'react';

function MissingPersonForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    lastLocation: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastLocation"
        placeholder="Last Known Location"
        value={formData.lastLocation}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <button type="submit">Submit Report</button>
    </form>
  );
}

export default MissingPersonForm;