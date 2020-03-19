using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MuddyPawsApi.Migrations
{
    public partial class updatedPetModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CheckinDate",
                table: "muddyPawsPet",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "CheckoutDate",
                table: "muddyPawsPet",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "PetOwnersAddress",
                table: "muddyPawsPet",
                type: "nvarchar(100)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PetOwnersEmail",
                table: "muddyPawsPet",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PetOwnersName",
                table: "muddyPawsPet",
                type: "nvarchar(100)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PetOwnersNumber",
                table: "muddyPawsPet",
                type: "nvarchar(100)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PetSize",
                table: "muddyPawsPet",
                type: "nvarchar(100)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PetType",
                table: "muddyPawsPet",
                type: "nvarchar(100)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SpecialNeeds",
                table: "muddyPawsPet",
                type: "nvarchar(1000)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CheckinDate",
                table: "muddyPawsPet");

            migrationBuilder.DropColumn(
                name: "CheckoutDate",
                table: "muddyPawsPet");

            migrationBuilder.DropColumn(
                name: "PetOwnersAddress",
                table: "muddyPawsPet");

            migrationBuilder.DropColumn(
                name: "PetOwnersEmail",
                table: "muddyPawsPet");

            migrationBuilder.DropColumn(
                name: "PetOwnersName",
                table: "muddyPawsPet");

            migrationBuilder.DropColumn(
                name: "PetOwnersNumber",
                table: "muddyPawsPet");

            migrationBuilder.DropColumn(
                name: "PetSize",
                table: "muddyPawsPet");

            migrationBuilder.DropColumn(
                name: "PetType",
                table: "muddyPawsPet");

            migrationBuilder.DropColumn(
                name: "SpecialNeeds",
                table: "muddyPawsPet");
        }
    }
}
