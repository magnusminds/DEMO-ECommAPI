using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ECommAPI.Model
{
    public class Product : BaseParams
    {
        [BsonElement("ProductName")]
        public string ProductName { get; set; }

        [BsonElement("Description")]
        public string Description { get; set; }

        [BsonElement("Price")]
        public long Price { get; set; }

        [BsonElement("AvailableQuantity")]
        public string AvailableQuantity { get; set; }
    }
}