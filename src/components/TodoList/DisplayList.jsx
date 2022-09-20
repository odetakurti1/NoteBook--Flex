import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../../features/reducers";

const mapStateToProps = (state) => {
  return {
    tasks: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTask(obj)),
  };
};

const DisplayList = (props) => {
  const [query, setQuery] = useState("");

  const { tasks } = props;
  // console.log(tasks.reducer[0]);
  return (
    <div className='border-[#3a25d6] py-6 border-2 w-full m-8 rounded-3xl px-14 sm:p-10 sm:w-auto'>
      <h1 className='text-[#3a25d6] text-3xl text-center font-bold mb-3 sm:text-2xl lg:text-2xl'>
        All Notes
      </h1>
      <input
        className='w-full mb-6 px-4 py-2 rounded-2xl border-[#3a25d6] border-2 placeholder:text-black text-black'
        placeholder='Search'
        onChange={(event) => setQuery(event.target.value)}
      />
      {Object(tasks.reducer)
        .filter((item) => {
          if (query === "") {
            return item;
          } else if (
            item.tagNote.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase()) ||
            item.title.toLowerCase().includes(query.toLowerCase())
          ) {
            return item;
          }
        })
        .map((item, index) => {
          return (
            <div
              key={index}
              className='border-[#3a25d6] border-2 mb-5 px-8 py-4 rounded-2xl inline-block w-full sm:p-6'
            >
              <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold'>{item.title}</h1>
                <div className='flex flex-col items-end'>
                  <div className='mb-4'>
                    <span className='py-2 min-w-[164px] px-2 bg-[#a957ca] text-white rounded-lg inline-block text-center'>
                      {item.category}
                    </span>
                  </div>
                  <div>
                    {item.tagNote.split(/[,]+/).map((tags, index) => {
                      return (
                        <h2
                          className='bg-[#a957ca] inline-block mx-1 px-2 py-1 rounded-md text-xs text-white'
                          key={index}
                        >
                          {tags}
                        </h2>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayList);
