import Document, { Html, Head, NextScript, Main } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head />
        <body>
          <Main />
          <NextScript />

          {/* div que vai servir como um 
          Portal para o Modal */}
          <div id="modal"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
