// import { CustomizedForm } from "./CustomizedForm";
import React from "react";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("CustomizedForm", () => {
  it("CustomizedForm", () => {
    // const wrapper = mount(<CustomizedForm username={{ value: "ciccio" }} />);
    // expect(wrapper.find(CustomizedForm).length).toEqual(1);
  });
});
