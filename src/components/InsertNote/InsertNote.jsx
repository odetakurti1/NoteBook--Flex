import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../../features/reducers";
const mapStateToProps = (state) => {
  return {
    tasks: [state],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTask(obj)),
  };
};
const InsertNote = (props) => {
  const [title, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tagNote, setTagNote] = useState([]);

  const selectHandle = (event) => {
    setCategory(event.target.value);
  };

  const add = () => {
    if (title === "" && description === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        title: title,
        description: description,
        category: category,
        tagNote: tagNote,
      });
      setTask("");
      setDescription("");
      setTagNote("");
    }
  };
  console.log();
  return (
    <div className='border-[#3a25d6] py-6 border-2 w-3/4 m-8 rounded-3xl px-8'>
      <h1 className='text-[#3a25d6] font-bold text-3xl text-center mb-3 sm:text-2xl lg:text-2xl'>
        Insert Note
      </h1>
      <div>
        <label className='block'>
          <input
            value={title}
            type='text'
            placeholder='Title'
            className='w-full mb-6 px-4 py-2 rounded-2xl border-[#3a25d6] border-2 placeholder:text-black text-black'
            onChange={(event) => {
              setTask(event.target.value);
            }}
          />
        </label>
        <div className='flex items-start justify-between'>
          <label className='w-full mr-8'>
            <select
              onChange={selectHandle}
              defaultValue='Default'
              name='select'
              id='select'
              className='w-full mb-6 px-4 py-2 rounded-2xl border-[#3a25d6] border-2 placeholder:text-black text-black'
            >
              <option disabled value='Default'>
                Category
              </option>
              <option value='Job'>Job</option>
              <option value='School'>School</option>
              <option value='Health'>Health</option>
              <option value='Food Meals'>Food Meals</option>
              <option value='Shopping'>Shopping</option>
              <option value='Reminders'>Reminders</option>
            </select>
          </label>
          <label className='w-full'>
            <input
              value={tagNote}
              onChange={(event) => {
                setTagNote(event.target.value);
              }}
              type='text'
              className='w-full mb-6 px-4 py-2 rounded-2xl border-[#3a25d6] border-2 placeholder:text-black text-black'
              placeholder='Tag'
            />
          </label>
        </div>
        <button
          onClick={() => add()}
          type='submit'
          className='py-2 rounded-2xl bg-[#a957ca] text-white font-semibold w-1/3'
        >
          Insert
        </button>
      </div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(InsertNote);
