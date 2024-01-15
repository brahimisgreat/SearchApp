export async function fetchUsers() {
  try {
    const response = await fetch("https://api.github.com/users");
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
