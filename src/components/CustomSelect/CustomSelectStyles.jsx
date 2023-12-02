export const selectCustomStyles = (type) => {
  const customSelectWidth = {
    MAKE: "224px",
    PRICE: "125px",
  };

  return {
    control: (baseStyles) => ({
      ...baseStyles,
      width: customSelectWidth[type],
      padding: "14px 18px",
      border: "none",
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: "calc(20 / 18)",
      borderRadius: "14px",
      background: "#F7F7FB",
      cursor: "pointer",
    }),
    valueContainer: (baseStyles) => ({
      ...baseStyles,
      padding: "0",
      margin: "0",
      div: { padding: "0", margin: "0" },
    }),
    indicatorsContainer: (baseStyles) => ({
      ...baseStyles,
      div: { padding: "0", margin: "0" },
    }),
    placeholder: (baseStyles) => ({
      ...baseStyles,
      color: "#121417",
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: "calc(20 / 18)",
    }),
    indicatorSeparator: (baseStyles) => ({
      ...baseStyles,
      display: "none",
    }),
    dropdownIndicator: (baseStyles, state) => ({
      ...baseStyles,
      color: "#121417",
      transform: state.isFocused ? "rotate(180deg)" : "none",
      transition: "transform 200ms ease",
      [":hover"]: "none",
    }),
    menu: (baseStyles) => ({
      ...baseStyles,
      width: customSelectWidth[type],
      height: "272px",
      padding: "14px 8px 14px 18px",
      borderRadius: "14px",
      border: "1px solid rgba(18, 20, 23, 0.05)",
      background: "#FFF",
      boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.02)",
    }),
    menuList: (baseStyles) => ({
      ...baseStyles,
      height: "244px",
      "::-webkit-scrollbar": { width: "8px", background: "#FFF" },
      "::-webkit-scrollbar-thumb": {
        background: "rgba(18, 20, 23, 0.05)",
        borderRadius: "10px",
      },
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      color: state.isSelected ? "#121417" : "rgba(18, 20, 23, 0.20)",
      backgroundColor: "transparent",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "calc(20 / 16)",
      [":hover"]: { color: "rgba(18, 20, 23, 0.50)" },
    }),
  };
};
