
const ChildComponent = (props : any) => {
    console.log(props)
    return (
      <div className="text-center p-5 bg-indigo-400 border-2 border-indigo-500 w-200 m-10 text-2xl">
        <h1>Full Name: {props.fullName}</h1>
        <p>Fav. Dish: {props.FavDish}</p>
        <p>Fav. Color: {props.FavColor}</p>
      </div>
    );
  }
  
  export default ChildComponent;
  