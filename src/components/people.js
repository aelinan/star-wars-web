export async function GetPeople() {
  try {
    const baseURL = `https://swapi.dev/api/people/`
    const request = await fetch(baseURL);
    if (!request.ok) {
      throw new Error('hubo un error');
    }
    const data = await request.json();
    return data;
  } catch (err) {
    throw new Error('Hubo otro error')
  }
}

export async function GetCharacter(id = 1) {
  try {
    const request = await fetch(`https://swapi.dev/api/people/${id}/`)
    if(!request.ok) {
      throw new Error('Errorcito')
    }
    const data = request.json()
    return data;
  } catch (err) {
    throw new Error('error')
  }
}

// function _handleError(status) {
//     if (status === 404) {
//       return console.log('hubo un error');
//     }
// }


