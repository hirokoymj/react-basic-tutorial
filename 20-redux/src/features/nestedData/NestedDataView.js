import React from "react";

const data = [
  {
    id: 1,
    name: "Category 1",
    items: [
      { id: 101, name: "Item 1.1" },
      { id: 102, name: "Item 1.2" },
    ],
  },
  {
    id: 2,
    name: "Category 2",
    items: [
      { id: 201, name: "Item 2.1" },
      { id: 202, name: "Item 2.2" },
      { id: 203, name: "Item 2.3" },
    ],
  },
];
//Keys are added to the outer and inner map() calls to help React efficiently update the DOM.
export const NestedDataView = () => {
  return (
    <div>
      <h2>Demo</h2>
      {data.map((category) => (
        <div key={category.id}>
          <h3>{category.name}</h3>
          <ul>
            {category.items.map((item) => (
              <li key={item.id}>{item.id}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

// Wrong on 5/20
// <div>
//   <h2>Demo</h2>
//   {data.map((category) => (
//     <h3>{category.name}</h3>
//   ))}
//   <ul>
//     {category.items.map((item) => (
//       <li>{item.id}</li>
//     ))}
//   </ul>
// </div>

// Correct on 05/20
// <div>
//   {data.map((category) => (
//     <div>
//       <h1>{category.name}</h1>
//       <ul key={category.id}>
//         {category.items.map((item) => (
//           <li>
//             {item.id} {item.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   ))}
// </div>
