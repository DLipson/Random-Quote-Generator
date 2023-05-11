export async function fetchQuotes(category, count) { 
    const API_KEY = process.env.REACT_APP_API_NINJAS_API_KEY;
    const url = new URL('https://api.api-ninjas.com/v1/quotes');
    const params = new URLSearchParams();
    if (category) params.append('category', category);
    if (count) params.append('limit', count);
    url.search = params.toString();

    const requestOptions = {
      method: "GET",
      headers: {
        "x-api-key": API_KEY,
      },
    };

    console.log("sending request");
    return await fetch(url, requestOptions).then((response) => response.json());    
}

export const categories = [
    //taken from https://api-ninjas.com/api/quotes
    "age",
    "alone",
    "amazing",
    "anger",
    "architecture",
    "art",
    "attitude",
    "beauty",
    "best",
    "birthday",
    "business",
    "car",
    "change",
    "communications",
    "computers",
    "cool",
    "courage",
    "dad",
    "dating",
    "death",
    "design",
    "dreams",
    "education",
    "environmental",
    "equality",
    "experience",
    "failure",
    "faith",
    "family",
    "famous",
    "fear",
    "fitness",
    "food",
    "forgiveness",
    "freedom",
    "friendship",
    "funny",
    "future",
    "god",
    "good",
    "government",
    "graduation",
    "great",
    "happiness",
    "health",
    "history",
    "home",
    "hope",
    "humor",
    "imagination",
    "inspirational",
    "intelligence",
    "jealousy",
    "knowledge",
    "leadership",
    "learning",
    "legal",
    "life",
    "love",
    "marriage",
    "medical",
    "men",
    "mom",
    "money",
    "morning",
    "movies",
    "succes"
]