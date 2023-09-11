// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type * as next from 'next'

type Data = {
  name: string
}

export default function handler(res: next.NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Doe' })
}
