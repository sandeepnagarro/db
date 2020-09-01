import { mount, shallow } from "enzyme";
import React from "react";
import App from "../src/App";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  mount(<App />);
});
