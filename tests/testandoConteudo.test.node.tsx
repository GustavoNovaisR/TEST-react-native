import React from "react";
import MeuComponente from "../src/Component";
import { render, cleanup, within, waitFor } from "react-native-testing-library";
import { create, act } from "react-test-renderer";

afterEach(cleanup);

type ReactTestInstance = {
  type: string | Function;
  props: { [propName: string]: any };
  parent: null | ReactTestInstance;
  children: Array<ReactTestInstance | string>;
};

describe("<Component /> testando conteúdo. ", () => {
    it("deve dar match com a snapshot", () => {
      const renderizado = render(<MeuComponente value={"lalala"} />).toJSON();
      expect(renderizado).toMatchSnapshot();
    });

  it('deve reenderizar a propriedade de "text"', () => {
    //Nota: ainda não consegui entender pq o "testID" não está funcionando
    const value = "lalala";
    const rendered = render(<MeuComponente value={value} />);

    const regex = new RegExp(value, "i");
    const textComponent = rendered.getByText(regex);

    const text = textComponent.props.children.join("");
    expect(text).toEqual("Cante lalala com a gente!");
  });

  it("deve reenderizar o texto na cor branca.", () => {
    const value = "lalala";
    const rendered = render(<MeuComponente value={value} />);

    const regex = new RegExp(value, "i");
    const textComponent = rendered.getByText(regex);

    const colorWhite = textComponent.props.style;
    expect(colorWhite).toMatchObject({ color: "#fff" });
  });

  it("deve ter a propriedade flex no view.", () => {
    const value = "lalala";
    const rendered = render(<MeuComponente value={value} />);
    const regex = new RegExp(value, "i");
    const textComponent: ReactTestInstance = rendered.getByText(regex);
    const flexProperty = textComponent.parent?.props.style;
    /* 
    Ele convert Flex 1 para :
    {    
      "WebkitBoxFlex": 2,
      "WebkitFlexBasis": "0%",
      "WebkitFlexGrow": 2,
      "WebkitFlexShrink": 1,
      "flexBasis": "0%",
      "flexGrow": 2,
      "flexShrink": 1,
      "msFlexNegative": 1,
      "msFlexPositive": 2,
      "msFlexPreferredSize": "0%",*
    }
    */
    expect(flexProperty).toMatchObject({ WebkitBoxFlex: 1 });
  });
});
