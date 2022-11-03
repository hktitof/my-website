import { NextApiRequest, NextApiResponse } from "next"

export default async  function handler(req: NextApiRequest, res: NextApiResponse) {
  await fetch("https://api.quotable.io/random?minLength=" + req.query.minLength.toString())
    .then(response => response.json())
    .then(data => {
      res.status(200).json({ quote: data.content, author: data.authorSlug });
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
}