// This is an example of how to access a session from an API route
import type { NextApiRequest, NextApiResponse } from "next"



export default async (req: NextApiRequest, res: NextApiResponse) => {

  
  let body = JSON.parse(req.body)
  
  await db.collection("cart").deleteMany({})

  await db.collection("cart").insertMany(body.map(b=>{
    return {title:b}
  }))

 await db.collection("cart").deleteMany({})
  res.send({ code: 0,})
}
