

class BaseRepository{
  constructor(model){this.model=model}

  async create(data){return await this.model.create(data)}

  async find(filter={}, options={}){
    return await this.model.find({isDeleted:false, ...filter}, null, options)
  }
  async findOne(filter={}){
    return await this.model.findOne({isDeleted:false, ...filter})
  }
  async findById(id){
    return await this.model.findOne({_id: id, isDeleted:false})
  }
  async update(id, data){
    return await this.model.findByIdAndUpdate(id, data, {new:true, runValidators: true})
  }
  async softDelete(id, userId){
    return await this.model.findByIdAndUpdate(id,
    {isDeleted:true, updatedBy:userId}, {new:true})
  }
  async restore(id){
    return await this.model.findByIdAndUpdate(id, {isDeleted:false}, {new:true})
  }
  async count(filter={}){
    return await this.model.countDocuments({isDeleted:false, ...filter})
  }
}

export default BaseRepository