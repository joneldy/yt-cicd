import express from "express";
import type { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";

const app: Application = express();
const PORT = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
  { text: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" },
];

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});

app.get("/quote", (req: Request, res: Response) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return res.json(quote);
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
