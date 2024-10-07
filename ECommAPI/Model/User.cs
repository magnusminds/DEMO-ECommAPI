using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ECommAPI.Model
{
    public class User : BaseParams
    {
        [BsonElement("FirstName")]
        public string FirstName { get; set; }

        [BsonElement("LastName")]
        public string LastName { get; set; }

        [BsonElement("Email")]
        public string Email { get; set; }

        [BsonElement("ContactNo")]
        public string ContactNo { get; set; }
    }
}