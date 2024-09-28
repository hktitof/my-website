import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await fetch("http://api.quotable.io/random?minLength=" + req.query.minLength.toString())
    .then(response => response.json())
    .then(data => {
      // Remove semicolon if it exists
      const quote = data.content.endsWith(";") ? data.content.slice(0, -1) : data.content;

      // print data.content
      console.log("data.content : ", data.content);
      res.status(200).json({ quote: data.content, author: data.authorSlug });
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
}
