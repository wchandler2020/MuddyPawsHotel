using Microsoft.EntityFrameworkCore.Migrations;

namespace MuddyPawsApi.Migrations
{
    public partial class addReviewsModel : Migration
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
                name: "Reviews");
        }
    }
}
