class BaseRepository {
  constructor(collection) {
    this.collection = collection;
  }

  getById(_id) {
    return this.collection.findOne({ _id });
  }

  create(data) {
    const entity = this.collection(data);
    return entity.save();
  }

  updateById(_id, data) {
    return this.collection.updateOne({ _id }, { $set: data });
  }
}

export default BaseRepository;
