/ Marathi Compiler core - Omkar6
function marathiToJs(code) {
  // साधं उदाहरण: मराठी शब्द → JavaScript मध्ये बदल
  return code
    .replace(/छापा/g, "console.log")   // छापा = console.log
    .replace(/जर/g, "if")              // जर = if
    .replace(/नाहीतर/g, "else")        // नाहीतर = else
    .replace(/पर्यंत/g, "while");      // पर्यंत = while
}
