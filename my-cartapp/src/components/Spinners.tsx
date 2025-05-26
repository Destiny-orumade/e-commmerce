
import type { CSSProperties } from "react";
import RotateLoader from "react-spinners/RotateLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Spinners() {
  return (
    <div className="loading">
      <RotateLoader
        color={"gray"}
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinners;
