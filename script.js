function runCode() {
  let input = document.getElementById("code").value;
  let jsCode = marathiToJs(input);

  try {
    let result = eval(jsCode);
    document.getElementById("output").textContent = result !== undefined ? result : "✅ यशस्वी चाललं!";
  } catch (err) {
    document.getElementById("output").textContent = "❌ त्रुटी: " + err.message;
  }
}
