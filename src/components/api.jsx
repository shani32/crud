import React from "react";
import axios from 'axios'

export default axios.create({
    baseURL: "https://61c4e947f1af4a0017d9986f.mockapi.io/shoes",
  });