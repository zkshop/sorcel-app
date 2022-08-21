import General from "../../components/admin/General";
import { render } from "../utils";

describe("General", () => {
  it("renders without crashing", () => {
    render(<General />, {});
    expect("General").toBeInTheDocument();
  });
});
