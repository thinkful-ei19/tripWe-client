import React from "react";
import AccommodationsFrom from "./accommodation-form";
import { shallow, mount } from "enzyme";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });
import Adapter from "enzyme-adapter-react-16";

describe("<AccommodationsFrom />", () => {
  it("Should render without crashing", () => {
    shallow(<AccommodationsFrom />);
  });
});
