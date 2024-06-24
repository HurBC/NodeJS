export const flex = {
  D: {
    row:"flex-row ",
    col: "flex-col "
  },
  JCS: "justify-start ",
  JCE: "justify-end ",
  JCC: "justify-center ",
  JCB: "justify-between ",
  JCA: "justify-around ",
  JCN: "justify-evenly ",
  AIS: "items-start ",
  AIE: "items-end ",
  AIC: "items-center ",
  setFlex: (...args) => {
    const {val1 = "JCC", val2 = "AIC"} = args[0] || {};

    if (flex.hasOwnProperty(val1) && flex.hasOwnProperty(val2))
      return flex[val1] + flex[val2];
  }
};