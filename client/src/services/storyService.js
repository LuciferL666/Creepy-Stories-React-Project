const baseUrl = 'http://localhost:3030/jsonstore'

export const create = async (storyData) => {
    const response = await fetch(`${baseUrl}/stories` , {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(storyData)
    })

    const result = await response.json();

    return result;
}