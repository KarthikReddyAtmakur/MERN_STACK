async function getData() {
  try {
    const url = "https://jsonplaceholder.typicode.com/users"
    let result = await fetch(url);
    let data = await result.json()
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData()