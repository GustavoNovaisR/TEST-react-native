describe("Mock Functions", () => {
  const fn = jest.fn();
  fn.mockReturnValueOnce(5);
  const resultado = fn(10);
  it("deve retornar 5", () => {
    expect(resultado).toBe(5);
  });
  it("deve ser chamada", () => {
    expect(fn).toHaveBeenCalled();
  });
  it("dever ser chamada passando o parametro 10", () => {
    expect(fn).toHaveBeenCalledWith(10);
  });
});
