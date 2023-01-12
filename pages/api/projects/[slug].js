import projects from '../../../data/projects'

export default (req, res) => {
  const { slug } = req.query

  const data = projects.find((project) => project.id === slug)

  if (!data) {
    return res.status(404).json({
      status: 404,
      message: 'Not Found'
    })
  }
  
  res.status(200).json({...data})
}