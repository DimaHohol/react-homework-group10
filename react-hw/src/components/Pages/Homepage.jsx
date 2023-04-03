import "../../App.css";

function Homepage(props) {
  return (
    <>
      {props.page}
      {props.bodyRight}
      <div className="footer"></div>
    </>
  );
}

export default Homepage;
