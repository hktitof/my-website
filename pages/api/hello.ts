// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {detect} from 'detect-browser';
export default async function  handler(req, res) {
 
  res.status(200).json({"id":req.query})
}
