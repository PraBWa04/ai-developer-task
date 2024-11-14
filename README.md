# AI Developer Recruitment Task for Oxido

This Node.js application processes an article using OpenAI's API to generate structured HTML content. The project meets the specified requirements for the Oxido recruitment task.

## Project Structure

- **index.js**: Main script that:
  - Reads the article from `article.txt`.
  - Connects to OpenAI API and processes the article content with a formatting prompt.
  - Saves the generated HTML content in `artykul.html`.
- **article.txt**: The original article text in Polish, serving as input for OpenAI's processing.
- **artykul.html**: Generated HTML output containing the structured article with placeholders for images.
- **szablon.html**: HTML template for previewing `artykul.html` with basic styles to display images and captions.
- **package.json**: Contains dependencies required to run the project.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or above)
- OpenAI API key ([OpenAI API Documentation](https://beta.openai.com/docs/))

## Setup and Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/oxido-ai-developer-task.git
   cd oxido-ai-developer-task

   ```

2. **Install dependencies**:
   npm install

3. **Set up OpenAI API key**:

Replace YOUR_API_KEY in index.js with your actual OpenAI API key:
Authorization: `Bearer YOUR_API_KEY`
