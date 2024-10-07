using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ECommAPI.Model
{
    public class BaseParams
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("CreatedDate")]
        public DateTime CreatedDate { get; set; }

        public void SetCreatedData()
        {
            CreatedDate = DateTime.Now;
        }
    }
}