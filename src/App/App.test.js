import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  let wrapper = shallow(<App />);
  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
