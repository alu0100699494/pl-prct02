var assert = chai.assert;

suite('Comma-Separated Values', function(){
  // Probar función "parseInput", viendo el resultado de "table" y "wrong_rows"
  test('parseInput()', function(){
    var input_text_str = "a, b, c, \"aaa\"\nbbb, \"cccc\" \"dddddd\"     \n \"aaaaa\"\"bbbbb\"";
    var table = [];
    var wrong_rows = [];
    parseInput(input_text_str, table, wrong_rows);

    assert.deepEqual(table, [["a", " b", " c", "aaa"], ["bbb", "cccc", "dddddd"], ["aaaaa", "bbbbb"]]);
    assert.deepEqual(wrong_rows, [false, true, true]);
  });
  
  // Probar que se crea correctamente la plantilla
  test('calculate()', function(){
    input_text.value = "\"aa\" \"bb\"\n \"cc\" dd";
    calculate();
    
    assert.deepEqual(target.innerHTML, "\n\t  <table class=\"output\">\n\t    \n\t\t  <tbody><tr>\n\t\t  \n\t\t    <td> aa </td>\n\t\t  \n\t\t    <td> bb </td>\n\t\t  \n\t\t  </tr>\n\t\t\n\t\t  <tr>\n\t\t  \n\t\t    <td> cc </td>\n\t\t  \n\t\t    <td> dd </td>\n\t\t  \n\t\t  </tr>\n\t\t\n\t  </tbody></table>\n\t");
  });
  
  // Probar que el localStorage funciona correctamente
  test('localStorage', function(){
    if (window.localStorage)
      assert.deepEqual(localStorage.input_text, "\"aa\" \"bb\"\n \"cc\" dd");
  });
  
});