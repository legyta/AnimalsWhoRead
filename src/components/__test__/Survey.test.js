import React from "react";
import Survey from "../Survey";
import { Item } from "react-bootstrap/lib/Pagination";

test("shallow rendering", () => {
  const wrapper = shallow(<Survey />);
  expect(wrapper).toMatchSnapshot();
});
