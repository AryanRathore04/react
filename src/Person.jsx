import React from 'react'

const person = () =>{
    const Name = "Superman";
    const person = {
      name: "Batman",
      age: 30,
      salary: "$1.2B",
      isHero: true,
      img: "https://cdn.mos.cms.futurecdn.net/H8CbtUUSkX6HFFDjnEoDid-1200-80.jpg",
    };
    const { name, age, salary, isHero, img } = person;

    
    
    const myStyle = {
      color: "red",
      backgroundColor: "darkkhaki",
      padding: "10px",
    };

  return (
    <>
      <div className='main' style ={{background:'coral'}}>
        <h1>
          App {2 + 7} {name}
        </h1>
        <div>
          <ul>
            <li>{name}</li>
            <li>{age}</li>
            <li>{salary}</li>
            <img src={img} alt="" />
          </ul>
        </div>
      </div>
    </>
  );
}

export default person