// Gets the test description from the browser's sessionStorage
export function getTestDescriptionFromStorage(): string {
    if(sessionStorage.getItem("testDescription")) 
      return sessionStorage.getItem("testDescription") || "";
    else {
      sessionStorage.setItem("testDescription", history.state.descriptionOfTest);
      return history.state.descriptionOfTest;
    }
}