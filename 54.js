function myLocalScope() {
    const myVar = "Lees United"
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  console.log('outside myLocalScope', myVar);