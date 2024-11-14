// Importowanie modułów fs i fetch
const fs = require("fs");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

// Funkcja do odczytu pliku z artykułem
function readArticleFile(filePath) {
  // Odczytujemy zawartość pliku jako tekst
  console.log("Czytanie pliku...");
  return fs.readFileSync(filePath, "utf-8");
}

// Funkcja do wysyłania zapytania do OpenAI API przy użyciu modelu chatowego
async function processArticleWithAI(articleText, prompt) {
  console.log("Przygotowanie zapytania do API...");

  try {
    // Wysyłamy zapytanie POST do API z treścią artykułu i promptem
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer KEYYYYYYYYYYYYYYYYYYYYYYYYYYAPI`, // Zamień na swój klucz API
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are an assistant that formats articles in HTML.",
          },
          { role: "user", content: `${prompt}\n\n${articleText}` },
        ],
        max_tokens: 2048,
      }),
    });

    // Pobieramy odpowiedź z API
    const data = await response.json();
    console.log("Odpowiedź od API:", data);

    // Sprawdzamy czy odpowiedź jest poprawna
    if (data.choices && data.choices[0].message) {
      return data.choices[0].message.content;
    } else {
      throw new Error(
        "Nieprawidłowa struktura odpowiedzi od API lub brak tekstu."
      );
    }
  } catch (error) {
    console.error("Błąd podczas przetwarzania artykułu:", error.message);
    throw error;
  }
}

// Funkcja główna, która wykonuje całe zadanie
async function generateHtmlArticle() {
  console.log("Generowanie artykułu w HTML...");
  const articleText = readArticleFile("article.txt");
  const prompt =
    "Strukturyzuj tekst w formacie HTML, dodaj miejsca na obrazy za pomocą znaczników <img src='image_placeholder.jpg' alt='Opis obrazu'>";

  const htmlContent = await processArticleWithAI(articleText, prompt);

  // Zapisujemy wygenerowany HTML w pliku artykul.html
  fs.writeFileSync("artykul.html", htmlContent);
  console.log("HTML artykułu zapisany w pliku artykul.html");
}

// Wywołanie funkcji głównej
generateHtmlArticle();
