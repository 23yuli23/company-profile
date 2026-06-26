import Backendless from './backendless'

const TABLE = 'BlogPost'

export const getBlogs = () => {
  const query = Backendless.DataQueryBuilder.create()
    .setSortBy(['created DESC'])
    .setPageSize(50)
  return Backendless.Data.of(TABLE).find(query)
}

export const getBlogById = (id) => Backendless.Data.of(TABLE).findById(id)

export const createBlog = (data) => Backendless.Data.of(TABLE).save(data)

export const deleteBlog = (id) => Backendless.Data.of(TABLE).remove({ objectId: id })

export const updateBlog = (id, data) => Backendless.Data.of(TABLE).save({ objectId: id, ...data })
