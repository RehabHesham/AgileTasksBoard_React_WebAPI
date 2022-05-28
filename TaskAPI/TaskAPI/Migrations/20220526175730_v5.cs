using Microsoft.EntityFrameworkCore.Migrations;

namespace TaskAPI.Migrations
{
    public partial class v5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PercentageDone",
                table: "tasks",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "PercentageDone",
                table: "springs",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "PercentageDone",
                table: "projects",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PercentageDone",
                table: "tasks");

            migrationBuilder.DropColumn(
                name: "PercentageDone",
                table: "springs");

            migrationBuilder.DropColumn(
                name: "PercentageDone",
                table: "projects");
        }
    }
}
