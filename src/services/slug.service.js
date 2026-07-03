import slugify from "slugify"

class SlugService{
  async generate(title, repository, currentId = null){
    const baseSlug=slugify(title,{
      lower:true, trim:true, strict:true
    })
    let slug=baseSlug
    let counter=1
    while(true){
      const exists = await repository.findBySlug(slug)
      if(!exists){return slug}
      if (currentId && exists._id.toString() === currentId.toString()) {
      return slug 
    }
    slug=`${baseSlug}-${counter++}`
    }
  }
}

export default new SlugService()