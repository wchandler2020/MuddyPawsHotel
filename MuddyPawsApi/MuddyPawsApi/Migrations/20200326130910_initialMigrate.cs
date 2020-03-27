using Microsoft.EntityFrameworkCore.Migrations;

namespace MuddyPawsApi.Migrations
{
    public partial class initialMigrate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Hotel",
                columns: table => new
                {
                    Hotelid = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Reviews = table.Column<string>(type: "nvarchar(4000)", nullable: true),
                    DeluxePrice = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    BoardingPrice = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    KittyPricing = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    RemainingAvailable = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Hotel", x => x.Hotelid);
                });

            migrationBuilder.CreateTable(
                name: "muddyPawsEmployee",
                columns: table => new
                {
                    EmployeeId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmployeeName = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    EmployeeEmail = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    EmployeePhone = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Username = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    SecretKey = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    EmployeeRole = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_muddyPawsEmployee", x => x.EmployeeId);
                });

            migrationBuilder.CreateTable(
                name: "muddyPawsPet",
                columns: table => new
                {
                    PetID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PetName = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Type = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Size = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    OwnersName = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    StreetAddress = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    City = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    State = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    ZipCode = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Phone = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    SpecialNeeds = table.Column<string>(type: "nvarchar(1000)", nullable: true),
                    CheckinDate = table.Column<string>(type: "nvarchar(1000)", nullable: false),
                    ProfilePicture = table.Column<string>(type: "nvarchar(1000)", nullable: true),
                    CheckoutDate = table.Column<string>(type: "nvarchar(1000)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_muddyPawsPet", x => x.PetID);
                });

            migrationBuilder.CreateTable(
                name: "Reviews",
                columns: table => new
                {
                    ReviewId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ReviewBody = table.Column<string>(type: "nvarchar(4000)", nullable: true),
                    ReviewerName = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    PostedDate = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reviews", x => x.ReviewId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Hotel");

            migrationBuilder.DropTable(
                name: "muddyPawsEmployee");

            migrationBuilder.DropTable(
                name: "muddyPawsPet");

            migrationBuilder.DropTable(
                name: "Reviews");
        }
    }
}
