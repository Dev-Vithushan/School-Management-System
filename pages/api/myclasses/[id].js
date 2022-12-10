import { myclasses } from '../../../dataClass'

export default function handler({ query: { id } }, res) {
  const filtered = myclasses.filter((myclass) => myclass.id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res
      .status(404)
      .json({ message: `Class with the id of ${id} is not found` })
  }
}