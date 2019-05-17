import React from "react";
import { shallow } from "enzyme";

// Components
import { App } from "./App";

function setup(props) {
  const wrapper = shallow(<App />);
  return { wrapper, props };
}

describe("App Test Suite", () => {
  it("Should have an App class", () => {
    const { wrapper } = setup();
    expect(wrapper.find("App").exists());
  });
});
