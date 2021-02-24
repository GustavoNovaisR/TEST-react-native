import { BuscaDados } from "../src/BuscaDados";
import axios, { AxiosResponse } from "axios";
import store from "../src/Store";

jest.mock("axios");

// em caso de redux
jest.mock("../src/Store", () => ({
  getState: () => ({ token: "lalala" }),
}));

afterEach(() => {
  jest.clearAllMocks();
});
describe("Chamada da API", () => {
  const x = ("ok" as unknown) as AxiosResponse<any>;
  (axios as jest.MockedFunction<typeof axios>).mockResolvedValueOnce(x);

  it("deve receber OK como resposta", async () => {
    const result = await BuscaDados();
    expect(result).toEqual("ok");
  });

  it("deve enviar os parametros de cabeçalho", async () => {
    await BuscaDados();
    expect(axios).toHaveBeenCalledWith({
      url: "https://teste.com/api",
      method: "get",
      headers: {
        Authorization: `Bearer lalala`,
      },
    });
  });
});
