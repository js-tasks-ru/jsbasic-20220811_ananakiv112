function truncate(str, maxlength) {
  return (str.length > maxlength) ? str.substr (0, maxlength - 1) + "…" : str; 
}

alert (truncate("Hello, my name is Ann!", 10))