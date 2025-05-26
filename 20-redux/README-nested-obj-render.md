# Render nested array of objects

```js
onst data = [
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
export const DemoView = () => {
  return (
    <div>
    </div>
  );
};
```

**Q1:A**

- Warning: "JSX must have one parent element"

```js
return (
  <>
    <div>node1</div>
    <div>node2</div>
  </>
);
```

```js
export const DemoView = () => {
  return (
    <div> ## <====A outer div of the first map().
      {data.map((category) => (
        <div key={category.id}>## <====A innter div of the 2nd map().
          <h3>{category.name}</h3>
          <ul> ## <====A outer div of the map().
            {category.items.map((item) => (
              <li key={item.id}>{item.id}</li> ## <====A innter div of the map().
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
```
